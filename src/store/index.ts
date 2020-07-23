import { decorate, observable, configure, action } from "mobx";
import { createContext } from "react"
import { ParkingItemSchema } from "../views/parkingsOverview/ParkingsOverview.types";


configure({ enforceActions: "observed" });
class Store {
  parkedHere: ParkingItemSchema | null;

  constructor() {
    this.parkedHere = null;
  }

  parkHere = (parking: ParkingItemSchema): void => {
    this.parkedHere = parking;
  };

  leaveParking = (): void => {
    this.parkedHere = null;
  };
}

decorate(Store, {
  parkedHere: observable,
  parkHere: action,
  leaveParking: action,
});

export default createContext(new Store());