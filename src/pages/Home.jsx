import React from 'react'
import Hero from '../components/home/Hero'
import FeaturedGames from '../components/home/FeaturedGames'
import LatestNews from '../components/home/LatestNews'
import TopDeals from '../components/home/TopDeals'

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedGames />
      <TopDeals />
      <LatestNews />
    </div>
  )
}

export default Home