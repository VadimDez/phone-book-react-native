/**
 * Created by Vadym Yatsyuk on 29/07/16
 */

import { createStore, combineReducers } from 'redux';


const main = (state = {}, action) => {
  return state;
};

export default createStore(combineReducers(
  main
));