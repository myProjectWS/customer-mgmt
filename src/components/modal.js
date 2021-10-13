import Modal from 'react-bootstrap/Modal'
import React from 'react';
import UpdateTodo from './edit'
import { Button } from 'react-bootstrap';


class CustomerModal extends React.Component {
  state = { visible: false, editformvisible: false }
  showModal = () => {
    this.setState({
      show: true,
      visible: true,
    });
  }
  showEditForm = () => {
    this.setState({
      editformvisible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      show: false,
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      show: false,
      visible: false,
    });
  }

  render() {
    const { id, firstName, lastName, latestScore } = this.props
    return (
      <div>
        <Button variant="info" onClick={this.showModal} >Open</Button>
        {/* <Modal show={this.state.show}>
          <Modal.Header handleOk={this.handleOk} handleCancel={this.handleCancel}>
            <Modal.Title>View Customer page</Modal.Title>
          </Modal.Header>
          
        </Modal> */}
        <Modal show={this.state.show}>
          <Modal.Header>
            <Modal.Title>View Customer Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {!this.state.editformvisible ?
              (<div>
                <p></p>
                <p>Id: {id} </p>
                <p>First Name: {firstName} </p>
                <p>Last Name: {lastName} </p>
                <p>Score: {latestScore} </p>
                <Button type="secondary" onClick={this.showEditForm} > Edit </Button>
              </div>)
              : (<div> <UpdateTodo id={id} firstName={firstName} lastName={lastName}
                latestScore={latestScore} onCancel={this.handleCancel}/></div>)}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleOk}>OK</Button>
            <Button variant="secondary" onClick={this.handleCancel}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CustomerModal;