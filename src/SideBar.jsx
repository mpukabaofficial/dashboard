import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './SideBar.css'

/*function SideBar() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const names = ["Lelo", "Jackson", "Luis", "Jessie", "Joey"]
  return (
    <>
      <h1 className="title">{name}</h1>
      <button onClick={ () => setCount(count+1) }> click</button>
      <button onClick={ () => setName("Luis") }> clickForName</button>
      <p>{count }</p>
      <ul>
        {names.map(name => (
          <li>
            {name}
          </li>
        ))}
      </ul>
    </>
  )
}*/
function show() {
  document.getElementById('sidebar').classList.toggle('active');
}
show();
<>
    <SideBar></SideBar>
    </>
export default SideBar
