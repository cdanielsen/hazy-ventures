import React, { Component } from 'react';
import {
  Alert,
  Button,
  Container,
  Form,
  FormText,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from 'reactstrap';

export default class Questionare extends Component {
  state = { submitted: false }

  handleSubmit = () => {
    this.setState({ submitted: true });
  }

  render() {
    const { submitted } = this.state;

    return (
      <Container style={ { paddingBottom: '10em' } }>
        { !submitted &&
          <Row>
            <Col sm={ { size: 6, offset: 3 } }>
              <h1>Book Your "Trip"</h1>

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
                  <Label for="ssn">Last 9 Digits of Your Social Security Number</Label>
                  <Input name="ssn" id="ssn" />
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

                <Button style={{ marginBottom: '1em' }} className="primary" onClick={ this.handleSubmit }>Get Lost!</Button>
                <p style={{ fontSize: 9 }} className="text-muted">By clicking "Get Lost!" I aggree that my life insurance policy is paid up and Hazy Ventures will not be held liable for what comes next.</p>
              </Form>
            </Col>
          </Row>
        }

        {submitted &&
          <Alert color="success">
            Thanks! Your information has been posted to Reddit.
          </Alert>
        }
      </Container>
    );
  }
}