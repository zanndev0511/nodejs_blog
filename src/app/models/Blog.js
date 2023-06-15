const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");


const Blog = new Schema(
  {
    name: { type: String, maxLength: 255, required: true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true }
);
// Add plugins
mongoose.plugin(slug);
Blog.plugin(mongooseDelete, {deletedAt : true,  overrideMethods: "all",  });
module.exports = mongoose.model("Blog", Blog);
