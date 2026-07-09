import { useState, useEffect, useRef, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import { cn } from '../lib/utils'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 — $75', min: 50, max: 75 },
  { label: '$75+', min: 75, max: Infinity },
]

const sortOptions = [
  { label: 'Bestselling', value: 'bestselling' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
  { label: 'Top Rated', value: 'rating' },
]

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedPriceRange, setSelectedPriceRange] = useState(null)
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sortBy, setSortBy] = useState('bestselling')
  const containerRef = useRef(null)

  // Initialize from URL params
  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) {
      setSelectedCategories([cat])
    }
  }, [searchParams])

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => cancelAnimationFrame(frameId)
  }, [selectedCategories, selectedPriceRange, selectedMaterials, sortBy])

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
    setSearchParams((params) => {
      params.delete('category')
      return params
    })
  }

  const toggleMaterial = (mat) => {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedPriceRange(null)
    setSelectedMaterials([])
    setSearchParams({})
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }

    if (selectedPriceRange) {
      result = result.filter(
        (p) => p.price >= selectedPriceRange.min && p.price < selectedPriceRange.max
      )
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return result
  }, [selectedCategories, selectedPriceRange, selectedMaterials, sortBy])

  const hasFilters = selectedCategories.length > 0 || selectedPriceRange || selectedMaterials.length > 0

  const filterContent = (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.2em] text-ink font-medium mb-4">Category</h3>
        <div className="space-y-2.5">
          {['earrings', 'necklaces', 'huggies'].map((cat) => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
                className="w-4 h-4 border-stone-300 text-gold focus:ring-gold rounded-none"
              />
              <span className="text-sm text-ink-light group-hover:text-ink transition-colors capitalize">
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.2em] text-ink font-medium mb-4">Price</h3>
        <div className="space-y-2.5">
          {priceRanges.map((range) => (
            <label key={range.label} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={selectedPriceRange?.label === range.label}
                onChange={() => setSelectedPriceRange(range)}
                className="w-4 h-4 border-stone-300 text-gold focus:ring-gold"
              />
              <span className="text-sm text-ink-light group-hover:text-ink transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.2em] text-ink font-medium mb-4">Material</h3>
        <div className="space-y-2.5">
          {['18K Gold Plated', 'Sterling Silver'].map((mat) => (
            <label key={mat} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedMaterials.includes(mat)}
                onChange={() => toggleMaterial(mat)}
                className="w-4 h-4 border-stone-300 text-gold focus:ring-gold rounded-none"
              />
              <span className="text-sm text-ink-light group-hover:text-ink transition-colors">
                {mat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs uppercase tracking-wider text-ink-muted hover:text-gold transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-8 pb-6">
        <h1 className="font-serif text-3xl md:text-4xl font-light text-ink tracking-wide">
          Shop All Jewelry
        </h1>
        <p className="text-sm text-ink-muted mt-2">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-20">
        {/* Toolbar */}
        <div className="flex items-center justify-between py-4 border-t border-b border-stone-200 mb-8">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-wider text-ink"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasFilters && (
              <span className="w-5 h-5 bg-gold text-obsidian text-[10px] rounded-full flex items-center justify-center font-bold">
                {selectedCategories.length + (selectedPriceRange ? 1 : 0) + selectedMaterials.length}
              </span>
            )}
          </button>

          <div className="relative ml-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-xs uppercase tracking-wider text-ink pr-8 py-2 cursor-pointer focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-ink-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            {filterContent}
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-ink-light mb-2">No pieces found</p>
                <p className="text-sm text-ink-muted mb-6">Try adjusting your filters.</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2.5 border border-stone-300 text-xs uppercase tracking-wider hover:bg-stone-100 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product}>
                    <img
                      data-strk-img-id={`product-card-${product.id}`}
                      data-strk-img={`[${product.descId}] [${product.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </ProductCard>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      <div
        className={cn(
          'fixed inset-0 z-50 lg:hidden transition-all duration-300',
          mobileFilterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="absolute inset-0 bg-obsidian/50" onClick={() => setMobileFilterOpen(false)} />
        <div
          className={cn(
            'absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-stone-50 shadow-2xl transition-transform duration-300',
            mobileFilterOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
            <h2 className="font-serif text-lg tracking-wide">Filters</h2>
            <button onClick={() => setMobileFilterOpen(false)} aria-label="Close filters">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="px-6 py-6 overflow-y-auto h-[calc(100%-70px)]">
            {filterContent}
          </div>
        </div>
      </div>
    </div>
  )
}
