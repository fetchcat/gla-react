import { useState, useContext, useEffect, useCallback } from "react";

import axios from "axios";

import { ItemContext } from "../context/ItemContext";

import { ErrorContext } from "../context/ErrorContext";

import Item from "./Item";

const ItemList = () => {
  const [items, setItems] = useContext(ItemContext);
  const [error, setError] = useContext(ErrorContext);

  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const getItems = useCallback(async () => {
    setIsLoaded(false);
    setIsLoading(true);
    try {
      const response = await axios({
        baseURL: "http://localhost:5000",
        url: "/item",
        method: "GET",
      });
      setItems(response.data);
      setIsLoading(false);
      setIsLoaded(true);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  }, [setItems]);

  const delItem = async (id) => {
    try {
      const response = await axios({
        baseURL: "http://localhost:5000",
        url: `/item/${id}`,
        method: "DELETE",
      });
      const newItems = items.filter((item) => item._id !== id);
      setItems(newItems);
      return response;
    } catch (error) {
      setError(error.message);
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
    setTimeout(() => {
      getItems();
    }, 2000);
  }, [getItems]);

  return (
    <>
      {error.length > 0 && <div className="msg">Fail</div>}
      {isLoading && <div className="msg">Loading...</div>}
      {isLoaded && <ItemMap />}
    </>
  );

  // error ? (
  //
  // ) : (
  //   <div className="msg">No Items to display...</div>
  // );
};

export default ItemList;
