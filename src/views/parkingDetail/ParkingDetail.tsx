import React, { FC, useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";

import { ParkingItemSchema } from "../parkingsOverview/ParkingsOverview.types";
import Api from "../../api";
import { ParkingDetailProps } from "./ParkingDetail.types";

const ParkingDetail: FC<ParkingDetailProps> = ({ match }) => {
  const [parking, setParking] = useState<ParkingItemSchema>();
  let history = useHistory();

  useEffect(() => {
    if (match.params.id) {
      const api = new Api();
      api.getOne(match.params.id).then((d) => setParking(d.records));
    }
  }, [match.params.id]);

  return (
    <div className="App">
      <h2>{parking?.fields.name}</h2>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => history.goBack()}
      >
        Go Back
      </button>
      <p>{parking?.fields.address}</p>
    </div>
  );
};

export default withRouter(ParkingDetail);
