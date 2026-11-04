// write your first hello world on node js
console.log("Hello World");
// run using node index.js
// npm init - to intialtize your project
// you can add your own script - "run": "node index.js" and run by npm run runnpm 

const math = require('./math.js'); // import 
// ./ then code look for file and without that ./ it look in built in modules and external modules

console.log("add value is", math.addFn(2,5));
console.log("subtract value is", math.subFn(10,5));