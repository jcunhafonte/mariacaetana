import './App.scss';

import { Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <link href="https://fonts.googleapis.com/css?family=Calligraffitti&display=swap" rel="stylesheet"></link>

      <Link to="/madrinha" className="button sofia">SOFIA!</Link>

      <div className="wrapper">
        <span className="triangle-t"></span>
        <span className="triangle-r"></span>
        <span className="triangle-b"></span>
        <span className="triangle-l"></span>
        <p>e</p>
        <div className="ear-l"></div>
        <div className="ear-r"></div>
        <div className="head"></div>
        <div className="eye-l"></div>
        <div className="eye-r"></div>
        <div className="nose"></div>
        <div className="toy"></div>
        <div className="body">
          <div className="arms">
            <div className="hand-l"></div>
            <div className="hand-r"></div>
          </div>
          <div className="legs"></div>
        </div>
      </div>

      <Link to="/padrinho" className="button marco">MARCO!</Link>
    </div>
  );
}

export default App;
