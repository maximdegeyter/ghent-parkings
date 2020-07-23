import React, { useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import { ParkingItemSchema } from "./views/parkingsOverview/ParkingsOverview.types";
import { ParkingsOverview, ParkingDetail } from "./views";

const App = () => {
  const [parkedHere, setParkedHere] = useState<ParkingItemSchema | null>(null);

  const getParkedHere = (childData: ParkingItemSchema): void => {
    setParkedHere(childData);
  };

  return (
    <div className="App">
      <header className="header bg-info mb-4">
        <h1 className="text-white container-lg text-center pt-2">Ghent Parkings</h1>
      </header>
      <main className="container-lg">
        <Switch>
          <Route exact strict path="/">
            <ParkingsOverview
              sendParkedHere={getParkedHere}
              parkedHere={parkedHere}
            />
          </Route>
          <Route exact path="/parking/:id">
            <ParkingDetail parkedHere={parkedHere} />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default withRouter(App);
