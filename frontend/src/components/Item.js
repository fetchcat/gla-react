import React from "react";

import { FaMinus } from "react-icons/fa";

const Item = ({ item, delItem }) => {
  return (
    <li key={item._id} className="item">
      <span>{item.name}</span>
      <button className="btn del" onClick={() => delItem(item._id)}>
        <FaMinus />
      </button>
    </li>
  );
};

export default Item;
