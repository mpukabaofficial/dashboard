import "./App.css";
import SideBar from "./components/SideBar";
import TopBar from "./TopBar";
import Carrousel from "./components/Carrousel";

function App() {
  return (
    <>
      <TopBar></TopBar>
      <SideBar></SideBar>
      <Carrousel />
    </>
  );
}

export default App;
