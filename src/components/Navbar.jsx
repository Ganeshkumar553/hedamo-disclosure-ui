import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">HEDAMO</div>
      <ul className="navbar__links">
        {/* <li>Dashboard</li> */}
        <li>Products</li>
        <li>Reports</li>
      </ul>
      <div className="navbar__user">Admin</div>
    </nav>
  );
};

export default Navbar;
