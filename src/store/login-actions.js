import { testioActions } from "./testio-slice";

const adminUser = {
  username: "oxylabs",
  password: "partyanimal",
};

export const logIn = (details) => {
  if (
    details.username === adminUser.username &&
    details.password === adminUser.password
  ) {
    return async (dispatch) => {
      const token = await getToken({
        username: details.username,
        password: details.password,
      });
      dispatch(testioActions.confirmLogin(token));
    };
  } else {
    alert("User details do not match");
  }
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

  const data = await response.json();

  return data.token;
}
