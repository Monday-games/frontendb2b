import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent11.module.css";

const SelectMarket = ({
  className = "",
  allMarketsFilterWidth,
  allMarketsFilterAlignSelf,
}) => {
  const allMarketsFilterStyle = useMemo(() => {
    return {
      width: allMarketsFilterWidth,
      alignSelf: allMarketsFilterAlignSelf,
    };
  }, [allMarketsFilterWidth, allMarketsFilterAlignSelf]);

  return (
    <div
      className={[styles.allMarketsFilter, className].join(" ")}
      style={allMarketsFilterStyle}
    >
      <div className={styles.labelWrapper}>
        <div className={styles.labelWrapperChild} />
        <div className={styles.allMarkets}>All markets</div>
      </div>
      <div className={styles.itemCountFilter}>
        <div className={styles.itemsCount}>
          <div className={styles.dropdown}>
            <div className={styles.componentstablegacy}>
              <div className={styles.tab}>
                <div className={styles.title}>Default</div>
              </div>
              <div className={styles.ink} />
            </div>
          </div>
          <div className={styles.componentstablegacy1}>
            <div className={styles.tab1}>
              <div className={styles.title1}>Betting side</div>
            </div>
          </div>
          <div className={styles.third}>
            <div className={styles.componentstablegacy2}>
              <div className={styles.tab2}>
                <div className={styles.title2}>Balling side</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SelectMarket.propTypes = {
  className: PropTypes.string,

  /** Style props */
  allMarketsFilterWidth: PropTypes.any,
  allMarketsFilterAlignSelf: PropTypes.any,
};

export default SelectMarket;
