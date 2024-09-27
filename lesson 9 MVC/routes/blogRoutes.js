const express = require('express');
const s = require('../controllers/BlogController.js')

const router = express.Router()



router.get("/:id", s.getBlogById)

router.post("/Add", s.addNewBlog)

router.get("/create", (req, res) => {
  s.createBlog(req, res)
})

router.post("/delete/:id", s.deleteBlogById)

module.exports = router;