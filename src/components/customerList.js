import React from 'react';
import { graphql } from 'react-apollo';
import { CUSTOMER_LIST_QUERY } from './graphqlQueries';
import { Table } from 'react-bootstrap';

import CustomerModal from './modal';
import DeleteCustomer from "./deleteCustomer";
import AddCustomer from './create';


const reverse = (a) => {
  var temp = [];
  var len = a.length;
  for (var i = (len - 1); i >= 0; i--) {
    temp.push(a[i]);
  }
  return temp;
}

const CustomerListDumb = ({ data: { customers, loading, error } }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (<div>
    {/* <CustomerForm></CustomerForm> */}
    <AddCustomer></AddCustomer>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Latest Score</th>
            <th>Action</th>
            <th>Show</th>
          </tr>
        </thead>
        {reverse(customers).map(({ id, firstName, lastName, latestScore }) => (
          <tbody>
            <tr>
              <th>{id}</th>
              <th>{firstName}</th>
              <th>{lastName}</th>
              <th>{latestScore}</th>
              <th><DeleteCustomer id={id}></DeleteCustomer></th>
              <th><CustomerModal id={id} firstName={firstName} lastName={lastName} latestScore={latestScore} /></th>
            </tr>
          </tbody>)
        )}
      </Table>
    
  </div>
  );
}

export const CustomerList = graphql(CUSTOMER_LIST_QUERY)((CustomerListDumb));