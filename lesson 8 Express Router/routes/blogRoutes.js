const express = require('express');
const Blog = require('../models/Blog');

const router = express.Router()

router.get("/create", (req, res) => {
  res.render('createBlog')  // doudt
})

router.post("/Add", (req, res) => {
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

router.get("/:id", (req, res) => {
  console.log(req.params.id)
  Blog.findById(req.params.id).then((data) => {
    res.render('blogDetail', { title: "blog", blog: data })
  }).catch(err => {
    console.error('Failed to get', err);
    res.status(500).send({ error: 'Failed to get' });
  });
})

router.post("/delete/:id", (req, res) => {
  Blog.findByIdAndDelete(req.params.id).then((data) => {
    res.send('item has been deleted')
  }).catch((err) => {
    console.error('Failed to delete', err);
    res.status(500).send({ error: 'Failed to delete' });
  })
})

module.exports = router;