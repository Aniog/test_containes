import { useState, useMemo } from 'react'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories } from '../data/products'
import ProductCard from '../components/product/ProductCard'
import { cn } from '../lib/utils'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 49 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75+', min: 76, max: 999 },
]

const materials = ['Gold', 'Silver']

export default function Shop() {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const toggleFilter = (arr, setArr, value) => {
    setArr((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    )
  }

  const filtered = useMemo(() => {
    let result = [...products]

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }

    if (selectedPrices.length > 0) {
      result = result.filter((p) =>
        selectedPrices.some((range) => {
          const r = priceRanges.find((pr) => pr.label === range)
          return r && p.price >= r.min && p.price <= r.max
        })
      )
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.some((m) => m.toLowerCase() === p.material))
    }

    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price)
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price)
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating)

    return result
  }, [selectedCategories, selectedPrices, selectedMaterials, sortBy])

  const activeCount = selectedCategories.length + selectedPrices.length + selectedMaterials.length

  const clearAll = () => {
    setSelectedCategories([])
    setSelectedPrices([])
    setSelectedMaterials([])
  }

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-charcoal mb-4">
          Category
        </h3>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div
                className={cn(
                  'w-4 h-4 border rounded-sm flex items-center justify-center transition-colors',
                  selectedCategories.includes(cat.id)
                    ? 'bg-charcoal border-charcoal'
                    : 'border-divider group-hover:border-warm-gray-light'
                )}
              >
                {selectedCategories.includes(cat.id) && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className="text-sm text-warm-gray group-hover:text-charcoal transition-colors">
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-charcoal mb-4">
          Price
        </h3>
        <div className="space-y-2.5">
          {priceRanges.map((range) => (
            <label
              key={range.label}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div
                className={cn(
                  'w-4 h-4 border rounded-sm flex items-center justify-center transition-colors',
                  selectedPrices.includes(range.label)
                    ? 'bg-charcoal border-charcoal'
                    : 'border-divider group-hover:border-warm-gray-light'
                )}
              >
                {selectedPrices.includes(range.label) && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className="text-sm text-warm-gray group-hover:text-charcoal transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-charcoal mb-4">
          Material
        </h3>
        <div className="flex gap-2">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => toggleFilter(selectedMaterials, setSelectedMaterials, mat)}
              className={cn(
                'px-4 py-2 text-xs font-sans uppercase tracking-[0.1em] border transition-all duration-300',
                selectedMaterials.includes(mat)
                  ? 'bg-charcoal text-white border-charcoal'
                  : 'border-divider text-warm-gray hover:border-charcoal hover:text-charcoal'
              )}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="pt-20 md:pt-24">
      {/* Page header */}
      <div className="text-center py-10 md:py-14 section-padding">
        <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-warm-gray-light mb-3">
          Our Collection
        </p>
        <h1 className="font-serif text-3xl md:text-heading-lg text-charcoal">
          Shop All Jewelry
        </h1>
      </div>

      <div className="hairline-divider max-w-7xl mx-auto" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Top bar: sort + filter toggle */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm text-warm-gray hover:text-charcoal transition-colors"
          >
            <SlidersHorizontal size={16} />
            Filters
            {activeCount > 0 && (
              <span className="bg-gold text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                {activeCount}
              </span>
            )}
          </button>

          <p className="hidden lg:block text-sm text-warm-gray">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-sm text-warm-gray pr-7 pl-0 py-1 cursor-pointer focus:outline-none border-b border-transparent hover:border-divider transition-colors"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-warm-gray-light pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10 lg:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-charcoal">
                Filters
              </h2>
              {activeCount > 0 && (
                <button onClick={clearAll} className="text-xs text-warm-gray-light hover:text-charcoal underline">
                  Clear all
                </button>
              )}
            </div>
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal/40 mb-2">No pieces found</p>
                <p className="text-sm text-warm-gray-light">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[90] lg:hidden">
          <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-ivory shadow-2xl flex flex-col animate-slide-in-right">
            <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
              <h2 className="font-sans text-sm font-medium uppercase tracking-[0.1em] text-charcoal">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-charcoal/60 hover:text-charcoal p-1">
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <FilterContent />
            </div>
            <div className="border-t border-divider px-6 py-4 flex gap-3">
              {activeCount > 0 && (
                <button onClick={clearAll} className="btn-accent-outline flex-1 text-center">
                  Clear All
                </button>
              )}
              <button onClick={() => setMobileFiltersOpen(false)} className="btn-accent flex-1 text-center">
                Show {filtered.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
