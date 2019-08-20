import React, { useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import RentalForm from "./forms/addingrental";
import Display from "./disps/index disp";
import MobileJump from "./mobile/mobileJump";
import {
  Grid,
  Sticky,
  Ref,
  Rail,
  Button,
  Segment,
  Sidebar,
  Menu,
  Icon
} from "semantic-ui-react";

var stickyRef = React.createRef();

function App() {
  var jumpRef = useRef(null);
  return (
    <div className="App">
      <h1>Rental Form</h1>
      <MobileJump reference={jumpRef} />
      <Grid stackable>
        <Ref innerRef={stickyRef}>
          <Grid.Column width={10}>
            <Display />
            1
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            1231 1
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            1231
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
