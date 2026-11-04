// make a http server
const { createServer } = require('node:http');
const fs = require("fs")
const url = require("url")

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} new req recived\n`;
  const myurl = url.parse(req.url, true);
  console.log(myurl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myurl.pathname) {
      case '/':
        res.end("homepage")
        break;
      case '/about':
        const username = myurl.query.myname;
        res.end("about us")
        break;
      default:
        res.end("404")
    }
  });
});
// req, res is argument
// res use for send data to frontend
// req used to took data from frontend

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});