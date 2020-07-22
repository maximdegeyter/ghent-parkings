import { RouteComponentProps } from "react-router-dom";
import { ParkingItemSchema } from "../parkingsOverview/ParkingsOverview.types";

export interface ParkingDetailParams {
  id: string;
}

export interface openingTimesSchema {
    days: string[];
    from: string;
    to: string;
}

export interface ParkingProp {
 parkedHere: ParkingItemSchema | null;
}

export type ParkingDetailProps = RouteComponentProps<ParkingDetailParams> & ParkingProp;
