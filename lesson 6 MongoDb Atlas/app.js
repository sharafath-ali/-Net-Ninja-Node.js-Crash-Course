const express = require('express');
const app = express();
var morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/Blog');

const dbUrl = "mongodb+srv://Sharu:HmANYffZgWLEpRVk@net-ninja-node-crash-co.vssl4.mongodb.net/Net-Ninja-Nodejs-Crash-Course?retryWrites=true&w=majority&appName=Net-Ninja-Node-Crash-Course";

const connected = mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
  console.log('Connected to MongoDB Atlas')
}).catch(err => console.log('Failed to connect to MongoDB Atlas', err));

app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: "how to learn js in 20 days",
    body: "you cannot learn pling😂😂😂😂😂😂"
  })
  blog.save().then((data) => {
    console.log(data);
    res.send(data)
  }).catch(err => {
    console.error('Failed to Save', err);
    res.status(500).send({ error: 'Failed to save blog' });
  });
})

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

app.get("/All-blogs", (req, res) => {
  Blog.find().then((data) => {
    res.render('index', { title: "all blog", user: { name: 'ss' }, items: data })
    // res.send(data);
  }).catch(err => {
    console.error('Failed to get', err);
    res.status(500).send({ error: 'Failed to get' });
  });
})

app.get("/blog", (req, res) => {
  Blog.find({ _id: "66c7631f0b4dc680fbdca19f" }).then((data) => {
    res.send(data)

  }).catch(err => {
    console.error('Failed to get', err);
    res.status(500).send({ error: 'Failed to get' });
  });
})

app.get("/blogdddd", (req, res) => {
  Blog.findById("66c7631f0b4dc680fbdca19f").then((data) => {
    res.send(data);
  }).catch(err => {
    console.error('Failed to get', err);
    res.status(500).send({ error: 'Failed to get' });
  });
})

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