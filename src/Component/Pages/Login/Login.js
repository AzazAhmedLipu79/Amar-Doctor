import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useFirebase from "../../../Hooks/useFirebase";
import "./Login.css";

const Login = () => {
  const { user, SignInUsingGoogle } = useFirebase();
  const submitLogin = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  };
  return (
    <div className="login-main p-5">
      <h2>{user.displayName}</h2>
      <section className="vh-100 m-5 p-5  login-area">
        <div className="container pb-5 py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="login img"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                {/* <!-- Email input --> */}
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4 px-3 py-2">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label className="form-check-label" htmlFor="form1Example3">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                  <Link to="/SignUp">Forgot password?</Link>
                </div>

                {/* <!-- Submit button --> */}

                <button
                  onClick={submitLogin}
                  type="submit"
                  className="btn  button-regular btn-lg btn-block"
                >
                  Sign in
                </button>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>
              </form>
              <button
                onClick={SignInUsingGoogle}
                className="btn button-regular"
              >
                <i className="fab fa-google me-2"></i>Continue with Google
              </button>
            </div>
            <span>
              Don't Have a Account ?{" "}
              <Link to="/SignUp">
                {" "}
                <b>Create Account</b>{" "}
              </Link>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
