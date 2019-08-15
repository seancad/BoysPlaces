import React from "react";
import { Form, Button, Grid, Container } from "semantic-ui-react";
import Test from "../comps/searchselect";
import axios from "axios";

const options = ["in-suit landry", "dishwasher", "oven/stove"];
const defaultChoices = options.slice(0, 3);

class AddRentals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectorValues: [],
      price: "",
      distance: "",
      bathrooms: "",
      bedrooms: ""
    };
    this.handleSelector = this.handleSelector.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
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
      <Container>
        <Form onSubmit={this.onSubmit}>
          <Test
            options={options}
            defaultValue={defaultChoices}
            handleStuff={this.handleSelector}
          />
          <Form.Group unstackable widths={2}>
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
          <Form.Group unstackable widths={2}>
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
          <Form.Group widths={"equal"}>
            <Form.Checkbox label="Water" name="Water" defaultChecked />
            <Form.Checkbox label="Heat" defaultChecked name="Heat" />
            <Form.Checkbox
              label="Electricity"
              defaultChecked
              name="Electricity"
            />
          </Form.Group>
          <Button type="submit"> Add</Button>
        </Form>
      </Container>
    );
  }
}
export default AddRentals;
