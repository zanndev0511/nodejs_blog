const newsRouter = require("./news.js");
const blogsRouter = require("./blogs.js");
const siteRouter = require("./site.js");
const meRouter = require("./me.js");

function route(app) {
  //   app.get("/news", (req, res) => {
  //     res.render("news");
  //   });
  app.use("/news", newsRouter);
  app.use("/blogs", blogsRouter);
  app.use("/me", meRouter);
  app.use("/", siteRouter);

  //   app.post("/search", (req, res) => {
  //     res.send("");
  //   });
}
module.exports = route;
