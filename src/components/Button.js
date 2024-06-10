import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ className = "" }) => {
  return (
    <div className={[styles.button, className].join(" ")}>
      <div className={styles.iconWrapper}>
        <img className={styles.wrapperIcon} alt="" src="/wrapper4@2x.png" />
      </div>
      <div className={styles.text}>Submit</div>
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
