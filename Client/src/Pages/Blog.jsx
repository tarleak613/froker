import React from 'react'
import '../assets/fonts.css'
import Header from '../Components/Header'
import IntroPost from '../Components/IntroPost'
import Blogs from '../Components/Blogs'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'

function Blog() {
  return (
    <div>
      <Header/>
      <IntroPost/>
      <Blogs/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Blog
