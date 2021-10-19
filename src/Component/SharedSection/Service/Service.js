import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Service = () => {
  let { id } = useParams;

  const [serviceDetail, setServiveDetail] = useState([]);

  useEffect(() => {
    fetch("./service.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h2> : {id} </h2>
    </div>
  );
};

export default Service;
