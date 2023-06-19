import { React, useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const Posts = () => {

    // setting useStates
    const [posts, setPosts] = useState(null)
    const [loading, setLoading] = useState(true)

    const endpoint = `${baseUrl}/stories`

    useEffect(() => {
        axios.get(`${endpoint}`)
        .then((res) => {
            // console.log(res)
            setPosts(res.data)
            setLoading(false)
        })
        .catch((err) => console.log(err))
    })

    const AllPosts = ( {posts} ) => {
        // console.log({posts})
        const mappedPosts = posts.map((story, index) => {
            return (
                <div className="post-container" key={story.slug + "-" + index}>
                    <h4 className='title'>{story.title.rendered}</h4>
                    <div dangerouslySetInnerHTML={{__html: story.excerpt?.rendered}} />
                        <a href={`#/stories/${story.id}`}>Read More...</a>
                </div>
            )
        })

        // console.log(mappedPosts);

        return (
            <>
            {mappedPosts}
            </>
        )
    }



  return (
    <>
    <div className="container">
        <h2>Posts:</h2>
        <div className="homeCont">
            {loading ? <p>Loading...</p> : <AllPosts posts={posts} />}
        </div>

    </div>
    </>
  )
}

export default Posts