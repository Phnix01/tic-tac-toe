import './App.css'
import { useState } from 'react';
function Square({valeur,squareOnClick}) {


  return <button className="square" onClick={squareOnClick}>{valeur}</button>;
}


export default function Board (){

  const [squares, setSquares] =useState(Array(9).fill(null));
  return(

    <>
        <div className='board-row'>
            <Square valeur={squares[0]}/>
            <Square valeur={squares[1]}/>
            <Square valeur={squares[2]}/>
        </div>

        <div className='board-row'>
            <Square valeur={squares[3]}/>
            <Square valeur={squares[4]}/>
            <Square valeur={squares[5]}/>
        </div>

        <div className='board-row'>
            <Square valeur={squares[6]}/>
            <Square valeur={squares[7]}/>
            <Square valeur={squares[8]}/>
        </div>
    </>
  );

}

