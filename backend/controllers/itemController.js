const Item = require("../models/ItemModel");

const getAllItems = async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.status(200).json({ items });
  } catch (error) {
    console.log(error);
  }
};

const postNewItem = async (req, res, next) => {
  try {
    const { name } = req.body;
    let item = new Item(name);

    item = await item.save();
    console.log(item);

    res.status(201).json({ message: "Created" });
  } catch (error) {
    console.log(error);
  }
};

const getItemById = async (req, res, next) => {
  const { id } = req.params;
  try {
    let [item, _] = await Item.findById(id);
    res.status(200).json({ item: item[0] });
  } catch (error) {
    console.log(error);
  }
};

const deleteItemById = async (req, res, next) => {
  const { id } = req.params;
  try {
    let [item, _] = await Item.deleteById(id);
    res.status(200).json({ message: "Item Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllItems,
  postNewItem,
  getItemById,
  deleteItemById,
};
