const express = require("express");
const router = express.Router();

const {
  getAllItems,
  postNewItem,
  deleteItemById,
} = require("../controllers/itemController");

// Routes

router.route("/").get(getAllItems).post(postNewItem);

router.route("/:id").delete(deleteItemById);

module.exports = router;
