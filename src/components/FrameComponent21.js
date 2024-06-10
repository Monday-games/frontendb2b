import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent21.module.css";

const FrameComponent2 = ({
  className = "",
  wicket12,
  bold,
  prop,
  runout,
  runout1,
  prop1,
  propBorder,
  propBorder1,
  propGap,
  propPadding,
  propColor,
  propMinWidth,
  propWidth,
  propDisplay,
  propMinWidth1,
  propWidth1,
  propWidth2,
  propAlignSelf,
  propWidth3,
  propDisplay1,
  propWidth4,
  propAlignSelf1,
  propWidth5,
  propDisplay2,
  propPadding1,
  propGap1,
  propWidth6,
  propWidth7,
  propAlignSelf2,
  propWidth8,
  propDisplay3,
  propWidth9,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const rectangleDivStyle = useMemo(() => {
    return {
      border: propBorder1,
    };
  }, [propBorder1]);

  const frameDivStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const boldStyle = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [propColor, propMinWidth]);

  const frameDiv2Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const divStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
      width: propWidth1,
    };
  }, [propDisplay, propMinWidth1, propWidth1]);

  const frameDiv3Style = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const div1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth3,
      display: propDisplay1,
    };
  }, [propAlignSelf, propWidth3, propDisplay1]);

  const frameDiv4Style = useMemo(() => {
    return {
      width: propWidth4,
    };
  }, [propWidth4]);

  const div2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      width: propWidth5,
      display: propDisplay2,
    };
  }, [propAlignSelf1, propWidth5, propDisplay2]);

  const groupDiv1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const frameDiv5Style = useMemo(() => {
    return {
      gap: propGap1,
    };
  }, [propGap1]);

  const frameDiv6Style = useMemo(() => {
    return {
      width: propWidth6,
    };
  }, [propWidth6]);

  const frameDiv7Style = useMemo(() => {
    return {
      width: propWidth7,
    };
  }, [propWidth7]);

  const div3Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
      width: propWidth8,
      display: propDisplay3,
    };
  }, [propAlignSelf2, propWidth8, propDisplay3]);

  const frameDiv8Style = useMemo(() => {
    return {
      width: propWidth9,
    };
  }, [propWidth9]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.rectangleParent} style={groupDivStyle}>
          <div className={styles.frameChild} style={rectangleDivStyle} />
          <div className={styles.wicket12Parent} style={frameDivStyle}>
            <img className={styles.wicket12} alt="" src={wicket12} />
            <div className={styles.boldWrapper} style={frameDiv1Style}>
              <div className={styles.bold} style={boldStyle}>
                {bold}
              </div>
            </div>
          </div>
          <div className={styles.wrapper} style={frameDiv2Style}>
            <div className={styles.div} style={divStyle}>
              {prop}
            </div>
          </div>
          <div className={styles.container} style={frameDiv3Style}>
            <div className={styles.div1} style={div1Style}>
              05
            </div>
          </div>
          <div className={styles.frame} style={frameDiv4Style}>
            <div className={styles.div2} style={div2Style}>
              10,000
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.div3}>4000</div>
          </div>
        </div>
        <div className={styles.resultbuttonsWrapper}>
          <div className={styles.resultbuttons}>
            <div className={styles.button}>
              <div className={styles.iconWrapper}>
                <img
                  className={styles.wrapperIcon}
                  alt=""
                  src="/wrapper4@2x.png"
                />
              </div>
              <div className={styles.text}>Submit</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.rectangleGroup} style={groupDiv1Style}>
          <div className={styles.frameItem} />
          <div className={styles.runoutParent} style={frameDiv5Style}>
            <img className={styles.runoutIcon} alt="" src={runout} />
            <div className={styles.runoutWrapper}>
              <div className={styles.runout}>{runout1}</div>
            </div>
          </div>
          <div className={styles.wrapper1} style={frameDiv6Style}>
            <div className={styles.div4}>{prop1}</div>
          </div>
          <div className={styles.wrapper2} style={frameDiv7Style}>
            <div className={styles.div5} style={div3Style}>
              05
            </div>
          </div>
          <div className={styles.wrapper3} style={frameDiv8Style}>
            <div className={styles.div6}>10,000</div>
          </div>
          <div className={styles.wrapper4}>
            <div className={styles.div7}>4000</div>
          </div>
        </div>
        <div className={styles.resultbuttonsContainer}>
          <div className={styles.resultbuttons1}>
            <div className={styles.button1}>
              <div className={styles.iconWrapper1}>
                <img
                  className={styles.wrapperIcon1}
                  alt=""
                  src="/wrapper4@2x.png"
                />
              </div>
              <div className={styles.text1}>Submit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  wicket12: PropTypes.string,
  bold: PropTypes.string,
  prop: PropTypes.string,
  runout: PropTypes.string,
  runout1: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propBorder: PropTypes.any,
  propBorder1: PropTypes.any,
  propGap: PropTypes.any,
  propPadding: PropTypes.any,
  propColor: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propWidth1: PropTypes.any,
  propWidth2: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth3: PropTypes.any,
  propDisplay1: PropTypes.any,
  propWidth4: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propWidth5: PropTypes.any,
  propDisplay2: PropTypes.any,
  propPadding1: PropTypes.any,
  propGap1: PropTypes.any,
  propWidth6: PropTypes.any,
  propWidth7: PropTypes.any,
  propAlignSelf2: PropTypes.any,
  propWidth8: PropTypes.any,
  propDisplay3: PropTypes.any,
  propWidth9: PropTypes.any,
};

export default FrameComponent2;
