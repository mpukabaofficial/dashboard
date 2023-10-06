
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/LoginPage'
import SideBar from './components/SideBar'
import './SideBar.css'
import "./App.css";
import Carrousel from "./components/Carrousel";


function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const names = ["Luis", "Jackson", "Jessie", "Lelo", "Another Name"]

  function show() {
  document.getElementById('sidebar').classList.toggle('active');
}
  return (
    <>
      <LoginPage/>
    <SideBar></SideBar>
     <Carrousel />
    </>

export default App;

