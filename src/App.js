import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter,setCounter]=useState(0);

  const handlechange=(value)=>{
    setCounter(counter+value);
  }

  const handleDouble=(value)=>{
    setCounter(counter*value);
  }
  

  return (
    <div className="App">
      
        
          <h1 className={`${counter%2}==0 ? "red" :"green}`} >
            Counter:{counter}</h1>
        
      
        
        <button onClick={()=>{
          handlechange(1)
        }}>
          ADD 
        </button>
         <button onClick={()=>{
          handlechange(-1)
        }}>
          SUB
         </button>
         <button onClick={()=>{
           handleDouble(2)
         }}>
           Double
         </button>
    </div>
  );
}

export default App;
