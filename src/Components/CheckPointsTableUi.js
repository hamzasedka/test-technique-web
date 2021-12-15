import MaterialTable from "material-table";
import React from "react";

const CheckPointsTableUi = ({ filtredcheckpoint }) => {
  const col = [
    {
      title: "Name",
      field: "name",
      headerStyle: {
        backgroundColor: "#083A5B",
        color: "white",
      },
    },
    {
      title: "Fault",
      field: "fault",
      cellStyle: {
        backgroundColor: "#083A5B",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#083A5B",
        color: "white",
      },
    },
    {
      title: "Recommandation",
      field: "recommandation",
      cellStyle: {
        backgroundColor: "#083A5B",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#083A5B",
        color: "white",
      },
    },
  ];
  return (
    <div>
      <MaterialTable
        title={"CheckPoints :"}
        columns={col}
        data={filtredcheckpoint}
        options={{
          filtering: true,
          exportButton: true,
          sorting: true,
        }}
      />
    </div>
  );
};

export default CheckPointsTableUi;
