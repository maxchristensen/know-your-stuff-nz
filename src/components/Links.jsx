import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Page import
import Home from '../pages/Home'
import Posts from '../pages/Posts'
import Storefront from '../pages/Shop/Storefront'
import StaffMembers from '../pages/StaffMembers'
import PillLibrary from '../pages/PillLibrary'

// Component import
import Post from './Post'
import Product from '../pages/Shop/Product'

const Links = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/stories" element={<Posts />} />
        <Route path="/stories/:id" element={<Post />} />
        <Route path="storefront" element={<Storefront />} />
        <Route path="product/:id" element={<Product />} />
        <Route path='/who-we-are' element={<StaffMembers />} />
        <Route path='/resources' element={<PillLibrary />} />

    </Routes>
  )
}

export default Links