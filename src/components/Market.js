import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Market.module.css";

const Market = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/operatorball-running");
  }, [navigate]);

  return (
    <div className={[styles.market, className].join(" ")}>
      <div className={styles.marketon}>
        <div className={styles.background} />
        <div className={styles.marketIdParent}>
          <div className={styles.marketId}>
            <div className={styles.idWrapper}>
              <div className={styles.marketId123456}>Market ID #123456</div>
            </div>
            <div className={styles.backgroundParent}>
              <div className={styles.background1} />
              <b className={styles.over0120}>Over 0.1/20</b>
            </div>
          </div>
          <div className={styles.marketTime}>
            <div className={styles.timeWrapper}>
              <div className={styles.timeWrapperInner}>
                <div className={styles.marketTimeParent}>
                  <h2 className={styles.marketTime1}>Market time</h2>
                  <div className={styles.content}>00:00</div>
                </div>
              </div>
              <div className={styles.button} onClick={onButtonContainerClick}>
                <div className={styles.iconWrapper}>
                  <img
                    className={styles.wrapperIcon}
                    alt=""
                    src="/wrapper-11@2x.png"
                  />
                </div>
                <div className={styles.label}>Market on</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Market.propTypes = {
  className: PropTypes.string,
};

export default Market;
