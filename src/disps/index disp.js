import Display from "./rental disp";
import React, { Component, Fragment } from "react";

import axios from "axios";

class IndexDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: ""
    };
  }
  mockApiData = {
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
  componentDidMount() {}
  render() {
    return (
      <Fragment>
        <Display data={this.mockApiData} />
        <Display data={this.mockApiData} />
        <Display data={this.mockApiData} />
        <Display data={this.mockApiData} />
        <Display data={this.mockApiData} />
        <Display data={this.mockApiData} />
        <Display data={this.mockApiData} />
        <Display data={this.mockApiData} />
        <Display data={this.mockApiData} />
      </Fragment>
    );
  }
}

export default IndexDisplay;
