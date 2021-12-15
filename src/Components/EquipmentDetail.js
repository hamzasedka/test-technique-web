import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { isLoaded, useFirebaseConnect } from "react-redux-firebase";
import { useParams } from "react-router-dom";
import EquipmentDescInfo from "./EquipmentDescInfo";
const EquipmentDetail = () => {
  const EquipmentId = useParams();

  useFirebaseConnect([{ path: "/Equipments" }]);
  const Equipment = useSelector(
    (state) => state.firebaseReducer.data.Equipments
  );

  if (!isLoaded(Equipment)) {
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

  const filterIt = (Equi, searchTerm) => {
    return Equi.includes(searchTerm.id);
  };

  return (
    <div className="row" style={{ margin: "2%" }}>
      <div className="col-md-2"></div>
      <div className="col-md-8 col-sm-12">
        {Object.entries(Equipment)
          .filter((Equipment) => filterIt(Equipment[0], EquipmentId))
          .map((key, id) => (
            <EquipmentDescInfo EquipmentDetail={key[1]} />
          ))}
      </div>
      <div className="col-md-2"></div>
    </div>
  );
};

export default EquipmentDetail;
