import { useEffect, useRef, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const CATEGORIES = ['All', 'earrings', 'necklaces', 'huggies', 'sets']
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
      <div className="relative overflow-hidden bg-parchment aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <div className="absolute top-3 left-3 bg-obsidian text-ivory font-sans text-[10px] tracking-widest uppercase px-2.5 py-1">
            {product.badge}
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => addItem(product)}
            className="w-full bg-champagne text-obsidian font-sans text-xs tracking-widest uppercase font-semibold py-3.5 flex items-center justify-center gap-2 hover:bg-champagne-dark transition-colors duration-300"
          >
            <ShoppingBag size={13} strokeWidth={2} />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="pt-4">
        <Link to={`/product/${product.slug}`}>
          <h3
            id={`shop-title-${product.id}`}
            className="font-sans text-xs tracking-product uppercase font-semibold text-charcoal hover:text-champagne-dark transition-colors duration-300"
          >
            {product.name}
          </h3>
        </Link>
        <p id={`shop-desc-${product.id}`} className="sr-only">{product.shortDescription}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={10} className={i < Math.floor(product.rating) ? 'fill-champagne text-champagne' : 'text-divider'} strokeWidth={0} />
            ))}
            <span className="font-sans text-[10px] text-warm-stone ml-1">({product.reviewCount})</span>
          </div>
          <span className="font-sans text-sm font-semibold text-charcoal">${product.price}</span>
        </div>
      </div>
    </div>
  )
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const activeCategory = searchParams.get('category') || 'All'
  const activePriceIdx = parseInt(searchParams.get('price') || '0')
  const activeSort = searchParams.get('sort') || 'featured'

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams)
    next.set(key, value)
    setSearchParams(next)
  }

  const filtered = products
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
    .filter(p => {
      const range = PRICE_RANGES[activePriceIdx]
      return p.price >= range.min && p.price <= range.max
    })
    .sort((a, b) => {
      if (activeSort === 'price-asc') return a.price - b.price
      if (activeSort === 'price-desc') return b.price - a.price
      if (activeSort === 'rating') return b.rating - a.rating
      return 0
    })

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeCategory, activePriceIdx, activeSort])

  return (
    <div className="bg-parchment min-h-screen pt-20">
      {/* Page header */}
      <div className="border-b border-divider bg-ivory">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14">
          <p className="font-sans text-xs tracking-widest uppercase text-champagne font-medium mb-3">
            Velmora
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal font-light">
            All Jewelry
          </h1>
          <p className="font-sans text-sm text-warm-stone mt-2">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        <div className="flex gap-10">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase font-semibold text-charcoal mb-4">
                  Category
                </h3>
                <ul className="space-y-2">
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => setFilter('category', cat)}
                        className={`font-sans text-sm capitalize transition-colors duration-300 ${
                          activeCategory === cat
                            ? 'text-champagne-dark font-semibold'
                            : 'text-warm-stone hover:text-charcoal'
                        }`}
                      >
                        {cat === 'All' ? 'All Jewelry' : cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase font-semibold text-charcoal mb-4">
                  Price
                </h3>
                <ul className="space-y-2">
                  {PRICE_RANGES.map((range, i) => (
                    <li key={range.label}>
                      <button
                        onClick={() => setFilter('price', i)}
                        className={`font-sans text-sm transition-colors duration-300 ${
                          activePriceIdx === i
                            ? 'text-champagne-dark font-semibold'
                            : 'text-warm-stone hover:text-charcoal'
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase font-semibold text-charcoal mb-4">
                  Material
                </h3>
                <ul className="space-y-2">
                  {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map(m => (
                    <li key={m}>
                      <button className="font-sans text-sm text-warm-stone hover:text-charcoal transition-colors duration-300">
                        {m}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div ref={containerRef} className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-divider">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase font-medium text-charcoal"
              >
                <SlidersHorizontal size={14} strokeWidth={1.5} />
                Filter
              </button>

              {/* Active filters */}
              <div className="hidden md:flex items-center gap-2 flex-wrap">
                {activeCategory !== 'All' && (
                  <span className="flex items-center gap-1.5 bg-champagne/15 text-champagne-dark font-sans text-xs px-3 py-1.5 capitalize">
                    {activeCategory}
                    <button onClick={() => setFilter('category', 'All')}>
                      <X size={11} />
                    </button>
                  </span>
                )}
                {activePriceIdx !== 0 && (
                  <span className="flex items-center gap-1.5 bg-champagne/15 text-champagne-dark font-sans text-xs px-3 py-1.5">
                    {PRICE_RANGES[activePriceIdx].label}
                    <button onClick={() => setFilter('price', 0)}>
                      <X size={11} />
                    </button>
                  </span>
                )}
              </div>

              {/* Sort */}
              <div className="flex items-center gap-3 ml-auto">
                <span className="font-sans text-xs text-warm-stone hidden md:block">Sort by:</span>
                <select
                  value={activeSort}
                  onChange={e => setFilter('sort', e.target.value)}
                  className="font-sans text-xs text-charcoal bg-transparent border border-divider px-3 py-2 focus:outline-none focus:border-champagne cursor-pointer"
                >
                  {SORT_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-warm-stone font-light">No pieces found</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="mt-4 font-sans text-xs tracking-widest uppercase text-champagne"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {filtered.map(product => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-obsidian/40 cart-overlay"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-72 z-50 bg-ivory flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
              <span className="font-sans text-xs tracking-widest uppercase font-semibold text-charcoal">Filters</span>
              <button onClick={() => setSidebarOpen(false)}>
                <X size={18} strokeWidth={1.5} className="text-warm-stone" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase font-semibold text-charcoal mb-4">Category</h3>
                <ul className="space-y-3">
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => { setFilter('category', cat); setSidebarOpen(false) }}
                        className={`font-sans text-sm capitalize ${activeCategory === cat ? 'text-champagne-dark font-semibold' : 'text-warm-stone'}`}
                      >
                        {cat === 'All' ? 'All Jewelry' : cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase font-semibold text-charcoal mb-4">Price</h3>
                <ul className="space-y-3">
                  {PRICE_RANGES.map((range, i) => (
                    <li key={range.label}>
                      <button
                        onClick={() => { setFilter('price', i); setSidebarOpen(false) }}
                        className={`font-sans text-sm ${activePriceIdx === i ? 'text-champagne-dark font-semibold' : 'text-warm-stone'}`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
