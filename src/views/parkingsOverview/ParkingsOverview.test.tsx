import React from "react";
import { render, fireEvent, getNodeText } from "@testing-library/react";
import { Table } from "../../components";
import { ParkingItemSchema } from "./ParkingsOverview.types";
import { MemoryRouter } from "react-router-dom";

const parkings: ParkingItemSchema[] = [
  {
    datasetid: "test",
    recordid: "string",
    fields: {
      totalcapacity_test: 100,
      lastmodifieddate: new Date(),
      open: "True",
      id: "string",
      lastupdate: new Date(),
      from: "string",
      daysopen: "string",
      openingtimes: "string",
      suggestedfullthreshold: 4,
      to: "string",
      geo_location: [1, 1],
      latitude: "string",
      parkingserver: "string",
      contactinfo: "string",
      description: "string",
      city: "string",
      suggestedfreethreshold: 4,
      capacityrounding: 100,
      availablecapacity: 75,
      address: "string",
      newopeningtimes: "string",
      name: "Parking Naam",
      longitude: 4,
      suggestedcapacity: "100",
      parkingstatus: "string",
      totalcapacity: 100,
    },
    geometry: {
      type: "string",
      coordinates: [1, 1],
    },
    record_timestamp: "test",
  },
];

test("click Parkeer button", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Table parkings={parkings} />
    </MemoryRouter>
  );
  const button = getByText("Parkeer");
  fireEvent.click(button);
  expect(getNodeText(button)).toBe("Verlaat");
});

test("click parking link", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Table parkings={parkings} />
    </MemoryRouter>
  );
  const link = getByText("Parking Naam");
  fireEvent.click(link);
  expect(parkings[0].fields.description).toBeDefined();
});
