import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({ className = "" }) => {
  return (
    <header className={[styles.content, className].join(" ")}>
      <div className={styles.content1}>
        <img
          className={styles.contentChild}
          loading="lazy"
          alt=""
          src="/group-1476@2x.png"
        />
      </div>
      <div className={styles.toolbar}>
        <div className={styles.iconWrapper}>
          <img className={styles.searchIcon} alt="" src="/search.svg" />
        </div>
        <div className={styles.iconWrapper1}>
          <img
            className={styles.questioncircleIcon}
            loading="lazy"
            alt=""
            src="/questioncircle.svg"
          />
        </div>
        <div className={styles.badgeonIcon}>
          <div className={styles.icon}>
            <img
              className={styles.bellIcon}
              loading="lazy"
              alt=""
              src="/bell.svg"
            />
          </div>
          <div className={styles.badgeWrapper}>
            <div className={styles.offset}>
              <div className={styles.badgecount}>
                <div className={styles.badge}>
                  <a className={styles.number}>11</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.layoutblockshorizontal2}>
          <div className={styles.iconWrapper2}>
            <img
              className={styles.settingIcon}
              loading="lazy"
              alt=""
              src="/setting.svg"
            />
          </div>
          <div className={styles.profile}>
            <div className={styles.texttext}>
              <a className={styles.name}>Operator</a>
            </div>
          </div>
        </div>
        <div className={styles.iconWrapper3}>
          <img className={styles.languageIcon} alt="" src="/language.svg" />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
