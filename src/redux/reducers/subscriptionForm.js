import {
  OPEN_SUBSCRIPTION_FORM,
  CLOSE_SUBSCRIPTION_FORM,
  OPEN_SUBSCRIPTION_PAYMENT_FORM,
  CLOSE_SUBSCRIPTION_PAYMENT_FORM,
} from "../actions/subscriptionForm";

const initState = {
  premium_modal: {
    show: false,
  },
  payment_modal: {
    show: false,
    loading: false,
  },
  selectedPlan: process.env.REACT_APP_PRODUCT_ANNUAL_PLAN,
};

export const subscriptionFormReducer = (state = initState, action) => {
  if (action.type.includes(OPEN_SUBSCRIPTION_FORM)) {
    return { ...state, premium_modal: { show: true } };
  }

  if (action.type.includes(CLOSE_SUBSCRIPTION_FORM)) {
    return { ...state, premium_modal: { show: false } };
  }

  if (action.type.includes(OPEN_SUBSCRIPTION_PAYMENT_FORM)) {
    return {
      ...state,
      premium_modal: { show: false },
      payment_modal: { ...state.payment_modal, show: false },
    };
  }

  if (action.type.includes(CLOSE_SUBSCRIPTION_PAYMENT_FORM)) {
    return { ...state, payment_modal: { show: false } };
  }

  return state;
};
