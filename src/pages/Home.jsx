import { useState, useEffect, useCallback } from 'react'
import HomeHero from '@/components/home/HomeHero'
import FeaturedGames from '@/components/home/FeaturedGames'
import LatestNews from '@/components/home/LatestNews'
import PlatformDeals from '@/components/home/PlatformDeals'
import { fetchGames, fetchArticles, fetchDeals } from '@/api/gameApi'

export default function Home({ onAddToCart }) {
  const [featuredGames, setFeaturedGames] = useState([])
  const [articles, setArticles] = useState([])
  const [deals, setDeals] = useState([])
  const [loading, setLoading] = useState({ games: true, articles: true, deals: true })

  const loadData = useCallback(async () => {
    console.log('[Home] Loading home page data...')
    const [gamesResult, articlesResult, dealsResult] = await Promise.allSettled([
      fetchGames({ featured: true, limit: 4 }),
      fetchArticles({ limit: 6 }),
      fetchDeals({ limit: 4 }),
    ])

    if (gamesResult.status === 'fulfilled') {
      setFeaturedGames(gamesResult.value.list)
      console.log('[Home] Featured games loaded:', gamesResult.value.list.length)
    }
    if (articlesResult.status === 'fulfilled') {
      setArticles(articlesResult.value.list)
      console.log('[Home] Articles loaded:', articlesResult.value.list.length)
    }
    if (dealsResult.status === 'fulfilled') {
      setDeals(dealsResult.value.list)
      console.log('[Home] Deals loaded:', dealsResult.value.list.length)
    }

    setLoading({ games: false, articles: false, deals: false })
  }, [])

  useEffect(() => {
    loadData()
  }, [loadData])

  return (
    <div>
      <HomeHero />
      <FeaturedGames games={featuredGames} loading={loading.games} onAddToCart={onAddToCart} />
      <LatestNews articles={articles} loading={loading.articles} />
      <PlatformDeals deals={deals} loading={loading.deals} />
    </div>
  )
}
