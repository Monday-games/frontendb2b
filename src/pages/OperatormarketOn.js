import Siderdefault1 from "../components/Siderdefault1";
import HeaderMatch from "../components/HeaderMatch";
import Market from "../components/Market";
import SelectMarket from "../components/FrameComponent1";
import LiveData from "../components/LiveData";
import Setvalues from "../components/Setvalues";
import LivebetdataEmptystate from "../components/LivebetdataEmptystate";
import styles from "./OperatormarketOn.module.css";

const OperatormarketOn = () => {
  return (
    <div className={styles.operatormarketOn}>
      <header className={styles.main}>
        <div className={styles.content}>
          <img
            className={styles.contentChild}
            loading="lazy"
            alt=""
            src="/group-14762@2x.png"
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
                <a className={styles.label}>Operator</a>
              </div>
            </div>
          </div>
          <div className={styles.iconWrapper3}>
            <img className={styles.languageIcon} alt="" src="/language.svg" />
          </div>
        </div>
      </header>
      <main className={styles.side}>
        <Siderdefault1 />
        <div className={styles.matchDetails}>
          <HeaderMatch />
          <Market />
          <div className={styles.data}>
            <div className={styles.filters}>
              <div className={styles.marketFilter}>
                <SelectMarket />
                <LiveData />
              </div>
              <div className={styles.setvaluesParent}>
                <Setvalues />
                <div className={styles.liveDataHelp}>
                  <div className={styles.buttonsecondarycirclelarge}>
                    <img
                      className={styles.questionIcon}
                      loading="lazy"
                      alt=""
                      src="/question.svg"
                    />
                  </div>
                  <LivebetdataEmptystate />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OperatormarketOn;
