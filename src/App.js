import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { render } from '@testing-library/react';
// import { FontAwesomeIcon } from '../node_modules/@fortwesome/react-fontawesome'
// import { faInfoCircle } from '../node_modules/@fortwesome/free-solid-svg-icons' <span><FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon></span>

function App() {
  return (
    <Game></Game>
  );
}

const colors = ['red','blue','green','yellow','white','pink'];

const Button = (props) => {

  let button;

  if(props.message === 'YES')
    button = <button onClick={() => props.onClick(props.message)} className="btn btn-outline-success mr-md-2">EVET</button> 
  else
    button = <button onClick={() => props.onClick(props.message)} className="btn btn-outline-danger">HAYIR</button>

  return(
    button
  );
}

const Label = (props) => {
  return (
    <p className="label text-uppercase" style={{color: props.color}}>{props.text}</p>
  );
}

const Game = (props) => {

  const [topColor, setTopColor] = React.useState(colors[utils.random(0,colors.length - 1)]);
  const [bottomColor, setBottomColor] = React.useState(colors[utils.random(0,colors.length - 1)]);
  const [randomColor, setRandomColor] = React.useState(colors[utils.random(0,colors.length-1)]);

  const onButtonClick = (message) => {
    if(message === 'YES'){
      if(topColor == randomColor){
        setTopColor(colors[utils.random(0,colors.length - 1)]);
        setBottomColor(colors[utils.random(0,colors.length - 1)]);
        setRandomColor(colors[utils.random(0,colors.length - 1)]);
      }
    }
  }

  return(
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 board">
        <div className="game text-center">
          <p className="info" style={{color: 'white'}}>Yukarıda yazan renk aşağıdaki yazının rengiyle eşleşiyor mu?</p>
          <Label color = {'white'} text={topColor}></Label>
          <Label color = {randomColor} text={bottomColor}></Label>
        </div>       
        <div className="mt-md-5 text-center">             
          <Button message='YES' onClick={}></Button>
          <Button message='NO' onClick={}></Button>
        </div>
        </div>
      </div>
    </div>
  );
}

const utils = {
  //pick a random number between min and max (edges included)
  random: (min, max) => {var rnd = Math.floor(Math.random() * (max - min + 1)) + min; return rnd;},

  //create an array that includes two element
  arr: (top, bottom) => { var arr = [top, bottom]; return arr; }
};

export default App;