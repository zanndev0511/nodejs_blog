const Blog = require("../models/Blog.js");

class SiteController {
  // [GET] /
  index(req, res) {
    Blog.find({})
      .then((blogs) => {
        res.json(blogs);
      })
      .catch((err) => {
        res.status(400).json({ error: "ERROR!" });
      });
    // res.render('home');
  }
  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
