const express = require('express');
const app = express();
var morgan = require('morgan') //third party middleware.

// Serve static files from the "public" directory which means giving permission for outsider to get any file from pulic folder
app.use(express.static('public'));
//This setup allows external users to access any files in the public directory.

// Set the view engine to EJS
app.set('view engine', 'ejs');

app.use(morgan('dev'));



app.use((req, res , next) => {
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

// About page route
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

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});