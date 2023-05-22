import React from "react";
import "./Index2.css";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light  fixed-bottom " >
          <div className="container-fluid">
            <NavLink className="navbar-brand brand" to="#">
            <div class="spinner-grow  spinner-grow-sm" role="status">
                <span class="visually-hidden">Loading...</span>
              </div><span> </span>
              Port<span2>folio</span2>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                    style={({ isActive }) => {
                      return { color: isActive ? "red" : "" };
                    }}
                  >
                 <i class="bi bi-house-door-fill"></i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to="/about"
                    style={({ isActive }) => {
                      return { color: isActive ? "red" : "" };
                    }}
                  >
                 <i class="bi bi-file-person-fill"></i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to="/education"
                    style={({ isActive }) => {
                      return { color: isActive ? "red" : "" };
                    }}
                  >
              <i class="bi bi-journal-bookmark-fill"></i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to="/skill"
                    style={({ isActive }) => {
                      return { color: isActive ? "red" : "" };
                    }}
                  >
                <i class="bi bi-laptop-fill"></i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to="/service"
                    style={({ isActive }) => {
                      return { color: isActive ? "red" : "" };
                    }}
                  >
                   <i class="bi bi-gear-wide-connected"></i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to="/project"
                    style={({ isActive }) => {
                      return { color: isActive ? "red" : "" };
                    }}
                  >
               <i class="bi bi-kanban"></i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to="/contact"
                    style={({ isActive }) => {
                      return { color: isActive ? "red" : "" };
                    }}
                  >
       <i class="bi bi-person-lines-fill"></i>
                  </NavLink>
                </li>
               
              </ul>
             
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
