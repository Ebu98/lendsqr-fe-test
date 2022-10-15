import React from "react";
import Sidebar from "../SideBar";
import TopNav from "../TopNavBar/Navbar";

import './layout.scss'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <TopNav />
      <div className="main-contents">
        <Sidebar />
        <div className="main-hero">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
