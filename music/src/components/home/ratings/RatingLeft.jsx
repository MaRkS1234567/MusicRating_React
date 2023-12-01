import styles from "./Ratings.module.scss";

const RatingLeft = ({ actualy, setActualy }) => {
  return (
    <div className={styles.rating}>
      <div className={styles.flex}>
        <p>Трендовость / Актуальность</p>
        <p className={styles.number}>{actualy}</p>
      </div>
      <input
        style={{ width: "100%" }}
        min={0}
        max={10}
        type="range"
        defaultValue={5}
        onChange={(e) => setActualy(e.target.value)}
      />
    </div>
  );
};

export default RatingLeft;
