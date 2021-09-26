import './Header.scss'
import LogoSecondary from "../../assets/LogoSecondary.svg";
import LogoutIcon from "../../assets/LogoutIcon.svg";

function Header(props) {
  return (
    <div className="Header">
      <header className="header-style">
        <div>
          <img src={LogoSecondary} alt="Logo" />
        </div>
        <div onClick={props.Logout}>
          <div className="logout-button">
            <img className="logout-icon" src={LogoutIcon} alt="LogoutIcon" />
            <span>Logout</span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
