import styles from "./Bottom.module.scss";
import { FaCheckCircle } from "react-icons/fa";

const Bottom = ({ sum }) => {
  return (
    <div className={styles.bottom}>
      <FaCheckCircle size={80} />
      <p className={styles.big}>{sum}</p>
      <p className={styles.small}>/100</p>
    </div>
  );
};

export default Bottom;
