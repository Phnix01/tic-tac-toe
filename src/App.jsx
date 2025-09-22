import './App.css'

function Square({valeur}) {

  function handleClick(){
    alert(' You click on '+{valeur}+' case');
  }
  return <button className="square" onClick={handleClick}>{valeur}</button>;
}


export default function Board (){
  return(

    <>
        <div className='board-row'>
            <Square valeur="1"/>
            <Square valeur="2"/>
            <Square valeur="3"/>
        </div>

        <div className='board-row'>
            <Square valeur="4"/>
            <Square valeur="5"/>
            <Square valeur="6"/>
        </div>

        <div className='board-row'>
            <Square valeur="7"/>
            <Square valeur="8"/>
            <Square valeur="9"/>
        </div>
    </>
  );

}

