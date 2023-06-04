const Blog = require("../models/Blog.js");
const { mongooseToObject } = require("../../util/mongoose.js");
class BlogController {
  // [GET] /blogs/:slug
  show(req, res, next) {
    Blog.findOne({ slug: req.params.slug })
      .then((blog) => {
        res.render("blogs/show", { blog: mongooseToObject(blog) });
      })
      .catch(next);
  }
  // [GET] /blogs/create
  create(req, res, next) {
    res.render("blogs/create");
  }
  // [POST] /blogs/store
  store(req, res, next) {
    const blog = new Blog(req.body);
    blog
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }
}
module.exports = new BlogController();
