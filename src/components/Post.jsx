import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';


const Post = () => {

    const baseUrl = import.meta.env.VITE_WP_API_BASEURL
    // console.log(baseUrl);
    
    const { id } = useParams()
    
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const endpoint = `${baseUrl}/stories/${id}`
    
    useEffect(() => {
        axios.get(`${endpoint}`)
        .then((res) => {
          console.log(res)
          setPost(res.data)
          setLoading(false)
        })
        .catch((err) => console.log(err))
      }, [id])
    
    
    if (loading) {
    return <>Loading...</>
    }
        

    return (
        <div className='container'>
           <div key={post.slug} className="post-container">
               <h4 className="title">{post.title.rendered}</h4>
               <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
               <div>Key: {post.slug}</div>
           </div>
         </div>
      );
}

export default Post