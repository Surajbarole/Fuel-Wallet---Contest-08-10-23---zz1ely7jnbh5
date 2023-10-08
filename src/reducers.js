import { v4 as uuidv4 } from "uuid";

import { ADD_USER, HANDLE_FUEL } from './actionTypes';

const initialState = {
  users: [],
  walletBalance: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      const newUser = {
        id: uuidv4(),
        name: action.payload.name,
      };
      return {
        ...state,
        users: [...state.users, newUser],
        walletBalance: state.walletBalance + 10,
      };

    case HANDLE_FUEL:
      if (state.walletBalance >= 50) {
        return {
          ...state,
          walletBalance: state.walletBalance - 50,
        };
      }
      return state;

    default:
      return state;
  }
};

export default reducer;
