import { createSlice } from "@reduxjs/toolkit";

const testioSlice = createSlice({
  name: "testio",
  initialState: {
    serversList: [],
    token: "",
    serversListIsLoading: false,
  },
  reducers: {
    confirmLogin(state, action) {
      console.log("confirmLogin");

      state.user = action.payload;
      state.token = action.payload;
      state.loggedIn = true;
      localStorage.setItem("token", state.token);
    },
    confirmLogout(state) {
      console.log("confirmLogout");

      state.token = "";
      state.loggedIn = false;
      localStorage.removeItem("servers");
      localStorage.removeItem("token");
    },
    showServerList(state, action) {
      state.serversList = action.payload;
      state.serversListIsLoading = false;
      localStorage.setItem("servers", JSON.stringify(action.payload));
    },
  },
});

export const testioActions = testioSlice.actions;

export default testioSlice;
