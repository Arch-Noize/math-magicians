import { Link } from 'react-router-dom';
import styles from './styles/Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <h1>Math Magicians</h1>
    <ul className={styles.list}>
      <li><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
      <hr />
      <li><Link to="/calculator" style={{ textDecoration: 'none' }}>Calculator</Link></li>
      <hr />
      <li><Link to="/quote" style={{ textDecoration: 'none' }}>Quote</Link></li>
    </ul>
  </nav>
);

export default Navbar;
