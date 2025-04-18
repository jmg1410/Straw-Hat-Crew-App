import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token')
}
// making sure log in credential are valid and updating state when
// logging out
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.token = null;
            state.isAuthenticated = false;
        },

    },
});

export const { setToken, logout } = authSlice.actions;

export default authSlice.reducer;