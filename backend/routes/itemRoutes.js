const express = require("express");
const router = express.Router();

const {
  getAllItems,
  postNewItem,
  getItemById,
  deleteItemById,
} = require("../controllers/itemController");

// Test connection

router.route("/").get(getAllItems).post(postNewItem);

router.route("/:id").get(getItemById).delete(deleteItemById);

module.exports = router;
