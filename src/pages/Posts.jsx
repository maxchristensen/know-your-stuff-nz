import { React, useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const Posts = () => {

    // setting useStates
    const [posts, setPosts] = useState(null)
    const [loading, setLoading] = useState(true)

    const endpoint = `${baseUrl}/stories?_embed`

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
            function getFeaturedImage(story) {
                if (story && story._embedded && story._embedded['wp:featuredmedia'] && story._embedded['wp:featuredmedia'][0].source_url) {
                    return story._embedded['wp:featuredmedia'][0].source_url;
                } else {
                    return 'https://via.placeholder.com/150';
                }
            }
            return (
                <div className="post-container width-33" key={story.slug + "-" + index}>
                    <img className="story-image" src={getFeaturedImage(story)} alt={story.title.rendered} />
                    <h4 className='title'>{story.title.rendered}</h4>
                    <div dangerouslySetInnerHTML={{__html: story.excerpt?.rendered}} />
                        <a href={`#/stories/${story.id}`}>Read More...</a>
                </div>
            )
        })

        // console.log(mappedPosts);

        return (
            <>
                <div className="stories-container">
                    {mappedPosts}
                </div>
            </>
        )
    }



  return (
    <>
    <div className="container">
        <h2 className='latest-news-heading'>Latest News!</h2>
        <div className="homeCont">
            {loading ? <p>Loading...</p> : <AllPosts posts={posts} />}
        </div>
    </div>
    </>
  )
}

export default Posts