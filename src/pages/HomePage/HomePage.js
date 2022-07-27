import { Fragment } from "react";
import Header from "../../components/Header/Header";
import ServersList from "../../components/ServersList/ServersList";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <ServersList />
    </Fragment>
  );
};

export default HomePage;
