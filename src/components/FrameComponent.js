import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const BallRunningHead = ({ className = "" }) => {
  return (
    <div className={[styles.component1Wrapper, className].join(" ")}>
      <div className={styles.component1}>
        <div className={styles.componentBackground} />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.marketId123456Wrapper}>
              <div className={styles.marketId123456}>Market ID #123456</div>
            </div>
            <div className={styles.overBackgroundParent}>
              <div className={styles.overBackground} />
              <b className={styles.over0120}>Over 0.0/20</b>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.marketTimeParent}>
                  <h2 className={styles.marketTime}>Market time</h2>
                  <div className={styles.marketTimeContent}>00:00</div>
                </div>
              </div>
              <div className={styles.button}>
                <div className={styles.iconWrapper}>
                  <img
                    className={styles.wrapperIcon}
                    alt=""
                    src="/wrapper-1@2x.png"
                  />
                </div>
                <div className={styles.text}>Market on</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BallRunningHead.propTypes = {
  className: PropTypes.string,
};

export default BallRunningHead;
