import React, { Component, Fragment } from "react";
import { Form } from "semantic-ui-react";

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { key: "Test", value: "123", text: "Test" },
        { key: "Test1", value: "12345", text: "Test1" }
      ]
    };
    this.handleEvent = this.handleEvent.bind(this);
  }
  handleEvent(e, { value }) {
    console.log(value);
    this.props.handleStuff(value);
  }
  render() {
    return (
      <Fragment>
        <Form.Select
          fluid
          search
          multiple
          label="Job"
          options={this.props.options}
          placeholder="Job"
          onChange={this.handleEvent}
        />
      </Fragment>
    );
  }
}

export default Selector;
