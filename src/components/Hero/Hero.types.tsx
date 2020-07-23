import { ParkingItemSchema } from "../../views/parkingsOverview/ParkingsOverview.types";

export interface HeroProps {
  parkedHere: ParkingItemSchema | null;
  leaveParking: () => void;
}
