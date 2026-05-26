import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { fetchFeaturedProducts } from '../../api/products'
import ProductCard from '../shop/ProductCard'

export default function FeaturedProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFeaturedProducts()
      .then(rows => setProducts(rows))
      .catch(err => console.error('Failed to fetch featured products:', err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="py-16 md:py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-2">精选推荐</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">热门爆款商品</h2>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-flex items-center gap-1 text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors"
          >
            查看全部 <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-900 rounded-xl overflow-hidden animate-pulse">
                <div className="aspect-square bg-gray-800" />
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-gray-800 rounded w-3/4" />
                  <div className="h-4 bg-gray-800 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <div className="text-center mt-8 md:hidden">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 border border-gray-700 hover:border-yellow-400 text-white px-6 py-3 rounded-lg transition-all text-sm font-medium"
          >
            查看全部商品 <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
