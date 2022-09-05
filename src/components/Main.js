import Withtoggle from "../HOC/withToggle"


function Main(props) {
    const {toggleon, count} = props
    return (
        <div>

        <button onClick={toggleon}>Click here for surprise</button>
        <div>{count ?  "❤️" : "♡"}</div>
        
        </div>

    )

}
export default Withtoggle(Main)