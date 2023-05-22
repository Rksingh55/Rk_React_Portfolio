import React from "react";

function Skills() {
  return (
    <>
      <div className="container skill"><br/>
        <h2>
          Technical <span2>Skills</span2>
        </h2>
        <br />
        <div class="container">
          <div class="row">
            <div class="col-sm-4 ">
             <span3>FrontEnd Technologies</span3>
              <br /> <br />
              <div class="card ">
                <div class="card-body s1">
                  <i class="bi bi-filetype-html"></i> HTML                </div>
              </div>
              <div class="card ">
                <div class="card-body s2">
                  <i class="bi bi-filetype-css"></i> CSS
                </div>
              </div>
              <div class="card ">
                <div class="card-body  bg-warning">
                  <i class="bi bi-filetype-js"></i> JavaScript
                </div>
              </div>
              <div class="card ">
                <div class="card-body s4">
                <i class="material-icons" >cloud</i> JQuery
                </div>
              </div>
              <div class="card ">
                <div class="card-body s6">
                <i class="bi bi-bootstrap"></i> Bootstrap 5
                </div>
              </div>
              <div class="card ">
                <div class="card-body s5">
                <i class="bi bi-filetype-jsx"></i> React Js
                </div>
              </div>
              <br />
            </div>
            <div class="col-sm-4 ">
            <span3>Backend Technologies</span3>
              <br /> <br />
              <div class="card ">
                    <div class="card-body s5">
               Node Js
                    </div>
                  </div>
                  <div class="card ">
                    <div class="card-body s4">
                   Express Js
                    </div>
                  </div>
                  <br />
                  <i class="bi bi-database-fill-up"></i> <span3>Database</span3><br /><br />
                  <div class="card ">
                    <div class="card-body s6">
                    <i class="bi bi-filetype-sql"></i> MySQL
                    </div>
                  </div>
                  <div class="card ">
                    <div class="card-body s3">
                 MongoDb
                    </div>
                  </div>
                  <div class="card ">
                    <div class="card-body s2">
               PHP MyAdmin
                    </div>
                  </div>
             
            </div>
            <div class="col-sm-4 ">
            
                  <span3>Programming Languages</span3> <br /><br />
                  <div class="card ">
                    <div class="card-body s1">
                     C
                    </div>
                  </div>
                  <div class="card ">
                    <div class="card-body bg-primary">
                    <i class="bi bi-filetype-py"></i> Python
                    </div>
                  </div>
                  <div class="card ">
                    <div class="card-body bg-warning">
                    <i class="bi bi-filetype-java"></i> Java
                    </div>
                  </div>
              <br/>
              <span3>Other Technologies</span3><br /><br />
                  <div class="card ">
                    <div class="card-body bg-primary">
                    <i class="bi bi-github"></i> Github
                    </div>
                  </div>
                  <div class="card ">
                    <div class="card-body bg-info">
                    <i class="bi bi-file-ppt"></i> Photoshop
                    </div>
                  </div>
                </div>
            
            </div>
           
          </div>
        </div>
        <br/><br/>
      
    </>
  );
}

export default Skills;
