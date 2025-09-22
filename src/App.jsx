import './App.css'

function Square({valeur}) {

  function handleClick(){
    alert(' You click on '+{valeur}+' case');
  }
  return <button className="square">{valeur}</button>;
}


export default function Board (){
  return(

    <>
        <div className='board-row'>
            <Square valeur={1}/>
            <Square valeur={1}/>
            <Square valeur={1}/>
        </div>

        <div className='board-row'>
            <Square valeur={1}/>
            <Square valeur={1}/>
            <Square valeur={1}/>
        </div>

        <div className='board-row'>
            <Square valeur={1}/>
            <Square valeur={1}/>
            <Square valeur={1}/>
        </div>
    </>
  );

}

