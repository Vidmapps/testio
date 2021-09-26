import Header from "../Header/Header";
import ServerList from "../ServerList/ServerList";

function HomePage(props) {
  return (
    <div>
      <Header {...props}></Header>
      <ServerList/>
    </div>
  );
}

export default HomePage;
