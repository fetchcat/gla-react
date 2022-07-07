const pool = require("../config/db");

// GET - ALL Items

const getAllItems = async (req, res) => {
  try {
    const [rows] = await pool.execute("SELECT * FROM items ORDER BY name");
    if (rows.length === 0) {
      return res.status(404).json({ error: "No Items to display..." });
    }
    res.status(200).json({ rows });
  } catch (error) {
    res.status(400).json({ error: "Failed getting all items" });
    console.error(error.sqlMmessage);
  }
};

// POST - New Item

const postNewItem = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Cannot be blank" });
  }
  try {
    const [rows] = await pool.execute(
      `INSERT INTO items (name) VALUES('${name}')`
    );
    const result = await pool.query(
      `SELECT * FROM items WHERE id = ${rows.insertId}`
    );
    res
      .status(201)
      .json({ message: "Item Added Successfully!", item: result[0][0] });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      res.status(400).json({ error: "Entry Already Exists" });
    } else {
      res.status(400).json({ error: "Cannot add entry" });
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
      res.status(400).json({ error: "No Entry Exists" });
    }
    if (rows.affectedRows === 1) {
      res
        .status(200)
        .json({ id: rows.insertId, message: "Item Deleted Successfully" });
    }
  } catch (error) {
    res.status(400).json({ error: "Delete Item Failed" });
    console.error(error.sqlMessage);
  }
};

module.exports = {
  getAllItems,
  postNewItem,
  deleteItemById,
};
