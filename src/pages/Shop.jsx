import { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

const CATEGORIES = ['earrings', 'necklaces', 'huggies', 'sets']
const PRICE_RANGES = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
]
const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
]

function StarRating({ rating }) {
  const filled = Math.round(rating)
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={10}
          style={i <= filled ? { color: '#C9A96E', fill: '#C9A96E' } : { color: '#E8E0D4' }}
          strokeWidth={1}
        />
      ))}
    </div>
  )
}

function ShopProductCard({ product }) {
  const { addItem } = useCart()
  const img = product.images[0]

  return (
    <div className="group flex flex-col">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-cream aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${img.id}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-gold text-ivory text-[9px] font-sans font-medium uppercase tracking-[0.15em] px-2 py-0.5">
            Bestseller
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={e => { e.preventDefault(); addItem(product) }}
            className="w-full bg-obsidian/90 text-ivory text-[10px] font-sans font-medium uppercase tracking-[0.2em] py-3.5 flex items-center justify-center gap-2 hover:bg-gold transition-colors duration-300"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>
      <div className="pt-3 pb-2">
        <StarRating rating={product.rating} />
        <h3
          id={`shop-title-${product.id}`}
          className="font-serif text-sm font-medium uppercase tracking-[0.12em] text-ink mt-1.5 hover:text-gold transition-colors"
        >
          <Link to={`/product/${product.slug}`}>{product.name}</Link>
        </h3>
        <p id={`shop-desc-${product.id}`} className="text-xs font-sans text-muted mt-0.5 leading-snug">
          {product.shortDescription}
        </p>
        <p className="text-sm font-sans font-medium text-ink mt-1">{formatPrice(product.price)}</p>
      </div>
    </div>
  )
}

