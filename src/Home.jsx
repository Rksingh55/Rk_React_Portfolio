import React from "react";
import "./App.css";
import i1 from "./Image/i1.jpg";
import About from "./About";
import Services from "./Services";

import Skills from "./Skills";
import Contact from "./Contact";
import Project from "./Project";
import Footer from "./Footer";
import Education from "./Education";
// import { NavLink } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="home container">
        <div class="container">
          <div className="row">
            <div className="col-sm  p-1 main-header">
              <div className=" main-data p-1 homepage">
                <h1>Hello</h1>
                <span>I'm Rakesh Singh</span>
                <p>
                  <h1>Web Devloper..!</h1>
                  <h5>
                    I Am A FrontEnd Devloper, MernStack Devloper, A Designer And
                    A Engineering student..
                  </h5>
                  
                  {/* <i class="bi bi-linkedin"></i><span>   </span>
                  <i class="bi bi-whatsapp"></i><span>   </span>
                  <i class="bi bi-envelope-fill"></i> */}
                </p><br/>
                
                

               <button type="button" class="btn btn-warning">
                Download CV
                </button>
                
            <span> </span>
                <button type="button" class="btn btn-warning">
                  Contact Me
                </button>
              </div>
            </div>
            <div className="col-sm p-3 ">
              <div className=" ">
                <img src={i1} className="img-thumbnail img1 " alt="..."  />
              </div>
            </div>
          </div>
          
        </div><br/>
        <About/><br/>
        <Education/><br/><br/>
        <Skills/><br/>
        <Project/><br/><br/>
        <Services/><br/>
        <Contact/><br/>
      </div>
        <Footer/>
    </>
  );
}

export default Home;
