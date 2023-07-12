import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchLogin = createAsyncThunk('auth/login', async(formData) => {
    try {
        const response = await axios.post('http://localhost:3000/api/auth/login', formData)
        return response.data;
    } catch (error) {
        return isRejectedWithValue(error)
    }
})

const initialState = {
    user: null,
    loading: true,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload;
            state.loading = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.loading = false;
            })
            .addCase(fetchLogin.rejected, (state, action) => {
                state.user = null;
                state.loading = false;
            })
    }
})

export const { setLogin } = authSlice.actions

export default authSlice.reducer