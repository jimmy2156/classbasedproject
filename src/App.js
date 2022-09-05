
import './App.css';

import React from 'react';
import Mainrender from './components/Mainrender';
import Navbar from './components/Navbar';





function App() {

  return (
 
    <div className="App">
    

    <Navbar />

  
    <Mainrender render={function(count1) {
      return (<div> 
        <h1 className={count1 ? "show1" : "show2"}> hello how are u </h1>
        <h1>{count1 ?  "❤️" : "♡"}</h1>
      
     
      </div>
      
      )
           
    }} />
   </div>
  )
}

  
export default App;
    