import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Padrinho from './Padrinho';
import Madrinha from './Madrinha';
import Happy from './Happy';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/padrinho">
          <Padrinho />
        </Route>
        <Route path="/madrinha">
          <Madrinha />
        </Route>
        <Route path="/happy">
          <Happy />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
