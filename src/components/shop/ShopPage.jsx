import React, { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

const CATEGORY_OPTIONS = ['All', 'Earrings', 'Necklaces', 'Huggies']
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 49 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]
const MATERIAL_OPTIONS = ['All', 'Gold', 'Silver', 'Rose Gold']

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0], 1)
  }

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] bg-ivory overflow-hidden">
          <img
            data-strk-img-id={hovered ? product.imgIdHover : product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className={`absolute bottom-0 left-0 right-0 bg-cream/95 backdrop-blur-sm py-3 flex items-center justify-center transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-2 text-xs font-sans font-semibold tracking-widest uppercase text-charcoal hover:text-gold transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="mt-3">
        <Link to={`/product/${product.slug}`}>
          <h3 id={product.titleId} className="font-serif text-sm uppercase tracking-product text-charcoal">{product.name}</h3>
        </Link>
        <p id={product.descId} className="text-xs text-stone-500 mt-0.5">{product.shortDescription}</p>
        <div className="flex items-center gap-2 mt-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < Math.round(product.rating) ? 'text-gold fill-gold' : 'text-stone-300'}`} />
            ))}
          </div>
          <span className="text-[11px] text-stone-400">({product.reviews})</span>
        </div>
        <p className="text-sm font-sans font-medium text-charcoal mt-1">${product.price}</p>
      </div>
    </div>
  )
}

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const containerRef = useRef(null)
  const [sort, setSort] = useState('featured')
  const [category, setCategory] = useState(searchParams.get('category') || 'All')
  const [priceRange, setPriceRange] = useState(0)
  const [material, setMaterial] = useState('All')
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setCategory(cat)
  }, [searchParams])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => cancelAnimationFrame(frameId)
    }
  }, [category, priceRange, material, sort])

  const filtered = products
    .filter(p => category === 'All' || p.category === category)
    .filter(p => {
      const range = PRICE_RANGES[priceRange]
      return p.price >= range.min && p.price <= range.max
    })
    .filter(p => material === 'All' || p.variants.includes(material))
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      return 0
    })

  return (
    <div className="pt-20 md:pt-24 bg-cream min-h-screen">
      {/* Page header */}
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12 pt-8 pb-6">
        <h1 className="font-serif text-3xl md:text-4xl text-charcoal tracking-wide text-center">
          {category === 'All' ? 'Shop All' : category}
        </h1>
        <div className="w-12 h-px bg-gold mx-auto mt-4" />
      </div>

      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12 pb-16 md:pb-24">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-xs font-sans font-medium tracking-widest uppercase text-charcoal hover:text-gold transition-colors md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <span className="text-xs text-stone-500 font-sans">{filtered.length} products</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-xs font-sans text-charcoal bg-transparent border border-stone-300 px-3 py-2 focus:outline-none focus:border-gold"
          >
            {SORT_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters - desktop */}
          <aside className={`fixed inset-0 z-40 bg-cream md:static md:bg-transparent md:block md:w-56 lg:w-64 md:flex-shrink-0 ${showFilters ? 'block' : 'hidden'}`}>
            <div className="p-6 md:p-0">
              <div className="flex items-center justify-between mb-6 md:hidden">
                <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-charcoal">Filters</h3>
                <button onClick={() => setShowFilters(false)} className="text-stone-500">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Category */}
              <div className="mb-6">
                <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-charcoal mb-3">Category</h4>
                <div className="space-y-2">
                  {CATEGORY_OPTIONS.map(cat => (
                    <button
                      key={cat}
                      onClick={() => { setCategory(cat); setShowFilters(false) }}
                      className={`block text-sm font-sans transition-colors duration-200 ${
                        category === cat ? 'text-gold font-medium' : 'text-stone-600 hover:text-charcoal'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-charcoal mb-3">Price</h4>
                <div className="space-y-2">
                  {PRICE_RANGES.map((range, idx) => (
                    <button
                      key={range.label}
                      onClick={() => { setPriceRange(idx); setShowFilters(false) }}
                      className={`block text-sm font-sans transition-colors duration-200 ${
                        priceRange === idx ? 'text-gold font-medium' : 'text-stone-600 hover:text-charcoal'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="mb-6">
                <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-charcoal mb-3">Material</h4>
                <div className="space-y-2">
                  {MATERIAL_OPTIONS.map(mat => (
                    <button
                      key={mat}
                      onClick={() => { setMaterial(mat); setShowFilters(false) }}
                      className={`block text-sm font-sans transition-colors duration-200 ${
                        material === mat ? 'text-gold font-medium' : 'text-stone-600 hover:text-charcoal'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal">No products found</p>
                <p className="text-sm text-stone-500 mt-2">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
