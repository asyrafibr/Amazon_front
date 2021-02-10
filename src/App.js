import "./App.css";
import React, { useEffect } from "react";
import Header from "./main/Header/Header";
import Home from "./main/Home/Home";
import Checkout from "./main/checkout/Checkout";
import Login from "./main/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./main/StateProvider";

function App() {
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS IN", authUser);

      if (authUser) {
        dispatchEvent({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        console.log("USER OUT");
        dispatchEvent({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />

            <Checkout />
            {/*home*/}
          </Route>
          <Route path="/">
            <Header />

            {/*home*/}
            <Home />
          </Route>
        </Switch>
        {/*header*/}
      </div>
    </Router>
  );
}

export default App;
