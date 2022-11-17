const prompt = require('prompt-sync')({sigint: true});
const fetch = require('node-fetch');
const msgpack = require('msgpack-lite');
const aesjs = require('aes-js');
const PDFDocument = require('pdf-lib').PDFDocument;
const fs = require('fs');
const sanitize = require("sanitize-filename");

// Adapted from: https://blog.bitsrc.io/build-a-command-line-progress-bar-in-node-js-5702a3525a49
const process = require("process");
const rdl = require("readline");
class LoadingBar {
    constructor(size) {
        this.size = size
        this.cursor = 0
        //this.timer = null
    }
start(increment) {
        // Proportion due to the length of the bar and its percentage filling
        this.increment = Math.trunc(this.size*increment/100)
        // Bar position (x, y) - [*** Here that would be correct, but it doesn't work, shows a full bar character at the end of the bar ***]
        //rdl.cursorTo(process.stdout, 0, 0);
        // Turn off the cursor
        process.stdout.write("\x1B[?25l")
        for (let i = 0; i <= this.size; i++) {
            if (i <= this.cursor) {
                // Full bar character
                process.stdout.write("\u2588")
            } else {
                // Empty bar character
                process.stdout.write("\u2591")
            }
        }
        // Bar position (x, y)
        rdl.cursorTo(process.stdout, this.cursor, 0);
        /*
        this.timer = setInterval(() => {
            process.stdout.write("\u2588")
            this.cursor++;
            if (this.cursor >= this.size) {
                clearTimeout(this.timer)
            }
        }, 100)
        */
        process.stdout.write("\u2588")
        this.cursor = this.increment;
        if (this.cursor >= this.size) {
            this.increment = this.size;
        }
    }
}

// Percentage size of the bar with respect to the width of the window
const ld = new LoadingBar(50)

let key = new Uint8Array([30, 0, 184, 152, 115, 19, 157, 33, 4, 237, 80, 26, 139, 248, 104, 155]);

async function downloadAndDecryptFile(url) { 
    
    return new Promise(async (resolve, reject) => {
        let file = await fetch(url, {method: "GET"}).then(res => res.buffer());

        try {
            let header = msgpack.decode(file.slice(0, 256));
            console.log(header);

            let firstPart = file.slice(256, header.start);
            let secondPart = new Uint8Array(file.slice(header.start));

            var aesCbc = new aesjs.ModeOfOperation.cbc(key, firstPart.slice(0, 16));
            var decryptedFirstPart = aesCbc.decrypt(firstPart.slice(16));

            for(let i=16;i>0;i--){
                if (decryptedFirstPart.slice(decryptedFirstPart.length-i).every(e=>e==i)) {
                    decryptedFirstPart = decryptedFirstPart.slice(0, decryptedFirstPart.length-i);
                    break;
                }
            }

            let result = new Uint8Array(decryptedFirstPart.length + secondPart.length);
            result.set(decryptedFirstPart);
            result.set(secondPart, decryptedFirstPart.length);
            resolve(result);
        } catch (e) {
            reject({e, file})
        }
        
    });
    

}

// Adapted from: https://linuxhint.com/read-local-text-file-javascript/
function showSelectedFile(){
    var r = fs.readFileSync("bSmartCookieFile.txt");
    return r.slice(0,r.length-2).toString();
    /*
    fs.readFile("bSmartCookieFile.txt", (err, data) => {
        if (err) throw err;

        console.log(data.slice(0, -1).toString());  // slice(0, -1) remove the last character of a string but does not modify the original string (data)
    });
    */
}

