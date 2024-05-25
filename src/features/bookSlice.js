import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allBooks: [],
};
const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getAllBooksInfo: (state, action) => {
      state.allBooks = action.payload;
    },
  },
});

export const { getAllBooksInfo } = bookSlice.actions;
export default bookSlice.reducer;
