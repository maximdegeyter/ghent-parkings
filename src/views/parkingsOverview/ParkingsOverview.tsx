import React, { useEffect, useState } from "react";

import Api from "../../api";
import { ParkingItemSchema } from "./ParkingsOverview.types";
import { Link } from "react-router-dom";

const ParkingsOverview = () => {
  const [parkings, setParkings] = useState<ParkingItemSchema[]>([]);
  const [parkedHere, setParkedHere] = useState<ParkingItemSchema | null>(null);

  useEffect(() => {
    if (parkings?.length <= 0) {
      const api = new Api();
      api.getAll().then((d) => setParkings(d.records));
    }
  }, [parkings]);

  return (
    <>
      <table className="table container">
        <thead>
          <tr>
            <th scope="col">Parking</th>
            <th scope="col">Adres</th>
            <th scope="col">Vrije plaatsen</th>
            <th scope="col">Capaciteit</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {parkings ? (
            parkings.map((parking) => {
              return (
                <tr key={parking.recordid}>
                  <td>
                    <Link to={`parking/${parking.fields.description}`}>
                      {parking.fields.name}
                    </Link>
                  </td>
                  <td>{parking.fields.address}</td>
                  <td>{parking.fields.availablecapacity}</td>
                  <td>{parking.fields.totalcapacity}</td>
                  <td>
                    {parkedHere?.fields.name === parking.fields.name ? (
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => setParkedHere(null)}
                      >
                        Verlaat
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-primary"
                        disabled={parkedHere ? true : false}
                        onClick={() => setParkedHere(parking)}
                      >
                        Parkeer
                      </button>
                    )}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>Geen data beschikbaar</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="jumbotron">
        {parkedHere ? (
          <p>Jij staat geparkeerd op {parkedHere?.fields.name}</p>
        ) : (
          <p>Je staat nergens geparkeerd.</p>
        )}
      </div>
    </>
  );
};

export default ParkingsOverview;
