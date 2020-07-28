import {
  AUTH,
  LOGOUT_USER,
  LOGIN_USER,
  LOGIN_FORCE_USER,
  LOGGED_USER,
  CHANGE_PASSWORD,
  setChangePasswordResponse,
  setAuthToken
} from "../../actions/auth"
import { clearAccount, fetchAccount } from "../../actions/account"
import { API_ERROR, API_SUCCESS, apiRequest } from "../../actions/api"
import { setLoader } from "../../actions/ui"
import { setNotification } from "../../actions/notification"

const authMiddleware = () => next => action => {
  next(action);

  if ( action.type === LOGIN_USER ) {
    next([
      apiRequest({ body: action.payload, method: 'post', url: '/user/login', feature: AUTH }),
      setLoader({ state: true, feature: AUTH })
    ]);
  }

  else if ( action.type === LOGIN_FORCE_USER ) {
    next([
      apiRequest({ body: action.payload, method: 'post', url: '/user/force-login', feature: AUTH }),
      setLoader({ state: true, feature: AUTH })
    ]);
  }

  else if ( action.type === LOGOUT_USER ) {
    next([
      apiRequest({ body: action.payload, method: 'post', url: '/user/logout', feature: AUTH }),
      setLoader({ state: true, feature: AUTH })
    ]);
  }

  else if ( action.type === `${AUTH} ${API_SUCCESS}` ) {
    next([
      setAuthToken({ auth: action.payload }),
      setLoader({ state: false, feature: AUTH }),
    ]);
  }
  else if ( action.type === `${AUTH} ${API_ERROR}` ) {
    next([
      setNotification({ message: action.payload.message, feature: AUTH }),
      setLoader({ state: false, feature: AUTH })
    ])
  }

  else if ( action.type === CHANGE_PASSWORD ) {
    next([
      apiRequest({ body: action.payload, method: 'post', url: '/user/change-password', feature: CHANGE_PASSWORD }),
      setLoader({ state: true, feature: CHANGE_PASSWORD })
    ]);
  }
  else if ( action.type.includes(`${CHANGE_PASSWORD} ${API_SUCCESS}`) ) {
    next([
      setChangePasswordResponse(action.payload),
      setLoader({ state: false, feature: CHANGE_PASSWORD }),
    ]);
  }
  else if ( action.type.includes(`${CHANGE_PASSWORD} ${API_ERROR}`) ) {
    next([
      setNotification({ message: action.payload.message, feature: CHANGE_PASSWORD }),
      setLoader({ state: false, feature: CHANGE_PASSWORD })
    ])
  }
};

const authChangesMiddleware = () => next => action => {
  next(action);

  /** monitor the logged in and logged out user to update the account state */
  const checkAuth = ({ type, payload }) => {
    if ( typeof type !== undefined && type === LOGGED_USER ) {
      if ( payload && payload.data.isLoggedIn ) {
        next(fetchAccount());
      }
      else {
        next(clearAccount());
      }
    }
  }

  if ( Array.isArray(action) ) {
    action.forEach(checkAuth)
  }
  else {
    checkAuth(action)
  }
}

export { authChangesMiddleware, authMiddleware }
