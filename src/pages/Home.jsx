import { useEffect, useState } from 'react'
import HomeHero from '../components/home/HomeHero.jsx'
import HomeLatestNews from '../components/home/HomeLatestNews.jsx'
import HomeFeaturedDeals from '../components/home/HomeFeaturedDeals.jsx'
import HomeFeaturedGames from '../components/home/HomeFeaturedGames.jsx'
import { fetchFeaturedArticles } from '../api/articles.js'
import { fetchFeaturedDeals } from '../api/deals.js'
import { fetchFeaturedGames } from '../api/storeGames.js'

export default function Home({ onAddToCart }) {
  const [articles, setArticles] = useState([])
  const [deals, setDeals] = useState([])
  const [games, setGames] = useState([])

  useEffect(() => {
    fetchFeaturedArticles().then(setArticles).catch(console.error)
    fetchFeaturedDeals().then(setDeals).catch(console.error)
    fetchFeaturedGames().then(setGames).catch(console.error)
  }, [])

  return (
    <div>
      <HomeHero />
      <HomeFeaturedDeals deals={deals} />
      <HomeLatestNews articles={articles} />
      <HomeFeaturedGames games={games} onAddToCart={onAddToCart} />
    </div>
  )
}
