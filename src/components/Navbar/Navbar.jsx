import { NavLink } from 'react-router-dom';
import items from './items';

const Navbar = () => {
  const element = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink to={link}>{text}</NavLink>
    </li>
  ));

  return <u>{element}</u>;
};

export default Navbar;
