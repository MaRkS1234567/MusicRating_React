import styles from "./Adjustments.module.scss";

const Adjustments = () => {
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
            max={10}
            defaultValue={5}
          />
        </div>
        <div className={styles.structure}>
          <input type="range" min={0} max={10} defaultValue={5} />
        </div>
        <div className={styles.reo}>
          <input type="range" min={0} max={10} defaultValue={5} />
        </div>
        <div className={styles.diversity}>
          <input
            type="range"
            className={styles.mt}
            min={0}
            max={10}
            defaultValue={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Adjustments;
