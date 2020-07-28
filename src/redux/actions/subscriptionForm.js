import { ACCOUNT } from "./account"

export const MODAL        = '[Modal]';
export const SUBSCRIPTION = '[Subscription]';
export const PAYMENT      = '[Payment]';

export const OPEN_SUBSCRIPTION_FORM = `${ACCOUNT} ${SUBSCRIPTION} ${MODAL} OPEN`;
export const CLOSE_SUBSCRIPTION_FORM = `${ACCOUNT} ${SUBSCRIPTION} ${MODAL} CLOSE`;

export const OPEN_SUBSCRIPTION_PAYMENT_FORM = `${ACCOUNT} ${SUBSCRIPTION} ${MODAL} ${PAYMENT} OPEN`;
export const CLOSE_SUBSCRIPTION_PAYMENT_FORM = `${ACCOUNT} ${SUBSCRIPTION} ${MODAL} ${PAYMENT} CLOSE`;

export const openSubscriptionForm = () => ({
  type: OPEN_SUBSCRIPTION_FORM,
});

export const closeSubscriptionForm = () => ({
  type: CLOSE_SUBSCRIPTION_FORM
});

export const openSubscriptionPaymentForm = () => ({
  type: OPEN_SUBSCRIPTION_PAYMENT_FORM,
});

export const closeSubscriptionPaymentForm = () => ({
  type: CLOSE_SUBSCRIPTION_PAYMENT_FORM
});
