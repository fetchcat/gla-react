const db = require("../config/db");

class Item {
  constructor(name) {
    this.name = name;
  }

  async save() {
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();

    let createdAtDate = `${yyyy}-${mm}-${dd}`;

    let sql = `INSERT INTO items (name, createdAT) VALUES('${this.name}','${createdAtDate}')`;

    const [newItem, _] = await db.execute(sql);
    return newItem;
  }

  static findAll() {
    let sql = "SELECT * FROM items";

    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM items WHERE id = ${id}`;
    return db.execute(sql);
  }

  static deleteById(id) {
    let sql = `DELETE FROM items WHERE id = ${id}`;
    return db.execute(sql);
  }
}

module.exports = Item;
