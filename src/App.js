import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import './App.css';
import Contact from "./Components/Home/Contact/Contact";
import About from "./Components/Home/Home/About/About";
import Home from "./Components/Home/Home/Home";
import Skills from "./Components/Home/Home/Skills/Skills";
import Projects from "./Components/Home/Projects/Projects";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />


      </Routes>
    </BrowserRouter>

  );
}

export default App;
