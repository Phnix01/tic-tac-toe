import './App.css'
import { useState } from 'react';
function Square({valeur,squareOnClick}) {


  return <button className="square" onClick={squareOnClick}>{valeur}</button>;
}


export default function Board (){

   const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){

    // la fonction handleClick crée une copie du tableau squres (nextSquares) 
    // grâce à la fonction javascript slice(). ensuite handleClik met à jour le tableau nextSquares pour ajouter un x à la case (index[0])
    const nextSquares = squares.slice();
    nextSquares[i] = "x";
    setSquares(nextSquares);
  }
  return(

    <>
        <div className='board-row'>
            <Square valeur={squares[0]} squareOnClick={()=>handleClick(0)}/>
            <Square valeur={squares[1]} squareOnClick={()=>handleClick(1)}/>
            <Square valeur={squares[2]} squareOnClick={()=>handleClick(2)}/>
        </div>

        <div className='board-row'>
            <Square valeur={squares[3]}  squareOnClick={()=>handleClick(3)}/>
            <Square valeur={squares[4]}  squareOnClick={()=>handleClick(4)}/>
            <Square valeur={squares[5]}  squareOnClick={()=>handleClick(5)}/>
        </div>

        <div className='board-row'>
            <Square valeur={squares[6]}  squareOnClick={()=>handleClick(6)}/>
            <Square valeur={squares[7]}  squareOnClick={()=>handleClick(7)}/>
            <Square valeur={squares[8]}  squareOnClick={()=>handleClick(8)}/>
        </div>
    </>
  );

}

