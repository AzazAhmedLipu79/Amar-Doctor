/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../../Hooks/useFirebase";

const Header = () => {
  const { user, logout } = useFirebase();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-my-doctor">
        <Container>
          <Link to="/">
            <Navbar.Brand href="">
              <img
                alt=""
                src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wbvkod4mhwryj9ce42vo"
                height="50"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto fw-bold ">
              <Nav.Link>
                {" "}
                <Link to="/Services"> Services</Link>
              </Nav.Link>

              <Nav.Link>
                {" "}
                <Link to="/DoctorSays"> DoctorSays</Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link to="/Contact"> Contact</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              {user.photoURL && (
                <div className="d-flex align-items-center justify-content-evenly ">
                  <img
                    className="w-25 rounded-circle"
                    src={user?.photoURL}
                    alt={`${user.displayName}'s image`}
                  />
                  <h6 className="badge py-3 px-4 rounded-pill bg-success">
                    {user.displayName}
                  </h6>
                </div>
              )}
              {user.email ? (
                <div>
                  <Button
                    className="button-regular shadow"
                    onClick={logout}
                    variant="secondary"
                  >
                    <i className="fas fa-sign-out-alt"></i>
                  </Button>
                </div>
              ) : (
                <div>
                  {" "}
                  <Link to="/Login">
                    <Button className="button-regular" variant="danger">
                      Login
                    </Button>
                  </Link>
                  <Link to="/SignUp">
                    <Button className="button-regular" variant="dark">
                      SignUp
                    </Button>
                  </Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
