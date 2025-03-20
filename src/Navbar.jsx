import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import UserContext from "./UserContext";
import { useContext } from "react";
const Navbar = () => {
  const {section,setSection}=useContext(UserContext);
  return(
    <nav className=" fixed bg-none w-full top-0 z-10 shadow-xl p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white text-lg font-bold">Sreeram</div>
      <div className="space-x-4">
        <button onClick={() => setSection("home")} className="text-black hover:text-white">Home</button>
        <button onClick={() => setSection("projects")} className="text-black hover:text-white">Projects</button>
        <button onClick={() => setSection("skills")} className="text-black hover:text-white">Skills</button>
        <button onClick={() => setSection("contact")} className="text-black hover:text-white">Contact</button>
      </div>
    </div>
  </nav>
  );
};
export default Navbar;