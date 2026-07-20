import React, { useState, useMemo, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import ProductCard from '@/components/ui/ProductCard'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const MATERIALS = ['18K Gold Plated', 'Sterling Silver']

const ShopPage = () => {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')
  const [headerRevealRef, headerVisible] = useScrollReveal()

  const categoryParam = searchParams.get('category') || ''

  const [selectedCategories, setSelectedCategories] = useState(
    categoryParam ? [categoryParam] : []
  )
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategories([categoryParam])
    }
  }, [categoryParam])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [selectedCategories, selectedPriceRanges, selectedMaterials, sortBy])

  const toggleFilter = (arr, setArr, value) => {
    setArr(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedPriceRanges([])
    setSelectedMaterials([])
    setSearchParams({})
  }

  const hasFilters = selectedCategories.length > 0 || selectedPriceRanges.length > 0 || selectedMaterials.length > 0

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category))
    }

    if (selectedPriceRanges.length > 0) {
      result = result.filter(p =>
        selectedPriceRanges.some(range => {
          const r = PRICE_RANGES.find(pr => pr.label === range)
          return r && p.price >= r.min && p.price < r.max
        })
      )
    }

    if (selectedMaterials.length > 0) {
      result = result.filter(p => selectedMaterials.includes(p.material))
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return result
  }, [selectedCategories, selectedPriceRanges, selectedMaterials, sortBy])

  const allCategories = [...new Set(products.map(p => p.category))]

  const FilterSidebar = ({ mobile = false }) => (
    <div className={mobile ? '' : 'sticky top-24'}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-warm-black">Filters</h3>
        {hasFilters && (
          <button onClick={clearFilters} className="text-xs text-gold hover:text-gold-dark transition-colors duration-300">
            Clear all
          </button>
        )}
      </div>

      {/* Category */}
      <div className="mb-6">
        <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-warm-black mb-3">Category</h4>
        <div className="space-y-2">
          {allCategories.map(cat => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleFilter(selectedCategories, setSelectedCategories, cat)}
                className="w-4 h-4 accent-gold"
              />
              <span className="text-sm text-stone group-hover:text-warm-black transition-colors duration-300">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-warm-black mb-3">Price</h4>
        <div className="space-y-2">
          {PRICE_RANGES.map(range => (
            <label key={range.label} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedPriceRanges.includes(range.label)}
                onChange={() => toggleFilter(selectedPriceRanges, setSelectedPriceRanges, range.label)}
                className="w-4 h-4 accent-gold"
              />
              <span className="text-sm text-stone group-hover:text-warm-black transition-colors duration-300">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-6">
        <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-warm-black mb-3">Material</h4>
        <div className="space-y-2">
          {MATERIALS.map(mat => (
            <label key={mat} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedMaterials.includes(mat)}
                onChange={() => toggleFilter(selectedMaterials, setSelectedMaterials, mat)}
                className="w-4 h-4 accent-gold"
              />
              <span className="text-sm text-stone group-hover:text-warm-black transition-colors duration-300">{mat}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen page-enter">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div ref={headerRevealRef} className={`text-center mb-10 reveal-hidden ${headerVisible ? 'reveal-visible' : ''}`}>
          <h1 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-warm-black">
            The Collection
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium text-warm-black"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="hidden md:block text-sm text-stone">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="flex items-center gap-2">
            <label className="text-xs text-stone uppercase tracking-wider">Sort:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs uppercase tracking-wider bg-transparent border border-sand px-3 py-2 text-warm-black focus:outline-none focus:border-gold transition-colors duration-300"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-stone text-sm mb-4">No pieces match your filters.</p>
                <button onClick={clearFilters} className="text-xs uppercase tracking-[0.2em] text-gold hover:text-gold-dark transition-colors duration-300">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i + 20} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-50 cart-overlay-enter"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-warm-white z-50 shadow-2xl overflow-y-auto filter-drawer-enter">
            <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
              <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-warm-black">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5 text-warm-black" />
              </button>
            </div>
            <div className="px-6 py-6">
              <FilterSidebar mobile />
            </div>
            <div className="px-6 py-4 border-t border-sand">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-gold text-warm-black py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold-dark hover:shadow-lg transition-all duration-300"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ShopPage
