import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import RentalForm from "./forms/addingrental";
import Display from "./disps/index disp";
import { Grid } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <h1>Rental Form</h1>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            <Display />
          </Grid.Column>
          <Grid.Column width={6}>
            <RentalForm />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
