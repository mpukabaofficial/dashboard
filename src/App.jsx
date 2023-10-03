import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './SideBar'
import './SideBar.css'


function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const names = ["Lelo", "Jackson", "Luis", "Jessie", "Joey"]
  return (
    <>
    <SideBar></SideBar>
    </>
  )
}

function show() {
  document.getElementById('sidebar').classList.toggle('active');
}
export default App
