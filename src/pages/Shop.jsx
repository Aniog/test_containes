import { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, SlidersHorizontal, X, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const categoryOptions = [
  { value: '', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const priceRanges = [
  { value: '', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-120', label: '$75 – $120' },
]

function ShopProductCard({ product }) {
  const { addItem } = useCart()
  return (
    <div className="group flex flex-col">
      <Link to={`/product/${product.slug}`} className="relative overflow-hidden bg-cream aspect-[3/4] block">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags.includes('bestseller') && (
            <span className="font-sans text-[10px] tracking-wider uppercase bg-gold text-velvet px-2 py-0.5">Bestseller</span>
          )}
          {product.tags.includes('new') && (
            <span className="font-sans text-[10px] tracking-wider uppercase bg-velvet text-champagne px-2 py-0.5">New</span>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={e => { e.preventDefault(); addItem(product, product.variants[0]) }}
            className="w-full py-3 bg-velvet/90 text-champagne font-sans text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-velvet transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </Link>
      <div className="pt-4 pb-2">
        <div className="flex items-center gap-1 mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-3 h-3" style={i < Math.floor(product.rating) ? { fill: '#B8924A', color: '#B8924A' } : { fill: 'none', color: '#E8D5B0' }} />
          ))}
          <span className="font-sans text-[11px] text-mist ml-1">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3 id={`shop-${product.titleId}`} className="font-serif text-sm text-velvet uppercase tracking-wider hover:text-gold transition-colors leading-tight">
            {product.name}
          </h3>
        </Link>
        <p id={`shop-${product.descId}`} className="font-sans text-xs text-mist mt-0.5 line-clamp-1">{product.description}</p>
        <p className="font-sans text-sm font-medium text-velvet mt-1">${product.price}</p>
      </div>
    </div>
  )
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterOpen, setFilterOpen] = useState(false)
  const containerRef = useRef(null)

  const activeCategory = searchParams.get('category') || ''
  const activePrice = searchParams.get('price') || ''
  const activeSort = searchParams.get('sort') || 'featured'

  const setParam = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value) next.set(key, value)
    else next.delete(key)
    setSearchParams(next)
  }

  const filtered = products
    .filter(p => !activeCategory || p.category === activeCategory)
    .filter(p => {
      if (!activePrice) return true
      const [min, max] = activePrice.split('-').map(Number)
      return p.price >= min && p.price <= max
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
  }, [activeCategory, activePrice, activeSort])

  const activeFilters = [
    activeCategory && categoryOptions.find(c => c.value === activeCategory)?.label,
    activePrice && priceRanges.find(r => r.value === activePrice)?.label,
  ].filter(Boolean)

  return (
    <div className="min-h-screen bg-ivory pt-20">
      {/* Page header */}
      <div className="bg-cream border-b border-champagne/30 py-12 text-center">
        <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-2">Velmora</p>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-velvet">
          {activeCategory
            ? categoryOptions.find(c => c.value === activeCategory)?.label || 'Shop'
            : 'All Jewelry'}
        </h1>
        <p className="font-sans text-sm text-mist mt-3">{filtered.length} pieces</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Filter toggle (mobile) */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="lg:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-bark hover:text-gold transition-colors border border-champagne/60 px-4 py-2.5"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters
            {activeFilters.length > 0 && (
              <span className="w-4 h-4 bg-gold text-velvet text-[10px] rounded-full flex items-center justify-center">
                {activeFilters.length}
              </span>
            )}
          </button>

          {/* Active filter pills */}
          <div className="flex flex-wrap gap-2 flex-1">
            {activeFilters.map(f => (
              <span key={f} className="flex items-center gap-1.5 font-sans text-xs text-bark border border-champagne/60 px-3 py-1">
                {f}
                <button
                  onClick={() => {
                    if (categoryOptions.find(c => c.label === f)) setParam('category', '')
                    if (priceRanges.find(r => r.label === f)) setParam('price', '')
                  }}
                  className="text-mist hover:text-velvet"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>

          {/* Sort */}
          <select
            value={activeSort}
            onChange={e => setParam('sort', e.target.value)}
            className="font-sans text-xs text-bark bg-ivory border border-champagne/60 px-3 py-2.5 focus:outline-none focus:border-gold cursor-pointer"
          >
            {sortOptions.map(o => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters — desktop */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-mist mb-4">Category</h3>
                <div className="space-y-2">
                  {categoryOptions.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setParam('category', opt.value)}
                      className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                        activeCategory === opt.value
                          ? 'text-gold font-medium'
                          : 'text-bark hover:text-gold'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-champagne/40" />

              {/* Price */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-mist mb-4">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setParam('price', opt.value)}
                      className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                        activePrice === opt.value
                          ? 'text-gold font-medium'
                          : 'text-bark hover:text-gold'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="lg:hidden fixed inset-0 z-40 bg-velvet/40" onClick={() => setFilterOpen(false)}>
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-ivory p-6 overflow-y-auto" onClick={e => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-xl text-velvet">Filters</span>
                  <button onClick={() => setFilterOpen(false)}><X className="w-5 h-5 text-bark" /></button>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-sans text-xs tracking-widest uppercase text-mist mb-3">Category</h3>
                    {categoryOptions.map(opt => (
                      <button key={opt.value} onClick={() => { setParam('category', opt.value); setFilterOpen(false) }}
                        className={`block w-full text-left font-sans text-sm py-2 ${activeCategory === opt.value ? 'text-gold' : 'text-bark'}`}>
                        {opt.label}
                      </button>
                    ))}
                  </div>
                  <div className="w-full h-px bg-champagne/40" />
                  <div>
                    <h3 className="font-sans text-xs tracking-widest uppercase text-mist mb-3">Price</h3>
                    {priceRanges.map(opt => (
                      <button key={opt.value} onClick={() => { setParam('price', opt.value); setFilterOpen(false) }}
                        className={`block w-full text-left font-sans text-sm py-2 ${activePrice === opt.value ? 'text-gold' : 'text-bark'}`}>
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-bark mb-3">No pieces found</p>
                <p className="font-sans text-sm text-mist mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="font-sans text-xs tracking-widest uppercase text-velvet border border-velvet px-6 py-3 hover:bg-velvet hover:text-champagne transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6">
                {filtered.map(p => (
                  <ShopProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
