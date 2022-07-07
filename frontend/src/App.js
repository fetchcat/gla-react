import React, { useState, useEffect } from "react";

import Item from "./components/Item";
import Alert from "./components/Alert";

import { useItemsContext } from "./hooks/useItemContext";

const App = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const { items, dispatch } = useItemsContext();

  const item = {
    name,
  };

  console.log(items);

  const handleAddItem = async () => {
    setError(null);
    setMessage(null);
    const response = await fetch("/api/items/", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: "ADD_ITEM", payload: data.item });
      setName("");
    }
    if (data.message) {
      setMessage(data.message);
      setTimeout(() => {
        setMessage(null);
      }, 2000);
    }
    if (data.error) {
      setError(data.error);
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  };

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const response = await fetch("/api/items/");
      const data = await response.json();
      console.log(data);
      if (data.error) {
        setLoading(false);
        setError(data.error);
      }
      if (response.ok) {
        dispatch({ type: "SET_ITEMS", payload: data.rows });
        setLoading(false);
      }
    };

    fetchItems();
  }, [dispatch]);

  return (
    <div className="App">
      <section className="bg-dark py-3">
        <div className="container-sm d-flex  justify-content-center align-items-center">
          <h1 className="text-light h2 me-3">Grocery List</h1>
          <i className="bi bi-card-checklist text-light h1"></i>
        </div>
      </section>
      <section className="bg-primary py-3">
        <div className="container-sm px-5 d-flex flex-column">
          <div className="input-group d-flex align-items-center justify-content-center">
            <input
              type="text"
              className="form-control"
              placeholder="Add Item to list..."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <button
              className="btn btn-dark"
              type="button"
              id="button-addon2"
              onClick={handleAddItem}
            >
              <i className="bi bi-plus-lg"></i>
            </button>
          </div>
        </div>
      </section>
      <section className="mb-3">
        <div className="container-sm px-5 pt-3">
          {loading && <Alert type="primary" text="Loading..." />}
          {error && (
            <Alert
              icon="exclamation-triangle-fill"
              type="danger"
              text={error}
            />
          )}
          {message && (
            <Alert icon="check-circle-fill" type="success" text={message} />
          )}
          <ul className="list-group">
            {items && items.map((item) => <Item item={item} key={item.id} />)}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default App;
