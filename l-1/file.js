const fs = require("fs");

// synchronous - blocking
// write the file
fs.writeFileSync("./text.txt", "hey there");

// asyncrounous - non blocking 
// write the file
fs.writeFile("./async.txt", "hello world async", (err)=>{})

// read the file
const read = fs.readFileSync("./text.txt", "utf-8");
console.log(read);

fs.readFile("./ibrahim.txt", "utf-8", (err,result)=>{
    if (err) {
        console.log("error", err);
    } else {
        console.log(result);
    }
})

// append the file
fs.appendFileSync("./ibrahim.txt", "i am ibrahim ahmad");

// copy the file
fs.cpSync("./text.txt", "copy.txt");

// delete the file
fs.unlinkSync("./copy.txt")

// find the statics
console.log(fs.statSync("./ibrahim.txt"));

// make directory
fs.mkdirSync("my-docx/a", {recursive:true}) // creat a folder