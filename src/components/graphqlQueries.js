import gql from "graphql-tag";

export const CUSTOMER_LIST_QUERY = gql`{customers{
                                       id
                                       firstName
                                       lastName
                                       latestScore
                                     }
}`;

export const ADD_CUSTOMER = gql`
    mutation addCustomer($inputCustomer: InputCustomer!){
        addCustomer(inputCustomer: $inputCustomer){
            id
            firstName
            lastName
            latestScore
        }
    }
`;

export const DELETE_CUSTOMER_QUERY = gql`
  mutation deleteCustomer($id:Int!){
      deleteCustomer(id: $id)
  }
`;

export const UPDATE_ADDRESS_QUERY = gql`
mutation updateCustomer($inputCustomer: InputCustomer!){
  updateCustomer(inputCustomer: $inputCustomer){
      id
      firstName
      lastName
      latestScore
  }
}
`;