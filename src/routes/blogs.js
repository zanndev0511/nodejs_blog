const express = require("express");
const router = express.Router();

const blogController = require("../app/controllers/BlogController.js");

router.get("/create", blogController.create);
router.post("/store", blogController.store);
router.get("/:id/edit", blogController.edit);
router.post("/handle-form-actions", blogController.handleFormActions);
router.put("/:id", blogController.update);
router.patch("/:id/restore", blogController.restore);
router.delete("/:id", blogController.destroy);
router.delete("/:id/force", blogController.forceDestroy);
router.get("/:slug", blogController.show);

module.exports = router;
