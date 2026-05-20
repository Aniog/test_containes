import { useEffect, useState } from 'react'
import HomeHero from '../components/home/HomeHero.jsx'
import HomeFeaturedArticles from '../components/home/HomeFeaturedArticles.jsx'
import HomeDealsPreview from '../components/home/HomeDealsPreview.jsx'
import HomeStorePreview from '../components/home/HomeStorePreview.jsx'
import PlatformStrip from '../components/home/PlatformStrip.jsx'
import { fetchArticles, fetchGameDeals, fetchStoreProducts } from '../api/gameApi.js'

export default function Home({ onAddToCart }) {
  const [articles, setArticles] = useState([])
  const [deals, setDeals] = useState([])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const [arts, dls, prods] = await Promise.all([
          fetchArticles({ limit: 4 }),
          fetchGameDeals({ limit: 8 }),
          fetchStoreProducts({ limit: 4 }),
        ])
        setArticles(arts)
        setDeals(dls)
        setProducts(prods)
      } catch (err) {
        console.error('Home load error:', err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-[#0f0f13]">
      <HomeHero />
      <PlatformStrip />
      {!loading && (
        <>
          <HomeFeaturedArticles articles={articles} />
          <div className="border-t border-[#2d2d3d]" />
          <HomeDealsPreview deals={deals} />
          <div className="border-t border-[#2d2d3d]" />
          <HomeStorePreview products={products} onAddToCart={onAddToCart} />
        </>
      )}
      {loading && (
        <div className="flex items-center justify-center py-32">
          <div className="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  )
}
