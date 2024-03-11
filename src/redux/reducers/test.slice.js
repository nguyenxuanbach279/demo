import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const initialState = {
  data: [],
  loading: false,
};

export const fetchTodo = createAsyncThunk(
  "test/fetch",
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

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      console.log(action);
      state.data = action.payload;
    });
  },
});

const testConfig = {
  key: "test",
  storage,
  whitelist: ["data"],
};

export const testReducer = persistReducer(testConfig, testSlice.reducer);
