import styles from "./Ratings.module.scss";

const RatingRight = ({ vaib, setVaib }) => {
  return (
    <div className={styles.rating}>
      <div className={styles.flex}>
        <p>Атмосфера / Вайб</p>
        <p className={styles.number}>{vaib}</p>
      </div>
      <input
        style={{ width: "100%" }}
        min={0}
        max={10}
        type="range"
        defaultValue={5}
        onChange={(e) => setVaib(e.target.value)}
      />
    </div>
  );
};

export default RatingRight;
