const express = require('express');
const app = express();
var morgan = require('morgan');
const mongoose = require('mongoose')
const dbUrl = "mongodb+srv://Sharu:HmANYffZgWLEpRVk@net-ninja-node-crash-co.vssl4.mongodb.net/Net-Ninja-Nodejs-Crash-Course?retryWrites=true&w=majority&appName=Net-Ninja-Node-Crash-Course"

const connected = mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
  console.log('Connected to MongoDB Atlas')
})
  .catch(err => console.log('Failed to connect to MongoDB Atlas', err));

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(morgan('dev'));

app.use((req, res, next) => {
  console.log('Requested');
  console.log('Host name:', req.hostname);
  console.log('Path name:', req.path);
  console.log('Method:', req.method);
  next()
});

app.get('/', (req, res) => {
  const data = {
    title: 'Home Page',
    user: { name: 'Sharafath Ali' },
    items: ['coding', 'playing video games', 'learning new things']
  };
  res.render('index', data);
});

app.get('/about', (req, res) => {
  const data = {
    title: 'About Us',
    user: { name: 'Sharafath Ali' }
  };
  res.render('about', data);
});

app.get("/create-Blog", (req, res) => {
  res.render('createBlog')
})

app.use((req, res) => {
  res.status(404).render('404');
});