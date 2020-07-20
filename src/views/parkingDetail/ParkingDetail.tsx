import React, { useState, useEffect } from "react";

import { ParkingItemSchema } from "../parkingsOverview/ParkingsOverview.types";
import Api from "../../api";

const ParkingDetail = (description: any) => {
  const [parking, setParking] = useState<ParkingItemSchema>();

  useEffect(() => {
    if (description) {
      const api = new Api();
      api.getOne(description).then((d) => setParking(d.records));
    }
  }, [description]);

  return (
    <div className="App">
      <h2>{parking?.fields.name}</h2>
      <p>{parking?.fields.address}</p>
    </div>
  );
};

export default ParkingDetail;
