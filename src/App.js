import React from 'react';
import './App.css';
import Header from "./Componenet/Header/Header"
import Footer from "./Componenet/Footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from "./layout/homePage/HomePage"
import { AboutUs } from "./layout/AboutUs/AboutUs"



const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/about-you" default component={HomePage} exact />
          <Route path="/AboutUs" component={AboutUs} exact />
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}
export default App;