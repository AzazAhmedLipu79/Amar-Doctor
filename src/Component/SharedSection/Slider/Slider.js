import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "./Slider.css";
const Slider = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item className="slider-area">
          <img
            className="d-block w-100 slider-img"
            src="
https://i.ibb.co/qCL5j78/Shot-of-a-surgeon-looking-at-a-monitor-in-an-operating-room.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="container slider-card px-5">
              <h2>
                We Have
                <span className="bg-info px-3 py-1 text-white">
                  Award Winning
                </span>{" "}
                Doctors
              </h2>
              <p>
                SQUARE Hospital aims to provide the highest possible level of
                care by the qualified consultants from India, Singapore, USA, UK
                & quality hospitals in the Middle East.
              </p>
              <Button className="button-regular" variant="outline-info">
                Know More
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slider-area">
          <img
            className="d-block w-100 slider-img"
            src="https://i.ibb.co/QJzYb72/Shot-of-medical-practitioners-having-a-conversation-in-a-hospital.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="container slider-card px-5">
              <h2>
                We known as
                <span className="bg-info px-3 py-1 text-white">
                  The Best Doctor
                </span>{" "}
                In BD
              </h2>
              <p>
                The reputation of Square Hospital is the result of quality
                clinical outcome and comprehensive care, made achievable through
                world class integrated healthcare facilities by highly trained
                professionals.
              </p>
              <Button className="button-regular" variant="outline-info">
                Know More{" "}
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slider-area">
          <img
            className="d-block w-100 slider-img"
            src="https://i.ibb.co/N2HDKC9/gettyimages-1156495787-612x612.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="container slider-card px-5">
              <h2>
                Welcome to{" "}
                <span className="bg-info px-3 py-1  text-white">
                  Amar Doctor
                </span>
              </h2>
              <p>
                AmarDoctor Hospitals Limited is a tertiary care hospital and the
                leading contributor of private healthcare services in
                Bangladesh. This has been achieved only through consistent
              </p>
              <Button className="button-regular" variant="outline-info">
                Know More
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
