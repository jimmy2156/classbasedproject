
import './App.css';

import React from 'react';
import Mainrender from './components/Mainrender';
import Navbar from './components/Navbar';





function App() {

  return (
 
    <div className="App">
    

    <Navbar />

   
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
    