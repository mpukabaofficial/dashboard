import React from "react";
import "./Layout.css";
import Carrousel from "./components/Carrousel";
import Sidebar from "./components/SideBar";
import TopBar from "./TopBar";
import Calendar from "./components/Calendar/Calendar";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import BillingCalculator from "./components/Billing/BillingCalculator";
import Search from "./components/Search/Search";

const Layout = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="main">
      
        <div className="header">
          <TopBar />
          <div className="white-box"></div>
        </div>
        <div className="body">
          <div className="carousel-prog-bill">
            <div className="carousel-container section-bg">
              <Carrousel />
            </div>
            <div className="bill-prog">
              <div className="progress section-bg section-padding">
                <h2>Progress</h2>
                <ProgressBar bgcolor="#8957E5" completed={20} title="Major" />
                <ProgressBar bgcolor="#F6781D" completed={90} title="Minor" />
              </div>
              <div className="section-bg section-padding">
                <h2>Billing</h2>
                <BillingCalculator />
              </div>
            </div>
          </div>
          <div className="cal-search">
            <div className="search">
              <Search />
            </div>
            <div className="calendar section-bg section-padding">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
