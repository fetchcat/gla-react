import axios from "axios";
import React, { useState, useContext } from "react";
import { ItemContext } from "../context/ItemContext";
import { MsgContext } from "../context/MsgContext";

import { FaPlus } from "react-icons/fa";

const AddItem = () => {
  const [items, setItems] = useContext(ItemContext);
  const [, setMsg] = useContext(MsgContext);

  const [item, setItem] = useState("");

  const addItem = async () => {
    setMsg("");
    //Check for item to send first
    if (item.length === 0) {
      return;
    }
    try {
      const response = await axios({
        url: "/api",
        method: "POST",
        data: {
          name: item,
        },
      });

      const newItems = [...items, response.data.newItem];
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

      setMsg(response.data.message);
      setTimeout(() => {
        setMsg("");
      }, 1000);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.message);
        setTimeout(() => {
          setMsg("");
        }, 1000);
      }
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
