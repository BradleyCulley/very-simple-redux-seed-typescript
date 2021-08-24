import {Action} from "redux";

const initialState = { count: 0 };

export const counterReducer = (state = initialState, action: Action<string>) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1};
    default:
      return state;
  }
};
