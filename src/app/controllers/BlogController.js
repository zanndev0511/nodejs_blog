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
  // [GET] /blogs/:id/edit
  edit(req, res, next) {
    Blog.findById(req.params.id)
      .then((blog) =>
        res.render("blogs/edit", {
          blog: mongooseToObject(blog),
        })
      )
      .catch(next);
  }
  // [PUT] /blogs/:id
  update(req, res, next) {
    Blog.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/blogs"))
      .catch(next);
  }
  // [POST] /blogs/store
  store(req, res, next) {
    const blog = new Blog(req.body);
    blog
      .save()
      .then(() => res.redirect("/me/stored/blogs"))
      .catch((error) => {});
  }
  // [DELETE] /blogs/:id
  destroy(req, res, next) {
    Blog.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  // [DELETE] /blogs/:id/force
  forceDestroy(req, res, next) {
    Blog.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  // [PATCH] /blogs/:id/restore
  restore(req, res, next) {
    Blog.restore({ _id: req.params.id })
      .then(() => res.redirect("back"),
      )
      .catch(next);
    Blog.findById(req.params.id)
      .then((document) => {
        if (!document) {
          throw new Error("Document not found");
        }
        document.deleted = false;
        return document.save();
      })
      .then((updatedDocument) => {
        res.redirect("back");
      })
      .catch((error) => {
        // Xử lý lỗi
        next(error);
      });
  }

}
module.exports = new BlogController();
