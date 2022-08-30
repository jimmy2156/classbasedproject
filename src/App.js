
import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

class App extends React.Component {
  state = {
    goOut: "Yes"
  }
  toggleHit = () => {
    this.setState(
      prevState => {
        return {
          goOut: prevState.goOut === "Yes" ? "No" : "Yes"
        } 
      }
    )
  }

  
  render() {
  
  return (
    <div className="App">
       <h1>hello how are u </h1>
   
    <Navbar name="gagan"/> 
    <button onClick={this.toggleHit}>click here </button>
    <h1>{this.state.goOut}</h1>
    
    </div>
  )}
}

export default App;
