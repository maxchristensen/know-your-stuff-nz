import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Page import
import Home from '../pages/Home'
import Posts from '../pages/Posts'

// Component import
import Post from './Post'

const Links = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post:id" element={<Post />} />
    </Routes>
  )
}

export default Links