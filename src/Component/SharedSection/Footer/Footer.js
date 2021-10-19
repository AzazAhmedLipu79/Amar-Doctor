import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-left col-md-4 col-sm-6">
          <p className="about">
            <span> Amar Doctor: </span>Amar Doctoe is a branch of medicine
            dealing with disorders of the heart. The field includes medical
            diagnosis and treatment of congenital heart defects, coronary artery
            disease, heart failure, valvular heart disease and
            electrophysiology.
          </p>
          <div className="icons">
            <a href="/Home">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="/Home">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="/Home">
              <i className="fab fa-youtube"></i>
            </a>

            <a href="/Home">
              <i className="fab fa-instagram-square"></i>
            </a>
          </div>
        </div>
        <div className="footer-center col-md-4 col-sm-6">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span> 6/5 Noahkhali</span> Noahkhali Division, Mars
            </p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p> (+00) 0000 000 000</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="/Home"> admin@amar-doctor@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="footer-right col-md-4 col-sm-6">
          <h2>
            {" "}
            <img src="https://i.ibb.co/WPZvVBF/file-ai-1.png" alt="" />
          </h2>
          <p className="menu">
            <a href="/Home"> Services</a> |<a href="/Home"> Portfolio</a> |
            <a href="/Home"> News</a> |<a href="/Home"> Contact</a>
            <a href="/Home"> Home</a> |<a href="/Home"> About</a> |
          </p>
          <p className="name"> Amar Doctor &copy; 2021</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
