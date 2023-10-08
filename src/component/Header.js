import { Link } from "react-router-dom";
import styles from './layout.module.css';

const Header = () => {
  return (
    <>
      <nav>
        <ul className={styles.ul}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </>
  )
};

export default Header;