import "./App.css";
import Calendar from "./components/Calendar/Calendar";
import Carrousel from "./components/Carrousel";
import Clock from "./components/Clock/Clock";
import Courses from "./components/Courses/Courses";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Layout from "./Layout";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
