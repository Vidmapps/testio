import { testioActions } from "./testio-slice";

export function getServersList(token) {
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
      if (response.ok) {
        const data = await response.json();

        localStorage.setItem("servers", JSON.stringify(data));

        dispatch(testioActions.showServerList(data));
      } else {
        alert("Server error: please contact support");
      }
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
