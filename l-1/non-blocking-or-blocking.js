const fs = require('fs');

// blocking
console.log("start");
const result = fs.readFileSync("ibrahim.txt", "utf-8");
console.log(result);
console.log("end");

// non-blocking
console.log("start");
fs.readFile("ibrahim.txt", "utf-8", (err,result)=>{
    console.log(result);
});
console.log("end");
