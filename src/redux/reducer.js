import { combineReducers } from '@reduxjs/toolkit';
import { conctactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from './auth/authSlice';

export const reducer = combineReducers({
  contacts: conctactsReducer,
  filter: filterReducer,
  auth: authReducer,
})