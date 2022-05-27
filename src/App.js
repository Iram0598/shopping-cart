import React from "react";
import Whole from "./components/Whole/Whole";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Whole/Cart/NavigationBar/Navigation";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Welcome from "./components/Welcome";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/checkout/" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
