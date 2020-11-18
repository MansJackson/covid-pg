import { combineReducers } from 'redux';
import { GeneralAction } from '../types';

const generalReducer = (state = '', action: GeneralAction) => {
  switch (action.type) {
    case 'SET_GENERAL':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  general: generalReducer,
});
