import { useState } from "react";


export default function useCounter() {
const [count1, setcount1] = useState(0)
 function increment() {
    setcount1(prevState => prevState + 1)
 }

return {count1, increment}


}