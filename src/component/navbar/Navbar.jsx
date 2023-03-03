import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "../../styles/navbar.scss";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const [isMobile, setIsMobile] = useState(false);
  // const [isSelectNavLink,setIsSelectNavLink]=useState(false);
  const handleNavClick = () => {
    setIsMobile(false);
  };
  return (
    <div className="navbar-box">
      <nav className="navbar">
        <div className="brand-name">navlogo</div>
        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={handleNavClick}
        >
          <Link to="/" className="nav-links-item">
            <li>HOME</li>
          </Link>
          <Link to="/about" className="nav-links-item">
            <li>ABOUT US</li>
          </Link>
          <Link to="/sign-up" className="nav-links-item">
            <li>SIGN UP</li>
          </Link>

          <button className="white_btn" onClick={handleLogout}>
            {" "}
            Logout
          </button>
        </ul>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
