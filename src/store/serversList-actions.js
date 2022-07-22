import { testioActions } from "./testio-slice";

export function getServerList(token) {
  if (localStorage.getItem("servers") === null) {
    return async (dispatch) => {
      const response = await fetch(
        "https://playground.oxylabs.io/api/servers",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
        }
      );
      const data = await response.json();
      localStorage.setItem("servers", JSON.stringify(data));
      dispatch(testioActions.showServerList(data));
    };
  } else {
    return (dispatch) => {
      dispatch(
        testioActions.showServerList(
          JSON.parse(localStorage.getItem("servers"))
        )
      );
    };
  }
}
