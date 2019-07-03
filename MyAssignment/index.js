import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import MyApp from "./containers/App";
import "./index.css";

ReactDOM.render(<MyApp />, document.getElementById("app"));