import { useState, useEffect, useRef } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
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

const priceRanges = [
  { value: '', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-200', label: '$75+' },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)
  const { addItem } = useCart()

  const [category, setCategory] = useState(searchParams.get('category') || '')
  const [priceRange, setPriceRange] = useState('')
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    setCategory(searchParams.get('category') || '')
  }, [searchParams])

  const filtered = products
    .filter(p => !category || p.category === category)
    .filter(p => {
      if (!priceRange) return true
      const [min, max] = priceRange.split('-').map(Number)
      return p.price >= min && p.price <= max
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return 0
    })

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frame)
  }, [category, priceRange, sort])

  const applyCategory = (val) => {
    setCategory(val)
    if (val) setSearchParams({ category: val })
    else setSearchParams({})
    setMobileFiltersOpen(false)
  }

  return (
    <div className="min-h-screen bg-parchment pt-16 md:pt-20">
      {/* Page header */}
      <div className="bg-linen border-b border-stone/10 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-gold mb-3">Velmora</p>
          <h1 className="font-cormorant text-4xl md:text-5xl text-ink font-light">
            {category ? categoryOptions.find(c => c.value === category)?.label || 'Shop' : 'All Jewelry'}
          </h1>
          <p className="font-inter text-xs text-mist mt-3">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="flex gap-10">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterPanel
              category={category}
              priceRange={priceRange}
              onCategory={applyCategory}
              onPrice={setPriceRange}
            />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-stone hover:text-gold transition-colors"
              >
                <SlidersHorizontal size={14} strokeWidth={1.5} />
                Filters
              </button>

              <div className="flex items-center gap-3 ml-auto">
                <span className="font-inter text-[10px] uppercase tracking-widest text-mist hidden md:block">Sort by</span>
                <select
                  value={sort}
                  onChange={e => setSort(e.target.value)}
                  className="font-inter text-xs text-ink bg-transparent border border-stone/20 px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
                >
                  {sortOptions.map(o => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Active filters */}
            {(category || priceRange) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {category && (
                  <button
                    onClick={() => applyCategory('')}
                    className="flex items-center gap-1.5 font-inter text-[10px] uppercase tracking-widest text-ink border border-stone/30 px-3 py-1.5 hover:border-gold hover:text-gold transition-colors"
                  >
                    {categoryOptions.find(c => c.value === category)?.label}
                    <X size={10} strokeWidth={2} />
                  </button>
                )}
                {priceRange && (
                  <button
                    onClick={() => setPriceRange('')}
                    className="flex items-center gap-1.5 font-inter text-[10px] uppercase tracking-widest text-ink border border-stone/30 px-3 py-1.5 hover:border-gold hover:text-gold transition-colors"
                  >
                    {priceRanges.find(p => p.value === priceRange)?.label}
                    <X size={10} strokeWidth={2} />
                  </button>
                )}
              </div>
            )}

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-3xl text-stone mb-3">No pieces found</p>
                <p className="font-inter text-xs text-mist">Try adjusting your filters</p>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ShopProductCard key={product.id} product={product} onAddToCart={() => addItem(product)} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 bg-obsidian/40 z-50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 bg-parchment z-50 rounded-t-lg p-6 animate-fadeIn">
            <div className="flex items-center justify-between mb-6">
              <span className="font-inter text-xs uppercase tracking-widest text-ink">Filters</span>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={18} strokeWidth={1.5} className="text-stone" />
              </button>
            </div>
            <FilterPanel
              category={category}
              priceRange={priceRange}
              onCategory={applyCategory}
              onPrice={setPriceRange}
            />
          </div>
        </>
      )}
    </div>
  )
}

function FilterPanel({ category, priceRange, onCategory, onPrice }) {
  return (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-inter text-[10px] uppercase tracking-widest text-stone mb-4">Category</h3>
        <div className="flex flex-col gap-2.5">
          {categoryOptions.map(opt => (
            <button
              key={opt.value}
              onClick={() => onCategory(opt.value)}
              className={`text-left font-inter text-xs transition-colors ${
                category === opt.value ? 'text-gold' : 'text-stone hover:text-ink'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="h-px bg-stone/15" />

      {/* Price */}
      <div>
        <h3 className="font-inter text-[10px] uppercase tracking-widest text-stone mb-4">Price</h3>
        <div className="flex flex-col gap-2.5">
          {priceRanges.map(opt => (
            <button
              key={opt.value}
              onClick={() => onPrice(opt.value)}
              className={`text-left font-inter text-xs transition-colors ${
                priceRange === opt.value ? 'text-gold' : 'text-stone hover:text-ink'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="h-px bg-stone/15" />

      {/* Material */}
      <div>
        <h3 className="font-inter text-[10px] uppercase tracking-widest text-stone mb-4">Material</h3>
        <div className="flex flex-col gap-2.5">
          {['All', '18K Gold Plated', 'Sterling Silver'].map(m => (
            <button key={m} className="text-left font-inter text-xs text-stone hover:text-ink transition-colors">
              {m}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function ShopProductCard({ product, onAddToCart }) {
  return (
    <div className="group">
      <Link to={`/product/${product.slug}`}>
        <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-4">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.tags?.includes('new') && (
            <span className="absolute top-3 left-3 bg-gold text-obsidian font-inter text-[9px] uppercase tracking-widest px-2 py-1">
              New
            </span>
          )}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => { e.preventDefault(); onAddToCart() }}
              className="w-full bg-obsidian/90 text-ivory font-inter text-[10px] uppercase tracking-widest py-3 flex items-center justify-center gap-2 hover:bg-obsidian transition-colors"
            >
              <ShoppingBag size={12} strokeWidth={1.5} />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <span id={`shop-${product.descId}`} className="sr-only">{product.shortDescription}</span>
      <Link to={`/product/${product.slug}`}>
        <h3 id={`shop-${product.titleId}`} className="font-cormorant text-sm uppercase tracking-widest text-ink hover:text-gold transition-colors mb-1">
          {product.name}
        </h3>
      </Link>
      <div className="flex items-center gap-1 mb-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={9} className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-stone/30'} strokeWidth={0} />
        ))}
      </div>
      <p className="font-inter text-sm text-ink font-medium">${product.price}</p>
    </div>
  )
}
