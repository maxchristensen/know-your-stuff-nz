import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const baseUrl = import.meta.env.VITE_WC_PRODUCTS_URL

const Product = () => {

    const { id } = useParams()
    
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const endpoint = `${baseUrl}/${id}`

    useEffect(() => {
        axios.get(`${endpoint}`)
        .then((res) => {
            setProduct(res.data)
            setLoading(false)
        })
        .catch((err) => console.log(err))
    })

    if (loading) {
        return <>Loading...</>
        }

    function getFeaturedImage(product) {
        if (product && product.images && product.images[0]) {
            return product.images[0].src;
        } else {
            return 'https://via.placeholder.com/150';
        }
    }

  return (
    <>
     <div className="single-product-container item-container" key={id}>
                <div className="product-image-container">
                    <img className="product-image" src={getFeaturedImage(product)} alt="Product Image" />
                </div>
                <div className="product-info-container">
                    <h4 className="name">{product.name}</h4>
                    <p className="product-price">${product.prices.regular_price/100} {product.prices.currency_code}</p>
                    <p className="product-description" dangerouslySetInnerHTML={{ __html: product.description }} />
                    <button className='atc-button'>ADD TO CART</button>
                </div>
            </div>
    </>
  )
}

export default Product