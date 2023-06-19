import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Storefront = () => {
    
    const productsUrl = import.meta.env.VITE_WC_PRODUCTS_URL

    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`${productsUrl}`)
        .then((res) => {
            console.log(res.data)
            setProducts(res.data)
            setLoading(false)
        })
        .catch((err) => console.log(err))
    }, [])

    const Products = ({ products }) => {
        // console.log({ products });
        const mappedProducts = products.map((product, index) => {
            function getFeaturedImage(product) {
                if (product && product.images && product.images[0]) {
                    return product.images[0].src;
                } else {
                    return 'https://via.placeholder.com/150';
                }
            }
            return (
            <div className="product-container item-container" key={index}>
                <img className="product-Image" src={getFeaturedImage(product)} alt="Product Image" />
                <Link className="product-link" to={`/product/${product.id}`} >
                    <h4 className="name">{product.name}</h4>
                </Link>
                <h3 className="name">${product.prices.price/100} {product.prices.currency_code}</h3>

            </div>
            )
        })
        
        // console.log({ mappedProducts });
        
        return (
            <>
            {mappedProducts}
            </>
        )
    }


    return (
        <div id="shop-page" className="container">
            <h2>Shop</h2>
            <div id="product-grid" className="grid-container">
            {loading ? <p>Loading</p> : <Products products={products} />}
            </div>
        </div>
        )

}

export default Storefront