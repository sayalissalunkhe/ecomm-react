import React from 'react'
import BannerSection from '../components/BannerSection';
import Cards from '../components/Cards';
import FeaturedProducts from '../components/FeaturedProducts';
import '../../src/App.css';

function Home() {
  return (
    <>
      <BannerSection />
      <FeaturedProducts />
      <Cards />
    </>
  )
}

export default Home
 