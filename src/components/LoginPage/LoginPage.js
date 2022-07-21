import "./LoginPage.css";
import Logo from "../../assets/Logo.svg";
import LoginForm from "../LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <div className="center-content">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
