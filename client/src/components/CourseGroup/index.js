import React, { useState } from "react";
import "./style.css";
import Checkout from "../../Checkout";

const CoursesSection = (props) => {
  const [products] = useState([
    { name: "HTML5", cost: 35.0, image: "./images/html.png", link: "/html" },
    { name: "CSS3", cost: 45.0, image: "./images/css.png", link: "/css" },
    {
      name: "JavaScript",
      cost: 55.0,
      image: "./images/java.png",
      link: "/javascript",
    },
  ]);

  return (
    <>
      <h1 className="display-3 text-center">Front End Courses</h1>
      <div className="container">
        <div className="row">
          {products.map((product, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card mb-3">
                <div className="product" key={idx}>
                  <img
                    src={product.image}
                    alt={product.image}
                    className="card-img-top"
                    id="html"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <h6 className="card-subtitle text-muted mb-2">
                      ${product.cost}
                    </h6>
                    <div className="card-text">
                      {/* this is stripe button  */}
                      <p className="App-intro" id="purchase">
                          <Checkout
                            name={"Kids Coding Corner"}
                            description={product.name}
                            amount={product.cost}
                          />
                        </p>
                        {/* ===================================================== */}
                        <a href={product.link} className="btn" id="content-btn">
                          Course Content
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          ;
        </div>
      </div>

      <row>
        <div className="col-xl-12" id="info-row">
          <h2 className="text-center" id="info-h">
            What You Receive With Each Course
          </h2>
          <h6 className="text-center" id="info-p">
            Learn Web Development Essentials || Build Websites from Scratch ||
            Lifetime Access || Downloadable Resources
          </h6>
        </div>
      </row>
    </>
  );
};

export default CoursesSection;
