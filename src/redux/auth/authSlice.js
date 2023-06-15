import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { logInUser, registrationUser } from './operations';

const handleFulfilledAuth = (state, {payload}) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(registrationUser.fulfilled, handleFulfilledAuth)
        .addCase(logInUser.fulfilled, handleFulfilledAuth)
    }
})

export const authReducer = authSlice.reducer;