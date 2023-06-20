import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Storefront = () => {
    
    const productsUrl = import.meta.env.VITE_WC_PRODUCTS_URL

    const [donations, setDonations] = useState(null)
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`${productsUrl}`)
        .then((res) => {
            // console.log(res.data)
            setLoading(false)

            let donationList =[]
            let productsList = []

            res.data.map((product) => {
                if (product.categories[0].name === 'Donation'){
                    donationList.push(product)
                } else {
                    productsList.push(product)
                }
            })

            setDonations(sortDonations({donationList}))
            setProducts(productsList)
        })
        .catch((err) => console.log(err))
    }, [])

    function sortDonations({donationList}) {
     
            const sortedDonations = donationList.sort((a, b) => {
                let priceA = parseInt(a.prices.price)
                let priceB = parseInt(b.prices.price)
                if (priceA < priceB) return -1;
                if (priceA > priceB) return 1;
                return 0;
              });



            return sortedDonations;
    }

    const Donations = () => {
        // console.log(donations);
        const mappedDonations = donations.map((donation, index) => {
            return (
                <div className="product-container item-container" key={index}>
                    <Link className="product-link" to={`/product/${donation.id}`} >
                        <h4 className="name">{donation.name}</h4>
                    </Link>
                    <h3 className="name">${donation.prices.regular_price/100} {donation.prices.currency_code}</h3>
                </div>
                )
        })

            return(
                <>
                {mappedDonations}
                </>
            )
    }

    const Products = () => {
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
                <h3 className="name">${product.prices.regular_price/100} {product.prices.currency_code}</h3>
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
            {loading ? <p>Loading</p> : <>
            <Donations/>
            <Products />
            
            </>}
            </div>
        </div>
        )

}

export default Storefront