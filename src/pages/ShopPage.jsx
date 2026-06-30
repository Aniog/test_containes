import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

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

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)

  const [activeCategory, setActiveCategory] = useState(
    searchParams.get('category')
      ? searchParams.get('category').charAt(0).toUpperCase() + searchParams.get('category').slice(1)
      : 'All'
  )
  const [activePriceRange, setActivePriceRange] = useState(0)
  const [sortBy, setSortBy] = useState('featured')
  const [filterOpen, setFilterOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) {
      setActiveCategory(cat.charAt(0).toUpperCase() + cat.slice(1))
    }
  }, [searchParams])

  const filtered = products
    .filter(p => {
      if (activeCategory === 'All') return true
      return p.category.toLowerCase() === activeCategory.toLowerCase()
    })
    .filter(p => {
      const range = PRICE_RANGES[activePriceRange]
      return p.price >= range.min && p.price <= range.max
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
  }, [activeCategory, activePriceRange, sortBy])

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat)
    if (cat === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ category: cat.toLowerCase() })
    }
    setFilterOpen(false)
  }

  return (
    <div className="bg-parchment min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-linen border-b border-stone/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 text-center">
          <p className="text-xs font-sans uppercase tracking-ultra-wide text-gold mb-3">Velmora</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-obsidian">
            {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
          </h1>
          <p className="text-sm font-sans text-driftwood mt-3">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex gap-8">
          {/* Sidebar filter — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="text-xs font-sans uppercase tracking-widest text-driftwood mb-4">Category</h3>
                <ul className="space-y-2">
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategoryChange(cat)}
                        className={`text-sm font-sans transition-colors w-full text-left py-1 ${
                          activeCategory === cat
                            ? 'text-obsidian font-medium'
                            : 'text-driftwood hover:text-obsidian'
                        }`}
                      >
                        {activeCategory === cat && (
                          <span className="text-gold mr-2">—</span>
                        )}
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="text-xs font-sans uppercase tracking-widest text-driftwood mb-4">Price</h3>
                <ul className="space-y-2">
                  {PRICE_RANGES.map((range, i) => (
                    <li key={range.label}>
                      <button
                        onClick={() => setActivePriceRange(i)}
                        className={`text-sm font-sans transition-colors w-full text-left py-1 ${
                          activePriceRange === i
                            ? 'text-obsidian font-medium'
                            : 'text-driftwood hover:text-obsidian'
                        }`}
                      >
                        {activePriceRange === i && (
                          <span className="text-gold mr-2">—</span>
                        )}
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="text-xs font-sans uppercase tracking-widest text-driftwood mb-4">Material</h3>
                <ul className="space-y-2">
                  {['All Materials', '18K Gold Plated', 'Sterling Silver'].map(m => (
                    <li key={m}>
                      <button className="text-sm font-sans text-driftwood hover:text-obsidian transition-colors w-full text-left py-1">
                        {m}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0" ref={containerRef}>
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone/20">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(v => !v)}
                className="md:hidden flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-driftwood hover:text-obsidian transition-colors"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filter
              </button>

              <span className="hidden md:block text-xs font-sans text-driftwood">
                {filtered.length} results
              </span>

              {/* Sort dropdown */}
              <div className="relative">
                <button
                  onClick={() => setSortOpen(v => !v)}
                  className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-driftwood hover:text-obsidian transition-colors"
                >
                  Sort: {SORT_OPTIONS.find(o => o.value === sortBy)?.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-parchment border border-stone/20 shadow-md z-10 animate-fadeIn">
                    {SORT_OPTIONS.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => { setSortBy(opt.value); setSortOpen(false) }}
                        className={`w-full text-left px-4 py-3 text-xs font-sans transition-colors ${
                          sortBy === opt.value
                            ? 'text-obsidian bg-linen'
                            : 'text-driftwood hover:text-obsidian hover:bg-linen'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile filter panel */}
            {filterOpen && (
              <div className="md:hidden bg-linen border border-stone/20 p-5 mb-6 animate-fadeIn">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-sans uppercase tracking-widest text-obsidian">Filters</span>
                  <button onClick={() => setFilterOpen(false)}>
                    <X className="w-4 h-4 text-driftwood" />
                  </button>
                </div>
                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-sans uppercase tracking-widest text-driftwood mb-3">Category</p>
                    <div className="flex flex-wrap gap-2">
                      {CATEGORIES.map(cat => (
                        <button
                          key={cat}
                          onClick={() => handleCategoryChange(cat)}
                          className={`px-3 py-1.5 text-xs font-sans border transition-colors ${
                            activeCategory === cat
                              ? 'bg-obsidian border-obsidian text-ivory'
                              : 'border-stone/40 text-driftwood hover:border-obsidian'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-sans uppercase tracking-widest text-driftwood mb-3">Price</p>
                    <div className="flex flex-wrap gap-2">
                      {PRICE_RANGES.map((range, i) => (
                        <button
                          key={range.label}
                          onClick={() => { setActivePriceRange(i); setFilterOpen(false) }}
                          className={`px-3 py-1.5 text-xs font-sans border transition-colors ${
                            activePriceRange === i
                              ? 'bg-obsidian border-obsidian text-ivory'
                              : 'border-stone/40 text-driftwood hover:border-obsidian'
                          }`}
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
                <p className="font-serif text-2xl text-obsidian mb-3">No pieces found</p>
                <p className="text-sm font-sans text-driftwood mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceRange(0) }}
                  className="text-xs font-sans uppercase tracking-widest text-gold hover:text-gold-dark transition-colors border-b border-gold pb-0.5"
                >
                  Clear Filters
                </button>
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
