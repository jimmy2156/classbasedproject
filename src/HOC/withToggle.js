import { useState } from "react"



const Withtoggle = (WrappedComponent) => {
    function Withtoggle(props) {
        const [count, setcount] = useState(0)
        function toggleon() {
            setcount(prevState => prevState + 1)
        }
    
    return (
        <div>
            <WrappedComponent count={count} toggleon={toggleon} {...props} />
        </div>
    )
    }
    return Withtoggle
}
export default Withtoggle