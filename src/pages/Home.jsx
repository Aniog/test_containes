import { useState, useEffect } from 'react'
import HomeHero from '@/components/home/HomeHero'
import FeaturedGames from '@/components/home/FeaturedGames'
import LatestNews from '@/components/home/LatestNews'
import PlatformDeals from '@/components/home/PlatformDeals'
import { fetchGames, fetchArticles, fetchDiscounts } from '@/api/gamesite'

export default function Home() {
  const [featuredGames, setFeaturedGames] = useState([])
  const [articles, setArticles] = useState([])
  const [discounts, setDiscounts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      setLoading(true)
      try {
        const [gamesRes, articlesRes, discountsRes] = await Promise.all([
          fetchGames({ featured: true, limit: 4 }),
          fetchArticles({ limit: 3 }),
          fetchDiscounts({ limit: 30 }),
        ])
        setFeaturedGames(gamesRes.list)
        setArticles(articlesRes.list)
        setDiscounts(discountsRes.list)
      } catch (err) {
        console.error('Failed to load home data:', err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div>
      <HomeHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturedGames games={featuredGames} loading={loading} />
        <PlatformDeals discounts={discounts} loading={loading} />
        <LatestNews articles={articles} loading={loading} />
      </div>
    </div>
  )
}
