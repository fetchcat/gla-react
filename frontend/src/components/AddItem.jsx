import axios from "axios";
import React, { useState, useContext } from "react";
import { ItemContext } from "../context/ItemContext";

import { FaPlus } from "react-icons/fa";

const AddItem = () => {
  const [items, setItems] = useContext(ItemContext);

  const [item, setItem] = useState("");

  const addItem = async () => {
    try {
      const response = await axios({
        baseURL: "http://localhost:5000",
        url: "/item",
        method: "POST",
        data: {
          name: item,
        },
      });
      const newItems = [...items, response.data];
      const sortedItems = newItems.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
      setItems(sortedItems);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem();
    setItem("");
  };

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="add-item-form">
      <input
        type="text"
        name="item"
        id="item"
        onChange={handleChange}
        value={item}
        placeholder="Add Item..."
      />
      <button type="submit" className="btn add">
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
