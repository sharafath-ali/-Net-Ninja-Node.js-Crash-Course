const fileSystem = require(`fs`)


//file reading
fileSystem.readFile(`./doc.txt`, (err, data) => {
   if (err) {
      console.log(err, "err")
   }
   else {
      console.log(data.toString(), "asynchronous fn") //it will be in buffer formate
   }
})

console.log("this will print first")

// This happens because readFile is an asynchronous function. The console.log("this will print first") is executed synchronously and immediately, whereas the readFile function starts reading the file in the background.Once the file reading is complete, the callback function is executed, which logs the content of the file.

//   So, the sequence of output will be:

// "this will print first"
// The content of doc.txt(or the error message if an error occurs)

try {
   const data = fileSystem.readFileSync('./doc.txt');
   console.log(data.toString(), "synchronous fn"); // Convert buffer to string
} catch (err) {
   console.log(err, "err");   //readFileSync: This method reads the file synchronously, blocking the execution until the file is read.
}

console.log("this will print first")
