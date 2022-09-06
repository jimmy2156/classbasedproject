import { PureComponent } from "react";
import Child from "./child";


class Grandparent extends PureComponent { 
  
    render() {
        console.log("render")
        return ( <div>
            <h1>grandparent</h1>
            <h2>{this.props.count}</h2>
            <Child />
            </div>

        )

    }
}
export default Grandparent