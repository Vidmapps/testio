import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logIn } from "../../store/login-actions";

import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const [details, setDetails] = useState({ username: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    !details.username && alert("Please add username");
    !details.password && alert("Please add password");
    if (details.username && details.password) {
      dispatch(logIn(details));
      history.push("/home?sort=name");
    }
  };

  return (
    <div className={styles.loginForm}>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className={`${styles.loginFormElement} ${styles.username} ${styles.loginFormInputIcon}`}
          id="username"
          placeholder="Username"
          minLength="4"
          onChange={(e) => setDetails({ ...details, username: e.target.value })}
          value={details.username}
        />
        <input
          type="password"
          className={`${styles.loginFormElement} ${styles.password} ${styles.loginFormInputIcon}`}
          id="password"
          placeholder="Password"
          minLength="6"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />
        <button
          type="submit"
          className={`${styles.loginFormElement} ${styles.loginButton} pointer`}
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
