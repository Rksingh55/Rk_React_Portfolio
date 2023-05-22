import React from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Navbar from "./Navbar";
import Home from "./Home";
import Error from "./Error";
import About from "./About";
import Services from "./Services";
import Project from "./Project";
import Contact from "./Contact";
import Skills from "./Skills";
import Education from "./Education";

function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="education" element={<Education/>}/>
        <Route path="/skill" element={<Skills/>}/>
        <Route path="/service" element={<Services/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Error/>}/>
        
    </Routes>
   </BrowserRouter>

    </>
  );
}

export default App;
