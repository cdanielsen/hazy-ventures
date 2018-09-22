import React, { Component } from 'react';
import {
  Button,
  Container,
  Form,
  FormText,
  FormGroup,
  Label,
  Input,
  Row,
} from 'reactstrap';

export default class Questionare extends Component {
  handleClick = () => {
    alert('Good luck!');
  }

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
              <Input name="name" id="name" />
            </FormGroup>

            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" />
            </FormGroup>

            <FormGroup>
              <Label for="not">Where would you <strong>NOT</strong> what to travel to?</Label>
              <Input type="textarea" name="text" id="not" />
            </FormGroup>

            <FormGroup>
              <Label for="worst">What are your worst vacation experiences?</Label>
              <Input type="textarea" name="text" id="worst" />
            </FormGroup>

            <FormGroup>
              <Label for="vaccinations">Are your vaccinations up to date?</Label>
              <Input type="select" name="select" id="vaccinations">
                <option></option>
                <option>Yes</option>
                <option>No</option>
                <option>What vaccinations?</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="adequate">Are they adequate?</Label>
              <Input type="select" name="select" id="adequate">
                <option></option>
                <option>No</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="alone">Are you travelling alone?</Label>
              <Input type="select" name="select" id="alone">
                <option></option>
                <option>Yes</option>
                <option>No</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="blood">Blood Type <span className="text-danger">*required</span></Label>
              <Input type="select" name="select" id="blood">
                <option></option>
                <option>O+</option>
                <option>O-</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="card">Credit Card Number</Label>
              <Input name="card" id="name" />
            </FormGroup>

            <FormGroup>
              <Label for="kin">Next of Kin</Label>
              <Input name="kin" id="name" />
            </FormGroup>

            <Button className="primary" onClick={ this.handleClick }>Get Lost!</Button>
          </Form>
        </Row>
      </Container>
    );
  }
}