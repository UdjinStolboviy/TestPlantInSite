import React from "react";

import "./App.css";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

import MainSite from "./components/MainSite";

// import ScrollAnimation from "react-animate-on-scroll";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainSite} />
        <Route path="/home" component={MainSite} />
        <Route path="/blog" component={MainSite} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

//  /* <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
//       <App />
//     </ScrollAnimation>
//     <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
//       <App />
//     </ScrollAnimation>
//     <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
//       <App />
//     </ScrollAnimation>

//     <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
//       <App />
//     </ScrollAnimation> */
