const express = require('express');
const app = express();
var morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/Blog');

const dbUrl = "mongodb+srv://Sharu:HmANYffZgWLEpRVk@net-ninja-node-crash-co.vssl4.mongodb.net/Net-Ninja-Nodejs-Crash-Course?retryWrites=true&w=majority&appName=Net-Ninja-Node-Crash-Course";

// Middleware to parse application/x-www-form-urlencoded (form data)
app.use(express.urlencoded({ extended: true }));

// Middleware to parse application/json (if you're handling JSON data)
app.use(express.json());

const connected = mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
  console.log('Connected to MongoDB Atlas')
}).catch(err => console.log('Failed to connect to MongoDB Atlas', err));

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

app.get("/", (req, res) => {
  Blog.find().then((data) => {
    res.render('index', { title: "all blog", items: data })
  }).catch(err => {
    console.error('Failed to get', err);
    res.status(500).send({ error: 'Failed to get' });
  });
})

app.post("/add-Blog", (req, res) => {
  console.log(req.body)
  const blog = new Blog({
    title: req.body.title,
    body: req.body.content,
  })
  blog.save().then((data) => {
    console.log("New Blog Added");
    res.redirect('/')
  }).catch(err => {
    console.error('Failed to Save', err);
    res.status(500).send({ error: 'Failed to save blog' });
  });
})

app.get("/blog/:id", (req, res) => {
  console.log(req.params.id)
  Blog.findById(req.params.id).then((data) => {
    res.render('blogDetail', { title: "blog", blog: data })
  }).catch(err => {
    console.error('Failed to get', err);
    res.status(500).send({ error: 'Failed to get' });
  });
})

app.get("/create-blog", (req, res) => {
  res.render('createBlog')
})

app.get('/about', (req, res) => {
  const data = {
    title: 'About Us',
    user: { name: 'Sharafath Ali' }
  };
  res.render('about', data);
});

app.use((req, res) => {
  res.status(404).render('404');
});