import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Skills from "./Skills";
import UserContext from "./UserContext";
const App = () => {
 // const [section, setSection] = useState("home");

  const {section,setSection} = useContext(UserContext);
  return (
    <div>
    
    
      <Home />
      <Skills />
      <Projects />
      <Contact />

    </div>
  );
};
export default App;