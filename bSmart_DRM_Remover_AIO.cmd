@setlocal DisableDelayedExpansion
@echo off


::========================================================================================
::
::   This script is a DRM Protection Removal and Downloader for PDF in bSmart Platform.
::
::   Homepage: https://github.com/Tecnologica-Mente
::      Email: <not available>
::
::   *************************************************************************************
::
::   Born from an idea of ​​Enrico. Thanks to LucasDuke for support
::
::========================================================================================




::========================================================================================================================================
:MainMenu

cls
color 07
title  bSmart DRM Remover AIO v1.1.1
mode 100, 30
set "bsdrmrtemp=%SystemRoot%\Temp\__BSDRMR"
if exist "%bsdrmrtemp%\.*" rmdir /s /q "%bsdrmrtemp%\" %nul%

echo:
echo:
echo:             Welcome to bSmart DRM Remover AIO v1.1.1
echo:
echo:       ____________________________________________________________________________________
echo:
echo:             Please select:
echo:
echo:             [1] To install/upgrade all the required dependencies
echo:             [2] To create/set/update your bSmart Cookie file after copying it
echo:                 into the Windows ClipBoard from "_bsw_session_v1_production"
echo:             [3] To remove the DRM protection and download your PDF eBook
echo:             ________________________________________________________________________
echo:                                                                     
echo:             [4] Read Me
echo:             [5] Exit
echo:       ____________________________________________________________________________________
echo:
echo:             Enter a menu option in the Keyboard [1,2,3,4,5]:
echo:
choice /C:12345 /N
set _erl=%errorlevel%

if %_erl%==5 exit /b
if %_erl%==4 start https://github.com/Tecnologica-Mente/bSmart_DRM_Remover & goto :MainMenu
if %_erl%==3 setlocal & call :DownloadPDF       & cls & endlocal & goto :MainMenu
if %_erl%==2 setlocal & call :SaveCookieFile    & cls & endlocal & goto :MainMenu
if %_erl%==1 setlocal & call :IUDependencies    & cls & endlocal & goto :MainMenu
goto :MainMenu

::========================================================================================================================================
:IUDependencies
@setlocal DisableDelayedExpansion
@echo off

set mypath=%cd%
::@echo %mypath%

if not exist "package.json" (
   echo Cannot find the package.json file. Operation aborted
   goto :End
)
if not exist "%mypath%\node_modules\npm\bin\npm-cli.js" (
   echo All the required dependencies has been already installed/updated
) else (
if exist "npm.cmd" (
   call npm.cmd i
   echo All the required dependencies has been installed/updated
) else (
   echo Cannot find the npm.cmd file. Make sure Node.js has been installed correctly
)
)
:End
echo:
echo Press any key to continue...
pause >nul
popd
exit /b

::========================================================================================================================================
:SaveCookieFile
@setlocal DisableDelayedExpansion
@echo off

:: Adapted from: https://www.dostips.com/forum/viewtopic.php?t=3058
set "path=bSmartCookieFile.txt"

>"%temp%\clipboard.vbs" (
   echo.Set objHTML = CreateObject("htmlfile"^)
   echo.ClipboardText = objHTML.ParentWindow.ClipboardData.GetData("text"^)
   echo.path = "%path%"
   echo.Set objFSO = CreateObject("Scripting.FileSystemObject"^)
   echo.Set objFile = objFSO.OpenTextFile(path, 2, true^)
   echo.objFile.WriteLine ClipboardText
   echo.objFile.Close )>>"%temp%\clipboard.vbs"
"%temp%\clipboard.vbs"
del /F /Q %temp%\clipboard.vbs
echo bSmart Cookie file created successfully from Windows ClipBoard
echo:
echo Press any key to continue...
pause >nul
popd
exit /b

::========================================================================================================================================
:DownloadPDF
@setlocal DisableDelayedExpansion
@echo off

:: Adapted from: https://stackhowto.com/batch-file-to-check-if-multiple-files-exist/
set mypath=%cd%
::@echo %mypath%
if exist "node.exe" if exist "download.js" call node download.js
if not exist "node.exe" echo Cannot find the node.exe file. Operation aborted
if not exist "download.js" echo Cannot find the download.js file. Operation aborted
echo:
echo Press any key to continue...
pause >nul
popd
exit /b

::========================================================================================================================================
