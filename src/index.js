const express = require("express");
const path = require("path");
const morgan = require("morgan");
// const handlebars = require("express-handlebars");
// const express = require("express");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

const methodOverride = require("method-override");
const db = require("./config/db");
const route = require("./routes/index");
// kết nối db
db.connect();

app.use(express.static(path.join(__dirname, "public")));
// html xu ly
app.use(
  express.urlencoded({
    extended: true,
  })
);
// js cos json xu ly
app.use(express.json());

app.use(methodOverride("_method"));

// HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
// routes init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log('Server is running in port '+ PORT);
})
