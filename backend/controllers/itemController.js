const { ObjectId } = require("mongodb");
const Item = require("../models/itemModel");

// GET - All Items

const getItems = async (req, res) => {
  try {
    const items = await Item.find().sort({ name: 1 });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).json({ message: "Error fetching items" });
    console.error(error);
  }
};

// POST - New Item

const postNewItem = async (req, res) => {
  const { name } = req.body;
  try {
    const newItem = await Item.create({
      name: name,
    });
    newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: "Error adding item" });
    console.error(error);
  }
};

// DELETE - Item

const deleteItem = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedItem = await Item.findOne({ _id: ObjectId(id) });
    deletedItem.delete();
    res.status(200).json({ message: "Item removed successfully" });
  } catch (error) {
    res.status(400).json({ message: "Failed to remove item" });
    console.error(error);
  }
};

module.exports = {
  deleteItem,
  postNewItem,
  getItems,
};
