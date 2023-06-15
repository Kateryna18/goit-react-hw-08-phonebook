import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { initialState } from './initialState';


const customOperationsArr = [fetchContacts, addContact, deleteContact];
const addStatusOperation = status => {
  return customOperationsArr.map(opertion => opertion[status]);
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilledFetchContacts = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handleFulfilledAddContact = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

const handleFulfilledDeleteContact = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(contact => contact.id === action.payload.id);
  state.items.splice(index, 1);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledFetchContacts)
      .addCase(addContact.fulfilled, handleFulfilledAddContact)
      .addCase(deleteContact.fulfilled, handleFulfilledDeleteContact)
      .addMatcher(isAnyOf(...addStatusOperation('pending')), handlePending)
      .addMatcher(isAnyOf(...addStatusOperation('rejected')), handleRejected);
  },
});

export const conctactsReducer = contactsSlice.reducer;