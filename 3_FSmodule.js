const fs = require("fs");

// Synchronous
// fs.writeFileSync("./test.txt","Commando");

// Asynchronous
// fs.writeFile("./test.txt","Welcome bro",(err) => {})


// Sync will be return the result
// const res = fs.readFileSync("./contact.txt","utf-8");
// console.log(res);

// Async 
// fs.readFile("contact.txt","utf-8",(err,res) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(res)
// });

// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
fs.appendFileSync("./test.txt",`${Date.now()} Jack Sparrow\n`);

fs.cpSync("./test.txt","./copy.txt");

fs.unlinkSync("./copy.txt");

console.log(fs.statSync("./test.txt").isFile());

fs.mkdirSync("my-docs/a/b", { recursive: true });