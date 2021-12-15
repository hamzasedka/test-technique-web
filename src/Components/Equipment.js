import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Equipment = ({ Equipments, EquipmentId }) => {
  console.log(EquipmentId);
  return (
    <Card className="Equipment-card">
      <Link to={"details/" + EquipmentId}>
        <Card.Img
          variant="top"
          src={Equipments.photo}
          style={{ height: "300px" }}
        />
      </Link>
      <Card.Body>
        <Card.Title>{Equipments.name}</Card.Title>
        <Card.Text>{Equipments.domain}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          Le nombre de défauts : {Equipments.nbFaults}
        </small>
      </Card.Footer>
    </Card>
  );
};

export default Equipment;
