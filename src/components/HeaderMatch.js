import PropTypes from "prop-types";
import styles from "./HeaderMatch.module.css";

const HeaderMatch = ({ className = "" }) => {
  return (
    <div className={[styles.headermatch, className].join(" ")}>
      <div className={styles.background} />
      <div className={styles.teamsParent}>
        <div className={styles.teams}>
          <div className={styles.teamLogos}>
            <div className={styles.teamLogosInner}>
              <div className={styles.image11Parent}>
                <img
                  className={styles.image11Icon}
                  alt=""
                  src="/image-111@2x.png"
                />
                <div className={styles.teamOneName}>
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
          <div className={styles.matchTitle}>
            <div className={styles.texttextParent}>
              <div className={styles.texttext}>
                <div className={styles.content}>India VS Pakistan</div>
              </div>
              <div className={styles.texttext1}>
                <div className={styles.text}>T20 World cup, Group stage</div>
              </div>
            </div>
          </div>
          <div className={styles.status}>
            <div className={styles.texttextGroup}>
              <div className={styles.texttext2}>
                <div className={styles.text1}>Match time</div>
              </div>
              <div className={styles.time}>
                <div className={styles.value}>07:30 pm to 11:30 pm</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bet}>
          <div className={styles.betDetails}>
            <div className={styles.texttextContainer}>
              <div className={styles.texttext3}>
                <div className={styles.text2}>Match tiner</div>
              </div>
              <div className={styles.odds}>
                <div className={styles.value1}>00:00 minutes</div>
              </div>
            </div>
            <div className={styles.buttonWrapper}>
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
