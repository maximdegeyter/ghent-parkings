import React, { FC } from "react";
import { withRouter, useHistory } from "react-router-dom";

import { ParkingDetailProps } from "./ParkingDetail.types";

const ParkingDetail: FC<ParkingDetailProps> = ({ match }) => {
  let history = useHistory();

  return (
    <div className="App">
      <h2>Parking</h2>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => history.goBack()}
      >
        Go Back
      </button>
      <p>Adres</p>
      <p>Openingsuren</p>
      <p>Contact</p>
    </div>
  );
};

export default withRouter(ParkingDetail);
