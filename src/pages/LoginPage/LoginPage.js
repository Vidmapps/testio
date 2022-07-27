import styles from "./LoginPage.module.scss";
import Logo from "../../assets/Logo.svg";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <div className="centerContent">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
