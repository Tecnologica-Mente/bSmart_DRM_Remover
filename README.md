# bSmart_DRM_Remover
DRM Protection Removal and Downloader for PDF in bSmart Platform

ITALIAN

1) Scaricare l'archivio ed estrarlo in una posizione a piacere
2) Scaricare la versione binaria (.zip) di Node.js LTS a 32-bit o 64-bit (a seconda del sistema operativo installato) dal sito:
https://nodejs.org/en/download/
Se non si sa quale versione installare, scegliere quella a 32-bit.
Estrarre l'archivio appena scaricato e spostare tutti i file nella stessa cartella dove si è estratto l'archivio del punto 1 (vedi immagine allegata - tutti i file devono stare nella stessa cartella).
3) Fare doppio clic sul file "bSmart_DRM_Remover_AIO.cmd" e premere il tasto 1 sulla tastiera per avviare l'installazione/aggiornamento del programma. Attendere il completamento dell'operazione.
4) Collegarsi al sito:
https://www.bsmart.it/
ed eseguire l'accesso con le proprie credenziali.
5) Nella schermata "Libreria", dove vengono visualizzati i propri libri, premere sulla tastiera il tasto F12 per visualizzare la DevTools.
a) Se si sta utilizzando Google Chrome, spostarsi nella scheda "Application", fare clic su "Cookies" e poi sul cookie chiamato "https://my.bsmart.it". Sulla destra fare clic sul cookie chiamato "_bsw_session_v1_production", selezionare in basso il valore di questo cookie (sotto la voce "Cookie Value") facendoci sopra doppio clic e copiarlo tramite il menù del tasto destro del mouse.
b) Se si sta utilizzando Firefox, spostarsi nella scheda "Storage" e ripetere gli stessi passi del punto a).
c) Se si sta utilizzando Microsoft Edge, spostarsi nella scheda "Applicazione" e ripetere gli stessi passi del punto a).
6) Andare sul menù di bSmart DRM Remover e premere il tasto 2 sulla tastiera per fare in modo che il programma memorizzi il cookie appena copiato. Verrà automaticamente creato il file "bSmartCookieFile.txt" nella stessa posizione dove si trova il file "bSmart_DRM_Remover_AIO.cmd" e, al suo interno, verrà copiato il valore del cookie copiato nel punto precedente.
7) Chiudere il DevTools ed eseguire il Logout dalla piattaforma bSmart.
8) Andare sul menù di bSmart DRM Remover e premere il tasto 3 sulla tastiera. Quando richiesto incollare, facendo clic con il tasto destro del mouse, il valore del cookie copiato al punto 5). [ATTENZIONE: è estremamente importante questo passo. Bisogna incollare il valore del cookie utilizzando il tasto destro del mouse! Ogni altro modo farà apparire il messaggio di errore "Bad cookie" senza permettere il download del PDF del libro]. Il programma chiederà quale libro si vuole scaricare. Digitare l'ID del libro che si vuole scaricare tra quelli elencati e attendere il completamento dell'operazione. Il PDF sbloccato del libro verrà scaricato nella stessa cartella dove si trova il file "download.js" con il nome del libro selezionato.
9) Per scaricare gli altri libri sarà sufficiente ripetere i passi a partire dal punto 8). E' possibile copiare il valore del cookie da incollare nel programma aprendo il file "bSmartCookieFile.txt". In questo caso fare attenzione a copiare solo il valore del cookie, tralasciando l'ultima riga vuota. [ATTENZIONE: è estremamente importante questo passo. Bisogna copiare solo il valore del cookie senza selezionare l'ultima riga vuota! Ogni altro modo farà apparire il messaggio di errore "Bad cookie" senza permettere il download del PDF del libro].

NOTA: A volte il download del PDF potrebbe presentare problemi. In questi casi potrebbe essere necessario eseguire un download manuale delle pagine del libro, per poi unirle successivamente. In questi casi è necessario utilizzare il file "merge.js", ma l'operazione non è semplice. Nel file "merge.js" è stato lasciato del codice commentato per il tecnici.

Divertitevi ;-)

p.s. Ricorda che sei responsabile di ciò che stai facendo su Internet e anche se questo script esiste, potrebbe non essere legale nel tuo paese creare backup personali dei libri.

