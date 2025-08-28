import { createSlice } from "@reduxjs/toolkit";
import userDetail from "../../Utils/localStorage";

const userData = userDetail || {};

const initialState = {
  isAuthenticated: Boolean(userData.token),
  token: userData.token || null,
  user: userData || null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
    },

    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.loading = false;
    },

    loginFailure(state, action) {
      state.loading = false;
    },

    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      state.loading = false;
    },

    setUser(state, action) {
      state.user = action.payload.user;
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },

    userUpdateStates(state, action) {
      Object.keys(action.payload).forEach((key) => {
        state[key] = action.payload[key];
      });
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  setUser,
  setLoading,
  userUpdateStates,
} = authSlice.actions;

export default authSlice.reducer;
