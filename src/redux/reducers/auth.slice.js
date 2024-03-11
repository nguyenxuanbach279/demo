import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

export const fetchTodo1 = createAsyncThunk(
  "auth/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodo1.fulfilled, (state) => {
      console.log(state);
    });
  },
});

const authConfig = {
  key: "auth",
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(authConfig, authSlice.reducer);
