export const SET_LOADER = 'SET_LOADER';

export const setLoader = ({ state, feature }) => ({
  type: `${feature} ${SET_LOADER}`,
  payload: state,
  meta: { feature }
});
