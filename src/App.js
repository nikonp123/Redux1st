// Ulbi TV
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchCustomers } from './async_action/customers';

import { ADD_CASH,GET_CASH } from './store/cashReducer';
import { addCustomerAction, delCustomerAction } from './store/customerReducer';



function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state1 => state1.cashReducer.cash);
  const customers = useSelector (state => state.customerReducer.customers);
  // console.log(customers);

  const addCash = (cash) => {
  //ниже красивее ч/з функцию action creator
  const action = {type: ADD_CASH, payload: cash};
    dispatch(action);
  };

  const getCash = (cash) => {
  //ниже красивее ч/з функцию action creator
  const action = {type: GET_CASH, payload: cash};
    dispatch(action);    
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id:Date.now()
    }
  //это красивее ч/з функцию action creator
  dispatch(addCustomerAction(customer))
  }

  const delCustomer = (id) => {
  //это красивее ч/з функцию action creator
  dispatch(delCustomerAction(id));
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='cash'>{cash}
          <div className='cash__buttons'>
              <button onClick={()=>addCash(Number(prompt()))}>Add cash</button>
              <button onClick={()=>getCash(Number(prompt()))}>Get cash</button>
            </div>
        </div>  
  
        <div className='customers'>
          <div className='customer__buttons'>
          <button onClick={()=>addCustomer(prompt())}>Add customer</button>
          <button onClick={()=>dispatch(fetchCustomers())}>Add MANY customer</button>
            {/* <button onClick={()=>delCustomer(prompt())}>Delete customer</button> */}
          </div>          
          {customers.length == 0
          ? <div>No customer</div>
          : customers.map((e)=><li onClick={() => delCustomer(e.id)} key={e.id}>{e.name}</li>)
          }
        </div>
      </div>   
    </div>
  );
}

export default App;
