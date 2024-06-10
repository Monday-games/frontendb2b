import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./BallRunningContainer.module.css";

const BallRunningContainer = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/operatorgive-result");
  }, [navigate]);

  return (
    <div className={[styles.ballRunningContainer, className].join(" ")}>
      <div className={styles.ballrunning}>
        <div className={styles.runningBackground} />
        <div className={styles.marketParent}>
          <div className={styles.market}>
            <div className={styles.marketDetails}>
              <div className={styles.marketId123456}>Market ID #123456</div>
            </div>
            <div className={styles.overBackgroundParent}>
              <div className={styles.overBackground} />
              <b className={styles.over0120}>Over 0.1/20</b>
            </div>
          </div>
          <div className={styles.marketTime}>
            <div className={styles.timeDetails}>
              <div className={styles.timeValue}>
                <div className={styles.marketTimeParent}>
                  <h2 className={styles.marketTime1}>Market time</h2>
                  <div className={styles.timeArray}>00:00</div>
                </div>
              </div>
              <div className={styles.button} onClick={onButtonContainerClick}>
                <div className={styles.iconWrapper}>
                  <img
                    className={styles.wrapperIcon}
                    alt=""
                    src="/wrapper-12@2x.png"
                  />
                </div>
                <div className={styles.text}>Ball running</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BallRunningContainer.propTypes = {
  className: PropTypes.string,
};

export default BallRunningContainer;
