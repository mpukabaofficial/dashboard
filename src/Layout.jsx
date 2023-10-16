import React from "react";
import "./Layout.css";
import TopBar from "./TopBar";

const Layout = () => {
  return (
    <div className="container">
      <div className="Navbar">NavBAr</div>
      <div className="main">
        <div className="header"><TopBar></TopBar></div>
        <div>
          <div className="carousel">carousel</div>
          <div className="schedule">Schedule</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
