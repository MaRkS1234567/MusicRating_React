import styles from "./Score.module.scss";

const Score = () => {
  return (
    <div className={styles.score}>
      <p>Squicki</p>
      <span>75/100</span>
    </div>
  );
};

export default Score;
