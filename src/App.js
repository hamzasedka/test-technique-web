import React, { Component } from "react";
import ListOfEquipments from "./Components/ListOfEquipments";
import EquipmentDetail from "./Components/EquipmentDetail";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<ListOfEquipments />}></Route>
          <Route
            exact
            path="/Details/:id"
            element={<EquipmentDetail />}
          ></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
