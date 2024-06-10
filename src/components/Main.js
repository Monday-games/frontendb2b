import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Main.module.css";

const Main = ({ className = "" }) => {
  const navigate = useNavigate();

  const onComponentsTabLegacyContainerClick = useCallback(() => {
    navigate("/accountsignup");
  }, [navigate]);

  return (
    <div className={[styles.main, className].join(" ")}>
      <div className={styles.content}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo@2x.png"
        />
      </div>
      <div className={styles.navigation}>
        <div className={styles.tabsToplegacy}>
          <div className={styles.itemsCount}>
            <div className={styles.componentsTab}>
              <div className={styles.componentstablegacy}>
                <div className={styles.tab}>
                  <a className={styles.title}>Login</a>
                </div>
                <div className={styles.ink} />
              </div>
            </div>
            <div
              className={styles.componentstablegacy1}
              onClick={onComponentsTabLegacyContainerClick}
            >
              <div className={styles.tab1}>
                <a className={styles.title1}>Sign Up</a>
              </div>
            </div>
          </div>
          <div className={styles.boxShadow} />
        </div>
        <div className={styles.inputs}>
          <div className={styles.inputlargenormalfalsetrue}>
            <div className={styles.placeholder}>
              <img
                className={styles.inputPrefixIcon}
                loading="lazy"
                alt=""
                src="/inputprefix@2x.png"
              />
              <div className={styles.placeholder1}>Enter user name</div>
            </div>
          </div>
          <div className={styles.inputlargenormalfalsetrue1}>
            <div className={styles.placeholder2}>
              <img
                className={styles.inputPrefixIcon1}
                loading="lazy"
                alt=""
                src="/inputprefix-1@2x.png"
              />
              <div className={styles.placeholder3}>Enter password</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.button}>
          <div className={styles.iconWrapper}>
            <img className={styles.wrapperIcon} alt="" src="/wrapper4@2x.png" />
          </div>
          <div className={styles.text}>Sign In</div>
        </div>
      </div>
    </div>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
