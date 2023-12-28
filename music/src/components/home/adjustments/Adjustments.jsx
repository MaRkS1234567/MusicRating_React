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
        <div className={styles.rhyme}>
          <p className={styles.top}>Текст</p>
          <span className={styles.bottom_r}>Рифмы</span>
        </div>
        <div className={styles.rithm}>
          <p className={styles.top}>Структура</p>
          <p className={styles.bottom}> Ритмика</p>
        </div>
        <div className={styles.harism}>
          <p className={styles.top}>Реализация</p>
          <p className={styles.bottom2}>Харизма</p>
        </div>
        <div className={styles.idea}>
          <p className={styles.top1}>Идеи</p>
          <p className={styles.bottom}>Фишки</p>
        </div>
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
                -((text - 870) / 2.55) + "px";
            }}
          />
          <p id="textTop" className={styles.result}>
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
                -((ritm - 870) / 2.55) + "px";
            }}
          />
          <p id="ritmTop" className={styles.result}>
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
                -((reo - 870) / 2.55) + "px";
            }}
          />
          <p id="reoTop" className={styles.result}>
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
                -((idea - 870) / 2.55) + "px";
            }}
          />
          <p id="ideaTop" className={styles.result}>
            {Math.round(idea / 100)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Adjustments;
