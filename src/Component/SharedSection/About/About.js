import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className=" border shadow-sm mt-4 px-5 service-39 py-5 wrap-service39-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img
              src="https://media.istockphoto.com/photos/team-of-doctors-and-nurses-in-hospital-picture-id1307543618?k=20&m=1307543618&s=612x612&w=0&h=YdfJ_fKKNZQ3AYPFfNn8r4065zANzxGNGv0fIzKgrRg="
              className="img-fluid"
              alt="img"
            />
          </div>
          <div className="col-lg-6">
            <div className="card-body">
              <h3 className="text-uppercase">Find Your New Smile</h3>
              <p className="my-4">
                Treatment for All Ages ; Check out our complete list of
                treatments for even more options.
              </p>
              {/* <!-- column  --> */}
              <div className="d-block d-md-flex mb-4">
                <div className="display-5 mr-3">
                  <i className="icon-paypal text-success-gradiant"></i>
                </div>
                <div>
                  <h5>We have several braces options:</h5>
                  <h6 className="subtitle font-weight-normal">
                    Traditional metal braces Ceramic braces
                  </h6>
                </div>
              </div>
              {/* <!-- column  --> */}
              <div className="d-block d-md-flex mb-4">
                <div className="display-5 mr-3">
                  <i className="icon-paper-plane text-success-gradiant"></i>
                </div>
                <div>
                  <h5>We offer two clear aligner options:</h5>
                  <h6 className="subtitle font-weight-normal">
                    Invisalign® full comprehensive treatment Smile Express® for
                    adults at home
                  </h6>
                </div>
              </div>
              {/* <!-- column  --> */}
              <div className="d-block d-md-flex mb-4">
                <div className="display-5 mr-3">
                  <i className="icon-folder text-success-gradiant"></i>
                </div>
                <div>
                  <h5>Experience the Difference</h5>
                  <h6 className="subtitle font-weight-normal">
                    Smile Doctors is the fastest growing network of trusted
                    orthodontists in the country. We customize treatment plans
                    for kids, teens and adults.
                  </h6>
                </div>
              </div>
              <a
                href="/"
                className="btn btn-success-gradiant text-white btn-md border-0 mt-4"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
