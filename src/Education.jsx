import React from "react";

function Education() {
  return (
    <>
      <div className="container education">
        <br />
        <h2>
          Edu<span2>cation</span2>
        </h2>
        <br />
        <div class="container">
          <div class="row">
            <div class="col-lg-6 ">
              <div class="card e1">
                <div class="card-body">
              <h3> <i class="bi bi-mortarboard-fill"></i> Graduation</h3>
              <p>I am Persuing My B.Tech From Rajshree Institute Of Management And Technology
              Bareilly In CSE Branch.</p>
              <span6>Percentage 82%</span6>
                </div>
              </div><br/>
            </div><br/>
            <div class="col-lg-6 ">
              <div class="card e2">
                <div class="card-body">
                <h3><i class="bi bi-bank"></i> Intermediate</h3>
              <p>I completed my Intermediate from Cooperative Inter College Pipraich Gorakhpur.</p>
              <span6>Percentage 68%</span6>
                </div>
              </div>
            </div>
          </div>
        </div><br/>
        <div class="container">
          <div class="row">
            <div class="col-lg-6 ">
              <div class="card e3">
                <div class="card-body">
                <h3> <i class="bi bi-h-circle-fill"></i> Highschool</h3>
              <p>I completed my Highschool from Ramjatan Inter College Bhatahat Gorakhpur.</p>
              <span6>Percentage 80%</span6>
                </div>
              </div>
            </div>
            
          </div>
        </div><br/>
      </div>
    </>
  );
}

export default Education;
