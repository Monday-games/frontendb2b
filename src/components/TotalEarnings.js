import PropTypes from "prop-types";
import styles from "./TotalEarnings.module.css";

const TotalEarnings = ({ className = "" }) => {
  return (
    <div className={[styles.totalEarnings, className].join(" ")}>
      <div className={styles.totalEarningsChild} />
      <div className={styles.coinsParent}>
        <b className={styles.coins}>0 coins</b>
        <div className={styles.totalEarnings1}>Total earnings</div>
      </div>
    </div>
  );
};

TotalEarnings.propTypes = {
  className: PropTypes.string,
};

export default TotalEarnings;
