import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
const Home = () => (
    <SectionWrapper id="home">
      <h1 className="text-5xl font-bold text-center mb-8 text-black">Hi ,I am Sreeram Angina</h1>
      <p className="p-2 ">I am Sreeram Angina, a passionate Information Technology student at the Indian Institute of Information Technology, Allahabad, with a strong foundation in software development, full-stack web technologies, and problem-solving.
          I have built several projects, including DearDiary, BookMYCourt, and Fooddel, showcasing my ability to develop secure, and user-friendly applications.

With over 1100 solved problems on LeetCode . I love solving problems in Data Structures and Algorithms. 

I am always eager to learn, innovate, and contribute to meaningful tech solutions. Check out my projects on GitHub.</p>
      <div className="flex space-x-6 mt-6">
      <a href="https://github.com/Sreeram1004" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-300 hover:text-white">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/sreeram-angina-2b4482270/" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-300 hover:text-white">
        <FaLinkedin />
      </a>
      <a href="https://drive.google.com/file/d/1eTtZbE57AJDxu0oU7q2-9uYTRGXNSPnt/view" target="_blank" className="text-3xl text-gray-300 hover:text-white">
        <FaFileAlt />
      </a>
    </div>
    </SectionWrapper>
  );
  
export default Home;