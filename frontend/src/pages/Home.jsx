import React from 'react'
import Hero from '../componenets/Hero'
import LatestCollection from '../componenets/LatestCollection'
import BestSeller from '../componenets/BestSeller'
import OurPolicy from '../componenets/OurPolicy'
import NewsLetterBox from '../componenets/NewsLetterBox'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home