import './Happy.scss';
import Confetti from 'react-confetti'

function App() {
  return (
    <div className="Happy">
      <Confetti numberOfPieces={50}/>
      <div className="container">
        <div className="egg">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <div className="face">
              <div className="eyes"></div>
              <div className="smile"></div>
              <div className="cheeks"></div>
              <div className="shine"></div>
            </div>
          </ul>
        </div>
        <div className="shadow" id="egg-shadow"></div>
        <div className="heart">
          <div className="light"></div>
        </div>
        <div className="ghost">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className="face">
            <div className="eyes"></div>
            <div className="smile"></div>
            <div className="cheeks"></div>
          </div>
        </div>
        <div className="shadow" id="ghost-shadow"></div>
      </div>
      <div>
        <p>Com amor,<br></br>Maria Caetana</p> 
      </div>
    </div>
  );
}

export default App;
