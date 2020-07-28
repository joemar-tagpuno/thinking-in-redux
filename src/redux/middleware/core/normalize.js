import { dataNormalized } from "../../actions/data";

const normalizeMiddleware = ({ dispatch }) => next => action => {

  // filter both by action type and metadata content
  if( action.type.includes('SET') && Array.isArray(action.payload) && typeof action.meta.normalizeKey !== undefined ) {

    // normalize the raw data
    // notify about the transformation
    dispatch(dataNormalized({ feature: action.meta.feature }));

    // transform the data structure
    const payload = action.payload.reduce( (acc, item) => {
      acc[item[action.meta.normalizeKey]] = item;
      return acc;
    }, {});

    // fire document action
    next({ ...action, payload: payload, normalizeKey: null });

  }
  else {
    next(action);
  }

};

export default normalizeMiddleware
