import React from "react";
import "./DoctorSay.css";
const DoctorSay = () => {
  return (
    <div class="testimonial1 py-5 bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 text-center">
            <h4 class="my-3">Check what our Doctors are Saying</h4>
            <h6 class="subtitle font-weight-normal">
              You can relay on our amazing features list and also our customer
              services will be great experience Medical features
            </h6>
          </div>
        </div>
        {/* <!-- Row  --> */}
        <div class="owl-carousel owl-theme testi1 mt-4">
          {/* <!-- item --> */}
          <div class="item">
            <div class="card card-shadow border-0 mb-4">
              <div class="card-body">
                <div class="position-relative thumb bg-success-gradiant d-inline-block text-white mb-4">
                  <img
                    src="https://media.istockphoto.com/photos/profile-view-of-senior-persian-man-doctor-thinking-against-white-picture-id669685368?b=1&k=20&m=669685368&s=170667a&w=0&h=VxCYv2nkjbfHYUk7deNnY3Dwi_50IUG3YRhzuXrDP0s="
                    alt=""
                    class="thumb-img position-absolute rounded-circle"
                  />{" "}
                  Dr. Lawson
                </div>
                <h5 class="font-weight-light">
                  Our Surgery quality is world class level so you can trush on
                  us.
                </h5>
                <span class="devider d-inline-block my-3"></span>
                <h6 class="font-weight-normal">Senior Surgen, Amar Doctor</h6>
              </div>
            </div>
          </div>
          {/* <!-- item --> */}
          {/* <!-- item --> */}
          <div class="item">
            <div class="card card-shadow border-0 mb-4">
              <div class="card-body">
                <div class="position-relative thumb bg-success-gradiant d-inline-block text-white mb-4">
                  <img
                    src="https://media.istockphoto.com/photos/profile-of-man-in-mask-picture-id1212874687?b=1&k=20&m=1212874687&s=170667a&w=0&h=g_dAl2PUL5j0y4owbdOh6oWFQcSfIkJoS32w692qUGY="
                    alt=""
                    class="thumb-img position-absolute rounded-circle"
                  />{" "}
                  Dr. Firebase
                </div>
                <h5 class="font-weight-light">
                  We are always ready to give you pera & pera.
                </h5>
                <span class="devider d-inline-block my-3"></span>
                <h6 class="font-weight-normal">Firebase , Amar Doctor</h6>
              </div>
            </div>
          </div>
          {/* <!-- item -->
      <!-- item --> */}
          <div class="item">
            <div class="card card-shadow border-0 mb-4">
              <div class="card-body">
                <div class="position-relative thumb bg-success-gradiant d-inline-block text-white mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGRvY3RvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    class="thumb-img position-absolute rounded-circle"
                  />{" "}
                  Dr. Anderson
                </div>
                <h5 class="font-weight-light">
                  We try to provide you the best treatment .
                </h5>
                <span class="devider d-inline-block my-3"></span>
                <h6 class="font-weight-normal">Ceo, Amar Doctor</h6>
              </div>
            </div>
          </div>
          {/* <!-- item -->
      <!-- item --> */}
          <div class="item">
            <div class="card card-shadow border-0 mb-4">
              <div class="card-body">
                <div class="position-relative thumb bg-success-gradiant d-inline-block text-white mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBkb2N0b3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    class="thumb-img position-absolute rounded-circle"
                  />{" "}
                  Dr. HygenBarg
                </div>
                <h5 class="font-weight-light">
                  Our Teachology waiting for you to see our amazing features
                </h5>
                <span class="devider d-inline-block my-3"></span>
                <h6 class="font-weight-normal">
                  Managing Director, Amar Doctor
                </h6>
              </div>
            </div>
          </div>
          {/* <!-- item --> */}
        </div>
      </div>
    </div>
  );
};

export default DoctorSay;
