/**
 * Created by Vadym Yatsyuk on 29/07/16
 */

import { createStore, combineReducers } from 'redux';
import * as actionTypes from './actionTypes';

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
  ],
  activeContact: null
};

const main = (state = initialState, action) => {

  if (action.type === actionTypes.SET_ACTIVE_CONTACT) {
    return Object.assign({}, state, {
      activeContact: action.contact
    })
  }

  return state;
};

export default createStore(combineReducers({
  main
}));