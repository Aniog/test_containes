import { useEffect, useState } from 'react'
import HeroBanner from '../components/home/HeroBanner'
import CategoryGrid from '../components/home/CategoryGrid'
import FeaturedProducts from '../components/home/FeaturedProducts'
import { fetchProducts } from '../api/shop'

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts({ limit: 8 })
      .then(({ list }) => setProducts(list))
      .catch((err) => console.error('Failed to load products:', err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10">
      <HeroBanner />
      <CategoryGrid />

      {/* Promo banners */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: '618大促', sub: '全场低至5折', bg: 'from-red-600 to-orange-500', emoji: '🎉' },
          { title: '新品首发', sub: '最新科技产品', bg: 'from-blue-600 to-blue-400', emoji: '✨' },
          { title: '品牌特卖', sub: '知名品牌直降', bg: 'from-purple-600 to-pink-500', emoji: '🏷️' },
        ].map(({ title, sub, bg, emoji }) => (
          <div
            key={title}
            className={`bg-gradient-to-r ${bg} rounded-xl p-5 text-white cursor-pointer hover:opacity-90 transition-opacity`}
          >
            <div className="text-2xl mb-1">{emoji}</div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-white/80 text-sm">{sub}</p>
          </div>
        ))}
      </div>

      <FeaturedProducts products={products} loading={loading} />
    </div>
  )
}
