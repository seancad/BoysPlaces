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
        console.log(refer.getBoundingClientRect());
      }}
    >
      <Grid celled stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <a href="{props.data.url}">Google</a> ew
          </Grid.Column>
          <Grid.Column width={13}>
            <Grid stackable>
              <Grid.Row />
              <Grid.Column width={5}>
                <Table definition>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell width={1}>Price</Table.Cell>
                      <Table.Cell>{props.data.price} $</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Distance</Table.Cell>

                      <Table.Cell>{props.data.time_to_uofa} km</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Column>
              <Grid.Column width={5}>
                <Table definition>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell singleLine>Baths</Table.Cell>
                      <Table.Cell>{props.data.bathrooms}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Bed Rooms</Table.Cell>
                      <Table.Cell>{props.data.bedrooms}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Column>
              <Grid.Column width={6}>
                <Table definition columns={2}>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell width={2}>Url</Table.Cell>
                      <Table.Cell>
                        <a
                          ref={textInput}
                          onCopy={handleCopy}
                          href={"https://" + props.data.url}
                          id="shave-url"
                        >
                          click-here
                        </a>
                        <Button
                          floated="right"
                          icon="clipboard"
                          color="facebook"
                          onClick={e => {
                            const url = textInput.current.href;
                            navigator.clipboard.writeText(url);
                          }}
                          size="tiny"
                        />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell width={2}>Url</Table.Cell>

                      <Table.Cell
                        style={{ width: 100 }}
                        content={props.data.location}
                      />
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Column>
            </Grid>
            <Table definition>
              <Table.Body>
                <Table.Row>
                  <Table.Cell width={2}>Features</Table.Cell>
                  <Table.Cell>
                    <div className="row">
                      {props.data.features_list.map(item => {
                        return <span className="features-item">{item}</span>;
                      })}
                    </div>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <Table definition>
              <Table.Body>
                <Table.Row>
                  <Table.Cell width={2}>Location</Table.Cell>
                  <Table.Cell>{props.data.location}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <Table definition>
              <Table.Body>
                <Table.Row>
                  <Table.Cell width={2}>Utilities</Table.Cell>
                  <Table.Cell>
                    <div className="row">
                      {props.data.utilities.map(item => {
                        return <span className="features-item">{item}</span>;
                      })}
                    </div>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default rentalDisplay;
