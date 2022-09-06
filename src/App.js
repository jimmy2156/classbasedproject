
import './App.css';

import React from 'react';
import Mainrender from './components/Mainrender';
import Navbar from './components/Navbar';
import Grandparent from './components/purecomponenets';
import { useState } from 'react';






function App() { 
  const [count, setcount] = useState(0)


 function toggleon() {
    setcount(prevState => prevState + 1)
  }
  

  return (
 
    <div className="App">
    

    <Navbar />
    <Grandparent count={count} />
    <button onClick={toggleon}>click here </button>

   
    <Mainrender  children={
    function(data, newnum) {
      return (<div>
       <h1>{JSON.stringify(data.name)}</h1>
       <h2>{JSON.stringify(data.films)}</h2>
       <button onClick={newnum}>click here </button>
       </div>
      )
    } 
   }/>
   </div>
  )
}

  
export default App;
    