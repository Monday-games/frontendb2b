import PropTypes from "prop-types";
import styles from "./HeaderMatch1.module.css";

const HeaderMatch = ({ className = "" }) => {
  return (
    <div className={[styles.headermatch, className].join(" ")}>
      <div className={styles.matchBackground} />
      <div className={styles.teamLogosParent}>
        <div className={styles.teamLogos}>
          <div className={styles.logos}>
            <div className={styles.logosInner}>
              <div className={styles.image11Parent}>
                <img
                  className={styles.image11Icon}
                  alt=""
                  src="/image-111@2x.png"
                />
                <div className={styles.versus}>
                  <div className={styles.vs}>VS</div>
                </div>
                <img
                  className={styles.image12Icon}
                  alt=""
                  src="/image-121@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.teamNames}>
            <div className={styles.texttextParent}>
              <div className={styles.texttext}>
                <a className={styles.teamNamesArray}>India VS Pakistan</a>
              </div>
              <div className={styles.texttext1}>
                <div className={styles.text}>T20 World cup, Group stage</div>
              </div>
            </div>
          </div>
          <div className={styles.matchDetails}>
            <div className={styles.texttextGroup}>
              <div className={styles.texttext2}>
                <div className={styles.text1}>Match time</div>
              </div>
              <div className={styles.detailValue}>
                <div className={styles.text2}>07:30 pm to 11:30 pm</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.liveInfo}>
          <div className={styles.ballRunningInfo}>
            <div className={styles.texttextContainer}>
              <div className={styles.texttext3}>
                <div className={styles.text3}>Match tiner</div>
              </div>
              <div className={styles.infoValueWrapper}>
                <a className={styles.infoData}>00:00 minutes</a>
              </div>
            </div>
            <div className={styles.actionButtonWrapper}>
              <div className={styles.button}>
                <div className={styles.a}>End 1st Inning</div>
                <div className={styles.iconWrapper}>
                  <img
                    className={styles.wrapperIcon}
                    alt=""
                    src="/wrapper2@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeaderMatch.propTypes = {
  className: PropTypes.string,
};

export default HeaderMatch;
