import { removeNotification, setNotification, SET_NOTIFICATION } from "../../actions/notification"

const notificationMiddleware = () => next => action => {

  if( action.type.includes( SET_NOTIFICATION ) ) {
    const { payload, meta } = action;
    const id = new Date().getMilliseconds();

    // enrich the original payload with an id
    const notification = { id, message: payload };

    // fire a new action with the enriched payload
    // note: the payload is an object
    next(setNotification({ message: notification, feature: meta.feature }));

    // dispatch a clear action after a given time
    setTimeout(() => {
      next(removeNotification({ notificationId: id, feature: meta.feature }))
    }, 1000)

  } else {
    next(action)
  }
};

export default notificationMiddleware;
