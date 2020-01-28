import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
// import { FontAwesomeIcon } from '../node_modules/@fortwesome/react-fontawesome'
// import { faInfoCircle } from '../node_modules/@fortwesome/free-solid-svg-icons' <span><FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon></span>

function App() {
  return (
    <Game></Game>
  );
}

const colors = ['red','blue','green','yellow','black','pink'];

const Game = (props) => {

  return(
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 board">
        <div className="game text-center">
          <p className="info">Yukarıda yazan renk aşağıdaki yazının rengiyle eşleşiyor mu?</p>
          <p className="label text-uppercase">siyah</p>
          <p className="label text-uppercase">mavi</p>
        </div>       
        <div className="mt-md-5 text-center">             
          <button className="btn btn-outline-success mr-md-2">EVET</button>
          <button className="btn btn-outline-danger">HAYIR</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;