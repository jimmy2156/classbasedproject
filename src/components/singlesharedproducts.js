import products from "../data"
import { Outlet } from "react-router-dom"


export default function SingleSharedProducts() {
    const {image, name} = products
    return (
        <div>
            <h1>{name}</h1>
<img src={image} alt={name} />
<Outlet />

        </div>
    )
}