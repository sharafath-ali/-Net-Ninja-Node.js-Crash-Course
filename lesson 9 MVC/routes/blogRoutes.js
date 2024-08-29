const express = require('express');
const s = require('../controllers/BlogController.js')

const router = express.Router()

router.get("/create", (req, res) => {
  s.createBlog(req, res)
})

router.post("/Add", s.addNewBlog)

router.get("/:id", (req, res) => {
  s.getBlogById(req, res)
})

router.post("/delete/:id", (req, res) => {
  s.deleteBlogById(req, res)
})

module.exports = router;