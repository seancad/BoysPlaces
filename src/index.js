import React, { useRef, createRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import RentalForm from "./forms/addingrental";
import Display from "./disps/index disp";
import MobileJump from "./mobile/mobileJump";
import { Grid, Sticky, Ref } from "semantic-ui-react";

var stickyRef = React.createRef();

class App extends React.Component {
  constructor() {
    super();
    this.state = { justSubmitted: false };
  }

  onsubmit = function() {
    this.setState();
  };
  render() {
    var jumpRef = createRef();
    return (
      <div className="App">
        <h1>Rentals</h1>
        <Sticky context={stickyRef}>
          <MobileJump reference={jumpRef} />
        </Sticky>
        <Grid stackable>
          <Grid.Row>
            <Ref innerRef={stickyRef}>
              <Grid.Column width={10}>
                <Display justSubmitted={this.state.justSubmitted} />
              </Grid.Column>
            </Ref>

            <Grid.Column width={6}>
              <Sticky offset={30} context={stickyRef}>
                <h1> Rental Form</h1>
                <RentalForm refer={jumpRef} />
              </Sticky>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
