
import useCounter from "../HOC/useCounter"

export default function Menu() {
    const {count1, increment} = useCounter()
    return(
        <div>
            <h1>{count1}</h1>
            <button onClick={increment}>click here </button>
        </div>
    )
}