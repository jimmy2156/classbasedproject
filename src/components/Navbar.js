import Withtoggle from "../HOC/withToggle"



function Navbar(props) {
   const {count, toggleon} = props
   return (
      <div>
         <h1>{count}</h1>
         <button onClick={toggleon}>count here</button>
         <h1>{props.name}</h1>
         
      </div>
   )
}
export default Withtoggle(Navbar)