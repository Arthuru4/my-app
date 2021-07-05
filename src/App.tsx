import React from "react";
// import "./App.scss";
import RouterComponent from "./RouterComponent";
import { Provider } from "mobx-react";
import StoreMobx from "./mobx/Store";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Provider {...StoreMobx}>
      <BrowserRouter>
        <RouterComponent />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
