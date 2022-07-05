import React from "react";

import { useItemsContext } from "../hooks/useItemContext";

const Item = ({ item }) => {
  const { dispatch } = useItemsContext();
  const handleDelete = async (e) => {
    const response = await fetch("/api/items/" + item.id, {
      method: "DELETE",
    });
    const data = await response.json();
    if (response.ok) {
      console.log(data.rows);
      dispatch({ type: "DELETE_ITEM", payload: item.id });
    }
  };

  const handle = (e) => console.log(e);
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      key={item.id}
    >
      <span>{item.name}</span>
      <button type="button" className="btn btn-danger" onClick={handleDelete}>
        <i className="bi bi-trash"></i>
      </button>
    </li>
  );
};

export default Item;
