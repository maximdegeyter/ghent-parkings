import React, { useEffect, useState } from "react";

import Api from "../../api";
import { ParkingItemSchema, OverviewProps } from "./ParkingsOverview.types";
import { Link } from "react-router-dom";

const ParkingsOverview = ({ sendParkedHere, parkedHere }: OverviewProps) => {
  const [parkings, setParkings] = useState<ParkingItemSchema[]>([]);

  useEffect(() => {
    if (parkings?.length <= 0) {
      const api = new Api();
      api.getAll().then((d) => setParkings(d.records));
    }
  }, [parkings]);

  const parkHere = (parking: ParkingItemSchema): void => {
    sendParkedHere(parking);
  };

  const leaveParking = (): void => {
    sendParkedHere(null);
  };

  return (
    <>
      <div className="jumbotron">
        <h2>Welkom!</h2>
        {parkedHere ? (
          <>
            <p className="lead">
              Je staat geparkeerd in <strong>{parkedHere?.fields.name}</strong>.
            </p>
            <hr className="my-4"></hr>
            <button
              className="btn btn-outline-danger"
              onClick={() => leaveParking()}
            >
              Verlaat
            </button>
          </>
        ) : (
          <p className="lead">Je staat nergens geparkeerd.</p>
        )}
      </div>
      <table className="table">
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
            parkings
              .sort((a, b) => {
                if (a.fields.name < b.fields.name) return -1;
                if (a.fields.name > b.fields.name) return 1;
                return 0;
              })
              .map((parking) => {
                return (
                  <tr key={parking.recordid}>
                    <td>
                      <Link
                        to={{
                          pathname: `parking/${parking.fields.description}`,
                          state: parking,
                        }}
                      >
                        {parking.fields.name}
                      </Link>
                    </td>
                    <td>{parking.fields.address}</td>
                    <td>
                      <span
                        className={
                          parking.fields.availablecapacity /
                            (parking.fields.totalcapacity / 100) >
                          50
                            ? "badge badge-success"
                            : parking.fields.availablecapacity /
                                (parking.fields.totalcapacity / 100) >
                              25
                            ? "badge badge-warning"
                            : "badge badge-danger"
                        }
                      >
                        {parkedHere?.fields.name === parking.fields.name
                          ? parking.fields.availablecapacity + 1
                          : parking.fields.availablecapacity}
                      </span>
                    </td>
                    <td>{parking.fields.totalcapacity}</td>
                    <td>
                      {parkedHere?.fields.name === parking.fields.name ? (
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => leaveParking()}
                        >
                          Verlaat
                        </button>
                      ) : (
                        <button
                          className="btn btn-outline-primary"
                          disabled={parkedHere ? true : false}
                          onClick={() => parkHere(parking)}
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
    </>
  );
};

export default ParkingsOverview;
