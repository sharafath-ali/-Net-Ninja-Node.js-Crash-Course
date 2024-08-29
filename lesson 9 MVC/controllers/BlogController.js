const Blog = require('../models/Blog');

const createBlog = (req, res) => (
  res.render('createBlog')
)

const addNewBlog = (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    body: req.body.content,
  })
  blog.save().then((data) => {
    console.log("New Blog Added");
    res.redirect('/')
  }).catch(err => {
    console.error('Failed to Save', err);
    res.status(500).render("404")
  });
}

const getBlogById = (req, res) => {
  Blog.findById(req.params.id).then((data) => {
    res.render('blogDetail', { title: "blog", blog: data })
  }).catch(err => {
    console.error('Failed to get', err);
    res.status(500).render("404")
  });
}

const deleteBlogById = (req, res) => {
  Blog.findByIdAndDelete(req.params.id).then((data) => {
    res.send('item has been deleted')
  }).catch((err) => {
    console.error('Failed to delete', err);
    res.status(500).send({ error: 'Failed to delete' });
  })
}

module.exports = { addNewBlog, deleteBlogById, getBlogById, createBlog }