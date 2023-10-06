
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/LoginPage'
import SideBar from './components/SideBar'
import './SideBar.css'
import TopBar from './TopBar'
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SideBar from "./components/SideBar";
import "./SideBar.css";

import "./App.css";
import Carrousel from "./components/Carrousel";


function App() {


  return (
    <>

      <TopBar></TopBar>
          <SideBar></SideBar>
      <Carrousel />
     <LoginPage/>

    </>
  );
}

export default App;
