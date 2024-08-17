const fs = require("fs");

//on is a event lisener and it will lisensen for chunck of data from the stream and we can get it                                    

// Create a readable stream for the file 'bigData.txt'
const readStream = fs.createReadStream("./bigData.txt");
const writeStream = fs.createWriteStream("./bigDatafileCreated.txt")
// Set up an event listener for the 'data' event, which is emitted when a chunk of data is available
readStream.on("data", (chunk) => {
  // Log the chunk of data received (in Buffer format)
  console.log(chunk);  // Convert the chunk to a string for readable output
  console.log('--- New Chunk ---');  // Separator for readability

  writeStream.write(chunk)
});
