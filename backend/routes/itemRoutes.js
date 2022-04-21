const express = require("express");
const router = express.Router();

const {
  getItems,
  deleteItem,
  postNewItem,
} = require("../controllers/itemController");

// --- Item Routes --- //

router.route("/").get(getItems).post(postNewItem);

router.route("/:id").delete(deleteItem);

module.exports = router;
