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

const handlePendingRefresh = (state) => {
    state.isRefreshing = true;
}

const handleFulfilledRefresh = (state, {payload}) => {
    state.user = payload;
    state.isLoggedIn = true;
    state.isRefreshing = false;
}

const handleRejectedRefresh = (state) => {
    state.isRefreshing = false;
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(registrationUser.fulfilled, handleFulfilledAuth)
        .addCase(logInUser.fulfilled, handleFulfilledAuth)
        .addCase(logOut.fulfilled, handleFulfilledLogOut)
        .addCase(refreshCurrentUser.pending, handlePendingRefresh)
        .addCase(refreshCurrentUser.fulfilled, handleFulfilledRefresh)
        .addCase(refreshCurrentUser.rejected, handleRejectedRefresh)
    }
})

export const authReducer = authSlice.reducer;