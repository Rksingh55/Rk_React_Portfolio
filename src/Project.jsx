import React from "react";
import i5 from "./Image/p1.jpg";
import rk from "./Image/ums.jpg";
import i6 from "./Image/rp.jpg";
import ee from "./Image/ee.jpg";
import hh from "./Image/hh.jpg";

function Project() {
  return (
    <>
      <div className="container project">
        <br />
        <h2>
          My <span2>Projects</span2>
        </h2><br/>

        <div class="container ">
          <div class="row"> 
            <div class="col-sm-12 col-lg-6 " >
              <div class="card mb-1 p1 " >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={i5} class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Portfolio</h5>
                      <p class="card-text">
                        This Personal Portfolio Website describe about my skills 
                          project, services, and contact information, this website make by using 
                        <br/><div className="p-1">
                        <span4>HTML</span4>    <span4>CSS</span4>    <span4>JS</span4> <span4>JQUERY</span4>    <span4>BOOTSTRAP</span4>
                        </div>
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col "></div>
          </div>
        </div><br/>
        <div class="container">
          <div class="row"> 
            <div class="col-sm-12 col-lg-6 ">
             
            </div>
            <div class="col ">
            <div class="card mb-3 p2">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={rk} class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">User Management System</h5>
                      <p class="card-text">
                      This Website use for manage and store the user information and delete, update. 
                      , this website make by using 
                        <br/><div className="p-1">
                        <span4>MERN</span4> <span4>HTML</span4>    <span4>CSS</span4>    <span4>JS</span4>    <span4>BOOTSTRAP</span4>
                        </div>
                       
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><br/>
        <div class="container">
          <div class="row"> 
            <div class=" col-sm-12 col-lg-6 ">
              <div class="card mb-3 p3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={i6} class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">React Portfolio</h5>
                      <p class="card-text">
                      This Personal Portfolio Website describe about my skills 
                          project, services, and contact information, this website make by using 
                        <br/><div className="p-1">
                        <span4>REACT</span4> <span4>HTML</span4>    <span4>CSS</span4>    <span4>JS</span4>    <span4>BOOTSTRAP</span4>
                        </div> 
                      </p>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col "></div>
          </div>
        </div><br/>
        <div class="container">
          <div class="row"> 
            <div class="col-sm-12 col-lg-6 ">
             
            </div>
            <div class="col ">
            <div class="card mb-3 p4">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={ee} class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Ecommerce Website</h5>
                      <p class="card-text">
                      This Ecommerce Website make by using 
                        <br/><div className="p-1">
                        <span4>MERN</span4> <span4>HTML</span4>    <span4>CSS</span4>    <span4>JS</span4>    <span4>BOOTSTRAP</span4>
                        </div>
                      </p>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><br/>
        <div class="container">
          <div class="row"> 
            <div class="col-sm-12 col-lg-6">
              <div class="card mb-3 p5 ">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={hh} class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">RIMT Hostel Website</h5>
                      <p class="card-text">
                        This  Website make for the share the deep information
                        about Hostel life , Environment and Sports etc.this website make by using 
                        <br/><div className="p-1">
                        <span4>HTML</span4>    <span4>CSS</span4>    <span4>JS</span4> <span4>JQUERY</span4>    <span4>BOOTSTRAP</span4>
                        </div>
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col "></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
