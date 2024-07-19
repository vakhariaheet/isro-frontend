import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: '',
    name: '',
    email: '',
    created_at: '',
    updated_at: '',
    tokens: {
        accessToken: '',
        refreshToken: ''
    }
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.id
            state.name = action.payload.name
            state.email = action.payload.email
            state.created_at = action.payload.created_at
            state.updated_at = action.payload.updated_at
            state.tokens = action.payload.tokens
        },
        clearUser: (state) => {
            state.id = ''
            state.name = ''
            state.email = ''
            state.created_at = ''
            state.updated_at = ''
            state.tokens = {
                accessToken: '',
                refreshToken: ''
            }
        }
    }
});

export const { setUser, clearUser } = UserSlice.actions;
export default UserSlice.reducer;