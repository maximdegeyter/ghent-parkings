import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import { ParkingsOverview, ParkingDetail } from "./views";

const App = () => {
  return (
    <div className="App">
      <header className="header bg-info mb-4">
        <h1 className="text-white container-lg text-center pt-2">
          Ghent Parkings
        </h1>
      </header>
      <main className="container-lg">
        <Switch>
          <Route exact strict path="/">
            <ParkingsOverview />
          </Route>
          <Route exact path="/parking/:id">
            <ParkingDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default withRouter(App);
