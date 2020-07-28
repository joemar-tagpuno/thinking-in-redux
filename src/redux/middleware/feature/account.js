import { ACCOUNT, FETCH_ACCOUNT, setAccount } from "../../actions/account"
import { API_ERROR, API_SUCCESS, apiRequest } from "../../actions/api"
import { setLoader } from "../../actions/ui"
import { setNotification } from "../../actions/notification"

const accountMiddleware = () => next => action => {
  next(action);

  switch (action.type) {
    case FETCH_ACCOUNT:
      next([
        apiRequest({ body: action.payload, method: 'get', url: '/user', feature: ACCOUNT }),
        setLoader({ state: true, feature: ACCOUNT })
      ]);
      break;

    case `${ACCOUNT} ${API_SUCCESS}`:
      next([
        setAccount({ account: action.payload }),
        setLoader({ state: false, feature: ACCOUNT })
      ]);
      break;

    case `${ACCOUNT} ${API_ERROR}`:
      next([
        setNotification({ message: action.payload.message, feature: ACCOUNT }),
        setLoader({ state: false, feature: ACCOUNT })
      ]);
      break;

    default:
      break;
  }
};

export default accountMiddleware
