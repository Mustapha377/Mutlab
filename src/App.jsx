import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../src/component/Navbar";
import HomePage from "./pages/HomePages";
import ProjectList from "./component/projectList";
import PostProject from "./pages/PostProject";
import LandingPage from './pages/landingPage';
import './index.css';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  const hideNavbar = location.pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/post" element={<PostProject />} />
      </Routes>
    </>
  );
}

export default App;