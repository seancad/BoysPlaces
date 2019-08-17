import Display from "./rental disp";
import React, { Component, Fragment } from "react";

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
  utilities: {
    Electricity: true,
    Heat: true,
    Water: true
  }
};

class IndexDisplay extends Component {
  render() {
    return (
      <Fragment>
        <Display data={mockApiData} />
      </Fragment>
    );
  }
}

export default IndexDisplay;
