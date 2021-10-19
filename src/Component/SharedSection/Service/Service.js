import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Service = () => {
  let { id } = useParams();

  const [serviceDetails, setServiceDetails] = useState([]);

  const [singleService, setSingleService] = useState({});

  //  data load howa
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Programming-Hero-Web-Course3/healthcare-related-website-ahsanlisan/master/public/service.json?token=AUU362FD5OMVRNACHK7CGHDBN2RPA"
    )
      .then((res) => res.json())
      .then((data) => setServiceDetails(data.service));
  }, []);

  // call hbe jokon amar shob data load hye state e set hbe
  useEffect(() => {
    const foundService = serviceDetails.find((service) => service?.id === id);
    setSingleService(foundService);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceDetails]);

  return (
    <div>
      <h1>{id}</h1>
      {console.log(singleService)}
      {/* <h2> {singleService?.name}</h2> */}
      <Container>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={singleService?.imgurl} />
            </Card>
          </Col>
          <Col md={5}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{singleService?.name}</Card.Title>
                <Card.Text>
                  <b> Email : {singleService?.shortintro}</b>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
