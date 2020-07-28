export const ACCOUNT = '[Account]';
export const FETCH_ACCOUNT = `${ACCOUNT} FETCH`;
export const SET_ACCOUNT   = `${ACCOUNT} SET`;
export const CLEAR_ACCOUNT = `${ACCOUNT} CLEAR`;

export const setAccount = ({ account }) => ({
  type: SET_ACCOUNT,
  payload: account,
  meta: { feature: ACCOUNT }
});

export const clearAccount = () => ({
  type: CLEAR_ACCOUNT,
  meta: { feature: ACCOUNT }
});

export const fetchAccount = ( data = {} ) => ({
  type: FETCH_ACCOUNT,
  payload: data
});
