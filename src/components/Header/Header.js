import { useDispatch } from "react-redux";
import { testioActions } from "../../store/testio-slice";

import LogoSecondary from "../../assets/LogoSecondary.svg";
import LogoutIcon from "../../assets/LogoutIcon.svg";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(testioActions.confirmLogout());
  };

  return (
    <div className="Header">
      <header className="header-style">
        <div>
          <img src={LogoSecondary} alt="Logo" />
        </div>
        <div onClick={logOutHandler}>
          <div className="logout-button">
            <img className="logout-icon" src={LogoutIcon} alt="LogoutIcon" />
            <span>Logout</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
