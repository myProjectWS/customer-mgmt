import React from 'react'
import { Mutation } from "react-apollo";
import CustomerForm from "./form";
import {ADD_CUSTOMER, CUSTOMER_LIST_QUERY} from './graphqlQueries';


const AddCustomer = () => {
  return (
    <Mutation
      mutation={ADD_CUSTOMER}
      update={(cache, { data: { addCustomer } }) => {
        const { customers } = cache.readQuery({ query: CUSTOMER_LIST_QUERY });
        cache.writeQuery({
          query: CUSTOMER_LIST_QUERY,
          data: { customers: customers.concat([addCustomer]) }
        });
      }}
      >
      {addCustomer => (
        <CustomerForm query_f = {addCustomer}/>
      )}
    </Mutation>
  );
};

export default AddCustomer;