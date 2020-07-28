/**
 * @returns {{isLoggedIn: boolean, auth_token: undefined}}
 */
export const getAuthState = () => {
  let authState = {
    isLoggedIn: false,
    auth_type: "bearer",
    auth_token: undefined,
    expires_in: 0,
  };

  try {
    let { isLoggedIn, auth_token, auth_type, expires_in } = JSON.parse(
      localStorage.getItem("authState")
    );

    if (isLoggedIn) {
      authState = {
        ...authState,
        isLoggedIn: true,
        auth_token,
        auth_type,
        expires_in,
      };
    }
  } catch (error) {}

  return authState;
};

/**
 * {Object} auth
 * {Object} account
 */
export default function () {
  return {
    auth: getAuthState(),
    account: {
      subscription: {},
      domain: {},
      group: {},
    },
  };
}
