import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Benifits from '../components/Benifits'
import JobRoll from '../components/JobRoll'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Benifits/>
    <JobRoll/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home