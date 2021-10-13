import React from 'react'
import { Mutation } from "react-apollo";
import {DELETE_CUSTOMER_QUERY, CUSTOMER_LIST_QUERY } from './graphqlQueries';
import { Button } from 'react-bootstrap';

class DeleteCustomer extends React.Component {
  render(){
    const {id} = this.props;
    return (
      <Mutation
        mutation={DELETE_CUSTOMER_QUERY}
        update={(cache, { data: { deleteCustomer } }) => {
          const { customers } = cache.readQuery({ query: CUSTOMER_LIST_QUERY });
          cache.writeQuery({
            query: CUSTOMER_LIST_QUERY,
            data: { customers: customers.filter(e => e.id !== id) }
          });
        }}
        >
        {deleteCustomer => (
          <div><Button variant="warning" onClick = {
            e => {
              e.preventDefault();
              deleteCustomer({ variables: {id:parseInt(e.target.dataset.tag, 0)}})
            }
          } data-tag = {id}>Delete</Button></div>
        )}
      </Mutation>
    );
  }
};

export default DeleteCustomer;