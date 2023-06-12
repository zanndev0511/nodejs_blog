const express = require("express");
const router = express.Router();

const blogController = require("../app/controllers/BlogController.js");

router.get("/create", blogController.create);
router.post("/store", blogController.store);
router.get("/:id/edit", blogController.edit);
router.put("/:id", blogController.update);
router.delete("/:id", blogController.destroy);
router.get("/:slug", blogController.show);

module.exports = router;
