const CURRENTVERSION = "1.4.3.0";
console.log("TOKENGEN " + CURRENTVERSION + "\nhttps://nefew.kr/discord");
const CDEX = require("./rsc/rndrCdex.js");
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");
let mainWindow;
let victim;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 830,
        height: 950,
        minWidth: 750,
        minHeight: 700,
        maxHeight: 1130,
        resizable: true,
        center: true,
        autoHideMenuBar: true,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: true,
            nodeIntegrationInWorker: false,
            allowRunningInsecureContent: false,
            devTools: false,
            preload: path.join(__dirname, "./rsc/preload.js")
        }
    });
    mainWindow.loadFile("./rsc/login.html");
};

app.whenReady().then(() => {
    createWindow();
    app.on("activate", function () {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        };
    });
});

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        app.quit();
    };
});

ipcMain.on("msg", async (event, msg) => {
    victim = event.sender;
    try {
        if (msg["msg"] == "command") {
            if (msg["cmd"] == "startGen") {
                const baseDIR = "C:\\TokenGen";

                console.log("[PROCESS RUNNING] DIR FILE CHECK | STEP 1");

                try {
                    if (await fs.accessSync(baseDIR)) {
                        console.log("[PROCESS RUNNING] DIR FILE CHECK | BASE DIR EXISTS");
                    };
                } catch (e) {
                    console.log("[PROCESS RUNNING] DIR FILE CHECK | BASE DIR DOESN'T EXISTS");
                    try {
                        await fs.mkdirSync(baseDIR);
                        console.log("[PROCESS RUNNING] DIR FILE CHECK | BASE DIR CREATED");
                    } catch (e) {
                        console.log("[PROCESS RUNNING] DIR FILE CHECK | BASE DIR CREATE FAIL ->");
                        console.log(e);
                        return;
                    };
                };

                console.log("[PROCESS RUNNING] DIR FILE CHECK | STEP 2");

                try {
                    if (await fs.statSync(`${baseDIR}\\token.txt`)) {
                        console.log("[PROCESS RUNNING] DIR FILE CHECK | TOKEN.TXT FILE EXISTS");
                    };
                } catch (e) {
                    console.log("[PROCESS RUNNING] DIR FILE CHECK | TOKEN.TXT FILE DOESN'T EXISTS");
                    try {
                        await fs.appendFileSync(`${baseDIR}\\token.txt`, "TOKEN:");
                        console.log("[PROCESS RUNNING] DIR FILE CHECK | TOKEN.TXT FILE CREATED");
                    } catch (e) {
                        console.log("[PROCESS RUNNING] DIR FILE CHECK | TOKEN.TXT FILE CREATE FAIL ->");
                        console.log(e);
                        return;
                    };
                };

                console.log("[PROCESS RUNNING] DIR FILE CHECK | STEP 3");

                try {
                    if (await fs.statSync(`${baseDIR}\\genlog.txt`)) {
                        console.log("[PROCESS RUNNING] DIR FILE CHECK | GENLOG.TXT FILE EXISTS");
                    };
                } catch (e) {
                    console.log("[PROCESS RUNNING] DIR FILE CHECK | GENLOG.TXT FILE DOESN'T EXISTS");
                    try {
                        await fs.appendFileSync(`${baseDIR}\\genlog.txt`, "GENLOG:");
                        console.log("[PROCESS RUNNING] DIR FILE CHECK | GENLOG.TXT FILE CREATED");
                    } catch (e) {
                        console.log("[PROCESS RUNNING] DIR FILE CHECK | GENLOG.TXT FILE CREATE FAIL ->");
                        console.log(e);
                        return;
                    };
                };

                console.log("[PROCESS RUNNING] DIR FILE CHECK | STEP 4");

                try {
                    if (await fs.statSync(`${baseDIR}\\nick.txt`)) {
                        console.log("[PROCESS RUNNING] DIR FILE CHECK | NICK.TXT FILE EXISTS");
                    };
                } catch (e) {
                    console.log("[PROCESS RUNNING] DIR FILE CHECK | NICK.TXT FILE DOESN'T EXISTS");
                    try {
                        await fs.appendFileSync(`${baseDIR}\\nick.txt`, "DISCORD SUPER TOKEN V666\nDISCORD CRACKED LOL\nTOKEN IS THE BEST");
                        console.log("[PROCESS RUNNING] DIR FILE CHECK | NICK.TXT FILE CREATED");
                    } catch (e) {
                        console.log("[PROCESS RUNNING] DIR FILE CHECK | NICK.TXT FILE CREATE FAIL ->");
                        console.log(e);
                        return;
                    };
                };

                console.log("[PROCESS RUNNING] DIR FILE CHECK | STEP 5");

                try {
                    if (await fs.statSync(`${baseDIR}\\proxy.txt`)) {
                        console.log("[PROCESS RUNNING] DIR FILE CHECK | PROXY.TXT FILE EXISTS");
                    };
                } catch (e) {
                    console.log("[PROCESS RUNNING] DIR FILE CHECK | PROXY.TXT FILE DOESN'T EXISTS");
                    try {
                        await fs.appendFileSync(`${baseDIR}\\proxy.txt`, "GENLOG:");
                        console.log("[PROCESS RUNNING] DIR FILE CHECK | PROXY.TXT FILE CREATED");
                    } catch (e) {
                        console.log("[PROCESS RUNNING] DIR FILE CHECK | PROXY.TXT FILE CREATE FAIL ->");
                        console.log(e);
                        return;
                    };
                };

                runningGen = true;
                CDEX.protectedTrue();
                CDEX.protectedCdex(msg, victim);
                var config = {
                    "msg": "weblog",
                    "type": "genmsg",
                    "text": "Log : gen start"
                };
                victim.send("msg", config);
            } else if (msg["cmd"] == "stopGen") {
                CDEX.protectedFalse();
            } else if (msg["cmd"] == "login") {
                var gin = await CDEX.protectedGin(msg["nickname"], msg["client"], victim, mainWindow);
                login = gin;
            } else if (msg["cmd"] == "reload") {
                mainWindow.loadFile("./rsc/index.html");
            };
        };
    } catch (e) {
        var config = {
            "msg": "fire",
            "icon": "error",
            "title": "Error Occurred",
            "text": e
        };
        victim.send("msg", config);
    };
});