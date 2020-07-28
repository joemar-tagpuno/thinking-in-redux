import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers";
import getFeatureMiddleware from "./middleware/feature";
import getCoreMiddleware from "./middleware/core";
import monitorReducersEnhancer from "./enhancers/monitorReducer";
import initialState from "./initialState";

let defaultMiddleware = [reduxThunk, ...getDefaultMiddleware()];

if (process.env.NODE_ENV !== "production") {
  // append development middleware
  // defaultMiddleware = [thunk];
}

function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [
      ...getFeatureMiddleware(),
      ...getCoreMiddleware(),
      ...defaultMiddleware,
    ],
    preloadedState: initialState(),
    enhancers: [monitorReducersEnhancer],
  });

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
  }
  return store;
}

export default configureAppStore();
