const express = require("express");
const path = require("path");
const morgan = require("morgan");
// const handlebars = require("express-handlebars");
// const express = require("express");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

const route = require("./routes/index");

app.use(express.static(path.join(__dirname, "public")));
// html xu ly
app.use(
  express.urlencoded({
    extended: true,
  })
);
// js cos json xu ly
app.use(express.json());

// HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
// routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
