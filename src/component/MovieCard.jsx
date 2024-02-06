import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";
// import { Link1 } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Description from "./screens/Description";
// import Description1 from "./screens/Description1";

function MovieCard({ title, description, link, posterURL, rating }) {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <Card className="images" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={posterURL} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">{rating}</Button>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default MovieCard;
