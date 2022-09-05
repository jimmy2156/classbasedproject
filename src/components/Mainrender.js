import { useState } from "react"



export default function Mainrender(props) {
    const [count, setcount] = useState(true)
    function clickIt() {
        setcount(prevState => !prevState)
    }
    return (
        <div>
           <div> {props.render(count)}</div>
           

        <button onClick={clickIt}>click here </button>
        </div>
    )
}