import { ItemProvider } from "./context/ItemContext";

import { ErrorProvider } from "./context/ErrorContext";

import Header from "./components/Header";
import ItemList from "./components/ItemList";

function App() {
  return (
    <ItemProvider>
      <ErrorProvider>
        <div className="App">
          <Header />
          <ItemList />
        </div>
      </ErrorProvider>
    </ItemProvider>
  );
}

export default App;
