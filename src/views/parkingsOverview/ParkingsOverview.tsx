import React, { useEffect, useState } from "react";

import Api from "../../api";
import { ParkingItemSchema, OverviewProps } from "./ParkingsOverview.types";
import { Hero, Table } from "../../components";

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
      <Hero parkedHere={parkedHere} leaveParking={leaveParking} />
      <Table
        parkings={parkings}
        parkedHere={parkedHere}
        parkHere={parkHere}
        leaveParking={leaveParking}
      />
    </>
  );
};

export default ParkingsOverview;
