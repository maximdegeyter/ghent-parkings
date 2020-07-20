import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import ParkingsOverview from "./views/parkingsOverview/ParkingsOverview";
import ParkingDetail from "./views/parkingDetail/ParkingDetail";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ghent Parkings</h1>
      </header>
      <main>
        <Switch>
          <Route exact strict path="/" component={ParkingsOverview} />
          <Route exact path="/parking/:id" component={ParkingDetail} />
        </Switch>
      </main>
    </div>
  );
};

export default withRouter(App);
