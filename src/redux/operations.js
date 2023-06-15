import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://6481881929fa1c5c50318c95.mockapi.io";
axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const deleteToken = () => {
    axios.defaults.headers.common.Authorization = '';
}

export const registrationUser = createAsyncThunk("users/addUser", 
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

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll", 
    async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
        return response.data;
    } catch(error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", contact);
            return response.data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }

)