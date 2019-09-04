import Display from "./rental disp";
import React, { Component, Fragment } from "react";
import { Loader } from "semantic-ui-react";
import axios from "axios";
import parletong from "./parselist";

class IndexDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      justSubmitted: this.props.justSubmitted
    };

    this.mapDisplay = this.mapDisplay.bind(this);
    this.reFetch = this.reFetch.bind(this);
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
  async componentDidMount() {
    let data = await axios.get("https://djangodb.herokuapp.com/apirentals/");
    let arrayData = data.data;
    this.mutateObjLists(arrayData, ["utilities", "features_list"], null);
    console.log("right after call", data.data);
    const displays = await this.mapDisplay(arrayData);
    console.log("finished mapdisplay", arrayData);
    this.setState({ isLoading: false, apiData: arrayData, displays: displays });
    setInterval(this.reFetch, 1000);
  }

  async mapDisplay(data) {
    let output;
    output = data.map((obj, key) => <Display data={obj} key={key} />);

    return output;
  }

  async reFetch() {
    let data = await axios.get("https://djangodb.herokuapp.com/apirentals/");
    let arrayData = data.data;
    this.mutateObjLists(arrayData, ["utilities", "features_list"], null);
    console.log("right after call", data.data);
    const displays = await this.mapDisplay(arrayData);
    console.log("finished mapdisplay", arrayData);
    this.setState({ isLoading: false, apiData: arrayData, displays: displays });
    setInterval(reFetch, 1000);
  }
  async mutateObjLists(objList, listOfProperties, func) {
    for (let element of objList) {
      for (let property of listOfProperties) {
        const splitItems = element[property].split(",");
        element[property] = splitItems;
      }
    }
  }
  render() {
    if (this.state.isLoading) {
      return <Loader active inline="centered" />;
    } else {
      return <Fragment> {this.state.displays} </Fragment>;
    }
  }
}

export default IndexDisplay;
