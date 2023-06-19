import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import Links from './components/Links'
import Post from './components/Post'

function App() {

  return (
    <>
    <HashRouter>
      <Header />
      <Links />
      <Footer />
    </HashRouter>
    </>
  )
}

export default App
