const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Item = mongoose.model("item", ItemSchema);

module.exports = Item;
