import "./LoginForm.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginForm({ Login }) {
  let history = useHistory();
  const [details, setDetails] = useState({ username: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
    history.push("/home");
  };
  return (
    <div className="LoginForm">
      <form onSubmit={submitHandler}>
        <div className="">
          <input
            type="username"
            className="login-form-element"
            id="username"
            name="username"
            placeholder="Username"
            onChange={(e) =>
              setDetails({ ...details, username: e.target.value })
            }
            value={details.username}
          />
        </div>
        <div className="">
          <input
            type="password"
            className="login-form-element"
            id="password"
            name="password"
            placeholder="Password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <button type="submit" className="login-form-element login-button">
          Log in
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
