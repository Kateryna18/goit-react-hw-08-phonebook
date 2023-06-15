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
        console.log(data)
        return data
    }catch(error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})