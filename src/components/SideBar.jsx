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
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  const arraySidebar = [
    {
      name: "Billing",
      icons: faDollarSign,
      link: "/",
    },
    {
      name: "Home",
      icons: faHouse,
      link: "/",
    },
    {
      name: "News",
      icons: faNewspaper,
      link: "/",
    },
  ];
  return (
    <div id="sidebar" className={isActive ? 'active' : ''}>
     <div className="toggle-btn" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
        <ul>
          {arraySidebar.map((item, index) => (
            <li key={index}>
              <a href={item.link}>
              <FontAwesomeIcon icon={item.icons} />
                {isActive ? item.name : ""}</a></li>
          ))}
        </ul>
      </div>
      </div>
    
  );
};


export default Sidebar;