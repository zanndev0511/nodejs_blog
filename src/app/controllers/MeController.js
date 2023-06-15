const Blog = require("../models/Blog.js");
const { multipleMongooseToObject } = require("../../util/mongoose.js");
class MeController {
  // [GET] /me/stored/blogs
  storedBlogs(req, res, next) {
      Promise.all([Blog.find({}), Blog.countDocumentsDeleted()])
      .then(([blogs, deletedCount]) =>
          res.render('me/stored-blogs',{
            deletedCount,
            blogs: multipleMongooseToObject(blogs)
          })
          )
          .catch(next)
  }
  // [GET] /me/trash/blogs
  trashBlogs(req, res, next) {
    Blog.findDeleted({})
      .then((blogs) =>
        res.render("me/trash-blogs", {
          blogs: multipleMongooseToObject(blogs),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
