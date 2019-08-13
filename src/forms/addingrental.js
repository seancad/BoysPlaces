import React, { Fragment } from "react";
import { Form, Button, Grid, Container, Input } from "semantic-ui-react";
import Test from "../comps/searchselect";
import axios from "axios";

const options = [
  { key: "Test", value: "123", text: "Test" },
  { key: "Test1", value: "12345", text: "Test1" }
];

class AddRentals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectorValues: [],
      price: "",
      distance: ""
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
      .post("", {
        params: {
          values: this.state.values
        }
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          <Test options={options} handleStuff={this.handleSelector} />
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
          <Button type="submit"> Add</Button>
        </Form>
      </Container>
    );
  }
}
export default AddRentals;
