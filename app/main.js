import React from "react";//import不带{}，default暴露
import {render} from "react-dom"; //import{}（自动解构），export暴露
import App from "./App.js";
render(
	<App></App>,
	document.getElementById('box')
)