import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../../../Firebase/firebase.init";
import Swal from "sweetalert2";

initializeAuthentication();

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, pass)
    .then((result) => {
      // Signed in
      const user = result.user;
      console.log(`dndd`, user);

      Swal.fire({
        icon: "success",
        title: "Congratulation.......",
        text: "Your Account has been Signed",
        footer: '<a href="/Home">See More</a>',
      });
      window.location.href = "/";
      // ...
    })
    .catch((error) => {
      console.log("error");
      // ..
    });

  const handleRegistration = (e) => {
    console.log(email, pass);
    e.preventDefault();
  };
  const handleEmailReg = (e) => {
    setEmail(e.target.value);
  };
  const handlePassReg = (e) => {
    setPass(e.target.value);
  };

  return (
    <div className="container-fluid ps-md-0">
      <div className="row g-0 p-4 shadow-lg m-5">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image">
          <img
            src="https://i.ibb.co/bgcNzm2/undraw-secure-login-pdn4.png"
            alt=""
          />
        </div>
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h3 className="login-heading mb-4">Welcome back!</h3>

                  {/* <!-- Sign In Form --> */}
                  <form onSubmit={handleRegistration}>
                    <div className="form-floating mb-3">
                      <input
                        required
                        onBlur={handleEmailReg}
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        required
                        onBlur={handlePassReg}
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="d-grid">
                      <button
                        className="btn btn-lg button-regular btn-login text-uppercase fw-bold mb-2"
                        type="submit"
                      >
                        Registration
                      </button>

                      <div className="text-center">
                        <i> Already Have account or Google Login ? </i>
                        <b>
                          {" "}
                          <Link to="/Login">Login</Link>
                        </b>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
