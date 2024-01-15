import { configureStore, createSlice } from "@reduxjs/toolkit";

const highlightSlice = createSlice({
  name: "highlight",
  initialState: {
    highlight: [],
  },
  reducers: {
    setHighlight(state, action) {
      state.highlight = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    highlight: highlightSlice.reducer,
  },
});

export const highlightActions = highlightSlice.actions;

export default store;
