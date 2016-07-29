/**
 * Created by Vadym Yatsyuk on 29/07/16
 */

import { createStore, combineReducers } from 'redux';

const defaultImage = 'https://www.bankofenglandearlycareers.co.uk/media/2747/blank-profile.jpg';
const initialState = {
  contacts: [
    {
      id: 1,
      uri: defaultImage
    },
    {
      id: 2,
      uri: defaultImage
    },
    {
      id: 3,
      uri: defaultImage
    }
  ]
};

const main = (state = initialState, action) => {
  return state;
};

export default createStore(combineReducers({
  main
}));