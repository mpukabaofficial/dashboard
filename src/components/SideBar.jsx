import React, {useState, useEffect} from 'react'
import bars from '../assets/bars-solid.svg'
import './Sidebar.css'; 
import homebutton from '../assets/homebutton.png';
import finnancialbutton from '../assets/FinanncialInfo.png'
import employmentbutton from '../assets/employment.png'
import  academicsbutton from '../assets/academics.png'
import useroptionsbutton from '../assets/useroptions.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faDollarSign, faHouse, faNewspaper } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  const [isActive, setIsActive] = useState(true);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <div id="sidebar" className={isActive ? 'active' : ''}>
     <div className="toggle-btn" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
        </div>
        <ul>
          <li><a href=''><img src={homebutton} alt="homebutton" /></a></li>
          <li><a href=''><img src={finnancialbutton} alt="finanncialbutton" /></a></li>
          <li><a href=''><img src={employmentbutton} alt="employmentbutton" /></a></li>
          <li><a href=''><img src={academicsbutton} alt="academicsbutton" /></a></li>
          <li><a href=''><img src={useroptionsbutton} alt="useroptionsbutton" /></a></li>
        
        </ul>
      </div>
    
  );
};


export default Sidebar;