import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'

const setAuthHeader = (token) => {
    axios.defaults.headers.common['Authorization'] = 
            `Bearer ${token}`
}

const clearAuthHeader = () => {
    axios.defaults.headers.common['Authorization'] = ''
}

// Maria
// nicetomeetyou@gmail.com
// 12345678

// POST register
export const register = createAsyncThunk('register',
    async(newUser, thunkAPI) => {
        try {
            const resp = await axios.post('/users/signup', newUser)
            setAuthHeader(resp.data.token)

            return resp.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
) 

// POST login
export const login = createAsyncThunk('login',
    async(user, thunkAPI) => {
        try {
            const resp = await axios.post('/users/login', user)
            setAuthHeader(resp.data.token)

            return resp.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
) 

// POST logout

export const logout = createAsyncThunk('logout',
    async(_, thunkAPI) => {
        try {
            await axios.post('/users/logout')
            clearAuthHeader()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
) 

export const refreshUser = createAsyncThunk('refresh', 
    async (_, thunkAPI) => {
        const reduxState = thunkAPI.getState();
        const currentToken = reduxState.auth.token;
        setAuthHeader(currentToken)

    const resp = await axios.get('/users/current')
    return resp.data
},
{condition: (_, thunkAPI) => {

    const reduxState = thunkAPI.getState();
    const currentToken = reduxState.auth.token;

    return currentToken !== null;
}})

