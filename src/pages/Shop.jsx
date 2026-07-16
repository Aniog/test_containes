import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/lib/data'
import ProductCard from '@/components/product/ProductCard'

const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

const Shop = () => {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)

  const categoryParam = searchParams.get('category') || ''
  const [selectedCategories, setSelectedCategories] = useState(
    categoryParam ? [categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)] : []
  )
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategories([categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)])
    }
  }, [categoryParam])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [selectedCategories, selectedPriceRanges, selectedMaterials, sortBy])

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
  }

  const togglePriceRange = (range) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(range.label) ? prev.filter((r) => r !== range.label) : [...prev, range.label]
    )
  }

  const toggleMaterial = (mat) => {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedPriceRanges([])
    setSelectedMaterials([])
    setSearchParams({})
  }

  const hasFilters = selectedCategories.length > 0 || selectedPriceRanges.length > 0 || selectedMaterials.length > 0

  // Filter products
  let filtered = products.filter((p) => {
    if (selectedCategories.length > 0 && !selectedCategories.includes(p.category)) return false
    if (selectedPriceRanges.length > 0) {
      const inRange = selectedPriceRanges.some((label) => {
        const range = PRICE_RANGES.find((r) => r.label === label)
        return range && p.price >= range.min && p.price < range.max
      })
      if (!inRange) return false
    }
    if (selectedMaterials.length > 0 && !selectedMaterials.includes(p.material)) return false
    return true
  })

  // Sort
  if (sortBy === 'price-asc') filtered.sort((a, b) => a.price - b.price)
  else if (sortBy === 'price-desc') filtered.sort((a, b) => b.price - a.price)

  const FilterSidebar = ({ mobile = false }) => (
    <div className={mobile ? '' : 'sticky top-24'}>
      {/* Categories */}
      <div className="mb-8">
        <h3 className="font-sans text-xs uppercase tracking-widest text-warm-charcoal mb-3">Category</h3>
        {['Earrings', 'Necklaces', 'Huggies', 'Sets'].map((cat) => (
          <label key={cat} className="flex items-center gap-2 py-1.5 cursor-pointer group">
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => toggleCategory(cat)}
              className="accent-gold w-4 h-4"
            />
            <span className="text-sm text-warm-gray group-hover:text-warm-charcoal transition-colors font-sans">{cat}</span>
          </label>
        ))}
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="font-sans text-xs uppercase tracking-widest text-warm-charcoal mb-3">Price</h3>
        {PRICE_RANGES.map((range) => (
          <label key={range.label} className="flex items-center gap-2 py-1.5 cursor-pointer group">
            <input
              type="checkbox"
              checked={selectedPriceRanges.includes(range.label)}
              onChange={() => togglePriceRange(range)}
              className="accent-gold w-4 h-4"
            />
            <span className="text-sm text-warm-gray group-hover:text-warm-charcoal transition-colors font-sans">{range.label}</span>
          </label>
        ))}
      </div>

      {/* Material */}
      <div className="mb-8">
        <h3 className="font-sans text-xs uppercase tracking-widest text-warm-charcoal mb-3">Material</h3>
        {['18K Gold Plated'].map((mat) => (
          <label key={mat} className="flex items-center gap-2 py-1.5 cursor-pointer group">
            <input
              type="checkbox"
              checked={selectedMaterials.includes(mat)}
              onChange={() => toggleMaterial(mat)}
              className="accent-gold w-4 h-4"
            />
            <span className="text-sm text-warm-gray group-hover:text-warm-charcoal transition-colors font-sans">{mat}</span>
          </label>
        ))}
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs font-sans uppercase tracking-wider text-gold hover:text-gold-dark transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="bg-ivory min-h-screen pt-20 md:pt-24">
      <div className="max-w-container mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Page header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-4xl md:text-5xl text-warm-charcoal tracking-wide">The Collection</h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-divider-light">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm font-sans text-warm-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="hidden md:block text-sm text-warm-gray font-sans">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-1 text-sm font-sans text-warm-charcoal"
            >
              Sort: {SORT_OPTIONS.find((o) => o.value === sortBy)?.label}
              <ChevronDown className="w-4 h-4" />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white shadow-lg border border-divider-light z-10 min-w-[180px]">
                {SORT_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => { setSortBy(option.value); setSortOpen(false) }}
                    className={`w-full text-left px-4 py-2 text-sm font-sans transition-colors ${
                      sortBy === option.value ? 'text-gold bg-ivory' : 'text-warm-charcoal hover:bg-ivory'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-warm-charcoal">No pieces found</p>
                <p className="text-sm text-warm-gray mt-2">Try adjusting your filters.</p>
                <button onClick={clearFilters} className="btn-secondary mt-6">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} light />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-ivory z-50 overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-divider-light">
              <h3 className="font-sans text-sm uppercase tracking-widest text-warm-charcoal">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-warm-gray hover:text-warm-charcoal">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 py-6">
              <FilterSidebar mobile />
            </div>
            <div className="px-6 py-4 border-t border-divider-light">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="btn-primary w-full text-center"
              >
                Show {filtered.length} Results
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Shop