(async () => {

    //let user = await fetch("https://www.bsmart.it/api/v5/user", {headers: {cookie:'_bsw_session_v1_production='+prompt('Input "_bsw_session_v1_production" cookie:')}});
    // Adapted from: https://sebhastian.com/node-check-if-file-exists/
    const path = "bSmartCookieFile.txt";
    // See if the file "bSmartCookieFile.txt" exists
    /*
    if (fs.existsSync(path)){
        //Do nothing and continue with the next instruction after the if statement (if I put the "let user" statement here it doesn't work)
    }else{
        console.log("Cannot find the bSmartCookieFile.txt file. Operation aborted");
        return;
    }
    */
    if (!fs.existsSync(path)){
        console.log("Cannot find the bSmartCookieFile.txt file. Operation aborted");
        return;
    }

    let user = await fetch("https://www.bsmart.it/api/v5/user", {headers: {cookie:'_bsw_session_v1_production='+showSelectedFile()}});

    if (user.status != 200) {
        console.log("Bad cookie");
        return;
    }

    user = await user.json();

    let headers = {"auth_token": user.auth_token};

    let books = await fetch(`https://www.bsmart.it/api/v6/books?page_thumb_size=medium&per_page=25000`, {headers}).then(res => res.json());

    if (books.length == 0) {
        console.log('No books in your library!');
    } else {
        console.log("Book list:");
        let i=0;
        books.forEach((b) => {
            console.log(`${i++} ${b.title}`);
         });
        
    }
    let bookId = prompt(`Please input book id${(books.length == 0 ? " manually" : "")}:`);

    try {
        let book = await fetch(`https://www.bsmart.it/api/v6/books/by_book_id/${books[bookId].id}`, {headers});

        if (book.status != 200) {
            console.log("Invalid book id");
            return;
        }

        book = await book.json();

        if (fs.existsSync(book.id + " - " + book.title + ".pdf")){
            console.log("File already exists");
            return;
        }

        let info = [];
        let page = 1;
        while (true) {
            //console.log(page);
            let tempInfo = await fetch(`https://api.bsmart.it/api/v5/books/${book.id}/${book.current_edition.revision}/resources?per_page=500&page=${page}`, {headers}).then(res => res.json());
            info = info.concat(tempInfo);
            if (tempInfo.length < 500) break;
            page++;
        }
    
        console.log("Downloading pages");

        const outputPdf = await PDFDocument.create()

        for (i = 0; i<info.length; i++) {

                console.clear();
                ld.start((i/info.length*100).toFixed(0));
                console.log("\n");
                if (i < info.length-1) {
                   console.log(`Progress ${(i/info.length*100).toFixed(2)}%`);
                   console.log("\n");
                   console.log("Downloading page:");
                } else {
                   console.log("Progress 100.00%");
                   console.log("\n");
                }

            for (j = 0; j<info[i].assets.length; j++) {

                //console.log(`Progress ${(i/info.length*100).toFixed(2)}%`);

                if (info[i].assets[j].use != "page_pdf") continue;

                let pageData = await downloadAndDecryptFile(info[i].assets[j].url).catch((e) => {console.log("Error downloading page", e, i, j, info[i].assets[j].url)});

                // if (md5(pageData) != info[i].assets[j].url) console.log("Missmatching MD5 hash", i, j, info[i].assets[j].url)

                //fs.writeFile(`temp/${i}-${j}.pdf`, pageData, (e)=>{});

                const page = await PDFDocument.load(pageData);
                const [firstDonorPage] = await outputPdf.copyPages(page, [0]);
                outputPdf.addPage(firstDonorPage);

            }
        }
        // Reactivate the cursor
        process.stdout.write("\x1B[?25h")

        console.log("Saving PDF...");

        //fs.writeFile(prompt("Input file name:") + ".pdf", await outputPdf.save(), (e)=>{});

        fs.writeFile(sanitize(book.id + " - " + book.title + ".pdf"), await outputPdf.save(), (e)=>{});

        console.log("DONE!");

    } catch(exception) {
        if((bookId>books.length-1) || (bookId<0) || isNaN(bookId)){
            console.log("Invalid book id");
        } else {
            //console.log(exception);
            console.log("Ops! Something went wrong");
        }
        return;
    }

})();

/*(async ()=> {
    fs.writeFile("test.pdf", await downloadAndDecryptFile("https://s3-eu-west-1.amazonaws.com/dea.bsmart.it/0/9/092662be7c3701b1c596057205fc8a7e"), (e)=>{});
})()*/
