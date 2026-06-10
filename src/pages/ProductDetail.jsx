import { useEffect, useState, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Star, ShoppingCart, ArrowLeft, Minus, Plus, Shield, Truck, RotateCcw, Loader2, Package } from 'lucide-react'
import { fetchProductById, fetchProducts } from '../api/shop'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/products/ProductCard'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const CATEGORY_LABELS = {
  electronics: '电子产品',
  fashion: '时尚服饰',
  food: '食品',
  beauty: '美妆护肤',
  home: '家居用品',
  sports: '运动户外',
  books: '图书',
  toys: '玩具',
}

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [product, setProduct] = useState(null)
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    setLoading(true)
    setProduct(null)
    fetchProductById(Number(id))
      .then((p) => {
        setProduct(p)
        const fields = p?.data ?? p ?? {}
        return fetchProducts({ category: fields.category, limit: 4 })
      })
      .then(({ list }) => setRelated(list.filter((r) => r.id !== Number(id)).slice(0, 4)))
      .catch((err) => console.error('Failed to load product:', err))
      .finally(() => setLoading(false))
  }, [id])

  useEffect(() => {
    if (!loading && containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [loading, product])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-12 h-12 text-red-600 animate-spin" />
      </div>
    )
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500 text-lg">商品不存在</p>
        <button onClick={() => navigate('/products')} className="mt-4 text-red-600 hover:underline">
          返回商品列表
        </button>
      </div>
    )
  }

  const fields = product?.data ?? product ?? {}
  const discount = fields.original_price && fields.original_price > fields.price
    ? Math.round((1 - fields.price / fields.original_price) * 100)
    : null

  const titleId = `detail-title-${product.id}`
  const descId = `detail-desc-${product.id}`

  const handleAddToCart = () => {
    addItem({ id: product.id, ...fields }, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-red-600 transition-colors">首页</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-red-600 transition-colors">商品</Link>
        {fields.category && (
          <>
            <span>/</span>
            <Link to={`/products?category=${fields.category}`} className="hover:text-red-600 transition-colors">
              {CATEGORY_LABELS[fields.category] ?? fields.category}
            </Link>
          </>
        )}
        <span>/</span>
        <span className="text-gray-900 line-clamp-1">{fields.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product image */}
        <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden">
          <img
            data-strk-img-id={`detail-img-${product.id}`}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="1x1"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={fields.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {discount && (
              <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-lg">
                -{discount}%
              </span>
            )}
            {fields.is_new && (
              <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-lg">
                新品
              </span>
            )}
          </div>
        </div>

        {/* Product info */}
        <div className="flex flex-col">
          {fields.brand && (
            <span className="text-sm text-red-600 font-semibold mb-2">{fields.brand}</span>
          )}
          <h1 id={titleId} className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-3">
            {fields.name}
          </h1>

          {/* Rating */}
          {fields.rating && (
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${star <= Math.round(fields.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'}`}
                  />
                ))}
              </div>
              <span className="text-amber-600 font-semibold">{fields.rating}</span>
              <span className="text-gray-400 text-sm">({fields.review_count?.toLocaleString()} 条评价)</span>
            </div>
          )}

          {/* Price */}
          <div className="bg-gray-50 rounded-xl p-4 mb-5">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-red-600">¥{fields.price?.toFixed(2)}</span>
              {fields.original_price && fields.original_price > fields.price && (
                <span className="text-lg text-gray-400 line-through">¥{fields.original_price?.toFixed(2)}</span>
              )}
            </div>
            {discount && (
              <p className="text-orange-500 text-sm font-medium mt-1">
                已优惠 ¥{(fields.original_price - fields.price).toFixed(2)}
              </p>
            )}
          </div>

          {/* Description */}
          <p id={descId} className="text-gray-600 text-sm leading-relaxed mb-5">
            {fields.description}
          </p>

          {/* SKU / Tags */}
          {fields.sku && (
            <p className="text-xs text-gray-400 mb-3">货号：{fields.sku}</p>
          )}
          {fields.tags && fields.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {fields.tags.map((tag) => (
                <span key={tag} className="bg-red-50 text-red-600 text-xs px-2.5 py-1 rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Quantity */}
          <div className="flex items-center gap-4 mb-5">
            <span className="text-sm font-medium text-gray-700">数量：</span>
            <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center font-semibold text-gray-900">{quantity}</span>
              <button
                onClick={() => setQuantity(q => Math.min(fields.stock || 99, q + 1))}
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            {fields.stock > 0 && (
              <span className="text-sm text-gray-400">库存 {fields.stock} 件</span>
            )}
          </div>

          {/* Add to cart */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={handleAddToCart}
              disabled={fields.stock === 0}
              className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base transition-all ${
                fields.stock === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : added
                  ? 'bg-green-600 text-white'
                  : 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-red-200'
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              {fields.stock === 0 ? '已售罄' : added ? '已加入购物车 ✓' : '加入购物车'}
            </button>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: Shield, label: '正品保障' },
              { icon: Truck, label: '全国包邮' },
              { icon: RotateCcw, label: '7天退换' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-1.5 bg-gray-50 rounded-xl p-3">
                <Icon className="w-5 h-5 text-red-600" />
                <span className="text-xs text-gray-600 font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-gray-900">相关商品</h2>
            <Link to={`/products?category=${fields.category}`} className="text-red-600 text-sm hover:text-red-700">
              查看更多 →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
