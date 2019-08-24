import React, { createRef } from "react";
import { Grid, Container, Table, Button } from "semantic-ui-react";
import shave from "shave";

// Use cheerio to scrape url for imgs.

const rentalDisplay = props => {
  console.log("start", props.data);
  var textInput = React.createRef();

  const handleCopy = function(e) {
    var text = e.target.href;
    navigator.clipboard.writeText(text);
  };
  let refer;
  console.log("all stuffs", refer, props.data);
  return (
    <div
      ref={element => {
        refer = element;
      }}
    >
      {props.data.url}
      {props.data.utilities}
    </div>
  );
};

export default rentalDisplay;
