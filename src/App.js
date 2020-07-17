import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Calculator from "./container/Calculator/index.tsx";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Calculator />
      </div>
    </Provider>
  );
}

export default App;
