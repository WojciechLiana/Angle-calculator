import React from "react";
import ReactDOM from "react-dom";
import Portal from "./src/js/Portal.js"


const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Portal/>, wrapper) : false;