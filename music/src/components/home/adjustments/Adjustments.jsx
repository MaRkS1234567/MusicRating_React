import styles from "./Adjustments.module.scss";

const Adjustments = () => {
  return (
    <div className={styles.adjustments}>
      <div className={styles.text}>
        <p>Текст</p>
        <input type="range" className={styles.mt} />
      </div>
      <div className={styles.structure}>
        <p className={styles.top}>Структура</p>
        <p className={styles.bottom}> Ритмика</p>
        <input type="range" />
      </div>
      <div className={styles.reo}>
        <p className={styles.top}>Реализация</p>
        <p className={styles.bottom}>Харизма</p>
        <input type="range" />
      </div>
      <div className={styles.diversity}>
        <p>Разнообразие</p>
        <input type="range" className={styles.mt} />
      </div>
    </div>
  );
};

export default Adjustments;
