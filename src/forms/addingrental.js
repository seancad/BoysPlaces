import React from "react";
import { Form, Button, Grid, Container } from "semantic-ui-react";
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
      selectorValues: [],
      price: "",
      distance: "",
      bathrooms: "",
      bedrooms: "",
      url: "",
      utilities: {
        Electricity: true,
        Heat: true,
        Water: true
      }
    };
    this.handleSelector = this.handleSelector.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInputString = this.handleInputString.bind(this);
  }

  componentDidUpdate() {
    console.log("parent-state:", this.state);
  }

  handleSelector(value) {
    this.setState({
      selectorValues: value
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

  onSubmit(e) {
    alert("sent");

    axios
      .post("https://djangodb.herokuapp.com/apirentals/", {
        monthly_price: this.state.price
      })
      .then(res => console.log(res))
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    console.log(defaultChoices);
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Test
            options={options}
            defaultValue={defaultChoices}
            handleStuff={this.handleSelector}
          />
          <Form.Group widths={2}>
            <Form.Input
              label="Price (Monthly)"
              icon="dollar sign"
              placeholder="Price"
              value={this.state["price"]}
              onChange={this.handleInput}
              name="price"
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
            icon="web"
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

          <Button type="submit"> Add</Button>
        </Form>
      </div>
    );
  }
}
export default AddRentals;
