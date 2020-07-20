import { RouteComponentProps } from "react-router-dom";

export interface ParkingDetailParams {
  id: string; 
}

export type ParkingDetailProps = RouteComponentProps<ParkingDetailParams>;
