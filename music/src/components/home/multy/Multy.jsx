import { Fragment } from "react";
import styles from "./Multy.module.scss";

const Multy = ({ text, ritm, reo, idea, feel, setFeel, trend, setTrend }) => {
  const number =
    Math.round(text / 100) +
    Math.round(ritm / 100) +
    Math.round(reo / 100) +
    Math.round(idea / 100);
  return (
    <div className={styles.parent}>
      <div className={styles.multy}>
        <div>
          <p>Трендовость жанра </p>
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
          <p>Впечатление</p>
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
      <div className={styles.score}>
        <div>
          <p>Sqqi</p>
        </div>
        <span>
          {Math.round(
            number +
              number * (trend / 10) +
              (number + number * (trend * 0.123)) * (feel * 0.123)
          )}
          /100
        </span>
      </div>
    </div>
  );
};

export default Multy;
