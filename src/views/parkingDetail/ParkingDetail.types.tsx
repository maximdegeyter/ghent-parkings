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

export type ParkingDetailProps = RouteComponentProps<ParkingDetailParams>;
