import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Route } from "react-router-dom";
import { testioActions } from "./store/testio-slice";

import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import "./index.css";

function App() {
  const dispatch = useDispatch();
  const testio = useSelector((state) => state.testio);

  useEffect(() => {
    localStorage.getItem("token") &&
      dispatch(testioActions.confirmLogin(localStorage.getItem("token")));
  }, [dispatch]);

  const homePage = (
    <Route exact path="/home">
      <HomePage />
    </Route>
  );
  const loginPage = (
    <Route exact path="/">
      <LoginPage />
    </Route>
  );

  return <div>{testio.token ? homePage : loginPage}</div>;
}

export default App;
