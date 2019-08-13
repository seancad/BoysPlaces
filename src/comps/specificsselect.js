import React from "react";
import { Form, Checkbox, Button } from "semantic-ui-react";

const FormExampleFieldControlHTML = () => (
  <Form method="get" action="#">
    <Form.Group grouped>
      <label>HTML radios</label>
      <Form.Field
        label="This one"
        control="input"
        type="checkbox"
        name="checkbox"
      />
      <Form.Field>
        <Checkbox />
      </Form.Field>
    </Form.Group>
    <Button type="submit">Submit</Button>
  </Form>
);

export default FormExampleFieldControlHTML;
