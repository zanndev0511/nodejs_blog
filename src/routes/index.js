const newsRouter = require("./news.js");
const siteRouter = require("./site.js");

function route(app) {
  //   app.get("/news", (req, res) => {
  //     res.render("news");
  //   });
  app.use("/news", newsRouter);
  app.use("/", siteRouter);

  //   app.post("/search", (req, res) => {
  //     res.send("");
  //   });
}
module.exports = route;
