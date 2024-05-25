import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  logInUserData: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUserInformation: (state, action) => {
      state.logInUserData = action.payload;
    },
    removeUserInformation: (state) => {
      state.logInUserData = null;
    },
  },
});

export const { addUserInformation, removeUserInformation } = authSlice.actions;
export default authSlice.reducer;
