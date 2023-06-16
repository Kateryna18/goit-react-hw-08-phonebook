import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const deleteToken = () => {
    axios.defaults.headers.common.Authorization = '';
}

export const registrationUser = createAsyncThunk("auth/registrationUser", 
async (user, thunkAPI) => {
    try {
        const { data } = await axios.post("/users/signup", user);
        setToken(data.token)
        console.log(data)
        return data;
    }catch(error) {
        thunkAPI.rejectWithValue(error.message);
    }
})

export const logInUser = createAsyncThunk("auth/login",
async (authData, thunkAPI) => {
    try {
        const { data } = await axios.post("/users/login", authData);
        setToken(data.token)
        console.log(data)
        return data
    }catch(error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const logOut = createAsyncThunk("auth/logout",
async (_, thunkAPI) => {
    try {
        await axios.post("/users/logout");
        deleteToken()
        return 
    }catch(error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const refreshCurrentUser = createAsyncThunk("auth/refresh",
async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if(persistedToken === null) {
        console.log('token no')
        return thunkAPI.rejectWithValue();
    }

    setToken(persistedToken)

    try {
        const { data } = await axios.get("/users/current");
        return data
    }catch(error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})