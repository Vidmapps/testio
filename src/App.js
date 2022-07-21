import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { testioActions } from "./store/testio-slice";

import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import "./index.css";

function App() {
  const dispatch = useDispatch();
  const testio = useSelector((state) => state.testio);

  useEffect(() => {
    localStorage.getItem("token") &&
      dispatch(testioActions.confirmLogin(localStorage.getItem("token")));
  }, [dispatch]);

  const homePage = <Route exact path="/home" component={() => <HomePage />} />;
  const loginPage = <Route path="/" component={() => <LoginPage />} />;

  return (
    <Router>
      <div>{testio.token ? homePage : loginPage}</div>
    </Router>
  );
}

export default App;
