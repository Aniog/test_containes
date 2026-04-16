import { useState, useEffect } from 'react'
import HomeHero from '../components/home/HomeHero'
import FeaturedArticles from '../components/home/FeaturedArticles'
import TopDeals from '../components/home/TopDeals'
import FeaturedProducts from '../components/home/FeaturedProducts'
import PlatformStrip from '../components/home/PlatformStrip'
import { fetchArticles, fetchDeals, fetchProducts } from '../api/gameApi'

export default function Home({ onAddToCart }) {
  const [articles, setArticles] = useState([])
  const [deals, setDeals] = useState([])
  const [products, setProducts] = useState([])
  const [loadingArticles, setLoadingArticles] = useState(true)
  const [loadingDeals, setLoadingDeals] = useState(true)
  const [loadingProducts, setLoadingProducts] = useState(true)

  useEffect(() => {
    fetchArticles({ limit: 6 })
      .then(setArticles)
      .finally(() => setLoadingArticles(false))

    fetchDeals({ limit: 4 })
      .then(setDeals)
      .finally(() => setLoadingDeals(false))

    fetchProducts({ limit: 4 })
      .then(setProducts)
      .finally(() => setLoadingProducts(false))
  }, [])

  return (
    <div>
      <HomeHero />
      <PlatformStrip />
      <TopDeals deals={deals} loading={loadingDeals} />
      <FeaturedArticles articles={articles} loading={loadingArticles} />
      <FeaturedProducts products={products} loading={loadingProducts} onAddToCart={onAddToCart} />
    </div>
  )
}
