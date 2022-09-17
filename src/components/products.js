import products from '../data'
import { Link } from 'react-router-dom'

export default function Products() {
    return (
        <div>
            <h1>Products</h1>
            <div>{products.map(product => {
                return (
                    <article key={product.id}><h5>{product.name}</h5>
                    <Link to={`/products/${product.id}`}>more info</Link>
                    </article>
                )
            })}</div>
        </div>
    )
}