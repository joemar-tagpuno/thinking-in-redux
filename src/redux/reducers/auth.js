import { LOGGED_USER, SET_CHANGE_PASSWORD } from "../actions/auth";
import { getAuthState } from "../initialState";

function normalizeAuthData(
  state,
  { auth_token, isLoggedIn, auth_type, expires_in }
) {
  if (!isLoggedIn) {
    auth_token = undefined;
  }

  localStorage.setItem(
    "authState",
    JSON.stringify({ isLoggedIn, auth_token, auth_type, expires_in })
  );

  return { auth_token, isLoggedIn };
}

export function authReducers(state = getAuthState(), action) {
  switch (action.type) {
    case LOGGED_USER:
      return normalizeAuthData(state, action.payload.data);

    default:
      return state;
  }
}

const changePasswordData = {
  success: false,
  data: [],
};

export function changePasswordReducers(state = changePasswordData, action) {
  switch (action.type) {
    case SET_CHANGE_PASSWORD:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
