import { useDispatch } from "react-redux";
import { testioActions } from "../../store/testio-slice";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import LogoSecondary from "../../assets/LogoSecondary.svg";
import LogoutIcon from "../../assets/LogoutIcon.svg";

const Header = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(testioActions.confirmLogout());
  };

  return (
    <div className={styles.header}>
      <header className={styles.headerStyle}>
        <div>
          <img src={LogoSecondary} alt="Testio logo" />
        </div>
        <Link to="/" onClick={logoutHandler}>
          <div className={styles.logoutButton}>
            <img className={styles.LogoutIcon} src={LogoutIcon} alt="Logout" />
            <span> Logout</span>
          </div>
        </Link>
      </header>
    </div>
  );
};

export default Header;
