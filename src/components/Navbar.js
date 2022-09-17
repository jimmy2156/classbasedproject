import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"





function Navbar() {
   const [count, setcount] = useState("")
   const [remainingTime, setremainingTime] = useState(10)
   const [isTimeRunning, setisTimeRunning] = useState(false)
   const [wordCount, setwordCount] = useState(0)
   const inputRef = useRef()
  

   function change1(event) {
      setcount(event.target.value)
   }
   const countingWords = (count) => { 
      
      const wordArr = count.trim().split(" ")
      const filteredWords = wordArr.filter(word => word !== "")
      
      return filteredWords.length
      
      
   }
   function startGame() {
      setcount("")
      setremainingTime(10)
      setisTimeRunning(true)
      inputRef.current.disabled = false
      inputRef.current.focus()
   }
   
   useEffect(() => {

   if (isTimeRunning && remainingTime > 0) {
    setTimeout(() => {
      setremainingTime(time => time - 1)
    }, 1000)} else {
      setisTimeRunning(false)
      setwordCount(countingWords(count))
     
    }

   },[isTimeRunning, remainingTime])
   
  return (
 <div className="form">
   <Link to="/">Home</Link>
  <h1 className="heading1">How fast do you type ?</h1>
  <textarea name="textarea" ref={inputRef} id="textarea" cols="100" rows="16" value={count} onChange={change1} disabled={!isTimeRunning}></textarea>
  <h1 className="heading2">Time remaining: {remainingTime} </h1>
  <button className="button" onClick={startGame} disabled={isTimeRunning}>START</button>
  <h1 className="heading3">Word Count: {wordCount}</h1>

 </div>
   )

}
export default Navbar
