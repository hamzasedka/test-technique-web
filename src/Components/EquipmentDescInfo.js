import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { isLoaded, useFirebaseConnect } from "react-redux-firebase";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import CheckPointsTableUi from "./CheckPointsTableUi";

const EquipmentDescInfo = ({ EquipmentDetail }) => {
  const EquipmentId = useParams();

  useFirebaseConnect([{ path: "/Checkpoints" }]);
  const Checkpoints = useSelector(
    (state) => state.firebaseReducer.data.Checkpoints
  );
  if (!isLoaded(Checkpoints)) {
    return (
      <Spinner
        className="bootstrapSpinner"
        animation="grow"
        role="status"
        size="md"
        variant="info"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  const Filtredcheckpoint = [];
  Object.values(Checkpoints).forEach((Checkpoint) => {
    if (Checkpoint.equipmentKey.includes(EquipmentId.id)) {
      Filtredcheckpoint.push(Checkpoint);
    }
  });

  return (
    <>
      <Card style={{ display: "flex", flexDirection: "row" }}>
        <Card.Img
          variant="top"
          src={EquipmentDetail.photo}
          style={{ height: "100%", width: "30%" }}
        />
        <Card.Body style={{ marginLeft: "4%" }}>
          <Card.Title>Name : {EquipmentDetail.name}</Card.Title>
          <h6>Information :</h6>
          {EquipmentDetail.domain ? (
            <p>Domain : {EquipmentDetail.domain}</p>
          ) : (
            <p>Domain : Data Missing</p>
          )}
          {EquipmentDetail.building ? (
            <p> Building : {EquipmentDetail.building}</p>
          ) : (
            <p>Building : Data Missing</p>
          )}
          {EquipmentDetail.quantity ? (
            <p> Quantity : {EquipmentDetail.quantity}</p>
          ) : (
            <p>Quantity : Data Missing</p>
          )}
          <h6>Caractéristiques :</h6>
          {EquipmentDetail.model ? (
            <p>Model : {EquipmentDetail.model}</p>
          ) : (
            <p>Model : Data Missing</p>
          )}
          {EquipmentDetail.brand ? (
            <p> Brand : {EquipmentDetail.brand}</p>
          ) : (
            <p>Brand : Data Missing</p>
          )}
          {EquipmentDetail.nbFaults ? (
            <p> NbFaults : {EquipmentDetail.nbFaults}</p>
          ) : (
            <p>NbFaults : Data Missing</p>
          )}
        </Card.Body>
      </Card>
      <br />
      <CheckPointsTableUi filtredcheckpoint={Filtredcheckpoint} />
    </>
  );
};

export default EquipmentDescInfo;
