const fileSystem = require(`fs`)

fileSystem.writeFile("./Filewrite.txt", "sharu is nots a funny guy", () => {
    console.log("asynchronous fn")
})