import React from 'react'
import Navbar from '../../Section/Navbar/Navbar'
import Banner from '../../Section/Banner/Banner'
import Bestcar from '../../Section/Bestcar/Bestcar'
import Whyus from '../../Section/Whyus/Whyus'
import Testimonial from '../../Section/Testimonial/Testimonial'
import SewaMobil from '../../Section/SewaMobil/SewaMobil'
import Faq from '../../Section/FAQ/Faq'
import Footer from '../../Section/Footer/Footer'
const Home = () => {
  return (
    <div>
    <Navbar/>
    <Banner/>
    <Bestcar/>
    <Whyus/>
    <Testimonial/>
    <SewaMobil/>
    <Faq/>
    <Footer/>
    </div>
  )
}

export default Home
