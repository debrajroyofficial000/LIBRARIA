import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import bookSlice from "../features/bookSlice";
import issueSlice from "../features/issueSlice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    books: bookSlice,
    issue: issueSlice,
  },
});

export default store;
