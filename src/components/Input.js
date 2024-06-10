import PropTypes from "prop-types";
import styles from "./Input.module.css";

const Input = ({ className = "" }) => {
  return (
    <div className={[styles.input, className].join(" ")}>
      <div className={styles.input1}>3</div>
      <div className={styles.inputCursor}>
        <div className={styles.cursor} />
      </div>
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
};

export default Input;
