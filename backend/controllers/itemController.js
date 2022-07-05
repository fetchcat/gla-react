const pool = require("../config/db");

// GET - ALL Items

const getAllItems = async (req, res) => {
  try {
    const [rows] = await pool.execute("SELECT * FROM items");
    if (rows.length === 0) {
      return res.status(404).json({ error: "No Results" });
    }
    res.status(200).json({ rows });
  } catch (error) {
    res.status(400).json({ error: error.sqlMessage });
  }
};

// POST - New Item

const postNewItem = async (req, res) => {
  const { name } = req.body;
  try {
    const [rows] = await pool.execute(
      `INSERT INTO items (name) VALUES('${name}')`
    );
    res.status(201).json({ rows });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      res.status(400).json({ error: "Entry already exists" });
    } else {
      res.status(400).json({ error: "Cannot add entry", sqlMessage });
      console.log(error);
    }
  }
};

// DELETE - Delete Item by ID

const deleteItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.execute(`DELETE FROM items WHERE id = ${id}`);
    if (rows.affectedRows === 0) {
      res.status(400).json({ error: "No entry exists" });
    }
    if (rows.affectedRows === 1) {
      res.status(200).json({ message: "Item deleted successfully" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = {
  getAllItems,
  postNewItem,
  deleteItemById,
};
