import Siderdefault from "../components/Siderdefault";
import MatchHeader from "../components/MatchHeader";
import BallRunningHead from "../components/FrameComponent";
import styles from "./OperatorstartInnings.module.css";

const OperatorstartInnings = () => {
  return (
    <div className={styles.operatorstartInnings}>
      <img className={styles.bgIcon} alt="" src="/bg.svg" />
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/group-14761@2x.png"
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
            <div className={styles.texttextWrapper}>
              <div className={styles.texttext}>
                <a className={styles.text}>Operator</a>
              </div>
            </div>
          </div>
          <div className={styles.iconWrapper3}>
            <img className={styles.languageIcon} alt="" src="/language.svg" />
          </div>
        </div>
      </div>
      <div className={styles.siderdefaultParent}>
        <Siderdefault />
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.componentParent}>
              <MatchHeader />
              <BallRunningHead />
            </div>
            <div className={styles.buttonsecondarycirclelargeWrapper}>
              <div className={styles.buttonsecondarycirclelarge}>
                <img
                  className={styles.questionIcon}
                  loading="lazy"
                  alt=""
                  src="/question.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatorstartInnings;
