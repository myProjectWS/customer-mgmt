import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { CustomerList } from './components/customerList'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class App extends Component {
  render() {
    return (
      <Container className="p-3">
        <Jumbotron>
        <div class="p-5 text-center bg-light"><h1 class="mb-3">Customer Management</h1>
        <h5>(Developed using GraphQL and React)</h5></div>
      <Switch>
        <Route exact path="/" component={CustomerList} />
      </Switch>
      </Jumbotron>
      </Container>
    );
  }
}

export default App;