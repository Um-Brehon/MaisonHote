import { NavLink } from 'react-router-dom';
import SHeader from './style';

function Header() {
  return (
    <>
      <SHeader>
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/contact">
          <p>Contact</p>
        </NavLink>
        <NavLink to="/nearby">
          <p>Nearby</p>
        </NavLink>
      </SHeader>
    </>
  );
}

export default Header;
