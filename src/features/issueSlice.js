import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  book: null,
  user: null,
};
const issueSlice = createSlice({
  name: "issue",
  initialState,
  reducers: {
    addBookForIssue: (state, action) => {
      state.book = action.payload;
    },
    addUserForIssue: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { addBookForIssue, addUserForIssue } = issueSlice.actions;
export default issueSlice.reducer;
