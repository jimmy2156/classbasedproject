import { useState } from "react"



export default function Mainrender(props) {

    const [state1, setstate1] = useState("Loading")
    const [num, setnum] = useState(true)
   fetch("https://swapi.dev/api/people/5/")
     .then(res => res.json())
     .then(data => {
        setstate1(prevState => data)
    })
    function newNum() {
        setnum(prevState => !prevState)
    }

    return (
        <div>

    <div className={num ? "show5" : "show6"}>{props.children(state1, newNum)}</div>
        </div>
    )
}