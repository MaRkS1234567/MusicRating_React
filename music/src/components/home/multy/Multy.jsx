import { Fragment } from "react";
import styles from "./Multy.module.scss";

const Multy = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.multy}>
        <div>
          <p>Трендовость жанра </p>
          <input type="range" />
        </div>
        <div>
          <p>Впечатление</p>
          <input type="range" />
        </div>
      </div>
      <div className={styles.score}>
        <div>
          <p>Sqqi</p>
        </div>
        <span>75/100</span>
      </div>
    </div>
  );
};

export default Multy;
