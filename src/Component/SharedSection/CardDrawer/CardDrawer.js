import React from "react";
import "./CardDrawer.css";

const CardDrawer = () => {
  return (
    <div className="bg-light py-5 service-5">
      <div className="container py-2 px-4">
        <h2 className="text-center fw-bold ">Facts Thats Make Us Unique:</h2>
        {/* <!-- Row  --> */}
        <div className="row">
          {/* <!-- Column --> */}
          <div className="col-md-4 wrap-service5-box">
            <div className="card card-shadow border-0 mb-4">
              <div className="card-body d-flex">
                <div className="mr-4 mb-2 text-success-gradiant icon-size">
                  💔
                </div>
                <div className="">
                  <h6 className="font-weight-medium">
                    <a href="/" className="linking">
                      We Care
                    </a>
                  </h6>
                  <p className="mt-3">
                    You can relay on our amazing features list and also our
                    services.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Column --> */}
          {/* <!-- Column --> */}
          <div className="col-md-4 wrap-service5-box">
            <div className="card card-shadow border-0 mb-4">
              <div className="card-body d-flex">
                <div className="mr-4 mb-2 text-success-gradiant icon-size">
                  🏥
                </div>
                <div className="">
                  <h6 className="font-weight-medium">
                    <a href="/" className="linking">
                      Powerful Tech{" "}
                    </a>
                  </h6>
                  <p className="mt-3">
                    We use advance techonology to give you best Surgery.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Column --> */}
          {/* <!-- Column --> */}
          <div className="col-md-4 wrap-service5-box">
            <div className="card card-shadow border-0 mb-4">
              <div className="card-body d-flex">
                <div className="mr-4 mb-2 text-success-gradiant icon-size">
                  🧑‍⚕️
                </div>
                <div className="">
                  <h6 className="font-weight-medium">
                    <a href="/" className="linking">
                      100% Satisfaction{" "}
                    </a>
                  </h6>
                  <p className="mt-3">
                    You will Never Unsatisfy in our Service , we want make bond
                    with you
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Column --> */}
          {/* <!-- Column --> */}
          <div className="col-md-4 wrap-service5-box">
            <div className="card card-shadow border-0 mb-4">
              <div className="card-body d-flex">
                <div className="mr-4 mb-2 text-success-gradiant icon-size">
                  🩺
                </div>
                <div className="">
                  <h6 className="font-weight-medium">
                    <a href="/" className="linking">
                      Best Doctors
                    </a>
                  </h6>
                  <p className="mt-3">
                    Our Best Doctor-friend always ready for treat you or your
                    closer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Column --> */}
          {/* <!-- Column --> */}
          <div className="col-md-4 wrap-service5-box">
            <div className="card card-shadow border-0 mb-4">
              <div className="card-body d-flex">
                <div className="mr-4 mb-2 text-success-gradiant icon-size">
                  💊
                </div>
                <div className="">
                  <h6 className="font-weight-medium">
                    <a href="/" className="linking">
                      Goal Achievement{" "}
                    </a>
                  </h6>
                  <p className="mt-3">
                    We focus to make you healthy for longterm development .
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Column --> */}
          {/* <!-- Column --> */}
          <div className="col-md-4 wrap-service5-box">
            <div className="card card-shadow border-0 mb-4">
              <div className="card-body d-flex">
                <div className="mr-4 mb-2 text-success-gradiant icon-size">
                  🚑
                </div>
                <div className="">
                  <h6 className="font-weight-medium">
                    <a href="/" className="linking">
                      24 Hour Service
                    </a>
                  </h6>
                  <p className="mt-3">
                    We 24 Hour ready only for you. We will provide the best
                    services that you never thought{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-3 text-center">
            <a
              href="/"
              className="btn button-regular btn-md border-0 text-white"
            >
              <span>View Details</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDrawer;
