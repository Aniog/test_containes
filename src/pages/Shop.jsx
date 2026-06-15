import { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, ChevronDown, ShoppingBag, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
]
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
]

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1,2,3,4,5].map(i => (
        <svg key={i} className="w-3 h-3" viewBox="0 0 12 12">
          <path
            d="M6 1l1.236 2.506L10 3.927l-2 1.95.472 2.75L6 7.25l-2.472 1.377L4 5.877l-2-1.95 2.764-.421L6 1z"
            fill={i <= Math.round(rating) ? '#C9A96E' : 'none'}
            stroke="#C9A96E"
            strokeWidth="0.8"
          />
        </svg>
      ))}
    </div>
  )
}

function ProductCard({ product }) {
  const { addItem } = useCart()
  return (
    <div className="group">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative overflow-hidden bg-linen aspect-[3/4]">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[shop-${product.id}-desc] [shop-${product.id}-title]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.badge && (
              <span className="bg-obsidian text-ivory font-manrope text-[9px] tracking-widest px-2 py-0.5">{product.badge}</span>
            )}
            {product.isNew && (
              <span className="bg-gold text-obsidian font-manrope text-[9px] tracking-widest px-2 py-0.5">NEW</span>
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={e => { e.preventDefault(); addItem(product) }}
              className="w-full bg-obsidian/90 text-ivory font-manrope text-[10px] tracking-widest py-3 flex items-center justify-center gap-2 hover:bg-gold hover:text-obsidian transition-colors duration-300"
            >
              <ShoppingBag className="w-3.5 h-3.5" strokeWidth={1.5} />
              QUICK ADD
            </button>
          </div>
        </div>
        <div className="pt-4 pb-2">
          <p id={`shop-${product.id}-title`} className="font-manrope text-[11px] tracking-widest text-obsidian font-medium">{product.name}</p>
          <p id={`shop-${product.id}-desc`} className="font-manrope text-xs text-muted mt-1">{product.shortDesc}</p>
          <div className="flex items-center justify-between mt-2">
            <p className="font-serif text-lg text-obsidian"><span className="text-sm">$</span>{product.price}</p>
            <div className="flex items-center gap-1.5">
              <StarRating rating={product.rating} />
              <span className="font-manrope text-[10px] text-muted">({product.reviewCount})</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeCategory, setActiveCategory] = useState('All')
  const [activePriceIdx, setActivePriceIdx] = useState(0)
  const [sortBy, setSortBy] = useState('featured')
  const [sortOpen, setSortOpen] = useState(false)
  const [filterOpen, setFilterOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) {
      const match = CATEGORIES.find(c => c.toLowerCase() === cat.toLowerCase())
      if (match) setActiveCategory(match)
    }
  }, [searchParams])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [activeCategory, activePriceIdx, sortBy])

  const filtered = products
    .filter(p => {
      if (activeCategory === 'All') return true
      return p.category === activeCategory.toLowerCase()
    })
    .filter(p => {
      const range = PRICE_RANGES[activePriceIdx]
      return p.price >= range.min && p.price <= range.max
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

  return (
    <div className="min-h-screen bg-parchment pt-20">
      {/* Page header */}
      <div className="bg-linen border-b border-divider py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-manrope text-[10px] tracking-widest3 text-gold mb-3">VELMORA</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-obsidian">All Jewelry</h1>
          <p className="font-manrope text-sm text-muted mt-3">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-manrope text-[10px] tracking-widest px-4 py-2 border transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'bg-obsidian text-ivory border-obsidian'
                    : 'bg-transparent text-obsidian border-divider hover:border-obsidian'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Filter button (mobile) */}
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="md:hidden flex items-center gap-2 font-manrope text-[10px] tracking-widest text-obsidian border border-divider px-4 py-2 hover:border-obsidian transition-colors duration-200"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" strokeWidth={1.5} />
              FILTER
            </button>

            {/* Sort dropdown */}
            <div className="relative">
              <button
                onClick={() => setSortOpen(v => !v)}
                className="flex items-center gap-2 font-manrope text-[10px] tracking-widest text-obsidian border border-divider px-4 py-2 hover:border-obsidian transition-colors duration-200"
              >
                SORT: {SORT_OPTIONS.find(o => o.value === sortBy)?.label.toUpperCase()}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${sortOpen ? 'rotate-180' : ''}`} strokeWidth={1.5} />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-1 bg-ivory border border-divider shadow-lg z-20 min-w-[180px]">
                  {SORT_OPTIONS.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => { setSortBy(opt.value); setSortOpen(false) }}
                      className={`w-full text-left px-4 py-3 font-manrope text-xs hover:bg-linen transition-colors duration-150 ${sortBy === opt.value ? 'text-gold' : 'text-obsidian'}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Price filter (desktop inline, mobile collapsible) */}
        <div className={`${filterOpen ? 'block' : 'hidden'} md:block mb-8`}>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="font-manrope text-[10px] tracking-widest text-muted mr-2">PRICE:</span>
            {PRICE_RANGES.map((range, i) => (
              <button
                key={range.label}
                onClick={() => setActivePriceIdx(i)}
                className={`font-manrope text-[10px] tracking-widest px-3 py-1.5 border transition-colors duration-200 ${
                  activePriceIdx === i
                    ? 'bg-gold text-obsidian border-gold'
                    : 'bg-transparent text-muted border-divider hover:border-muted'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-serif text-2xl font-light text-obsidian">No pieces found</p>
            <p className="font-manrope text-sm text-muted mt-3">Try adjusting your filters</p>
            <button
              onClick={() => { setActiveCategory('All'); setActivePriceIdx(0) }}
              className="mt-6 font-manrope text-xs tracking-widest border border-obsidian text-obsidian px-6 py-3 hover:bg-obsidian hover:text-ivory transition-colors duration-300"
            >
              CLEAR FILTERS
            </button>
          </div>
        ) : (
          <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
