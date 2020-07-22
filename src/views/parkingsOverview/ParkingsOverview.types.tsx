export interface ParkingItemSchema {
  datasetid: string;
  recordid: string;
  fields: ParkingFields;
  geometry: {
    type: string;
    coordinates: Array<number>;
  };
  record_timestamp: string;
}

export interface ParkingFields {
  parkedHere?: boolean;
  totalcapacity_test: number;
  lastmodifieddate: Date;
  open: string;
  id: string;
  lastupdate: Date;
  from: string;
  daysopen: string;
  openingtimes: string;
  suggestedfullthreshold: number;
  to: string;
  geo_location: Array<number>;
  latitude: string;
  parkingserver: string;
  contactinfo: string;
  description: string;
  city: string;
  suggestedfreethreshold: number;
  capacityrounding: number;
  availablecapacity: number;
  address: string;
  newopeningtimes: string;
  name: string;
  longitude: number;
  suggestedcapacity: string;
  parkingstatus: string;
  totalcapacity: number;
}

export interface OverviewProps {
  sendParkedHere: any;
  parkedHere: ParkingItemSchema | null;
}
