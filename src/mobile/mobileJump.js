import React from "react";

class MobileButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      ref: this.props.reference
    };
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
    this.scrollToRef = this.scrollToRef.bind(this);
  }
  scrollToRef() {
    const { ref } = this.state;
    console.log(document.documentElement.scrollHeight);
    window.scrollTo(
      0,
      document.documentElement.scrollHeight - (ref.current.offsetHeight + 20)
    );
  }
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }
  handleWindowSizeChange() {
    this.setState({ width: window.innerWidth });
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }
  render() {
    const { width } = this.state;
    if (width <= 767) {
      return (
        <div style={{ top: 100 }}>
          <button onClick={this.scrollToRef}>Click me</button>
        </div>
      );
    } else {
      return <div style={{ display: "none" }} />;
    }
  }
}

export default MobileButton;
