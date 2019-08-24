import React, { Component, Fragment } from "react";
import { Form, Dropdown } from "semantic-ui-react";

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    props.handleStuff(props.defaultValue);
    this.handleEvent = this.handleEvent.bind(this);
  }
  componentDidMount() {
    let proptions = this.props.options;
    let options = [];
    for (let option of proptions) {
      options.push({ key: option, value: option, text: option });
    }
    this.setState({ options: options });
  }

  handleEvent(e, { value }) {
    this.props.handleStuff(value);
  }
  render() {
    return (
      <Fragment>
        <Dropdown
          fluid
          search
          multiple
          selection
          label="Features"
          options={this.state.options}
          placeholder="Features"
          onChange={this.handleEvent}
          defaultValue={this.props.defaultValue}
        />
      </Fragment>
    );
  }
}

export default Selector;
