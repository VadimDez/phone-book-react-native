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
      name: 'A',
      uri: defaultImage
    },
    {
      id: 2,
      name: 'B',
      uri: defaultImage
    },
    {
      id: 3,
      name: 'C',
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

  if (action.type === actionTypes.ADD_CONTACT) {
    return Object.assign({}, state, {
      contacts: [...state.contacts, action.value]
    });
  }

  return state;
};

export default createStore(combineReducers({
  main
}));