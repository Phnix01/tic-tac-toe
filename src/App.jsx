import './App.css'
import { useState } from 'react';
function Square({valeur,squareOnClick}) {


  return <button className="square" onClick={squareOnClick}>{valeur}</button>;
}


function Board (){

   const [squares, setSquares] = useState(Array(9).fill(null));

   // on va considérer x comme l'utilisateur par defaut donc isNext va nous permettre de passer la main à l'autre joueur et de mettre O
   const[xisNext, setXIsNext] = useState(true);

   

  function handleClick(i){

    // la fonction handleClick crée une copie du tableau squres (nextSquares) 
    // grâce à la fonction javascript slice(). ensuite handleClik met à jour le tableau nextSquares pour ajouter un x à la case (index[0])
    if(squares[i] || calculWinner(squares)){
      return;
    }
    
    const nextSquares = squares.slice();
    if(xisNext){
      nextSquares[i] = "X";
    }
    else
    {
      nextSquares[i] = "O";
    }

    setSquares(nextSquares);
    setXIsNext(!xisNext);
  }

  function calculWinner(squares){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
  }

  const winner = calculateWinner(squares);
   let status;
   if(winner){
    status = winner + " a gagné";
   }
   else{
    status 
   }
  return(

    <>
        <div className="status">{status}</div>
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

export default function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}