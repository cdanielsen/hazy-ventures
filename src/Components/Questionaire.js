import React, { Component } from 'react';
import {
  Button,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
} from 'reactstrap';

export default class Questionare extends Component {
    render() {
      return (
        <Container>
          <Row>
            <h1>Tell Us About Yourself</h1>
          </Row>
          <Row>
            <Form>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input name="email" id="name" />
              </FormGroup>

              <Button color="primary">Get Lost!</Button>
            </Form>
          </Row>
        </Container>
      );
    }
}