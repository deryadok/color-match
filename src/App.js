import React,{useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
// import { render } from '@testing-library/react';
// import { FontAwesomeIcon } from '../node_modules/@fortwesome/react-fontawesome'
// import { faInfoCircle } from '../node_modules/@fortwesome/free-solid-svg-icons' <span><FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon></span>

function App() {
  return (
    <ColorMatch></ColorMatch>
  );
}

const colors = ['red', 'blue', 'green', 'yellow', 'white', 'pink', 'purple', 'brown', 'coral', 'chocolate', 'cyan', 'gray', 'magenta', 'olive', 'orange'];

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

const useGameState = () => {
  const [topColor, setTopColor] = useState(colors[utils.random(0,colors.length - 1)]);
  const [bottomColor, setBottomColor] = useState(colors[utils.random(0,colors.length - 1)]);
  const [randomColor, setRandomColor] = useState(utils.arr(topColor, bottomColor));
  const [point, setPoint] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    if(secondsLeft > 0) {
     const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      },1000);
      return () => clearTimeout(timerId);
    }
  });

  const onButtonClick = (message) => {
    if(message === 'YES' && topColor === randomColor){
      setPoint(point + 10);
      setSecondsLeft(secondsLeft + 1);
    }
    else if(message === 'NO' && topColor !== randomColor){
      setPoint(point + 10);
      setSecondsLeft(secondsLeft + 1);
    }
    else{
      point > 0 ? setPoint(point - 10) : setPoint(0);
      setSecondsLeft(secondsLeft - 2);
    }
    
    setTopColor(colors[utils.random(0,colors.length - 1)]);
    setBottomColor(colors[utils.random(0,colors.length - 1)]);
    setRandomColor(colors[utils.random(0,colors.length - 1)]);
  }

  const setGameState = () => {
    setTopColor(colors[utils.random(0,colors.length - 1)]);
    setBottomColor(colors[utils.random(0,colors.length - 1)]);
    setRandomColor(colors[utils.random(0,colors.length - 1)]);
    setPoint(0);
    setSecondsLeft(10);
  }

  return {topColor, bottomColor, randomColor, point, secondsLeft, onButtonClick, setGameState};
}

const PlayAgain = (props) => {
  return(
    <div className="col-md-12 board text-center">
      <p className="endGame">Puanınız: {props.point}</p>
      <button onClick={props.onClick} className="btn btn-outline-warning replay">TEKRAR OYNA</button>
    </div>
  );
}

const GameDisplay = (props) => {  
  return(
    <div className="col-md-12 board">        
        <div className="d-inline point">Puan: {props.point}</div>
        <div className="d-inline float-right timer">Süre: {props.secondsLeft}</div>
        <div className="game text-center">
          <p className="info">Yukarıda yazan renk aşağıdaki yazının rengiyle eşleşiyor mu?</p>
          <Label color = {'white'} text={props.topColor}></Label>
          <Label color = {props.randomColor} text={props.bottomColor}></Label>
        </div>       
        <div className="mt-md-5 text-center">             
          <Button message='YES' onClick={props.onButtonClick}></Button>
          <Button message='NO' onClick={props.onButtonClick}></Button>
        </div>
    </div>
  );
}

const Game = (props) => {
  const {
    topColor,
    bottomColor,
    randomColor,
    point,
    secondsLeft,
    onButtonClick,
    setGameState
  } = useGameState();

  const gameStatus = secondsLeft <= 0 ? true : false;    

  return(
    <div className="container-fluid">
      <div className="row">
        {gameStatus ? (<PlayAgain onClick={()=> props.startNewGame(setGameState())} point={point}></PlayAgain>) : 
          (<GameDisplay point={point} secondsLeft={secondsLeft} topColor={topColor} bottomColor={bottomColor} randomColor={randomColor} onButtonClick={onButtonClick}></GameDisplay>)}
      </div>
    </div>
  );
}

const ColorMatch = () => {
  const [gameId, setGameId] = useState(1);
  return <Game keys={gameId} startNewGame={() => { setGameId(gameId + 1);}}></Game>
}

const utils = {
  //pick a random number between min and max (edges included)
  random: (min, max) => {var rnd = Math.floor(Math.random() * (max - min + 1)) + min; return rnd;},
  //an array that includes top and random color and return one of them
  arr: (topColor, bottomColor) => { var arr = [topColor, bottomColor]; return arr[utils.random(0,1)]; }
};

export default App;