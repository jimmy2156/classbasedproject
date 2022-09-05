import Withtoggle from "../HOC/withToggle"



function Navbar(props) {
   const {count, toggleon} = props
   return (
      <div>
        <button onClick={toggleon} className="button1">{count ? "Show" : "Hide"}</button>
        <h1 className={count ? "show" : "none"}>Menu for tonight</h1>
      </div>
   )
}
export default Withtoggle(Navbar, 6)