import React, { useContext } from "react";

import store from "../../store";
import { observer } from "mobx-react";

const Hero = () => {
  const parkedHereStore = useContext(store);

  return (
    <div className="jumbotron bg-white">
      <h2>Welkom!</h2>
      {parkedHereStore.parkedHere ? (
        <>
          <p className="lead">
            Je staat geparkeerd in{" "}
            <strong>{parkedHereStore.parkedHere.fields.name}</strong>.
          </p>
          <hr className="my-4"></hr>
          <button
            className="btn btn-outline-danger"
            onClick={() => parkedHereStore.leaveParking()}
          >
            Verlaat
          </button>
        </>
      ) : (
        <p className="lead">Je staat nergens geparkeerd.</p>
      )}
    </div>
  );
};

export default observer(Hero);
