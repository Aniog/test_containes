import { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, SlidersHorizontal, X, ShoppingBag, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
]

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-parchment aspect-[3/4] mb-4">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        <img
          data-strk-img-id={`shop-alt-${product.imgId2}`}
          data-strk-img={`[shop-title-${product.id}] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags.includes('bestseller') && (
            <span className="bg-gold text-velvet font-sans text-[9px] uppercase tracking-widest px-2 py-0.5">Bestseller</span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-velvet text-cream font-sans text-[9px] uppercase tracking-widest px-2 py-0.5">New</span>
          )}
        </div>

        {/* Quick add */}
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={e => { e.preventDefault(); addItem(product) }}
            className="w-full bg-velvet text-cream font-sans text-[10px] uppercase tracking-widest py-3 flex items-center justify-center gap-2 hover:bg-gold hover:text-velvet transition-colors"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>

      <div className="flex items-center gap-1 mb-1.5">
        {[1,2,3,4,5].map(i => (
          <Star
            key={i}
            size={9}
            strokeWidth={1}
            color={i <= Math.round(product.rating) ? '#C9A96E' : '#E0D5C5'}
            fill={i <= Math.round(product.rating) ? '#C9A96E' : '#E0D5C5'}
          />
        ))}
        <span className="font-sans text-[10px] text-mink ml-1">({product.reviewCount})</span>
      </div>
      <Link to={`/product/${product.slug}`}>
        <p id={`shop-title-${product.id}`} className="font-sans text-xs uppercase tracking-widest2 text-velvet hover:text-gold transition-colors mb-1 leading-tight">
          {product.name}
        </p>
      </Link>
      <p id={`shop-desc-${product.id}`} className="hidden">{product.shortDescription}</p>
      <div className="flex items-center gap-2">
        <span className="font-sans text-sm font-medium text-velvet">${product.price}</span>
        {product.originalPrice && (
          <span className="font-sans text-xs text-mink line-through">${product.originalPrice}</span>
        )}
      </div>
    </div>
  )
}

export default function Shop() {
  const [searchParams] = useSearchParams()
  const containerRef = useRef(null)

  const [activeCategory, setActiveCategory] = useState('All')
  const [activePriceRange, setActivePriceRange] = useState(PRICE_RANGES[0])
  const [sortBy, setSortBy] = useState('featured')
  const [filterOpen, setFilterOpen] = useState(false)

  // Sync category from URL param
  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) {
      const match = CATEGORIES.find(c => c.toLowerCase() === cat.toLowerCase())
      if (match) setActiveCategory(match)
    }
  }, [searchParams])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeCategory, activePriceRange, sortBy])

  const filtered = products
    .filter(p => {
      if (activeCategory !== 'All' && p.category !== activeCategory.toLowerCase()) return false
      if (p.price < activePriceRange.min || p.price > activePriceRange.max) return false
      return true
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

  return (
    <div className="bg-cream min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-parchment border-b border-linen py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-sans text-xs uppercase tracking-widest text-gold mb-3">Velmora</p>
          <h1 className="font-serif text-4xl md:text-5xl text-velvet font-light">All Jewelry</h1>
          <p className="font-sans text-sm text-mink mt-3">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-linen">
          {/* Category pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-xs uppercase tracking-widest px-4 py-2 border transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'border-velvet bg-velvet text-cream'
                    : 'border-linen text-mink hover:border-velvet hover:text-velvet'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-velvet border border-linen px-4 py-2"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filter
          </button>

          {/* Sort */}
          <div className="relative flex items-center gap-2">
            <span className="font-sans text-xs text-mink uppercase tracking-widest hidden md:block">Sort:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-linen font-sans text-xs text-velvet uppercase tracking-widest px-4 py-2 pr-8 focus:outline-none focus:border-gold cursor-pointer"
              >
                {SORT_OPTIONS.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-mink pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-widest text-velvet mb-4">Category</h3>
                <div className="space-y-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`block font-sans text-xs transition-colors ${
                        activeCategory === cat ? 'text-gold' : 'text-mink hover:text-velvet'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <hr className="border-linen" />

              {/* Price */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-widest text-velvet mb-4">Price</h3>
                <div className="space-y-2">
                  {PRICE_RANGES.map(range => (
                    <button
                      key={range.label}
                      onClick={() => setActivePriceRange(range)}
                      className={`block font-sans text-xs transition-colors ${
                        activePriceRange.label === range.label ? 'text-gold' : 'text-mink hover:text-velvet'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <hr className="border-linen" />

              {/* Material */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-widest text-velvet mb-4">Material</h3>
                <div className="space-y-2">
                  {['18K Gold Plated', 'Sterling Silver'].map(m => (
                    <label key={m} className="flex items-center gap-2 cursor-pointer group">
                      <div className="w-3.5 h-3.5 border border-linen group-hover:border-gold transition-colors flex-shrink-0" />
                      <span className="font-sans text-xs text-mink group-hover:text-velvet transition-colors">{m}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-50 bg-velvet/40 backdrop-blur-sm" onClick={() => setFilterOpen(false)}>
              <div className="absolute bottom-0 left-0 right-0 bg-off-white p-6 rounded-t-lg" onClick={e => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-sans text-xs uppercase tracking-widest text-velvet">Filters</span>
                  <button onClick={() => setFilterOpen(false)}><X size={18} strokeWidth={1.5} className="text-mink" /></button>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="font-sans text-xs uppercase tracking-widest text-velvet mb-3">Category</p>
                    <div className="flex flex-wrap gap-2">
                      {CATEGORIES.map(cat => (
                        <button
                          key={cat}
                          onClick={() => { setActiveCategory(cat); setFilterOpen(false) }}
                          className={`font-sans text-xs uppercase tracking-widest px-3 py-1.5 border transition-colors ${
                            activeCategory === cat ? 'border-velvet bg-velvet text-cream' : 'border-linen text-mink'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-widest text-velvet mb-3">Price</p>
                    <div className="flex flex-wrap gap-2">
                      {PRICE_RANGES.map(range => (
                        <button
                          key={range.label}
                          onClick={() => { setActivePriceRange(range); setFilterOpen(false) }}
                          className={`font-sans text-xs px-3 py-1.5 border transition-colors ${
                            activePriceRange.label === range.label ? 'border-velvet bg-velvet text-cream' : 'border-linen text-mink'
                          }`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-velvet font-light mb-3">No pieces found</p>
                <p className="font-sans text-sm text-mink">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
