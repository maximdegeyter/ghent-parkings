import React, { useEffect, useState } from "react";

import Api from "../../api";
import { ParkingItemSchema } from "./ParkingsOverview.types";
import { Hero, Table } from "../../components";

const ParkingsOverview = () => {
  const [parkings, setParkings] = useState<ParkingItemSchema[]>([]);

  useEffect(() => {
    if (parkings?.length <= 0) {
      const api = new Api();
      api.getAll().then((d) => setParkings(d.records));
    }
  }, [parkings]);

  return (
    <>
      <Hero />
      <Table parkings={parkings} />
    </>
  );
};

export default ParkingsOverview;
