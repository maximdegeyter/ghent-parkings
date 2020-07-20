import React, { FC, useState, useEffect } from "react";

import { ParkingItemSchema } from "../parkingsOverview/ParkingsOverview.types";
import Api from "../../api";
import { ParkingDetailProps } from "./ParkingDetail.types";
import { withRouter } from "react-router-dom";

const ParkingDetail: FC<ParkingDetailProps> = ({ match }) => {
  const [parking, setParking] = useState<ParkingItemSchema>();

  useEffect(() => {
    if (match.params.id) {
      const api = new Api();
      api.getOne(match.params.id).then((d) => setParking(d.records));
    }
  }, [match.params.id]);

  return (
    <div className="App">
      <h2>{parking?.fields.name}</h2>
      <p>{parking?.fields.address}</p>
    </div>
  );
};

export default withRouter(ParkingDetail);
