import PropTypes from "prop-types";
import styles from "./Siderdefault1.module.css";

const Siderdefault1 = ({ className = "" }) => {
  return (
    <div className={[styles.siderdefault, className].join(" ")}>
      <div className={styles.logo}>
        <img className={styles.frameIcon} alt="" src="/frame.svg" />
        <div className={styles.antDesignPro}>Ant Design Pro</div>
      </div>
      <img
        className={styles.iconWrapper}
        loading="lazy"
        alt=""
        src="/iconwrapper@2x.png"
      />
      <div className={styles.title}>Dashbaord</div>
      <div className={styles.inlineMenuItemtopLevelleg}>
        <div className={styles.innerWrapper}>
          <div className={styles.titleWrapper}>
            <img
              className={styles.iconWrapper1}
              alt=""
              src="/iconwrapper-1@2x.png"
            />
            <div className={styles.div}>Bets</div>
          </div>
          <img
            className={styles.rightSideIcon}
            alt=""
            src="/right-side-icon@2x.png"
          />
        </div>
      </div>
      <div className={styles.inlineMenuItemtopLevelleg1}>
        <div className={styles.innerWrapper1}>
          <div className={styles.titleWrapper1}>
            <img
              className={styles.iconWrapper2}
              alt=""
              src="/iconwrapper-2@2x.png"
            />
            <div className={styles.title1}>Matches</div>
          </div>
        </div>
      </div>
      <div className={styles.inlineMenuItemtopLevelleg2}>
        <div className={styles.innerWrapper2}>
          <div className={styles.titleWrapper2}>
            <img
              className={styles.iconWrapper3}
              alt=""
              src="/iconwrapper-3@2x.png"
            />
            <div className={styles.div1}>Users</div>
          </div>
          <img
            className={styles.rightSideIcon1}
            alt=""
            src="/right-side-icon@2x.png"
          />
        </div>
      </div>
      <div className={styles.inlineMenuItemtopLevelleg3}>
        <div className={styles.innerWrapper3}>
          <div className={styles.titleWrapper3}>
            <img
              className={styles.iconWrapper4}
              alt=""
              src="/iconwrapper-4@2x.png"
            />
            <div className={styles.div2}>Finance</div>
          </div>
          <img
            className={styles.rightSideIcon2}
            alt=""
            src="/right-side-icon@2x.png"
          />
        </div>
      </div>
      <div className={styles.inlineMenuItemtopLevelleg4}>
        <div className={styles.innerWrapper4}>
          <div className={styles.titleWrapper4}>
            <img
              className={styles.iconWrapper5}
              alt=""
              src="/iconwrapper-5@2x.png"
            />
            <div className={styles.div3}>Permissions</div>
          </div>
          <img
            className={styles.rightSideIcon3}
            alt=""
            src="/right-side-icon@2x.png"
          />
        </div>
      </div>
      <div className={styles.inlineMenuItemtopLevelleg5}>
        <div className={styles.innerWrapper5}>
          <div className={styles.titleWrapper5}>
            <img
              className={styles.iconWrapper6}
              alt=""
              src="/iconwrapper-6@2x.png"
            />
            <div className={styles.div4}>Settings</div>
          </div>
          <img
            className={styles.rightSideIcon4}
            alt=""
            src="/right-side-icon@2x.png"
          />
        </div>
      </div>
      <div className={styles.inlineMenuItemtopLevelleg6}>
        <div className={styles.innerWrapper6}>
          <div className={styles.titleWrapper6}>
            <img
              className={styles.iconWrapper7}
              alt=""
              src="/iconwrapper-7@2x.png"
            />
            <div className={styles.title2}>Reports</div>
          </div>
          <img
            className={styles.rightSideIcon5}
            alt=""
            src="/right-side-icon@2x.png"
          />
        </div>
      </div>
      <div className={styles.inlineMenuItemtopLevelleg7}>
        <div className={styles.innerWrapper7}>
          <div className={styles.titleWrapper7}>
            <img
              className={styles.iconWrapper8}
              alt=""
              src="/iconwrapper-7@2x.png"
            />
            <div className={styles.title3}>Graphic Editor</div>
          </div>
          <img
            className={styles.rightSideIcon6}
            alt=""
            src="/right-side-icon@2x.png"
          />
        </div>
      </div>
      <div className={styles.inlineMenuItemtopLevelleg8}>
        <div className={styles.innerWrapper8}>
          <div className={styles.titleWrapper8}>
            <img
              className={styles.iconWrapper9}
              alt=""
              src="/iconwrapper-7@2x.png"
            />
            <div className={styles.title4}>Graphic Editor</div>
          </div>
          <img
            className={styles.rightSideIcon7}
            alt=""
            src="/right-side-icon@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

Siderdefault1.propTypes = {
  className: PropTypes.string,
};

export default Siderdefault1;
