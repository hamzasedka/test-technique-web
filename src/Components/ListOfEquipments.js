import Equipment from "./Equipment";
import { useSelector } from "react-redux";
import { isLoaded, useFirebaseConnect } from "react-redux-firebase";
import { Col, Row, Spinner } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { useState } from "react";
const ListOfEquipments = () => {
  const [searchTerm, setsearchTerm] = useState("");

  useFirebaseConnect([{ path: "/Equipments" }]);
  const Equipments = useSelector(
    (state) => state.firebaseReducer.data.Equipments
  );
  if (!isLoaded(Equipments)) {
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
  //return the search term from the searchBar Component
  const callback = (searchTerm) => {
    setsearchTerm(searchTerm);
  };
  const filterIt = (Equipment, searchTerm) => {
    let searchword = searchTerm.toLowerCase();
    return (
      Equipment.name.toLowerCase().includes(searchword) ||
      Equipment.domain.toLowerCase().includes(searchword) ||
      Equipment.brand.toLowerCase().includes(searchword) ||
      Equipment.notes.toLowerCase().includes(searchword) ||
      Equipment.niveau.toLowerCase().includes(searchword)
    );
  };

  return (
    <>
      <SearchBar callback={callback} />
      <div className="row" style={{ margin: "2%" }}>
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <Row xs={1} md={3} className="g-5">
            {Object.entries(Equipments)
              .sort((a, b) =>
                a[1].name.localeCompare(b[1].name, "es", {
                  sensitivity: "base",
                })
              )
              .filter((Equipment) => filterIt(Equipment[1], searchTerm))
              .map((key, id) => (
                <Col>
                  <Equipment
                    key={key[0]}
                    EquipmentId={key[0]}
                    Equipments={key[1]}
                  />
                </Col>
              ))}
          </Row>
        </div>

        <div className="col-md-2"></div>
      </div>
    </>
  );
};

export default ListOfEquipments;
