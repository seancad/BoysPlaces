import React from "react";
import { Form, Button, Grid, Container, Loader } from "semantic-ui-react";
import Test from "../comps/searchselect";
import axios from "axios";

const options = [
  "dishwasher",
  "in-suit laundry",
  "oven/stove",
  "garage",
  "parking"
];
const defaultChoices = options.slice(0, 3);

class AddRentals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      features_list: [],
      price: "",
      distance: "",
      bathrooms: "",
      bedrooms: "",
      url: "",
      location: "",
      squareft: "",
      utilities: {
        Electricity: true,
        Heat: true,
        Water: true
      },
      isLoading: false,
      error: false
    };
    this.handleSelector = this.handleSelector.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInputString = this.handleInputString.bind(this);
  }
  isLoading = false;
  componentDidUpdate() {}

  handleSelector(value) {
    this.setState({
      features_list: value
    });
  }

  handleInput(e, { name, value }) {
    e.preventDefault();
    if (Number.isInteger(Number(value))) {
      this.setState({ [name]: value });
    } else {
      this.setState({ [name]: this.state[name] });
    }
  }
  handleInputString(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleCheckBox(e, { checked, name }) {
    let currentUtilities = this.state.utilities;
    currentUtilities[name] = checked;
    this.setState({ utilities: currentUtilities });
  }

  async formatForSendList(obj, changesString) {
    for (let change of changesString) {
      var list = obj[change];
      obj[change] = list.join(",");
    }
    console.log("newobj", obj);
  }
  async formatForSendObj(obj, changesString) {
    let outputString = "";

    for (let change of changesString) {
      const store = obj[change];
      let first = true;
      for (const property in store) {
        const value = store[property];
        if (value === true) {
          if (first) {
            outputString += `${property}`;
            first = false;
          } else {
            outputString += `,${property}`;
          }
        }
      }
      console.log(outputString);
      obj[change] = outputString;
    }
  }
  async onSubmit(e) {
    e.preventDefault();
    this.setState({ ...this.state, error: false, isLoading: true });
    var data = this.state;
    await this.formatForSendList(data, ["features_list"]);
    await this.formatForSendObj(data, ["utilities"]);
    var errorCatch = {};
    await axios
      .post("https://djangodb.herokuapp.com/apirentals/", {
        url: data.url,
        price: data.price,
        features_list: data.features_list,
        bedrooms: data.bedrooms,
        bathrooms: data.bathrooms,
        time_to_uofa: data.distance,
        utilities: data.utilities,
        location: data.location
      })
      .then(res => console.log(res))
      .catch(function(error) {
        errorCatch.error = true;
      });
    this.setState({ ...this.state, error: errorCatch.error });
    if (this.state.error) {
      console.log("error");
      this.setState({ ...this.state, isLoading: false });
    } else {
      this.setState({
        features_list: [],
        price: "",
        distance: "",
        bathrooms: "",
        bedrooms: "",
        url: "",
        location: "",
        squareft: "",
        utilities: {
          Electricity: true,
          Heat: true,
          Water: true
        },
        isLoading: false,
        error: false
      });
    }
  }
  render() {
    let addOrLoad;
    console.log("state:", this.state);
    if (this.state.isLoading) {
      return <Loader />;
    } else {
      addOrLoad = <Button type="submit"> Add</Button>;
    }
    return (
      <div ref={this.props.refer}>
        <Form onSubmit={this.onSubmit}>
          <Test
            options={options}
            defaultValue={defaultChoices}
            handleStuff={this.handleSelector}
          />
          <Form.Group>
            <Form.Input
              label="Price (Monthly)"
              icon="dollar sign"
              placeholder="Price"
              value={this.state["price"]}
              onChange={this.handleInput}
              name="price"
              width={8}
            />
            <Form.Input
              label="Time to UofA(minutes)"
              icon="clock"
              placeholder="Time"
              onChange={this.handleInput}
              name="distance"
              width={8}
              value={this.state["distance"]}
            />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input
              label="Square Footage"
              icon="expand"
              placeholder="# Sqr. Ft."
              onChange={this.handleInput}
              name="squareft"
              value={this.state["squareft"]}
            />
            <Form.Input
              label="Time to UofA(minutes)"
              icon="clock"
              placeholder="Time"
              onChange={this.handleInput}
              name="distance"
              value={this.state["distance"]}
            />
          </Form.Group>
          <Form.Input
            label="Location"
            icon="map marker"
            placeholder="Location"
            onChange={this.handleInputString}
            name="location"
            value={this.state["location"]}
          />
          <Form.Input
            label="Url"
            icon="linkify"
            placeholder="Url"
            onChange={this.handleInputString}
            name="url"
            value={this.state["url"]}
          />
          <Form.Group widths={2}>
            <Form.Input
              label="Bedrooms"
              icon="bed"
              placeholder="# Bedrooms"
              value={this.state["bedrooms"]}
              onChange={this.handleInput}
              name="bedrooms"
            />
            <Form.Input
              label="Bathrooms"
              icon="bath"
              placeholder="# Bathrooms"
              onChange={this.handleInput}
              name="bathrooms"
              value={this.state["bathrooms"]}
            />
          </Form.Group>
          <h4>Utilities</h4>
          <Form.Group unstackable={false} widths={"equal"}>
            <Form.Checkbox
              label="Water"
              name="Water"
              defaultChecked
              onClick={this.handleCheckBox}
            />
            <Form.Checkbox
              label="Heat"
              defaultChecked
              name="Heat"
              onClick={this.handleCheckBox}
            />
            <Form.Checkbox
              label="Electricity"
              defaultChecked
              name="Electricity"
              onClick={this.handleCheckBox}
            />
          </Form.Group>

          {addOrLoad}
        </Form>
      </div>
    );
  }
}
export default AddRentals;
