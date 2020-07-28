export const AUTH   = '[Auth]';
export const LOGIN  = '[Login]';
export const LOGOUT = '[Logout]';
export const LOGIN_USER   = `${AUTH} ${LOGIN}`;
export const LOGIN_FORCE_USER   = `${AUTH} ${LOGIN} FORCE`;
export const LOGOUT_USER  = `${AUTH} ${LOGOUT}`;
export const LOGGED_USER  = `${AUTH} SET LOGGED`;
export const CHANGE_PASSWORD = `${AUTH} CHANGE_PASSWORD`;
export const SET_CHANGE_PASSWORD = `${AUTH} SET CHANGE_PASSWORD`;

export const userLogin = (formData) => ({
  type: LOGIN_USER,
  payload: formData
});

export const userForceLogin = (formData) => ({
  type: LOGIN_FORCE_USER,
  payload: formData
});

export const userLogout = (formData = {}) => ({
  type: LOGOUT_USER,
  payload: formData
});

export const setAuthToken = ({ auth }) => ({
  type: LOGGED_USER,
  payload: auth,
  meta: { normalizeKey: false }
});

export const userChangePassword = (formData) => ({
  type: CHANGE_PASSWORD,
  payload: formData
});

export const setChangePasswordResponse = (data) => ({
  type: SET_CHANGE_PASSWORD,
  payload: data,
  meta: { normalizeKey: false }
})
