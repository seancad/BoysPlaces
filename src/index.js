import React, { useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import RentalForm from "./forms/addingrental";
import Display from "./disps/index disp";
import MobileJump from "./mobile/mobileJump";
import { Grid, Sticky, Ref } from "semantic-ui-react";

var stickyRef = React.createRef();

function App() {
  var jumpRef = useRef(null);
  return (
    <div className="App">
      <h1>Rental Form</h1>
      <Sticky context={stickyRef}>
        <MobileJump reference={jumpRef} />
      </Sticky>
      <Grid stackable>
        <Ref innerRef={stickyRef}>
          <Grid.Column width={10}>
            <Display />
          </Grid.Column>
        </Ref>

        <Grid.Column width={6}>
          <Sticky offset={30} context={stickyRef}>
            <RentalForm refer={jumpRef} />
          </Sticky>
        </Grid.Column>
      </Grid>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
