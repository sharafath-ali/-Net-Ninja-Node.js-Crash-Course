const http = require("http");
const fs = require('fs');
const lo = require(`lodash`)

console.log(lo.random(1, 3))
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  const responseHandler = (pageName, statusCode) => {
    fs.readFile(`./views/${pageName}`, (err, data) => {
      if (err) {
        res.end();
        return console.log(err)
      }
      res.statusCode = statusCode
      res.write(data);
      res.write('dddddddddddddddd')
      res.end()
    })
  }
  if (req.url === "/") {
    responseHandler("index.html", 200)
  }
  else if (req.url === "/about") {
    responseHandler('about.html', 200)
  }
  else if (req.url === "/aboutMe") {
    res.statusCode = 301
    res.setHeader('Location', '/about');
    res.end()
  }
  else {
    responseHandler('404.html', 404)
  }
});

server.listen(3001, () => {
  console.log("Server started and listening on port 3000");
});