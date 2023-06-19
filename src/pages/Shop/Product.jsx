import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';


const Product = () => {

    const baseUrl = import.meta.env.VITE_WC_PRODUCTS_URL

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

    function getFeaturedImage(product) {
        if (product && product.images && product.images[0]) {
            return product.images[0].src;
        } else {
            return 'https://via.placeholder.com/150';
        }
    }

  return (
    <div>Product</div>
  )
}

export default Product