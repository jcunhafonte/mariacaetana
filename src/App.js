import './App.scss';
import Baby from './Baby'
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <link href="https://fonts.googleapis.com/css?family=Calligraffitti&display=swap" rel="stylesheet"></link>
      <Link to="/madrinha" className="button sofia">SOFIA!</Link>
      <Baby />
      <Link to="/padrinho" className="button marco">MARCO!</Link>
    </div>
  );
}

export default App;
