import { Fragment } from "react";
import styles from "./Multy.module.scss";
import cn from "clsx";

const Multy = ({ text, ritm, reo, idea, feel, setFeel, trend, setTrend }) => {
  const number =
    Math.round(text / 100) +
    Math.round(ritm / 100) +
    Math.round(reo / 100) +
    Math.round(idea / 100);

  const RESULT = Math.round(
    number + number * (trend * 0.1) + (number + number * (trend * 0.1)) * (feel * 0.1)
  );
  return (
    <div className={styles.parent}>
      <div className={styles.multy}>
        <div>
          <p>АТМОСФЕРА / ВАЙБ</p>
          <div>
            <input
              type="range"
              min={1}
              max={5}
              defaultValue={3}
              onChange={(e) => {
                setTrend(e.target.value);
              }}
            />
            <div>
              <p>{trend}</p>
            </div>
          </div>
        </div>
        <div>
          <p>АКТУАЛЬНОСТЬ</p>
          <div>
            <input
              type="range"
              min={1}
              max={5}
              defaultValue={3}
              onChange={(e) => {
                setFeel(e.target.value);
              }}
            />
            <div>
              <p>{feel}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={cn(styles.score, RESULT === 90 && styles.win)}>
        {RESULT != 90 && (
          <div>
            <p>Sqqi</p>
          </div>
        )}
        <span>
          {RESULT === 90 ? <p className={styles.sqqi}>Sqqi</p> : RESULT}
          /90
        </span>
      </div>
    </div>
  );
};

export default Multy;
