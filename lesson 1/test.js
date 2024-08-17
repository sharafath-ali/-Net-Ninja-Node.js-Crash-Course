const array = require(`./const`)
const operatingSystem = require(`os`)

console.log("global", array, operatingSystem.userInfo())

const aa = global.setInterval(() => {
  console.log("after 1 s")
}, 1000);

global.setTimeout(() => {
  console.log("time out")
  clearInterval(aa)
}, 3000);

console.log(__dirname)
console.log(__filename)