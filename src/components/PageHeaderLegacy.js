import PropTypes from "prop-types";
import styles from "./PageHeaderLegacy.module.css";

const PageHeaderLegacy = ({ className = "" }) => {
  return (
    <div className={[styles.pageHeaderlegacy, className].join(" ")}>
      <div className={styles.breadcrumb}>
        <div className={styles.stItem}>
          <div className={styles.firstLevelMenu}>First-level Menu</div>
        </div>
        <div className={styles.componentsseparator}>
          <div className={styles.separator}>/</div>
        </div>
        <div className={styles.ndItem}>
          <div className={styles.secondLevelMenu}>Second-level Menu</div>
        </div>
        <div className={styles.componentsseparator1}>
          <div className={styles.separator1}>/</div>
        </div>
        <div className={styles.lastItem}>
          <div className={styles.lastItemLabel}>Current Page</div>
        </div>
      </div>
      <div className={styles.headingLeft}>
        <div className={styles.wrapper}>
          <a className={styles.title}>Workplace</a>
        </div>
      </div>
      <div className={styles.layoutblockshorizontal2}>
        <div className={styles.layoutblockshorizontal22}>
          <div className={styles.image}>
            <img
              className={styles.heightIcon}
              loading="lazy"
              alt=""
              src="/height@2x.png"
            />
            <div className={styles.width}>
              <div className={styles.avatarShape} />
              <div className={styles.avatarShape1} />
            </div>
          </div>
          <div className={styles.userDetails}>
            <div className={styles.layoutblocksvertical2}>
              <div className={styles.texttext}>
                <h3 className={styles.role}>
                  Good morning, Serati Ma, have a great day!
                </h3>
              </div>
              <div className={styles.texttext1}>
                <div className={styles.text}>
                  User interaction expert | ant financial service - business
                  group - platform department - technology department -UED
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.layoutblockshorizontal5}>
          <div className={styles.statisticlegacy}>
            <div className={styles.title1}>
              <div className={styles.title2}>Projects</div>
            </div>
            <div className={styles.statisticContentValue}>
              <div className={styles.value}>56</div>
              <div className={styles.suffix}>.00</div>
            </div>
          </div>
          <div className={styles.divider}>
            <img className={styles.lineIcon} alt="" src="/line.svg" />
          </div>
          <div className={styles.statisticlegacy1}>
            <div className={styles.title3}>
              <div className={styles.title4}>Team Ranking</div>
            </div>
            <div className={styles.statisticContentValue1}>
              <div className={styles.value1}>8</div>
              <div className={styles.suffix1}>/24</div>
            </div>
          </div>
          <div className={styles.divider1}>
            <img className={styles.lineIcon1} alt="" src="/line.svg" />
          </div>
          <div className={styles.statisticlegacy2}>
            <div className={styles.title5}>
              <div className={styles.title6}>Project Visits</div>
            </div>
            <div className={styles.statisticContentValue2}>
              <div className={styles.value2}>2,233</div>
              <div className={styles.suffix2}>.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PageHeaderLegacy.propTypes = {
  className: PropTypes.string,
};

export default PageHeaderLegacy;
