import React, { useState } from "react";
import bars from "../assets/bars-solid.svg";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faDollarSign,
  faHouse,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <div id="sidebar" className={isActive ? "active" : ""}>
        <div className="toggle-btn" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        <ul>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faHouse} />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faDollarSign} />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faNewspaper} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
