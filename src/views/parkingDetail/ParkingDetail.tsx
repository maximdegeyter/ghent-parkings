import React, { FC, useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";

import { ParkingDetailProps, openingTimesSchema } from "./ParkingDetail.types";
import { ParkingItemSchema } from "../parkingsOverview/ParkingsOverview.types";

const ParkingDetail: FC<ParkingDetailProps> = ({ location, parkedHere }) => {
  let history = useHistory();
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
        className="btn btn-outline-primary"
        onClick={() => history.goBack()}
      >
        Go Back
      </button>
      <h2>{parking.fields.name}</h2>
      {parkedHere?.fields.name === parking.fields.name ? (
        <p>Hier geparkeerd</p>
      ) : null}
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
  ) : (
    <h2>Parking niet gevonden</h2>
  );
};

export default withRouter(ParkingDetail);
