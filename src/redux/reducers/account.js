import { SET_ACCOUNT, CLEAR_ACCOUNT } from "../actions/account";
import initialState from "../initialState";

function normalizeAccountData(account, { data }) {
  // Do account data normalization here
  return { ...account, ...data };
}

const accountReducer = (state = initialState().account, action) => {
  switch (action.type) {
    case SET_ACCOUNT:
      return normalizeAccountData(state, action.payload);
    case CLEAR_ACCOUNT:
    default:
      return state;
  }
};

export default accountReducer;
