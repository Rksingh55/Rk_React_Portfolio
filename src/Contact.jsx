import React from "react";
import { NavLink } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="container contact">
        <br />
        <h2>
          Get In<span2>Touch</span2>
        </h2>
        <div class="container">
          <br />
          <div class="row ">
            <div class="col ">
              <div className="form1 mt-3">
                {/* <h2> Contact <span2>Me</span2></h2> */}
                
                <h6>
                  You Can Contact Me Using This Form, Alternatively Can Use The
                  Link, Email and Phone No
                </h6>
                
                <div class="card ">
                  <div class="card-body con ">
                    <NavLink
                      className="nav-link "
                      aria-current="page"
                      to="/service"
                    >
                      <i class="bi bi-linkedin"></i> <span2></span2>
                      https://www.linkedin.com/in/rakesh-singh-154108235
                    </NavLink>
                  </div>
                </div>
                <div class="card ">
                  <div class="card-body con">
                    <NavLink
                      className="nav-link "
                      aria-current="page"
                      to="/service"
                    >
                      <i class="bi bi-envelope-fill">  </i> <span2></span2>
                      rakeshecon@gmail.com
                    </NavLink>
                  </div>
                </div>
                <div class="card ">
                  <div class="card-body con">
                    <NavLink
                      className="nav-link "
                      aria-current="page"
                      to="/service"
                    >
                      <i class="bi bi-telephone-fill"></i> <span2> </span2> 7310307513
                      <span3>    </span3>
                      <i class="bi bi-whatsapp"></i> <span3></span3> 9621671657
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div class="col form1">
              <div className="container-fluid form  ">
                <form className="">
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form4Example1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="form4Example1"
                      class="form-control"
                      placeholder="Enter Your Name"
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form4Example2">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="form4Example2"
                      class="form-control"
                      placeholder="Enter Your Email"
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form4Example3">
                      Message
                    </label>
                    <textarea
                      class="form-control"
                      id="form4Example3"
                      rows="4"
                      placeholder="Enter Your Messege"
                    ></textarea>
                  </div>

                  <button type="submit" class="btn btn-primary btn-block mb-4">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div><br/><br/>
      </div>
    </>
  );
}

export default Contact;
