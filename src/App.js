import React, { useState } from 'react';
import Renderlistitems from './listitems';
import './App.css';

function App() {
   const[inputitems,setinputitems]=useState("");
   const[itmes,setitmes]=useState([]);

   const additmes = (evnet) => {
    setinputitems(evnet.target.value)
   }
   const itemasadded_array = () => {
    setitmes((olditmes)=>{
      return[...olditmes,inputitems]
    });
    setinputitems('');
   } 

   const deleteitem =(id) =>{
    setitmes((olditmes)=>{
      return olditmes.filter((allElem,index)=>{
        return index!==id;
      }
      ) 
    });
   }
  return (
    <div className="main_div">
      <div className="background">
        <h1>TODO LIST</h1>
        <div className="input">     
          <input type="text" placeholder="Enter the text" value={inputitems} onChange={additmes}/>
          <button onClick={itemasadded_array}>+</button>
        </div> 
        <ol>
          <div >
            {
              itmes.map((listitems, index)=>{
                return <Renderlistitems 
                key={index} 
                id={index}
                onSelect={deleteitem}
                items={listitems}/>
              })
            }
          </div>
        </ol>
      </div>  
    </div>
  )
}

export default App;


