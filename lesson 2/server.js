const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  // res.setHeader("Content-Type", "text/plain");  // Mms format as argument
  res.setHeader("Content-Type", "text/html");
  // This callback function is triggered every time a new request is received
  console.log('Request received', req.url, req.method);
  // Write a response to the client
  res.write(`<p>Hello, world!</p>`);  // Properly use res.write to send data
  // res.write('I am Sharafath'); //text/plain
  // End the response
  res.end();  // Ensure you end the response after writing
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log("Server started and listening on port 3000");
});
