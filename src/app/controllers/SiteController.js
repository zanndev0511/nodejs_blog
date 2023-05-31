const Blog = require("../models/Blog.js");
const { multipleMongooseToObject } = require("../../util/mongoose.js");
class SiteController {
  // [GET] /
  index(req, res, next) {
    Blog.find({})
      .then((blogs) => {
        res.render("home", {
          title: "Test title",
          blogs: multipleMongooseToObject(blogs),
        });
      })
      .catch(next);
    // res.render('home');
  }
  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
