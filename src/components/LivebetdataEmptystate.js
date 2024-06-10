import PropTypes from "prop-types";
import styles from "./LivebetdataEmptystate.module.css";

const LivebetdataEmptystate = ({ className = "" }) => {
  return (
    <div className={[styles.livebetdataEmptystate, className].join(" ")}>
      <div className={styles.emptyStateBackgroundParent}>
        <div className={styles.emptyStateBackground} />
        <div className={styles.emptybasic}>
          <img
            className={styles.componentsemptyImgGrayIcon}
            alt=""
            src="/componentsemptyimggray.svg"
          />
          <div className={styles.noDataWrapper}>
            <div className={styles.noData}>No live bets data</div>
          </div>
        </div>
      </div>
    </div>
  );
};

LivebetdataEmptystate.propTypes = {
  className: PropTypes.string,
};

export default LivebetdataEmptystate;
