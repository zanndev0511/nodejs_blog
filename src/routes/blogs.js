const express = require("express");
const router = express.Router();

const blogController = require("../app/controllers/BlogController.js");

router.get("/:slug", blogController.show);

module.exports = router;
