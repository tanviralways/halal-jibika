import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <nav>
      <div>
        <NavLink id="logo"> Halal Jibika</NavLink>
      </div>
      <div>
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/jobs"> Jobs</NavLink>
        <NavLink to="/about"> About</NavLink>
        <NavLink to="/contact"> Contact</NavLink>
        <NavLink to="/favourite"> Fabourite</NavLink>
        <NavLink> Signup</NavLink>
        <NavLink> Signout</NavLink>
      </div>
    </nav>
  );
};

export default Header;
