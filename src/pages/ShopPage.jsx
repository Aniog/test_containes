import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $70', min: 40, max: 70 },
  { label: '$70 – $100', min: 70, max: 100 },
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
  const [filterOpen, setFilterOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category')
      ? searchParams.get('category').charAt(0).toUpperCase() + searchParams.get('category').slice(1)
      : 'All'
  )
  const [selectedPrice, setSelectedPrice] = useState(PRICE_RANGES[0])
  const [sortBy, setSortBy] = useState('featured')
  const [sortOpen, setSortOpen] = useState(false)

  const gridRef = useRef(null)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) {
      setSelectedCategory(cat.charAt(0).toUpperCase() + cat.slice(1))
    }
  }, [searchParams])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, gridRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [selectedCategory, selectedPrice, sortBy])

  const filtered = products
    .filter(p => {
      if (selectedCategory === 'All') return true
      return p.category === selectedCategory.toLowerCase()
    })
    .filter(p => p.price >= selectedPrice.min && p.price <= selectedPrice.max)
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat)
    if (cat === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ category: cat.toLowerCase() })
    }
  }

  return (
    <div className="bg-velmora-ivory min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-velmora-cream border-b border-velmora-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-3">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-velmora-text">
            {selectedCategory === 'All' ? 'All Jewelry' : selectedCategory}
          </h1>
          <p className="font-manrope text-sm text-velmora-muted mt-3">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-manrope text-xs uppercase tracking-widest text-velmora-muted border border-velmora-border px-4 py-2.5 hover:border-velmora-gold hover:text-velmora-gold transition-all"
          >
            <SlidersHorizontal className="w-3 h-3" />
            Filters
          </button>

          {/* Desktop category pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`font-manrope text-xs uppercase tracking-widest px-5 py-2 border transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'border-velmora-gold bg-velmora-gold text-white'
                    : 'border-velmora-border text-velmora-muted hover:border-velmora-gold hover:text-velmora-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort dropdown */}
          <div className="relative ml-auto">
            <button
              onClick={() => setSortOpen(v => !v)}
              className="flex items-center gap-2 font-manrope text-xs uppercase tracking-widest text-velmora-muted border border-velmora-border px-4 py-2.5 hover:border-velmora-gold hover:text-velmora-gold transition-all"
            >
              {SORT_OPTIONS.find(s => s.value === sortBy)?.label}
              <ChevronDown className="w-3 h-3" />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-1 bg-velmora-ivory border border-velmora-border shadow-lg z-20 min-w-[180px]">
                {SORT_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => { setSortBy(opt.value); setSortOpen(false) }}
                    className={`w-full text-left px-4 py-3 font-manrope text-xs uppercase tracking-widest transition-colors ${
                      sortBy === opt.value
                        ? 'text-velmora-gold bg-velmora-cream'
                        : 'text-velmora-muted hover:text-velmora-gold hover:bg-velmora-cream'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside className={`${filterOpen ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            {/* Mobile close */}
            <div className="flex items-center justify-between mb-6 md:hidden">
              <span className="font-manrope text-xs uppercase tracking-widest text-velmora-text">Filters</span>
              <button onClick={() => setFilterOpen(false)}>
                <X className="w-4 h-4 text-velmora-muted" />
              </button>
            </div>

            {/* Category filter */}
            <div className="mb-8">
              <h3 className="font-manrope text-xs uppercase tracking-widest text-velmora-text mb-4">
                Category
              </h3>
              <div className="flex flex-col gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`text-left font-manrope text-xs transition-colors ${
                      selectedCategory === cat
                        ? 'text-velmora-gold'
                        : 'text-velmora-muted hover:text-velmora-gold'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-px bg-velmora-border mb-8" />

            {/* Price filter */}
            <div className="mb-8">
              <h3 className="font-manrope text-xs uppercase tracking-widest text-velmora-text mb-4">
                Price
              </h3>
              <div className="flex flex-col gap-2">
                {PRICE_RANGES.map(range => (
                  <button
                    key={range.label}
                    onClick={() => setSelectedPrice(range)}
                    className={`text-left font-manrope text-xs transition-colors ${
                      selectedPrice.label === range.label
                        ? 'text-velmora-gold'
                        : 'text-velmora-muted hover:text-velmora-gold'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-px bg-velmora-border mb-8" />

            {/* Material filter */}
            <div>
              <h3 className="font-manrope text-xs uppercase tracking-widest text-velmora-text mb-4">
                Material
              </h3>
              <div className="flex flex-col gap-2">
                {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map(m => (
                  <label key={m} className="flex items-center gap-2 cursor-pointer group">
                    <div className="w-3.5 h-3.5 border border-velmora-border group-hover:border-velmora-gold transition-colors" />
                    <span className="font-manrope text-xs text-velmora-muted group-hover:text-velmora-gold transition-colors">
                      {m}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-velmora-muted italic">
                  No pieces found
                </p>
                <p className="font-manrope text-xs text-velmora-subtle mt-2">
                  Try adjusting your filters
                </p>
              </div>
            ) : (
              <div
                ref={gridRef}
                className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
              >
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
