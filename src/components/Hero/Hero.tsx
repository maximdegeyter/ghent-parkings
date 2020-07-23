import React from "react";

import { HeroProps } from "./Hero.types";

const Hero = ({ parkedHere, leaveParking }: HeroProps) => {
  return (
    <div className="jumbotron bg-white">
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
  );
};

export default Hero;
