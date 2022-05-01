import React from "react";

import { ItemProvider } from "./context/ItemContext";

import { MsgProvider } from "./context/MsgContext";

import Header from "./components/Header";
import ItemList from "./components/ItemList";

function App() {
  return (
    <ItemProvider>
      <MsgProvider>
        <div className="App">
          <Header />
          <ItemList />
        </div>
      </MsgProvider>
    </ItemProvider>
  );
}

export default App;
