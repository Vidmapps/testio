import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { testioActions } from "./store/testio-slice";

import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import "./index.scss";

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.testio.token);

  useEffect(() => {
    localStorage.getItem("token") &&
      dispatch(testioActions.confirmLogin(localStorage.getItem("token")));
  }, [dispatch]);

  return (
    <Switch>
      {token && (
        <Route exact path="/home">
          <HomePage />
        </Route>
      )}

      {!token && (
        <Route path="/login">
          <LoginPage />
        </Route>
      )}

      <Route path="*">
        {token && <Redirect to="/home" />}
        {!token && <Redirect to="/login" />}
      </Route>
    </Switch>
  );
};

export default App;
