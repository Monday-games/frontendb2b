import Main from "../components/Main";
import styles from "./AccountLogin.module.css";

const AccountLogin = () => {
  return (
    <div className={styles.accountLogin}>
      <Main />
      <div className={styles.footer}>
        <div className={styles.copyright2024By}>
          Copyright ©2024 by Betball2ball.com
        </div>
      </div>
    </div>
  );
};

export default AccountLogin;
