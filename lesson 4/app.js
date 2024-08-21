const express = require('express');

const app = express();
//register view engine

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
  // res.send('fffffefregergteffff')
  res.send("<h1>home<h1>");
})

app.get("/about", (req, res) => {
  // res.send('fffffefregergteffff')
  // res.send("<h1>about mddddddddddd<h1>")
  res.sendFile("./views/about.html", { root: __dirname });
})

app.get("/user", (req, res) => {
  res.redirect("/")
})

app.use((req, res) => {
  res.sendStatus(404).sendFile("./views/404.html", { root: __dirname })  // we need to
})

app.listen(3001)