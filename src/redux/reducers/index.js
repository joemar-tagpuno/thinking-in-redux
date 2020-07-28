import { combineReducers } from "@reduxjs/toolkit";
import { loadingBarReducer } from "react-redux-loading-bar";
import { authReducers, changePasswordReducers } from "./auth";
import accountReducers from "./account";
import notificationReducers from "./notification";
import uiReducers from "./ui";
import { subscriptionFormReducer } from "./subscriptionForm";

const reducers = {
  ui: uiReducers,
  loadingBar: loadingBarReducer,
  notification: notificationReducers,
  auth: authReducers,
  changePassword: changePasswordReducers,
  account: accountReducers,
  subscriptionForm: subscriptionFormReducer,
};

export default combineReducers(reducers);
