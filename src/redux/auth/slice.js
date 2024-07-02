import { createSlice } from "@reduxjs/toolkit";
import {register, login, logout, refreshUser} from '../auth/operations'

const authSlice = createSlice({
    name:'auth',
    initialState: {
        user: {
          name: null,
          email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
      },

    extraReducers: builder => builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.token = null;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
})

export default authSlice.reducer;