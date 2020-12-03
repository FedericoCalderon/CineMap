import React from "react";
import { Route } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites.jsx";
import Browser from "./components/Browser/Browser.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Movie from "./components/Movie/Movie.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Landing from './components/Landing/Landing'

function App() {
  return (
      <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/Catalogue" component={Browser} />
          <Route exact path="/Favorites" component={Favorites} />
          <Route exact path="/movie/:id" component={Movie} />
          <Footer />
      </React.Fragment>
  );
}

export default App;
