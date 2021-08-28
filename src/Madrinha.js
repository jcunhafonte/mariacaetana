import './Madrinha.scss';
import Confetti from 'react-confetti'
import Baby from './Baby';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="Madrinha">
      <Confetti numberOfPieces={50}/>
      <div className="wrapping">
        <p class="item-1">Tenho uma surpresa para ti…</p>
        <p class="item-2">Gostava muito que fosses a minha madrinha.</p>
        <p class="item-3">Aceitas?<br></br><br></br><Link to="/happy" className="button sofia">SIM!</Link><br></br><Link to="/happy" className="button sofia">CLARO QUE SIM!</Link></p>
      </div>
      <Baby />
    </div>
  );
}

export default App;
