import "./LoginPage.css";
import Logo from "../../assets/Logo.svg";
import LoginForm from "../LoginForm/LoginForm";

function LoginPage(props) {
  return (
    <div className="LoginPage">
      <div className="center-content">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <LoginForm {...props}></LoginForm>
        {props.error !== "" ? (
          <div className="login-error">{props.error}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default LoginPage;
