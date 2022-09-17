import { useRef } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"



export default function Todolist() {
    const [inputList, setinputList] = useState("")
    const [newInput, setnewInput] = useState([])
    const inputRef = useRef()

 
    function handleChange(event) {
        setinputList(event.target.value)
    }
    function savedChange(event) {
        event.preventDefault()
        setnewInput(prevState => [...prevState, inputList])
    setinputList("")
    
 inputRef.current.focus() }

    const todolist1 = newInput.map(todo => <p key={todo}>{todo}</p>)

    return (
        <div className="todolist">
            <Link to="/Navbar">Navbar</Link>

<form>
    <input ref={inputRef} type="text" name="todo" value={inputList}  onChange={handleChange} dis/>
    <button onClick={savedChange}>click here </button>
</form>
{todolist1}
        </div>
    )
}