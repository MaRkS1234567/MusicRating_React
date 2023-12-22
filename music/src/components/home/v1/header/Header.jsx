import styles from "./Header.module.scss";
import { FaCompactDisc } from "react-icons/fa";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.disc}>
        <FaCompactDisc size={80} />
      </div>
      <div>
        <p>FRIENDLY THUG 52 NGG - Cristoforo Columbo </p>
        <img src="src/assets/img/cris.jpeg" alt="" width={50} height={50} />
      </div>
    </div>
  );
};

export default Header;
