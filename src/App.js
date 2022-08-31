
import { render } from '@testing-library/react';
import React from 'react';
import './App.css';




class App extends React.Component {

state = {
  firstName: '',
  lastName: '',
  age: '',
  comments: '',
  isFriendly: true,
  employment: '',
  favColor: ''
}

toggleChange = (event) => {
  const {name, value, type, checked} = event.target
  type === "checkbox" ? 
      this.setState({
          [name]: checked
      })
  :
  this.setState({
      [name]: value
  }) 
}
componentDidMount() {
this.setState(JSON.parse(localStorage.getItem("formData")))
}
componentDidUpdate() {
  localStorage.setItem("formData", JSON.stringify(this.state))
}

  

  
  render() {
  
  
  return (
 
    <div className="App">
       
   <form>
    <input type="text" placeholder='Firstname' value={this.state.firstName} name="firstName" onChange={this.toggleChange} />
    <input type="text" placeholder='Lastname' value={this.state.lastName} name="lastName" onChange={this.toggleChange}/>
    <input type="text" placeholder='Age' value={this.state.age} name="age" onChange={this.toggleChange}/>
    <textarea placeholder='comments' value={this.state.comments} name="comments" onChange={this.toggleChange} />
    <input type="checkbox" name='friendly' value={this.state.isFriendly} onChange={this.toggleChange} />
    <label htmlFor="friendly">Are you friendly</label>
    <fieldset>
      <input type="radio" name="employment" value="Unemployed" checked={this.state.employment === 'Unemployed'} onChange={this.toggleChange}/>
      <label htmlFor="Unemployed">Unemployed</label>
     <input type="radio" name="employment" value="employed" checked={this.state.employment === 'employed'} onChange={this.toggleChange}/>
      <label htmlFor="employed">Employed</label>
      <input type="radio" name="employment" value="parttime" checked={this.state.employment === 'parttime'} onChange={this.toggleChange}/>
      <label htmlFor="parttime">Parttime</label>
    </fieldset>
    <label htmlFor="selectelement">What is your favourite color</label>
    <select name="favColor" id="selectelement" value={this.state.favColor} onChange={this.toggleChange}>
      <option value="Red">Red</option>
      <option value="yellow">yellow</option>
      <option value="blue">blue</option>
      <option value="black">black</option>
      <option value="purple">purple</option>
    </select>
    <button>submit</button>
   </form>
    
    </div>
  )}

  }
export default App;
