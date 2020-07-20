import React, { useEffect, useState } from "react";

import Api from "./api";
import { ParkingItemSchema } from "./ParkingsOverview.types";

function ParkingsOverview() {
  const [parkings, setParkings] = useState<ParkingItemSchema[]>([]);

  useEffect(() => {
    const api = new Api();
    api.getAll().then((d) => setParkings(d.records));
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ghent Parkings</h1>
        <table className="table container">
          <thead>
            <tr>
              <th scope="col">Parking</th>
              <th scope="col">Capaciteit</th>
              <th scope="col">Vrije plaatsen</th>
            </tr>
          </thead>
          <tbody>
            {parkings?.map((parking) => {
              return (
                <tr>
                  <td>{parking.fields.name}</td>
                  <td>{parking.fields.totalcapacity}</td>
                  <td>{parking.fields.availablecapacity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </header>
      <main></main>
    </div>
  );
}

export default ParkingsOverview;
