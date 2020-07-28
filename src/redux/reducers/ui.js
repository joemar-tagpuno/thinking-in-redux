import { SET_LOADER } from "../actions/ui";

const initState = {
  loading: false,
};

const uiReducer = (ui = initState, action) => {
  switch (true) {
    case action.type.includes(SET_LOADER):
      return { ...ui, loading: action.payload };

    default:
      return ui;
  }
};

export default uiReducer;
