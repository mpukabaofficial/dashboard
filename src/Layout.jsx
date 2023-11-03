import React from "react";
import "./Layout.css";
import Carrousel from "./components/Carrousel";
import Sidebar from "./components/SideBar";
import TopBar from "./TopBar";
import Calendar from "./components/Calendar/Calendar";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import BillingCalculator from "./components/Billing/BillingCalculator";
import Search from "./components/Search/Search";
import Home from "./Home";

const Layout = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="main"> {/* topbar plus the white content */}
        <div className="header">
          <TopBar />
          <div className="breadcrumbs"></div>

        </div>
        <div className="body">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default Layout;
