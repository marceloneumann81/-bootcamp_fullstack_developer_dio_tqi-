import React from "react";
import ReactDom from "react-dom"
import "./styles.css"
import App from "./App";
//import { createRoot } from "react-dom/client"



const rootElement = document.getElementById("root");
//const root = createRoot(rootElement);

//root.render(<App />)




ReactDom.render(<App />, rootElement);