// import MovingDot from "./components/MovingPointer";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToggleColorMode } from "./components/Darkmode";
function App() {
  return (

    <ToggleColorMode>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Routes>
          <Route path="/Projects" element={<Projects />} />
        </Routes>
        <Routes>
          <Route path="/About" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/Skills" element={<Skills />} />
        </Routes>
        <Routes>
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        {/* <MovingDot /> */}
      </Router>
    </ToggleColorMode>


  );
}

export default App;
