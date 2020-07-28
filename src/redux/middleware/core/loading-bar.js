import { showLoading, hideLoading } from "react-redux-loading-bar"
import { SET_LOADER } from "../../actions/ui"

const loadingBarMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if ( action.type.includes( SET_LOADER ) && !action.skipLoading ) {
    if (action.payload) {
      dispatch(showLoading());
    } else {
      dispatch(hideLoading());
    }
  }

};

export default loadingBarMiddleware
