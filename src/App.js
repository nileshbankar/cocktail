import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";
import CocktailList from "./components/CocktailList";
// import components

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/cocktail/:id">
            <SingleCocktail></SingleCocktail>
          </Route>
          <Route path="/cocktails">
            <CocktailList></CocktailList>
          </Route>

          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
