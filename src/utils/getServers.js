function getServers() {
  async function getToken() {
    const response = await fetch(
      "https://playground.oxylabs.io/api/user/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "oxylabs",
          password: "partyanimal",
        }),
      }
    );

    const data = await response.json();

    return data.token;
  }

  async function getServerList(token) {
    const response = await fetch("https://playground.oxylabs.io/api/servers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    });

    const data = await response.json();

    return data;
  }

  async function run() {
    const token = await getToken();
    const serverLists = await getServerList(token);
    localStorage.setItem("servers", JSON.stringify(serverLists));
  }

  run();
}

export default getServers;
