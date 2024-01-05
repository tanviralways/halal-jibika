import { NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

import "./header.css";
import logo from "../../assets/Screenshot_2023-12-31_101929-removebg-preview.png";
import { useState } from "react";

const Header = ({user}) => {
  console.log(user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav>
      <div className="navbar">
        <div>
          <a id="logo">
            <img src={logo} alt="" />
          </a>
        </div>
        <div>
          <NavLink to="/"> Home</NavLink>
          <NavLink to="/jobs"> Jobs</NavLink>
          <NavLink to="/about"> About</NavLink>
          <NavLink to="/contact"> Contact</NavLink>
          <NavLink to="/favourite"> Favourite</NavLink>
          <NavLink to="/signup"> Signup</NavLink>
          <NavLink to="/signin"> Signin</NavLink>
          <NavLink to="/signout"> Signout</NavLink>
        </div>
      </div>
      <div className="responsive">
        <button className="menu-icon" onClick={() => setIsMenuOpen(true)}>
          <MdMenu />
        </button>
        {isMenuOpen && (
          <div className="close-menu">
            <button title="Close Menu" onClick={() => setIsMenuOpen(false)}>
              <IoClose />
            </button>
            <div>
              <NavLink to="/"> Home</NavLink>
              <NavLink to="/jobs"> Jobs</NavLink>
              <NavLink to="/about"> About</NavLink>
              <NavLink to="/contact"> Contact</NavLink>
              <NavLink to="/favourite"> Favourite</NavLink>
              <NavLink to=""> Signup</NavLink>
              <NavLink to=""> Signout</NavLink>
              <NavLink> <p>{user.email}</p></NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
