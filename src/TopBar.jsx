import { useState } from "react";
import { Link } from 'react-router-dom';
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./TopBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function TopBar() {
  return (
    <>
      <div className="topnav">
        <Link to="/">
          <img
            src="https://hornethq.kzoo.edu/Student/K-Images/HornetHQ5.svg"
            alt="Hornet HQ"
            width="300"
            height="80"
          />
        </Link>
        <Link className="TopBar" to="/profile">
          <FontAwesomeIcon icon={faUser} style={{ color: "#ff8000" }} /> Profile
        </Link>
        <Link className="TopBar" to="/login">
          <FontAwesomeIcon icon={faRightFromBracket} style={{ color: "#ff8040" }} /> Sign Out
        </Link>
      </div>
    </>
  );
}

export default TopBar;
