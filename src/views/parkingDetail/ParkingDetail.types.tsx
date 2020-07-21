import { RouteComponentProps } from "react-router-dom";

export interface ParkingDetailParams {
  id: string;
}

export interface openingTimesSchema {
    days: string[];
    from: string;
    to: string;
}

export type ParkingDetailProps = RouteComponentProps<ParkingDetailParams>;
