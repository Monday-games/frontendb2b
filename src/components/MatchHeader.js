import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MatchHeader.module.css";

const MatchHeader = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/operatormarket-on");
  }, [navigate]);

  return (
    <header className={[styles.separatorParent, className].join(" ")}>
      <div className={styles.separator} />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.image11Parent}>
            <img
              className={styles.image11Icon}
              loading="lazy"
              alt=""
              src="/image-111@2x.png"
            />
            <div className={styles.vsWrapper}>
              <b className={styles.vs}>VS</b>
            </div>
            <img
              className={styles.image12Icon}
              loading="lazy"
              alt=""
              src="/image-121@2x.png"
            />
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.texttextParent}>
            <div className={styles.texttext}>
              <a className={styles.name}>India VS Pakistan</a>
            </div>
            <div className={styles.texttext1}>
              <div className={styles.summary}>T20 World cup, Group stage</div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.texttextGroup}>
            <div className={styles.texttext2}>
              <a className={styles.text}>Match time</a>
            </div>
            <div className={styles.detailsTitleWrapper}>
              <div className={styles.detailsTitle}>07:30 pm to 11:30 pm</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper1}>
        <div className={styles.frameGroup}>
          <div className={styles.texttextContainer}>
            <div className={styles.texttext3}>
              <div className={styles.text1}>Match tiner</div>
            </div>
            <div className={styles.detailsTitleContainer}>
              <a className={styles.detailsTitle1}>-00:10 minutes</a>
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <div className={styles.button} onClick={onButtonContainerClick}>
              <div className={styles.a}>Start 1st Inning</div>
              <div className={styles.iconWrapper}>
                <img
                  className={styles.wrapperIcon}
                  alt=""
                  src="/wrapper1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

MatchHeader.propTypes = {
  className: PropTypes.string,
};

export default MatchHeader;
