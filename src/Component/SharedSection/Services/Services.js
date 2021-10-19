import React, { useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container p-5">
      <h2>This is services</h2>
      {/* map the json */}

      <Row xs={1} md={3} className="g-4">
        {services.map((service) => (
          <Card className="p-3 rounded shadow ">
            <Card.Img variant="top" src={service?.imgurl} />
            <Card.Body>
              <Card.Title> {service?.name}</Card.Title>
              <Card.Text>{service?.shortintro}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <NavLink to={`/Service/${service?.id}`}>
                <button className="btn button-regular">See More</button>
              </NavLink>
            </Card.Footer>
          </Card>
        ))}
      </Row>
    </div>
  );
};

export default Services;
