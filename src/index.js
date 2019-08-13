import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import RentalForm from "./forms/addingrental";

function App() {
  return (
    <div className="App">
      <h1>Rental Form</h1>
      <br />
      <RentalForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
