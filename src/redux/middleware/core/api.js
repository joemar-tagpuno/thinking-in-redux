import Axios from "axios";
import { API_REQUEST, apiSuccess, apiError } from "../../actions/api";

const baseURL = process.env.REACT_APP_DASHBOARD_URL || "http://127.0.0.1:8000/";
const axios = Axios.create({
  baseURL:
    "https:" === document.location.protocol
      ? baseURL.replace(/http:/, "https:")
      : baseURL,
});

const apiMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  next(action);

  if (action.type.includes(API_REQUEST)) {
    const { method, url, params, feature } = action.meta;
    const { token_type, auth_token } = getState().auth;

    // Axios request
    axios
      .request({
        method: method,
        url: url,
        headers: {
          Authorization: `${token_type ? token_type : "Bearer"} ${auth_token}`,
        },
        params,
        data: action.payload,
      })
      .then((response) => {
        dispatch(
          apiSuccess({
            data: response.data,
            feature,
          })
        );
      })
      .catch((error) => {
        dispatch(apiError({ error, feature }));
      });
  }
};

export default apiMiddleware;
