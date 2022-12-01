import { useDispatch } from "react-redux"
import { addManyCustomersAction } from "../store/customerReducer"

export const fetchCustomers = () => {
    // return dispatch => {
    return function(dispatch1) {
            fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => dispatch1(addManyCustomersAction(json)))        
    }
}