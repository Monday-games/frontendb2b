import FrameComponent from "../components/FrameComponent";
import styles from "./AccountSignup.module.css";

const AccountSignup = () => {
  return (
    <div className={styles.accountSignup}>
      <FrameComponent />
      <div className={styles.copyright2024ByBetball2balWrapper}>
        <div className={styles.copyright2024By}>
          Copyright ©2024 by Betball2ball.com
        </div>
      </div>
    </div>
  );
};

export default AccountSignup;
