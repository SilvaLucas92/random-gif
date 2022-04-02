import React from "react";
import '../css/app.css';
function Random({randomGif}) {
    return (
        <div className="container">

        <div className="row text-center">
    
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
              <img className="card-img-top" src= {randomGif.image} alt="" />
              <div className="card-body">
                <h4 className="card-title"> {randomGif.title}  </h4>
              </div>
            </div>
          </div>
          </div>
          </div>

    )
}
export default Random;

