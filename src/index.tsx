import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { configUseRequest, axiosPreset } from "@akishichinibu/react-requests-hook";

import App from './App';
import reportWebVitals from './reportWebVitals';
import "./index.css";

const a = axios.create({
  baseURL: "/api",
});
configUseRequest(axiosPreset(a));


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
