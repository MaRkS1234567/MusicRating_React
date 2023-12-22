import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src="src/assets/img/img.jpeg" alt="" />
      <p>CRISTOFORO COLUMBO - Friendly Thug 52 NGG</p>
    </div>
  );
};

export default Header;
