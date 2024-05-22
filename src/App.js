import "./App.css";
// import About from "./components/About";
// import Contact from "./components/Contact";
import Main from "./components/Main";
// import MovingDot from "./components/MovingPointer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
// import Skills from "./components/Skills";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <>
          <Navbar />

        </>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Projects />} />
        </Routes>
        {/* <MovingDot /> */}
        {/* <About />
        <Skills />
        <Projects />
        <Contact /> */}
      </div>
    </Router>
  );
}

export default App;
