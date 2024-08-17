const fileSystem = require(`fs`)


if (!fileSystem.existsSync(`./assets`)) {
  fileSystem.mkdir(`./assets`, (err) => {
    if (err) {
      return console.log(err)
    }
    console.log("created assets folder")
  })
}
else {
  console.log("file exist")
  fileSystem.rmdir("./assets", (err) => {
    if (err) {
      return console.log(err)
    }
    console.log("removed the assets folder")
  })
}

if (fileSystem.existsSync(`./Delete.txt`)) {
  fileSystem.unlink(`./Delete.txt`, (err) => {
    if (err) {
      return console.log(err)
    }
    console.log("deleted Delete.txt file")
  })
}