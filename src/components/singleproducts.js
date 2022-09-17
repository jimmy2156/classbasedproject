
import { Link, useParams } from "react-router-dom"
import products from '../data'


export default function SingleProducts() {
    const { productId } = useParams()
    const product = products.find((product) => product.id === productId)
    const { image, name } = product
   
   return( <div>
         <img src={image} alt={name} />
         <h2>{name}</h2>
    
        <Link to='/products'>Go back to products</Link>
    </div>
    )
}