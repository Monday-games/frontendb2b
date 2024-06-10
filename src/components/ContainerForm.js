import PropTypes from "prop-types";
import styles from "./ContainerForm.module.css";

const ContainerForm = ({ className = "" }) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.resultbuttonsParent}>
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
  );
};

ContainerForm.propTypes = {
  className: PropTypes.string,
};

export default ContainerForm;
