import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class RegistrationForm extends React.Component {
  state = {
    id: this.props.id,
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    latestScore: this.props.latestScore
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.query_f({ variables: { inputCustomer: this.state } })
    if (this.props.onCancel) {
      this.props.onCancel();
    }

    

  }

  render() {
    return (
      <Container className="p-5">
        <Jumbotron>
      <Form onSubmit={this.handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formCustomerId">
            <Form.Label>Customer Id </Form.Label>
            <Form.Control type="text" placeholder="Enter customer id" value={this.state.id || ''} onChange={e => this.setState({ id: e.target.value })} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formFirstName">
            <Form.Label>First Name </Form.Label>
            <Form.Control type="text" placeholder="Enter firstName" value={this.state.firstName || ''} onChange={e => this.setState({ firstName: e.target.value })} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formLastName">
            <Form.Label>Last Name </Form.Label>
            <Form.Control type="text" placeholder="Enter lastName" value={this.state.lastName || ''} onChange={e => this.setState({ lastName: e.target.value })} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formScore">
            <Form.Label>Credit Score </Form.Label>
            <Form.Control type="text" placeholder="Enter credit score" value={this.state.latestScore || ''} onChange={e => this.setState({ latestScore: e.target.value })} />
          </Form.Group>
        </Row>

        <Button variant="dark" size="lg" type="submit">{this.props.id ? "Edit" : "Create"} Customer</Button>
        {/* <Row className="mb-3">
          <Form.Group className="mb-3">
            <Mutation mutation={ADD_CUSTOMER} refetchQueries={[{ query: CUSTOMER_LIST_QUERY }]}>
              {mutation => (
                <Button variant="dark" size="lg" type="submit" onClick={() => mutation({ variables: { inputCustomer: this.state } })}>
                  { this.props.id ? "Edit" : "Create"} Customer
                </Button>
              )}
            </Mutation>
          </Form.Group>
        </Row> */}
      </Form>
      </Jumbotron>
      </Container>
    );
    
  }
}

const CustomerForm = RegistrationForm;

export default CustomerForm