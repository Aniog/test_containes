import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/product/ProductCard'

const categoryOptions = [
  { value: '', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
]

const priceRanges = [
  { value: '', label: 'Any Price' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-150', label: '$75 – $150' },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

function applyFilters(items, category, priceRange, sort) {
  let result = [...items]

  if (category) {
    result = result.filter(p => p.category === category)
  }

  if (priceRange) {
    const [min, max] = priceRange.split('-').map(Number)
    result = result.filter(p => p.price >= min && p.price <= max)
  }

  if (sort === 'price-asc') result.sort((a, b) => a.price - b.price)
  else if (sort === 'price-desc') result.sort((a, b) => b.price - a.price)
  else if (sort === 'rating') result.sort((a, b) => b.rating - a.rating)

  return result
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)
  const { addItem } = useCart()

  const [category, setCategory] = useState(searchParams.get('category') || '')
  const [priceRange, setPriceRange] = useState('')
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const filtered = applyFilters(products, category, priceRange, sort)

  useEffect(() => {
    const cat = searchParams.get('category') || ''
    setCategory(cat)
  }, [searchParams])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [category, priceRange, sort])

  const updateCategory = (val) => {
    setCategory(val)
    if (val) setSearchParams({ category: val })
    else setSearchParams({})
  }

  const activeFilterCount = [category, priceRange].filter(Boolean).length

  return (
    <div className="bg-parchment min-h-screen pt-20 md:pt-24">
      {/* Page header */}
      <div className="border-b border-linen bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-gold mb-3">
            {category ? categoryOptions.find(c => c.value === category)?.label : 'All Jewelry'}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-ink">
            {category ? categoryOptions.find(c => c.value === category)?.label || 'Shop' : 'The Collection'}
          </h1>
          <p className="font-sans text-sm font-light text-muted mt-2">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setMobileFiltersOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-widest text-ink border border-linen px-4 py-2.5 hover:border-obsidian transition-colors duration-200"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
          </button>

          {/* Sort */}
          <div className="flex items-center gap-3 ml-auto">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-muted hidden md:block">
              Sort by
            </span>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="font-sans text-[11px] font-medium text-ink bg-transparent border border-linen px-3 py-2.5 focus:outline-none focus:border-gold transition-colors duration-200 cursor-pointer"
            >
              {sortOptions.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0 space-y-8">
            {/* Category */}
            <div>
              <h3 className="font-sans text-[10px] font-semibold uppercase tracking-widest text-ink mb-4">
                Category
              </h3>
              <div className="space-y-2">
                {categoryOptions.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => updateCategory(opt.value)}
                    className={`block w-full text-left font-sans text-sm transition-colors duration-200 py-1 ${
                      category === opt.value
                        ? 'text-gold font-semibold'
                        : 'text-muted hover:text-ink'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-linen" />

            {/* Price */}
            <div>
              <h3 className="font-sans text-[10px] font-semibold uppercase tracking-widest text-ink mb-4">
                Price
              </h3>
              <div className="space-y-2">
                {priceRanges.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setPriceRange(opt.value)}
                    className={`block w-full text-left font-sans text-sm transition-colors duration-200 py-1 ${
                      priceRange === opt.value
                        ? 'text-gold font-semibold'
                        : 'text-muted hover:text-ink'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear filters */}
            {activeFilterCount > 0 && (
              <>
                <div className="h-px bg-linen" />
                <button
                  onClick={() => { updateCategory(''); setPriceRange('') }}
                  className="flex items-center gap-1.5 font-sans text-[11px] font-medium text-muted hover:text-ink transition-colors duration-200"
                >
                  <X size={12} strokeWidth={2} />
                  Clear Filters
                </button>
              </>
            )}
          </aside>

          {/* Mobile filters drawer */}
          {mobileFiltersOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-obsidian/40" onClick={() => setMobileFiltersOpen(false)}>
              <div
                className="absolute left-0 top-0 bottom-0 w-72 bg-parchment p-6 space-y-6 overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-ink">Filters</span>
                  <button onClick={() => setMobileFiltersOpen(false)} className="text-muted hover:text-ink">
                    <X size={18} strokeWidth={1.5} />
                  </button>
                </div>
                <div>
                  <h3 className="font-sans text-[10px] font-semibold uppercase tracking-widest text-ink mb-3">Category</h3>
                  <div className="space-y-2">
                    {categoryOptions.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => { updateCategory(opt.value); setMobileFiltersOpen(false) }}
                        className={`block w-full text-left font-sans text-sm py-1 ${category === opt.value ? 'text-gold font-semibold' : 'text-muted'}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="h-px bg-linen" />
                <div>
                  <h3 className="font-sans text-[10px] font-semibold uppercase tracking-widest text-ink mb-3">Price</h3>
                  <div className="space-y-2">
                    {priceRanges.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => { setPriceRange(opt.value); setMobileFiltersOpen(false) }}
                        className={`block w-full text-left font-sans text-sm py-1 ${priceRange === opt.value ? 'text-gold font-semibold' : 'text-muted'}`}
                      >
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
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif text-2xl font-light text-muted mb-3">No pieces found</p>
                <p className="font-sans text-sm text-whisper mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => { updateCategory(''); setPriceRange('') }}
                  className="font-sans text-[11px] font-semibold uppercase tracking-widest text-ink border border-ink px-6 py-3 hover:bg-obsidian hover:text-parchment transition-colors duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addItem}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
