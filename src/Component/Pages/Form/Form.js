import React from "react";
import Swal from "sweetalert2";
import "./Form.css";
const Form = () => {
  const bgStyle = {
    backgroundImage:
      "url(https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?size=338&ext=jpg)",
  };

  const SuccessFool = () => {
    Swal.fire({
      icon: "success",
      title: "Your Messeage has been Sent",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="banner3">
      <div className="py-5 banner" style={bgStyle}>
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-5">
              <h3 className="my-3 text-white font-weight-medium text-uppercase">
                Book Appointment
              </h3>
              <div className="bg-white">
                <div className="form-row border-bottom">
                  <div className="p-4 left border-right w-50">
                    <label className="text-inverse font-12 text-uppercase">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="border-0 p-0 font-14 form-control"
                      placeholder="Your First Name"
                    />
                  </div>
                  <div className="p-4 right w-50">
                    <label className="text-inverse font-12 text-uppercase">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="border-0 p-0 font-14 form-control"
                      placeholder="Your Last Name"
                    />
                  </div>
                </div>
                <div className="form-row border-bottom p-4">
                  <label className="text-inverse font-12 text-uppercase">
                    Email Address
                  </label>
                  <input
                    type="text"
                    className="border-0 p-0 font-14 form-control"
                    placeholder="Enter your Email Address"
                  />
                </div>
                <div className="form-row border-bottom p-4">
                  <label className="text-inverse font-12 text-uppercase">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="border-0 p-0 font-14 form-control"
                    placeholder="Enter your Phone Number"
                  />
                </div>
                <div className="form-row border-bottom p-4 position-relative">
                  <label className="text-inverse font-12 text-uppercase">
                    Booking Date
                  </label>
                  <div className="input-group date">
                    <input
                      type="text"
                      className="border-0 p-0 font-14 form-control"
                      id="dp"
                      placeholder="Select the Appointment Date"
                    />
                    <label className="mt-2" for="dp">
                      <i className="icon-calendar mt-1"></i>
                    </label>
                  </div>
                </div>
                <div className="form-row border-bottom p-4">
                  <label className="text-inverse font-12 text-uppercase">
                    Message
                  </label>
                  <textarea
                    col="1"
                    row="1"
                    className="border-0 p-0 font-weight-light font-14 form-control"
                    placeholder="Write Down the Message"
                  ></textarea>
                </div>
                <div>
                  <button
                    onClick={SuccessFool}
                    className="m-0 bg-info border-0 py-4 font-14 font-weight-medium btn button-regular  rounded-0 text-center text-white text-uppercase"
                  >
                    <span>Book Yor Appointment Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
