import './App.css'

function Square({valeur}) {
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

