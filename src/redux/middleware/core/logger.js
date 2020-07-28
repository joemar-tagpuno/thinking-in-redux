const loggerMiddleware = (store) => (next) => (action) => {
  if (process.env.REACT_APP_ENV !== "production") {
    console.group(`${action.type}`);

    console.group("CURRENT STATE:");
    console.log(store.getState());
    console.groupEnd();

    next(action);

    console.group("NEXT STATE: ");
    console.log(store.getState());
    console.groupEnd();
  } else {
    next(action);
  }
};

export default loggerMiddleware;
