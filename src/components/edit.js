import React from 'react'
import { Mutation } from "react-apollo";
import CustomerForm from "./form";
import { UPDATE_ADDRESS_QUERY, CUSTOMER_LIST_QUERY } from './graphqlQueries';


const UpdateTodo = (props) => {
  return (
    <Mutation
      mutation={UPDATE_ADDRESS_QUERY}
      update={(cache, { data: { updateCustomer } }) => {
        const { customers } = cache.readQuery({ query: CUSTOMER_LIST_QUERY });
        cache.writeQuery({
          query: CUSTOMER_LIST_QUERY,
          data: { customers: customers }
        });
      }}
      >
      {updateCustomer => (
        <CustomerForm query_f = {updateCustomer} {...props} />
      )}
    </Mutation>
  );
};
 

export default UpdateTodo;