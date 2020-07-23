import React from "react";

import { Link } from "react-router-dom";
import { TableProps } from "./Table.types";

const Table = ({ parkings, parkedHere, parkHere, leaveParking }: TableProps) => {

  return (
    <div className="jumbotron bg-white table-responsive">
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
                          ? parking.fields.availablecapacity - 1
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
    </div>
  );
};

export default Table;
