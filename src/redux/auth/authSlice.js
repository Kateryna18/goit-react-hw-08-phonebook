import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { logInUser, logOut, refreshCurrentUser, registrationUser } from './operations';

const handleFulfilledAuth = (state, {payload}) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
}

const handleFulfilledLogOut = (state) => {
    state.user = {name: null, email: null};
    state.token = null;
    state.isLoggedIn = false;
}

const handleFulfilledRefresh = (state, action) => {
    state.user = action.payload;
    state.isLoggedIn = true;
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(registrationUser.fulfilled, handleFulfilledAuth)
        .addCase(logInUser.fulfilled, handleFulfilledAuth)
        .addCase(logOut.fulfilled, handleFulfilledLogOut)
        .addCase(refreshCurrentUser.fulfilled, handleFulfilledRefresh)
    }
})

export const authReducer = authSlice.reducer;