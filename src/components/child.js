
import React, {memo} from "react"

export default React.memo(function Child() {
    console.log("child render")
    return (
        <div><h1>CHild component</h1></div>
    )
})