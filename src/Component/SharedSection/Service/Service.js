import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Service = () => {
  let { id } = useParams();

  const [serviceDetails, setServiceDetails] = useState([]);

  const [singleService, setSingleService] = useState({});

  //  Load fakedata
  useEffect(() => {
    fetch("/singleService.json")
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, []);

  //Load single data
  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    const foundService = serviceDetails.find((service) => service?.id == id);
    setSingleService(foundService);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceDetails]);

  return (
    <div className="container-fluid py-5 px-3">
      <Container>
        <Card>
          <Card.Img
            variant="top"
            src={singleService?.imgurl}
            alt="Card image"
          />
          <Card.Body>
            <Card.Title>{singleService?.name}</Card.Title>
            <Card.Text>
              <h6>{singleService?.shortintro}</h6>
            </Card.Text>
            <input
              className="btn button-regular"
              type="button"
              value="Back"
              onClick={() => {
                window.history.back();
              }}
            />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Service;
