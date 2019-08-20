import Display from "./rental disp";
import React, { Component, Fragment } from "react";
import shave from "shave";

const mockApiData = {
  selectorValues: [
    "dishwasher",
    "in-suit landry",
    "oven/stove",
    "garage",
    "parking"
  ],
  price: 123,
  distance: 20,
  bathrooms: 2,
  bedrooms: 3,
  url: "www.google.com",
  location: "9010 106 Ave nw edmonton ab, t0a2c0",
  utilities: {
    Electricity: true,
    Heat: true,
    Water: true
  }
};

class IndexDisplay extends Component {
  componentDidMount() {
    console.log(shave(".shave-url", 3));
  }
  render() {
    return (
      <Fragment>
        <Display data={mockApiData} />
      </Fragment>
    );
  }
}

export default IndexDisplay;
