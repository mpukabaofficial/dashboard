import React, { useState, useEffect } from "react";
import bars from "../assets/bars-solid.svg";
import "./Sidebar.css";
import homebutton from "../assets/homebutton.png";
import finnancialbutton from "../assets/FinanncialInfo.png";
import employmentbutton from "../assets/employment.png";
import academicsbutton from "../assets/academics.png";
import useroptionsbutton from "../assets/useroptions.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faDollarSign,
  faGear,
  faGraduationCap,
  faHouse,
  faMoneyBillTrendUp,
  faNewspaper,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  const arraySidebar = [
    {
      name: "Home",
      icons: faHouse,
      link: "/",
    },
    {
      name: "Academics",
      icons: faGraduationCap,
      link: "/",
    },
    {
      name: "Finnancial Information",
      icons: faMoneyBillTrendUp,
      link: "/",
    },
    {
      name: "Employment",
      icons: faDollarSign,
      link: "/",
    },
    {
      name: "Settings",
      icons: faGear,
      link: "/",
    },
  ];
  return (
    <div id="sidebar" className={isActive ? "active" : ""}>
      <div className="toggle-btn" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} style={{ fontSize: "24px" }} />
      </div>
      <ul>
        {arraySidebar.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              style={
                {
                  // marginLeft: isActive ? "0" : "-100px",
                }
              }
            >
              <FontAwesomeIcon
                icon={item.icons}
                className="fa-icon"
                style={{ marginRight: "10px" }}
              />
              {isActive && item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
