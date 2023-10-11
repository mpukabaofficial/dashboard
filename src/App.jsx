
import "./App.css";
import SideBar from "./components/SideBar";
import TopBar from "./TopBar";

import Carrousel from "./components/Carrousel";
import LoginPage from "./pages/LoginPage";

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
