import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice';

//this is the global redux store here i have reducers(which is a pure function 
//that takes the current state and an action and return new state based on action)

export const store = configureStore({
    reducer: {
        auth: authReducer,
    }
})