import "./index.scss";
import React, { useState } from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import getServers from "./utils/getServers";

function App() {
  const adminUser = {
    username: "oxylabs",
    password: "partyanimal",
  };
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const login = (details) => {
    if (
      details.username === adminUser.username &&
      details.password === adminUser.password
    ) {
      getServers();
      setUser({
        username: details.name,
        password: details.password,
      });
    } else {
      setError("User details do not match");
    }
  };

  const logout = () => {
    setUser({ username: "", password: "" });
    localStorage.setItem("servers", "");
  };

  return (
    <Router>
      <div>
        {user.username !== "" ? (
          <Route
            exact
            path="/home"
            component={() => <HomePage Logout={logout} />}
          />
        ) : (
          <Route
            path="/"
            component={() => <LoginPage Login={login} error={error} />}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
