const Blog = require("../models/Blog.js");
const { multipleMongooseToObject } = require("../../util/mongoose.js");
class MeController {
  // [GET] /me/stored/blogs
  storedBlogs(req, res, next) {
    Blog.find({})
      .then((blogs) =>
        res.render("me/stored-blogs", {
          blogs: multipleMongooseToObject(blogs),
        })
      )
      .catch(next);
  }
}
module.exports = new MeController();
