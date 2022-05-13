import React, { useState, useContext, useEffect, useCallback } from "react";

import axios from "axios";

import { ItemContext } from "../context/ItemContext";

import { MsgContext } from "../context/MsgContext";

import Item from "./Item";

const ItemList = () => {
  const [items, setItems] = useContext(ItemContext);
  const [msg, setMsg] = useContext(MsgContext);

  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const getItems = useCallback(async () => {
    setMsg("");
    setIsLoaded(false);
    setIsLoading(true);
    try {
      const response = await axios({
        url: "/api",
        method: "GET",
      });
      setItems(response.data);
      setIsLoading(false);
      setIsLoaded(true);
    } catch (error) {
      setIsLoaded(true);
      setIsLoading(false);
      setMsg("Cannot fetch items...");
    }
  }, [setItems, setMsg]);

  const delItem = async (id) => {
    try {
      const response = await axios({
        url: `/api/${id}`,
        method: "DELETE",
      });
      const newItems = items.filter((item) => item._id !== id);
      setItems(newItems);
      setMsg(response.data.message);
      setTimeout(() => {
        setMsg("");
      }, 1000);
    } catch (error) {
      setMsg(error.message);
    }
  };

  const ItemMap = () => {
    return (
      <ul className="item-list">
        {items.map((item, index) => {
          return <Item key={index} item={item} delItem={delItem} />;
        })}
      </ul>
    );
  };

  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <>
      {isLoaded && msg && <div className="msg">{msg}</div>}
      {isLoading && <div className="msg">Loading...</div>}
      {isLoaded && <ItemMap />}
      {isLoaded && !items.length && !msg.length && (
        <div className="msg">No items to display</div>
      )}
    </>
  );
};

export default ItemList;
