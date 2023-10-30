import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./TopBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import CartDrop from "./CartDrop";
import {Link} from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function TopBar() {
  return (
    <>
      <div className="topnav">
        <a href="">
          <img
            src="https://hornethq.kzoo.edu/Student/K-Images/HornetHQ5.svg"
            alt="Hornet HQ"
            width="300"
            height="80"
          />
        </a>
        <a className="TopBar" href="">
          <FontAwesomeIcon icon={faUser} style={{ color: "#ff8000" }} /> Profile
        </a>
        <a className="TopBar" href="">
          <FontAwesomeIcon
            icon={faRightFromBracket}
            style={{ color: "#ff8040" }}
          />{" "}
          Sign Out
        </a>
        <a className="TopBar"><CartDrop></CartDrop></a>
      </div>
    </>
  );
}

export default TopBar;
