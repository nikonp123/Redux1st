const ADD_CUSTOMER = 'ADD_CUSTOMER';
const DEL_CUSTOMER = 'DEL_CUSTOMER';
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS';

const defaultState = {
    customers: []
    // customers: ['Ivan','Petr']
}

export const customerReducer = (state=defaultState,action) =>{
    switch (action.type) {
        case ADD_MANY_CUSTOMERS:
            return { ...state, customers: [...state.customers, ...action.payload] }
        case ADD_CUSTOMER:
            return { ...state, customers: [...state.customers, action.payload] }
        case DEL_CUSTOMER:
            // console.log('sss');
            return { ...state, customers: state.customers.filter(customer => customer.id !== action.payload) }
        default:
            return state;
    }
  }

//action creator  
export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload});
export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload});
export const delCustomerAction = (payload) => ({type: DEL_CUSTOMER, payload});
