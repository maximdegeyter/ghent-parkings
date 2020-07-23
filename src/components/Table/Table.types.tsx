import { ParkingItemSchema } from "../../views/parkingsOverview/ParkingsOverview.types";

export interface TableProps {
    parkings: ParkingItemSchema[];
    parkedHere: ParkingItemSchema | null;
    parkHere: ((parking: ParkingItemSchema) => void);
    leaveParking: (() => void);
}