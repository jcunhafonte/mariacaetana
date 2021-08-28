import './Padrinho.scss';
import Confetti from 'react-confetti'
import Baby from './Baby';
import { Link } from "react-router-dom";
import TypeWriterEffect from 'react-typewriter-effect';

function App() {
  return (
    <div className="Padrinho">
      <Confetti numberOfPieces={50}/>
      <div className="wrapping">
      <TypeWriterEffect
          startDelay={100}
          cursorColor="#3F3D56"
          multiText={[
            'Tenho uma surpresa para ti…',
            'Gostava muito que fosses o meu padrinho.',
            'Aceitas?'
          ]}
          textStyle={{
            color: '#3F3D56',
            fontWeight: 'bold',
            fontSize: '40px'
          }}
          typeSpeed={100}
        />
        <div className="item-1">
          <Link to="/happy" className="button sofia">SIM!</Link><br></br><Link to="/happy" className="button sofia">CLARO QUE SIM!</Link>
        </div>
      </div>
      <Baby />
    </div>
  );
}

export default App;
