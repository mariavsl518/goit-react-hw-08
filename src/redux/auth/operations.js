import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.goit.global/'

export const registerContact = createAsyncThunk('registerContact',
    async(_, thunkAPI) => {
        try {
            const resp = await axios.post('')
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
) 