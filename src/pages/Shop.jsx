import { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const CATEGORIES = ['all', 'earrings', 'necklaces', 'huggies', 'sets']
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

function ShopProductCard({ product }) {
  const { addItem } = useCart()
  return (
    <div className="group flex flex-col">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-linen aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.id}-desc] [shop-${product.id}-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-obsidian text-cream font-sans text-xs tracking-widest uppercase px-2.5 py-1 z-10">
            {product.badge}
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-obsidian/90 py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
          <button
            onClick={(e) => { e.preventDefault(); addItem(product) }}
            className="w-full flex items-center justify-center gap-2 font-sans text-xs tracking-widest uppercase text-cream hover:text-gold transition-colors duration-300"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>
      <div className="pt-4">
        <div className="flex items-center gap-1 mb-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={10} className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-ink-faint fill-transparent'} />
          ))}
          <span className="font-sans text-xs text-ink-faint ml-1">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3 id={`shop-${product.id}-title`} className="font-serif text-sm uppercase tracking-widest text-ink hover:text-gold transition-colors duration-300">
            {product.name}
          </h3>
        </Link>
        <p id={`shop-${product.id}-desc`} className="font-sans text-xs text-ink-muted mt-1">{product.shortDescription}</p>
        <p className="font-sans text-sm font-500 text-ink mt-2">${product.price}</p>
      </div>
    </div>
  )
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [category, setCategory] = useState(searchParams.get('category') || 'all')
  const [priceRange, setPriceRange] = useState(0)
  const [sort, setSort] = useState('featured')
  const [filterOpen, setFilterOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setCategory(cat)
  }, [searchParams])

  const filtered = products
    .filter(p => category === 'all' || p.category === category)
    .filter(p => p.price >= PRICE_RANGES[priceRange].min && p.price <= PRICE_RANGES[priceRange].max)
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return 0
    })

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [category, priceRange, sort])

  return (
    <div className="bg-parchment min-h-screen pt-20 md:pt-24">
      {/* Page header */}
      <div className="border-b border-linen">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">Velmora</p>
          <h1 className="font-serif font-light text-4xl md:text-5xl text-ink tracking-wide">
            All Jewelry
          </h1>
          <p className="font-sans text-sm text-ink-muted mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-ink mb-4">Category</h3>
                <ul className="space-y-2">
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => setCategory(cat)}
                        className={`font-sans text-sm capitalize transition-colors duration-300 ${category === cat ? 'text-gold font-500' : 'text-ink-muted hover:text-ink'}`}
                      >
                        {cat === 'all' ? 'All Jewelry' : cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full h-px bg-linen" />

              {/* Price */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-ink mb-4">Price</h3>
                <ul className="space-y-2">
                  {PRICE_RANGES.map((range, i) => (
                    <li key={range.label}>
                      <button
                        onClick={() => setPriceRange(i)}
                        className={`font-sans text-sm transition-colors duration-300 ${priceRange === i ? 'text-gold font-500' : 'text-ink-muted hover:text-ink'}`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full h-px bg-linen" />

              {/* Material */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-ink mb-4">Material</h3>
                <ul className="space-y-2">
                  {['18K Gold Plated', 'Sterling Silver'].map(m => (
                    <li key={m}>
                      <button className="font-sans text-sm text-ink-muted hover:text-ink transition-colors duration-300">
                        {m}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 md:mb-8">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(v => !v)}
                className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-ink border border-linen px-4 py-2.5 hover:border-ink transition-colors duration-300"
              >
                <SlidersHorizontal size={14} strokeWidth={1.5} />
                Filter
              </button>

              {/* Sort */}
              <div className="flex items-center gap-2 ml-auto">
                <span className="hidden md:block font-sans text-xs text-ink-muted">Sort by:</span>
                <div className="relative">
                  <select
                    value={sort}
                    onChange={e => setSort(e.target.value)}
                    className="appearance-none bg-transparent border border-linen font-sans text-xs text-ink px-4 py-2.5 pr-8 focus:outline-none focus:border-gold transition-colors duration-300 cursor-pointer"
                  >
                    {SORT_OPTIONS.map(o => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                  <ChevronDown size={12} strokeWidth={1.5} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Mobile filter panel */}
            {filterOpen && (
              <div className="md:hidden bg-cream border border-linen p-6 mb-6">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-sans text-xs tracking-widest uppercase text-ink">Filters</span>
                  <button onClick={() => setFilterOpen(false)}>
                    <X size={16} strokeWidth={1.5} className="text-ink-muted" />
                  </button>
                </div>
                <div className="space-y-5">
                  <div>
                    <p className="font-sans text-xs tracking-widest uppercase text-ink mb-3">Category</p>
                    <div className="flex flex-wrap gap-2">
                      {CATEGORIES.map(cat => (
                        <button
                          key={cat}
                          onClick={() => { setCategory(cat); setFilterOpen(false) }}
                          className={`font-sans text-xs capitalize px-3 py-1.5 border transition-all duration-300 ${category === cat ? 'bg-ink text-cream border-ink' : 'border-linen text-ink-muted hover:border-ink'}`}
                        >
                          {cat === 'all' ? 'All' : cat}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-sans text-xs tracking-widest uppercase text-ink mb-3">Price</p>
                    <div className="flex flex-wrap gap-2">
                      {PRICE_RANGES.map((range, i) => (
                        <button
                          key={range.label}
                          onClick={() => { setPriceRange(i); setFilterOpen(false) }}
                          className={`font-sans text-xs px-3 py-1.5 border transition-all duration-300 ${priceRange === i ? 'bg-ink text-cream border-ink' : 'border-linen text-ink-muted hover:border-ink'}`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl font-light text-ink-muted">No pieces found</p>
                <button
                  onClick={() => { setCategory('all'); setPriceRange(0) }}
                  className="mt-6 font-sans text-xs tracking-widest uppercase border border-gold text-gold px-8 py-3 hover:bg-gold hover:text-cream transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
