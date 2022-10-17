import React from "react";
import { Link } from "react-router-dom";
import Search from "../Input/search"
import { LogoIcon, BellIcon } from "../../assests/icon"
import photo from "../../assests/image/Ellipse 1.png";
import Menu  from "../../assests/image/menu.png";
import "./Navbar.scss";

const TopNav = () => {
  return (
    <nav className="top-nav">
      <div className="left">
        <img src={Menu} alt=""/>
        <LogoIcon />
        <Search />
      </div>
      <div className="right">
        <p>Docs</p>
        <BellIcon />
        <div className="profile-image">
          <img src={photo} alt="" />
        </div>
        <div className="dropdown">
          <button className="dropbtn">
          Adedeji
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <Link to="#">Link 1</Link>
            <Link to="#">Link 2</Link>
            <Link to="#">Link 3</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;