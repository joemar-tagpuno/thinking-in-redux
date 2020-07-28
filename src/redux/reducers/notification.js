import { SET_NOTIFICATION, REMOVE_NOTIFICATION } from "../actions/notification";

const initState = [];

const notificationsReducer = (notifications = initState, action) => {
  switch (true) {
    case action.type.includes(SET_NOTIFICATION):
      return notifications.concat(action.payload);

    case action.type.includes(REMOVE_NOTIFICATION):
      return notifications.filter(
        (notification) => notification.id !== action.payload
      );

    default:
      return notifications;
  }
};

export default notificationsReducer;
