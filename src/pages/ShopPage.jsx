import { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/ui/StarRating'

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
]
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
]

function ShopProductCard({ product }) {
  const { addItem } = useCart()
  return (
    <div className="group">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-cream aspect-[3/4] mb-4">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-gold text-obsidian font-sans text-xs tracking-wider uppercase font-semibold px-2.5 py-1">
            Bestseller
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
          <button
            onClick={(e) => { e.preventDefault(); addItem(product) }}
            className="w-full bg-obsidian text-ivory font-sans text-xs tracking-widest uppercase font-semibold py-3.5 hover:bg-gold hover:text-obsidian transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>
      <div className="flex items-center gap-1 mb-1.5">
        <StarRating rating={product.rating} size={10} />
        <span className="font-sans text-xs text-ink-muted ml-1">({product.reviewCount})</span>
      </div>
      <Link to={`/product/${product.slug}`}>
        <h3 id={`shop-${product.titleId}`} className="font-serif text-sm uppercase tracking-widest text-ink hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>
      </Link>
      <p id={`shop-${product.descId}`} className="sr-only">{product.shortDescription}</p>
      <p className="font-sans text-sm font-medium text-ink mt-1">${product.price}</p>
    </div>
  )
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all')
  const [activePriceRange, setActivePriceRange] = useState(0)
  const [sortBy, setSortBy] = useState('featured')
  const [filterOpen, setFilterOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setActiveCategory(cat)
  }, [searchParams])

  const filtered = products
    .filter(p => {
      const catMatch = activeCategory === 'all' || p.category === activeCategory
      const range = PRICE_RANGES[activePriceRange]
      const priceMatch = p.price >= range.min && p.price <= range.max
      return catMatch && priceMatch
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [filtered.length, activeCategory, activePriceRange, sortBy])

  const handleCategoryChange = (cat) => {
    const val = cat.toLowerCase()
    setActiveCategory(val)
    if (val !== 'all') {
      setSearchParams({ category: val })
    } else {
      setSearchParams({})
    }
  }

  return (
    <div className="bg-parchment min-h-screen pt-16 md:pt-20">
      {/* Page header */}
      <div className="bg-cream border-b border-linen">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
          <p className="font-sans text-xs tracking-widest uppercase text-gold font-medium mb-2">Velmora</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-ink">All Jewelry</h1>
          <p className="font-sans text-sm text-ink-muted mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-6 border-b border-linen">
          {/* Category pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`font-sans text-xs tracking-widest uppercase font-medium px-4 py-2 border transition-all duration-300 ${activeCategory === cat.toLowerCase() ? 'bg-obsidian text-ivory border-obsidian' : 'bg-transparent text-ink-muted border-linen hover:border-ink hover:text-ink'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase font-medium text-ink border border-linen px-4 py-2 hover:border-ink transition-all duration-300"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filters
          </button>

          {/* Sort */}
          <div className="relative flex items-center gap-2">
            <span className="font-sans text-xs text-ink-muted hidden md:block">Sort:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-linen font-sans text-xs tracking-wider text-ink px-4 py-2 pr-8 focus:outline-none focus:border-ink cursor-pointer hover:border-ink transition-all duration-300"
              >
                {SORT_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={12} strokeWidth={2} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-muted pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Mobile filters panel */}
        {filterOpen && (
          <div className="md:hidden bg-cream border border-linen p-5 mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-xs tracking-widest uppercase font-semibold text-ink">Filters</span>
              <button onClick={() => setFilterOpen(false)} className="text-ink-muted hover:text-ink">
                <X size={16} strokeWidth={1.5} />
              </button>
            </div>
            <div className="mb-5">
              <p className="font-sans text-xs tracking-widest uppercase font-medium text-ink-muted mb-3">Category</p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => { handleCategoryChange(cat); setFilterOpen(false) }}
                    className={`font-sans text-xs tracking-wider uppercase font-medium px-3 py-1.5 border transition-all duration-300 ${activeCategory === cat.toLowerCase() ? 'bg-obsidian text-ivory border-obsidian' : 'bg-transparent text-ink-muted border-linen'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-sans text-xs tracking-widest uppercase font-medium text-ink-muted mb-3">Price</p>
              <div className="flex flex-col gap-2">
                {PRICE_RANGES.map((range, i) => (
                  <button
                    key={i}
                    onClick={() => { setActivePriceRange(i); setFilterOpen(false) }}
                    className={`text-left font-sans text-sm transition-colors duration-300 ${activePriceRange === i ? 'text-gold font-medium' : 'text-ink-muted hover:text-ink'}`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-8 md:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-24">
              <div className="mb-8">
                <p className="font-sans text-xs tracking-widest uppercase font-semibold text-ink mb-4">Category</p>
                <div className="flex flex-col gap-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`text-left font-sans text-sm transition-colors duration-300 ${activeCategory === cat.toLowerCase() ? 'text-gold font-medium' : 'text-ink-muted hover:text-ink'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div className="pt-6 border-t border-linen">
                <p className="font-sans text-xs tracking-widest uppercase font-semibold text-ink mb-4">Price</p>
                <div className="flex flex-col gap-2">
                  {PRICE_RANGES.map((range, i) => (
                    <button
                      key={i}
                      onClick={() => setActivePriceRange(i)}
                      className={`text-left font-sans text-sm transition-colors duration-300 ${activePriceRange === i ? 'text-gold font-medium' : 'text-ink-muted hover:text-ink'}`}
                    >
                      {range.label}
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
                <p className="font-serif text-2xl text-ink-muted font-light italic">No pieces found</p>
                <p className="font-sans text-sm text-ink-muted mt-2">Try adjusting your filters</p>
                <button
                  onClick={() => { setActiveCategory('all'); setActivePriceRange(0); setSearchParams({}) }}
                  className="mt-6 font-sans text-xs tracking-widest uppercase font-medium text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-obsidian transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {filtered.map(product => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