function FilterSidebar({ selectedCategories, setSelectedCategories, selectedPrice, setSelectedPrice, onClose }) {
  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    )
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Category filter */}
      <div>
        <h3 className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-ink mb-4">Category</h3>
        <div className="flex flex-col gap-2.5">
          {CATEGORIES.map(cat => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
                className="w-3.5 h-3.5 accent-gold"
              />
              <span className="text-sm font-sans text-muted capitalize group-hover:text-ink transition-colors">
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div>
        <h3 className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-ink mb-4">Price</h3>
        <div className="flex flex-col gap-2.5">
          {PRICE_RANGES.map(range => (
            <label key={range.label} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={selectedPrice?.label === range.label}
                onChange={() => setSelectedPrice(range)}
                className="w-3.5 h-3.5 accent-gold"
              />
              <span className="text-sm font-sans text-muted group-hover:text-ink transition-colors">
                {range.label}
              </span>
            </label>
          ))}
          {selectedPrice && (
            <button
              onClick={() => setSelectedPrice(null)}
              className="text-xs font-sans text-gold hover:text-gold-dark transition-colors text-left mt-1"
            >
              Clear price filter
            </button>
          )}
        </div>
      </div>

      {/* Material filter */}
      <div>
        <h3 className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-ink mb-4">Material</h3>
        <div className="flex flex-col gap-2.5">
          {['gold', 'silver'].map(mat => (
            <label key={mat} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-3.5 h-3.5 accent-gold" />
              <span className="text-sm font-sans text-muted capitalize group-hover:text-ink transition-colors">
                {mat} tone
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)

  const [selectedCategories, setSelectedCategories] = useState(() => {
    const cat = searchParams.get('category')
    return cat ? [cat] : []
  })
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setSelectedCategories([cat])
  }, [searchParams])

  // Filter + sort
  let filtered = products.filter(p => {
    if (selectedCategories.length > 0 && !selectedCategories.includes(p.category)) return false
    if (selectedPrice && (p.price < selectedPrice.min || p.price > selectedPrice.max)) return false
    return true
  })

  if (sortBy === 'price-asc') filtered = [...filtered].sort((a, b) => a.price - b.price)
  else if (sortBy === 'price-desc') filtered = [...filtered].sort((a, b) => b.price - a.price)
  else if (sortBy === 'rating') filtered = [...filtered].sort((a, b) => b.rating - a.rating)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [filtered.length, sortBy, selectedCategories.join(',')])

  const activeFilterCount = selectedCategories.length + (selectedPrice ? 1 : 0)

  return (
    <div className="bg-ivory min-h-screen pt-16 md:pt-20">
      {/* Page header */}
      <div className="bg-cream border-b border-stone/30 py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs font-sans font-medium uppercase tracking-[0.25em] text-gold mb-3">
            Velmora Collection
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-light text-ink tracking-wide">
            All Jewelry
          </h1>
          <p className="text-sm font-sans text-muted mt-3 font-light">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Mobile filter bar */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-xs font-sans font-medium uppercase tracking-[0.15em] text-ink border border-stone/60 px-4 py-2.5 hover:border-ink transition-colors"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
          </button>
          <div className="relative">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-xs font-sans font-medium uppercase tracking-[0.15em] text-ink border border-stone/60 px-4 py-2.5 pr-8 focus:outline-none hover:border-ink transition-colors"
            >
              {SORT_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10 md:gap-14">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-ink">Filters</h2>
                {activeFilterCount > 0 && (
                  <button
                    onClick={() => { setSelectedCategories([]); setSelectedPrice(null) }}
                    className="text-[10px] font-sans text-gold hover:text-gold-dark transition-colors uppercase tracking-wider"
                  >
                    Clear all
                  </button>
                )}
              </div>
              <FilterSidebar
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                selectedPrice={selectedPrice}
                setSelectedPrice={setSelectedPrice}
              />
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Desktop sort */}
            <div className="hidden md:flex items-center justify-between mb-8">
              <p className="text-xs font-sans text-muted uppercase tracking-[0.15em]">
                {filtered.length} results
              </p>
              <div className="flex items-center gap-3">
                <span className="text-xs font-sans text-muted uppercase tracking-[0.15em]">Sort:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent text-xs font-sans font-medium text-ink border-b border-stone/60 pb-0.5 pr-6 focus:outline-none hover:border-ink transition-colors cursor-pointer"
                  >
                    {SORT_OPTIONS.map(o => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                  <ChevronDown size={11} className="absolute right-0 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Active filter chips */}
            {activeFilterCount > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategories(prev => prev.filter(c => c !== cat))}
                    className="flex items-center gap-1.5 bg-cream border border-stone/60 text-xs font-sans text-muted px-3 py-1.5 hover:border-ink transition-colors capitalize"
                  >
                    {cat}
                    <X size={10} />
                  </button>
                ))}
                {selectedPrice && (
                  <button
                    onClick={() => setSelectedPrice(null)}
                    className="flex items-center gap-1.5 bg-cream border border-stone/60 text-xs font-sans text-muted px-3 py-1.5 hover:border-ink transition-colors"
                  >
                    {selectedPrice.label}
                    <X size={10} />
                  </button>
                )}
              </div>
            )}

            {/* Product grid */}
            <div ref={containerRef}>
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-serif text-2xl font-light text-ink mb-3">No pieces found</p>
                  <p className="text-sm font-sans text-muted mb-6">Try adjusting your filters</p>
                  <button
                    onClick={() => { setSelectedCategories([]); setSelectedPrice(null) }}
                    className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-gold border-b border-gold pb-0.5"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {filtered.map(product => (
                    <ShopProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-obsidian/40 z-50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-ivory z-50 rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto animate-fadeIn">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm font-sans font-medium uppercase tracking-[0.2em] text-ink">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={20} strokeWidth={1.5} className="text-muted" />
              </button>
            </div>
            <FilterSidebar
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedPrice={selectedPrice}
              setSelectedPrice={setSelectedPrice}
              onClose={() => setMobileFiltersOpen(false)}
            />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full mt-8 bg-gold text-ivory text-xs font-sans font-medium uppercase tracking-[0.2em] py-4 hover:bg-gold-light transition-colors"
            >
              View {filtered.length} Results
            </button>
          </div>
        </>
      )}
    </div>
  )
}
