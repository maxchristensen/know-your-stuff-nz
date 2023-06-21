import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const PillLibrary = () => {

    const baseUrl = import.meta.env.VITE_WP_API_BASEURL

    const [pills, setPills] = useState(null)
    const [loading, setLoading] = useState(true)

    const endpoint = `${baseUrl}/pill_library?_embed`

    useEffect(() => {
        axios.get(`${endpoint}`)
        .then((res) => {
            setPills(res.data)
            setLoading(false)
        })
        .catch((err) => console.log(err))
    }, [])

    const AllPills = ( {pills} ) => {
        const mappedPills = pills.map((pill, index) => {
            function getFeaturedImage(pill) {
                if (pill && pill._embedded && pill._embedded['wp:featuredmedia'] && pill._embedded['wp:featuredmedia'][0].source_url) {
                    return pill._embedded['wp:featuredmedia'][0].source_url;
                } else {
                    return 'https://via.placeholder.com/150';
                }
            }

            return (
                <div className="post-container" key={pill.slug + "-" + index}>
                    <img className="pill-image" src={getFeaturedImage(pill)} alt="pill Member Image" />
                    <h4 className='title'>{pill.title.rendered}</h4>
                    <div dangerouslySetInnerHTML={{__html: pill.content?.rendered}} />
                </div>
            )
        })

        return (
        <>
            {mappedPills}
        </>
        )
    }


    return (
    <>
            {loading ? <p>Loading...</p> : <AllPills pills={pills} />}

    </>
    )
}

export default PillLibrary