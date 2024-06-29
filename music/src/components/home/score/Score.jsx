import styles from "./Score.module.scss";

const Score = () => {
  return (
    <div className={styles.score}>
      <p>Squicki</p>
      <span>60/90</span>
    </div>
  );
};

export default Score;
