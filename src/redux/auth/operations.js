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
    const { token } = thunkAPI.getState().auth;

    if(!token) {
        console.log('token no')
        return thunkAPI.rejectWithValue("no valid token");
    }

    console.log("refreshing")
    setToken(token)

    try {
        const { data } = await axios.get("/users/current");
        return data
    }catch(error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})