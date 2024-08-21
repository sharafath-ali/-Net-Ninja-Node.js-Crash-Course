const express = require('express');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Home page route
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