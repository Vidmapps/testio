import { testioActions } from "./testio-slice";

export function getServerList(token) {
  return async (dispatch) => {
    const response = await fetch("https://playground.oxylabs.io/api/servers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    });

    const data = await response.json();
    dispatch(testioActions.showServerList(data));
  };
}
