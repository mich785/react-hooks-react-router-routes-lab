import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [page, setPage] = useState("/");

  return (
    <div>
      <BrowserRouter>
      <NavBar onChangePage={setPage} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/actors">
          <Actors />
        </Route>
        <Route exact path="/directors">
          <Directors />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
