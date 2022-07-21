import { useDispatch, useSelector } from "react-redux";
import { getServerList } from "../../store/serversList-actions";

import Header from "../Header/Header";
import ServerList from "../ServerList/ServerList";

let initialLoad = true;

const HomePage = () => {
  console.log("la");
  const token = useSelector((state) => state.testio.token);
  const dispatch = useDispatch();

  if (initialLoad) {
    dispatch(getServerList(token));
    initialLoad = false;
  }

  return (
    <div>
      <Header />
      <ServerList />
    </div>
  );
};

export default HomePage;
