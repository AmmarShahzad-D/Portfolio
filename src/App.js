import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
// import MovingDot from "./components/MovingPointer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      {/* <MovingDot /> */}
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
