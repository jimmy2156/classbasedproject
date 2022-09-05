import { useState } from "react"



const Withtoggle = (WrappedComponent) => {
    function Withtoggle(props) {
        const [count, setcount] = useState(true)
        function toggleon() {
            setcount(prevState => !prevState)
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