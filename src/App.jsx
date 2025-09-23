import './App.css'
import { useState } from 'react';
function Square() {
const [valeur, setValeur] = useState(null);
  function handleClick(){
    setValeur('X');
  }
  return <button className="square" onClick={handleClick}>{valeur}</button>;
}


export default function Board (){

  
  return(

    <>
        <div className='board-row'>
            <Square />
            <Square />
            <Square />
        </div>

        <div className='board-row'>
            <Square />
            <Square />
            <Square />
        </div>

        <div className='board-row'>
            <Square />
            <Square />
            <Square />
        </div>
    </>
  );

}

