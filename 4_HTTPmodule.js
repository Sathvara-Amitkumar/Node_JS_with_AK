const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res) => {
    const time = new Date();
    const log = `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}; ${req.url} New request received\n`;
    fs.appendFile("log.txt",log,(err,data) => {
        switch(req.url) {
            case '/': res.end("Home Page");
            break;
            case '/about': res.end("About Page");
            break;
            case '/gameon': res.end("GemeOn Page");
            break;
            default: res.end("ERROR 404 NOT FOUND");
        }
    });
});

myServer.listen(3000, () => {
    console.log("Server started...");
});