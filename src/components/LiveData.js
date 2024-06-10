import TotalEarnings from "./TotalEarnings";
import PropTypes from "prop-types";
import styles from "./LiveData.module.css";

const LiveData = ({ className = "" }) => {
  return (
    <div className={[styles.livedata, className].join(" ")}>
      <div className={styles.totalBets}>
        <div className={styles.backgrounds} />
        <div className={styles.iconsParent}>
          <b className={styles.icons}>0</b>
          <div className={styles.totalBets1}>Total bets</div>
        </div>
      </div>
      <TotalEarnings />
      <div className={styles.totalLosses}>
        <div className={styles.totalLossesChild} />
        <div className={styles.coinsParent}>
          <b className={styles.coins}>0 coins</b>
          <div className={styles.totalLosses1}>Total losses</div>
        </div>
      </div>
    </div>
  );
};

LiveData.propTypes = {
  className: PropTypes.string,
};

export default LiveData;
