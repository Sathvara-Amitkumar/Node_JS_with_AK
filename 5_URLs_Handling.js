// URL - Uniform Resource Locator
// / - Path
// After this ? u call -> Query Parameter

// slides.com
// excalidraw.com

const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req,res) => {
    if(req.url === "/favicon.ico") return res.end();
    const time = new Date();
    const log = `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}; ${req.url} New request received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("log.txt",log,(err,data) => {
        switch(myUrl.pathname) {
            case '/': res.end("Home Page");
            break;
            case '/about': 
                const myName = myUrl.query.myName;
                res.end(`Hello, ${myName}`);
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