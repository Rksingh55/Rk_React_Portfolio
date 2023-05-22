import React from "react";
import i2 from "./Image/i2.jpg";
function About() {
  return (
    <>
      <div class="container about">
        <div className="row">
          <div className="col-sm  p-1 main-header  mt-4  ">
            <div className=" ">
              <img src={i2} className="img-thumbnail img1 img2 " alt="..." />
            </div>
          </div>
          <div className="col-sm p-1 ">
            <div className="col-sm   main-header  aboutpage  ">
              <div className=" main-data p-3 ">
                <span>About <span2>Me</span2></span>
                <h5>I Can Design Anything What You Want.</h5>
                <p>
                Hello there i'm a web designer a FrontEnd Devloper and B.tech final
                year student in CSE branch an i am very passionate and dedicated
                to my work, i have aquire the skills and knowledge  necessory to make 
                your project  success. I enjoy every step of the design process
              , from disscussion and collaboration.
                </p>
                <button type="button" class="btn btn-warning">
                  know More
                </button>
              </div>
            </div>
          </div>
        </div>
        <br/>
      </div>
    </>
  );
}

export default About;
