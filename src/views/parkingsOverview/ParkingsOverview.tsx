import React, { useEffect, useState } from "react";

import Api from "../../api";
import { ParkingItemSchema } from "./ParkingsOverview.types";
import { PARKING_CONST } from "./ParkingsOverview.const";
import { Link } from "react-router-dom";

const ParkingsOverview = () => {
  const [parkings, setParkings] = useState<ParkingItemSchema[]>([]);

  useEffect(() => {
    if (parkings?.length <= 0) {
      const api = new Api();
      api.getAll().then((d) => setParkings(d.records));
    }
  }, [parkings]);

  return (
    <table className="table container">
      <thead>
        <tr>
          <th scope="col">Parking</th>
          <th scope="col">Capaciteit</th>
          <th scope="col">Vrije plaatsen</th>
        </tr>
      </thead>
      <tbody>
        {parkings ? (
          parkings.map((parking) => {
            return (
              <tr key={parking.recordid}>
                <td>{parking.fields.name}</td>
                <td>{parking.fields.totalcapacity}</td>
                <td>{parking.fields.availablecapacity}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td>
              <Link to={`parking/${PARKING_CONST.description}`}>
                {PARKING_CONST.name}
              </Link>
            </td>
            <td>{PARKING_CONST.totalcapacity}</td>
            <td>{PARKING_CONST.availablecapacity}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ParkingsOverview;
