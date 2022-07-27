import { testioActions } from "./testio-slice";

export const logIn = (details) => {
  return async (dispatch) => {
    const token = await getToken({
      username: details.username,
      password: details.password,
    });
    token && token !== undefined && dispatch(testioActions.confirmLogin(token));
  };
};

async function getToken({ username, password }) {
  const response = await fetch("https://playground.oxylabs.io/api/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  if (response.ok) {
    const data = await response.json();
    return data.token;
  } else {
    alert("Authentication failed: please check login details");
  }
}
