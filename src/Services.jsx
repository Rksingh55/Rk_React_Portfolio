import React from "react";
import i5 from "./Image/i5.gif";
import rk from "./Image/rk.gif";
import i6 from "./Image/i7.gif";
function Services() {
  return (
    <>
      <div className="container service">
        <br />
        <h2>
          My <span2>Services</span2>
        </h2>
        <div class="row row-cols-1 row-cols-md-3 g-4 p-3">
          <div class="col">
            <div class="card h-100 p2 ">
              <img src={i5} class="card-img-top" alt="..." height="200px" />
              <div class="card-body">
                <h5 class="card-title">Static Websites</h5>
                <p class="card-text">
                  I will Design Any type of Static Websites, By using Multiple
                  Technlogy depends on customer demands.
              
                <span6> Like-</span6> College, Hostel , Shop, Medical Shop
                Websites or Personal Portfolio.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 p2">
              <img src={i6} class="card-img-top" alt="..." height="200px" />
              <div class="card-body">
                <h5 class="card-title">Dynamic Websites</h5>
                <p class="card-text">
                  I will Design Any Type Of Dynamic Website{" "}
                
                <span6>Like-</span6> Ecommerce, Startup Company, Database
                Management System, Library Mangagement or any Type of Dynamic
                Website.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 p3">
              <img src={rk} class="card-img-top" alt="..." height="200px" />
              <div class="card-body">
                <h5 class="card-title">
                  Web Hosting, Web Designing, Photo Editing
                </h5>
                <p class="card-text">
                  Any type of Photo Editing, Web Designing, or web Hosting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default Services;
