import { useState } from "react";
import styles from "./Adjustments.module.scss";
import cn from "clsx";

const Adjustments = ({
  text,
  setText,
  ritm,
  setRitm,
  reo,
  setReo,
  idea,
  setIdea,
}) => {
  return (
    <div className={styles.adjustments}>
      <div className={styles.header}>
      </div>
      <div className={styles.under}>
        <div className={styles.text}>
          <input
            type="range"
            className={styles.mt}
            min={0}
            max={1000}
            defaultValue={500}
            onChange={(e) => {
              setText(e.target.value);
              document.getElementById("textTop").style.top =
                -((text - 805) / 2.05) + "px";
            }}
          />
          <p id="textTop" className={styles.result1}>
            {Math.round(text / 100)}
          </p>
        </div>
        <div className={styles.structure}>
          <input
            type="range"
            min={0}
            max={1000}
            defaultValue={500}
            onChange={(e) => {
              setRitm(e.target.value);
              document.getElementById("ritmTop").style.top =
              -((ritm - 805) / 2.05) + "px";
            }}
          />
          <p id="ritmTop" className={styles.result2}>
            {Math.round(ritm / 100)}
          </p>
        </div>
        <div className={styles.reo}>
          <input
            type="range"
            min={0}
            max={1000}
            defaultValue={500}
            onChange={(e) => {
              setReo(e.target.value);
              document.getElementById("reoTop").style.top =
              -((reo - 805) / 2.05) + "px";
            }}
          />
          <p id="reoTop" className={styles.result3}>
            {Math.round(reo / 100)}
          </p>
        </div>
        <div className={styles.diversity}>
          <input
            id="idea"
            type="range"
            className={styles.mt}
            min={0}
            max={1000}
            defaultValue={500}
            onChange={(e) => {
              setIdea(e.target.value);
              document.getElementById("ideaTop").style.top =
              -((idea - 805) / 2.05) + "px";
            }}
          />
          <p id="ideaTop" className={styles.result4}>
            {Math.round(idea / 100)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Adjustments;
