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
const sortOrderSlice = createSlice({
  name: "sort-order",
  initialState: {
    orderBy: "lowest",
    sortBy: "nama",
  },
  reducers: {
    setOrder(state, action) {
      state.orderBy = action.payload;
    },
    setSort(state, action) {
      state.sortBy = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    highlight: highlightSlice.reducer,
    sortOrder: sortOrderSlice.reducer,
  },
});

export const highlightActions = highlightSlice.actions;
export const sortOrderActions = sortOrderSlice.actions;

export default store;
