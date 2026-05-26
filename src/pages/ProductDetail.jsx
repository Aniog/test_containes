import React, { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ShoppingCart, Heart, ChevronLeft, Shield, Truck, RotateCcw, Package } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { fetchProductById } from '../api/products'
import { useCart } from '../lib/CartContext'

const CATEGORY_LABELS = {
  jersey: '球衣', ball: '足球', scarf: '围巾', hat: '帽子',
  flag: '旗帜', trophy: '奖杯', collectible: '收藏品', accessory: '配件',
}

export default function ProductDetail() {
  const { id } = useParams()
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    fetchProductById(id)
      .then(p => {
        setProduct(p)
        console.log('Loaded product:', p)
      })
      .catch(err => console.error('Failed to load product:', err))
      .finally(() => setLoading(false))
  }, [id])

  useEffect(() => {
    if (product && containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [product])

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0E1A] pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-red-700 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">加载中...</p>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0A0E1A] pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">⚽</div>
          <h2 className="text-white text-xl font-semibold mb-2">商品不存在</h2>
          <Link to="/shop" className="text-red-400 hover:text-red-300">返回商城</Link>
        </div>
      </div>
    )
  }

  const { data } = product
  const discount = data.original_price
    ? Math.round((1 - data.price / data.original_price) * 100)
    : null
  const priceRMB = (data.price * 7.2).toFixed(0)
  const originalRMB = data.original_price ? (data.original_price * 7.2).toFixed(0) : null

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0A0E1A] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link to="/" className="hover:text-white transition-colors">首页</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-white transition-colors">商城</Link>
          <span>/</span>
          {data.category && (
            <>
              <Link to={`/shop?category=${data.category}`} className="hover:text-white transition-colors">
                {CATEGORY_LABELS[data.category] || data.category}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="text-gray-300 truncate max-w-xs">{data.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
              {/* Hidden text refs */}
              <span id={`detail-team-${product.id}`} className="sr-only">{data.team || ''}</span>
              <span id={`detail-name-${product.id}`} className="sr-only">{data.name}</span>
              <img
                alt={data.name}
                className="w-full h-full object-cover"
                data-strk-img-id={`detail-img-${product.id}`}
                data-strk-img={`[detail-name-${product.id}] [detail-team-${product.id}] world cup merchandise`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            {discount && discount > 0 && (
              <div className="absolute top-4 left-4 bg-red-700 text-white text-sm font-bold px-3 py-1 rounded-lg">
                -{discount}% 优惠
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Category + Team */}
            <div className="flex items-center gap-2 mb-3">
              {data.category && (
                <span className="bg-blue-900/50 text-blue-300 text-xs font-medium px-3 py-1 rounded-full">
                  {CATEGORY_LABELS[data.category] || data.category}
                </span>
              )}
              {data.team && (
                <span className="bg-gray-800 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">
                  {data.team}
                </span>
              )}
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
              {data.name}
            </h1>

            {/* Rating */}
            {data.rating && (
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[1,2,3,4,5].map(i => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i <= Math.round(data.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                    />
                  ))}
                </div>
                <span className="text-yellow-400 font-semibold text-sm">{data.rating}</span>
                <span className="text-gray-400 text-sm">({data.review_count || 0} 条评价)</span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6 p-4 bg-gray-900 rounded-xl border border-gray-800">
              <span className="text-3xl font-black text-yellow-400">¥{priceRMB}</span>
              {originalRMB && (
                <span className="text-gray-500 text-lg line-through">¥{originalRMB}</span>
              )}
              {discount && discount > 0 && (
                <span className="bg-red-900/50 text-red-400 text-sm font-semibold px-2 py-0.5 rounded">
                  省 ¥{(originalRMB - priceRMB).toFixed(0)}
                </span>
              )}
            </div>

            {/* Description */}
            {data.description && (
              <p className="text-gray-300 text-sm leading-relaxed mb-6">{data.description}</p>
            )}

            {/* Stock */}
            {data.stock !== undefined && (
              <div className="flex items-center gap-2 mb-6">
                <Package className="w-4 h-4 text-gray-400" />
                <span className={`text-sm font-medium ${data.stock > 50 ? 'text-green-400' : data.stock > 0 ? 'text-yellow-400' : 'text-red-400'}`}>
                  {data.stock > 50 ? '库存充足' : data.stock > 0 ? `仅剩 ${data.stock} 件` : '已售罄'}
                </span>
              </div>
            )}

            {/* Qty + Add to Cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="w-10 h-10 text-white hover:bg-gray-700 transition-colors text-lg font-bold"
                >
                  −
                </button>
                <span className="w-12 text-center text-white font-semibold">{qty}</span>
                <button
                  onClick={() => setQty(q => Math.min(data.stock || 99, q + 1))}
                  className="w-10 h-10 text-white hover:bg-gray-700 transition-colors text-lg font-bold"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={data.stock === 0}
                className={`flex-1 flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-lg transition-all text-base ${
                  added
                    ? 'bg-green-600 text-white'
                    : data.stock === 0
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-red-700 hover:bg-red-600 text-white'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                {added ? '已加入购物车 ✓' : data.stock === 0 ? '已售罄' : '加入购物车'}
              </button>

              <button className="w-12 h-12 border border-gray-700 hover:border-red-600 text-gray-400 hover:text-red-400 rounded-lg flex items-center justify-center transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-gray-800">
              {[
                { icon: Shield, label: '官方授权', color: 'text-yellow-400' },
                { icon: Truck, label: '全球配送', color: 'text-blue-400' },
                { icon: RotateCcw, label: '30天退换', color: 'text-green-400' },
              ].map(item => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex flex-col items-center gap-1 text-center">
                    <Icon className={`w-5 h-5 ${item.color}`} />
                    <span className="text-gray-400 text-xs">{item.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Back button */}
        <div className="mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            返回商城
          </Link>
        </div>
      </div>
    </div>
  )
}
