@echo off
set /p folderName=
mklink /d %~dp0node_modules\%folderName% D:\nodejs\node_global\node_modules\%folderName%
pause