const mongoose = require('mongoose');
const schema = mongoose.schema;

const blogSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const Blog = mongoose.model("Blog", blogSchema);

modules.exports = Blog
