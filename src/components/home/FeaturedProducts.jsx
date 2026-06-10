import { Link } from 'react-router-dom'
import ProductCard from '../products/ProductCard'
import { Loader2 } from 'lucide-react'

export default function FeaturedProducts({ products, loading }) {
  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">精选推荐</h2>
          <p className="text-gray-500 text-sm mt-0.5">为您精心挑选的热门商品</p>
        </div>
        <Link
          to="/products"
          className="text-red-600 text-sm font-medium hover:text-red-700"
        >
          查看全部 →
        </Link>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="w-8 h-8 text-red-600 animate-spin" />
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-16 text-gray-400">暂无推荐商品</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}
