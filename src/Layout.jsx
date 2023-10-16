import React from "react";
import "./Layout.css";
import Carrousel from "./components/Carrousel";
import Sidebar from "./components/SideBar";
import TopBar from "./TopBar";

const Layout = () => {
  return (
    <div className="container">
      <Sidebar />

      <div className="main">
        <div className="header">
          <TopBar />
        </div>
        <div>
          <div className="carousel-container">
            <Carrousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
