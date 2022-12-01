const defaultState = {
    cash: 10
  }

export const ADD_CASH = 'ADD_CASH';
export const GET_CASH = 'GET_CASH';
  
    
export const cashReducer = (state=defaultState,action) =>{
    switch (action.type) {
      case ADD_CASH:
        return {...state, cash: state.cash+action.payload}
      case GET_CASH:
        return {...state, cash: state.cash-action.payload}
      default:
        return state;
    }
  }