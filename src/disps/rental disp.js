import React, { Fragment } from "react";
import { Grid, Container, Table, Card, GridColumn } from "semantic-ui-react";
import cheerio from "cheerio";

// Use cheerio to scrape url for imgs.

const rentalDisplay = props => {
  return (
    <div>
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={3}>
            <a href="{props.data.url}">Google</a> ew
          </Grid.Column>
          <Grid.Column width={13}>
            <Grid>
              <Grid.Column width={8}>
                <Table definition>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell width={2}>Url</Table.Cell>
                      <Table.Cell>
                        <img src="/images/wireframe/centered-paragraph.png" />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell width={2}>Url</Table.Cell>
                      <Table.Cell>
                        <img src="/images/wireframe/centered-paragraph.png" />
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Column>
              <Grid.Column width={8}>
                <Table definition>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell width={2}>Url</Table.Cell>
                      <Table.Cell>
                        <img src="/images/wireframe/centered-paragraph.png" />
                      </Table.Cell>
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
                      {props.data.selectorValues.map(item => {
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
