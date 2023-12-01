import styles from "./Ratings.module.scss";

const Ratings = ({
  ritm,
  setRitm,
  real,
  setReal,
  phrases,
  setPhrases,
  harism,
  setHarism,
}) => {
  return (
    <div className={styles.ratings}>
      <div>
        <div>
          <div>
            <p>Рифмы / Фразы</p>
            <p className={styles.number}>{phrases}</p>
          </div>
          <input
            min={0}
            max={10}
            type="range"
            defaultValue={5}
            onChange={(e) => setPhrases(e.target.value)}
          />
        </div>
        <div>
          <div>
            <p>Рефлизация стиля</p>
            <p className={styles.number}>{real}</p>
          </div>
          <input
            min={0}
            max={10}
            type="range"
            defaultValue={5}
            onChange={(e) => setReal(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div>
          <div>
            <p>Структура / Ритмика</p>
            <p className={styles.number}>{ritm}</p>
          </div>
          <input
            type="range"
            min={0}
            max={10}
            defaultValue={5}
            onChange={(e) => setRitm(e.target.value)}
          />
        </div>
        <div>
          <div>
            <p>Индивидуальность / Харизма</p>
            <p className={styles.number}>{harism}</p>
          </div>
          <input
            min={0}
            max={10}
            type="range"
            defaultValue={5}
            onChange={(e) => setHarism(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Ratings;