L'UTILIZZO DEL SOFTWARE È A PROPRIO ESCLUSIVO RISCHIO E PERICOLO. IL SOFTWARE È FORNITO DAI DETENTORI DEL COPYRIGHT E DAI COLLABORATORI "COSÌ COM'È" E NON SI RICONOSCE ALCUNA ALTRA GARANZIA ESPRESSA O IMPLICITA, INCLUSE, A TITOLO ESEMPLIFICATIVO, GARANZIE IMPLICITE DI COMMERCIABILITÀ E IDONEITÀ PER UN FINE PARTICOLARE. IN NESSUN CASO IL PROPRIETARIO DEL COPYRIGHT O I RELATIVI COLLABORATORI POTRANNO ESSERE RITENUTI RESPONSABILI PER DANNI DIRETTI, INDIRETTI, INCIDENTALI, SPECIALI, PUNITIVI, O CONSEQUENZIALI (INCLUSI, A TITOLO ESEMPLIFICATIVO, DANNI DERIVANTI DALLA NECESSITÀ DI SOSTITUIRE BENI E SERVIZI, DANNI PER MANCATO UTILIZZO, PERDITA DI DATI O MANCATO GUADAGNO, INTERRUZIONE DELL'ATTIVITÀ), IMPUTABILI A QUALUNQUE CAUSA E INDIPENDENTEMENTE DALLA TEORIA DELLA RESPONSABILITÀ, SIA NELLE CONDIZIONI PREVISTE DAL CONTRATTO CHE IN CASO DI "STRICT LIABILITY", ERRORI (INCLUSI NEGLIGENZA O ALTRO), ILLECITO O ALTRO, DERIVANTI O COMUNQUE CORRELATI ALL'UTILIZZO DEL SOFTWARE, ANCHE QUALORA SIANO STATI INFORMATI DELLA POSSIBILITÀ DEL VERIFICARSI DI TALI DANNI.

------------------------------------------------------------------------------------
ENGLISH

1) Download the archive and extract it in any position you like
2) Download the binary version (.zip) of Node.js LTS 32-bit or 64-bit (depending on the operating system installed) from the site:
https://nodejs.org/
If you don't know which version to install, choose the 32-bit version.
Extract the archive you just downloaded and move all the files to the same folder where the archive from point 1 was extracted (see attached image - all files must be in the same folder).
3) Double click on the "bSmart_DRM_Remover_AIO.cmd" file and press key 1 on the keyboard to start the program installation / update. Wait for the operation to complete.
4) Connect to the site:
https://www.bsmart.it/
and log in with your properties.
5) In the "Library" screen, where your books are displayed, press the F12 key on the keyboard to display the DevTools.
a) If you are using Google Chrome, go to the "Application" tab, click on "Cookies" and then on the cookie called "https://my.bsmart.it". On the right click on the cookie called "_bsw_session_v1_production", select the value of this cookie at the bottom (under "Cookie Value") by double clicking on it and copy it using the right mouse button menu.
b) If you are using Firefox, go to the "Storage" tab and repeat the same steps as in point a).
c) If you are using Microsoft Edge, go to the "Application" tab and repeat the same steps as in point a).
6) Go to the bSmart DRM Remover menu and press key 2 on the keyboard to make the program memorize the cookie just copied. The "bSmartCookieFile.txt" file will be automatically created in the same location where the "bSmart_DRM_Remover_AIO.cmd" file is located and, inside, the value of the cookie copied in the previous point will be copied.
7) Close the DevTools and log out from the bSmart platform.
8) Go to the bSmart DRM Remover menu and press key 3 on the keyboard. When prompted, paste, by clicking with the right mouse button, the value of the cookie copied at point 5). [ATTENTION: this step is extremely important. You have to paste the value of the cookie using the right mouse button! Any other way will cause the "Bad cookie" error message to appear without allowing the PDF of the book to be downloaded]. The program will ask which book you want to download. Type the ID of the book you want to download from those listed and wait for the operation to complete. The unlocked PDF of the book will be downloaded to the same folder as the "download.js" file with the name of the selected book.
9) To download the other books it will be sufficient to repeat the steps starting from point 8). It is possible to copy the value of the cookie to be pasted into the program by opening the "bSmartCookieFile.txt" file. In this case, be careful to copy only the value of the cookie, leaving out the last empty line. [ATTENTION: this step is extremely important. You have to copy only the value of the cookie without selecting the last blank line! Any other way will cause the "Bad cookie" error message to appear without allowing the PDF of the book to be downloaded].

NOTE: Sometimes downloading the PDF may have problems. In these cases it may be necessary to manually download the pages of the book, and then merge them later. In these cases it is necessary to use the "merge.js" file, but the operation is not easy. Commented code for the technician has been left in the "merge.js" file.

Enjoy ;-)

p.s. Remember that you are sesponsible for what you are doing on the internet and even tho this script exists it might not be legal in your country to create personal backups of books.

USE OF THE SOFTWARE IS AT YOUR OWN RISK. THE SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND COLLABORATORS "AS IS" AND THERE IS NO EXPRESS OR IMPLIED WARRANTY, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR. IN NO EVENT SHALL THE OWNER OF THE COPYRIGHT OR ITS COLLABORATORS BE HELD LIABLE FOR DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, DAMAGES, DAMAGES ARISING FROM THE LOSS OF DATA OR FAILURE TO EARN, INTERRUPTION OF BUSINESS), CAUSED BY ANY CAUSE AND REGARDLESS OF THE THEORY OF LIABILITY, BOTH IN THE CONDITIONS PROVIDED BY THE CONTRACT AND IN CASE OF "STRICT LIABILITY", ERRORS (INCLUDING NEGLIGENCE OR OTHERWISE), ARISING OR OTHERWISE RELATED TO YOUR USE OF THE SOFTWARE, EVEN IF YOU HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGES.
