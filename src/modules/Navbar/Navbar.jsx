import { NavLink } from 'react-router-dom';
import styles from './navbar.module.scss';
import items from './items';

const Navbar = () => {
  const element = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink to={link}>{text}</NavLink>
    </li>
  ));

  return <ul className={styles.list}>{element}</ul>;
};

export default Navbar;
