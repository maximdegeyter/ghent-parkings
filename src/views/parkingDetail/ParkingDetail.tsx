import React, { FC, useState, useEffect, useContext } from "react";
import { withRouter, useHistory } from "react-router-dom";

import { ParkingDetailProps, openingTimesSchema } from "./ParkingDetail.types";
import { ParkingItemSchema } from "../parkingsOverview/ParkingsOverview.types";
import store from "../../store";
import { observer } from "mobx-react-lite";

const ParkingDetail: FC<ParkingDetailProps> = ({ location }) => {
  let history = useHistory();
  const parkedHereStore = useContext(store)
  const [parking, setParking] = useState<ParkingItemSchema>();
  const [openingTimes, setOpeningTimes] = useState<openingTimesSchema[] | null>(
    null
  );

  useEffect(() => {
    if (!parking) {
      setParking(location.state as any);
    } else {
      setOpeningTimes(JSON.parse(parking.fields.openingtimes));
    }
  }, [location.state, parking]);

  return parking ? (
    <div className="container-lg">
      <button
        type="button"
        className="btn btn-outline-primary mb-4"
        onClick={() => history.goBack()}
      >
        Go Back
      </button>
      <div className="jumbotron bg-white">
        <div className="row">
          <h2 className="mb-4">
            {parking.fields.name}{" "}
            {parkedHereStore.parkedHere?.fields.name === parking.fields.name ? (
              <span className="h6 badge badge-primary">Hier geparkeerd</span>
            ) : null}
          </h2>
        </div>
        <div className="row">
          <div className="col-md">
            <h3>Adres</h3>
            <p>{parking.fields.address}</p>
          </div>
          <div className="col-md">
            <h3>Openingstijden</h3>
            <table className="table table-sm table-borderless">
              <tbody>
                {openingTimes
                  ? openingTimes[0].days.map((day) => {
                      return (
                        <tr>
                          <td>{day}</td>
                          <td>{`${openingTimes[0].from} - ${openingTimes[0].to}`}</td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </table>
          </div>
          <div className="col-md">
            <h3>Contact</h3>
            <p>{parking.fields.contactinfo}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h2>Parking niet gevonden</h2>
  );
};

export default withRouter(observer(ParkingDetail));
