import { useState, useEffect, useRef, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/products/ProductCard'

const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 – $75', min: 50, max: 75 },
  { id: 'over-75', label: '$75 & Above', min: 75, max: Infinity },
]

const materials = [
  { id: 'gold', label: '18K Gold Plated' },
  { id: 'silver', label: 'Sterling Silver' },
]

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Highest Rated' },
  { id: 'newest', label: 'Newest' },
]

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const [selectedCategories, setSelectedCategories] = useState(() => {
    const cat = searchParams.get('category')
    return cat ? [cat] : []
  })
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat && !selectedCategories.includes(cat)) {
      setSelectedCategories([cat])
    }
  }, [searchParams])

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => cancelAnimationFrame(raf)
  }, [selectedCategories, selectedPriceRanges, selectedMaterials, sortBy])

  const toggleCategory = (catId) => {
    setSelectedCategories(prev =>
      prev.includes(catId) ? prev.filter(c => c !== catId) : [...prev, catId]
    )
  }

  const togglePriceRange = (rangeId) => {
    setSelectedPriceRanges(prev =>
      prev.includes(rangeId) ? prev.filter(r => r !== rangeId) : [...prev, rangeId]
    )
  }

  const toggleMaterial = (matId) => {
    setSelectedMaterials(prev =>
      prev.includes(matId) ? prev.filter(m => m !== matId) : [...prev, matId]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedPriceRanges([])
    setSelectedMaterials([])
    setSortBy('featured')
    setSearchParams({})
  }

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(p => selectedCategories.includes(p.category))
    }

    if (selectedPriceRanges.length > 0) {
      const ranges = selectedPriceRanges.map(id => priceRanges.find(r => r.id === id))
      filtered = filtered.filter(p =>
        ranges.some(r => p.price >= r.min && p.price < r.max)
      )
    }

    if (selectedMaterials.length > 0) {
      filtered = filtered.filter(p => selectedMaterials.includes(p.material))
    }

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return filtered
  }, [selectedCategories, selectedPriceRanges, selectedMaterials, sortBy])

  const activeFilterCount = selectedCategories.length + selectedPriceRanges.length + selectedMaterials.length

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-charcoal-700 font-semibold mb-4">
          Category
        </h3>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
                className="w-4 h-4 border border-charcoal-300 rounded-none appearance-none checked:bg-charcoal-800 checked:border-charcoal-800 transition-colors cursor-pointer relative checked:after:content-[''] checked:after:absolute checked:after:inset-0 checked:after:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%2220%206%209%2017%204%2012%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] checked:after:bg-center checked:after:bg-no-repeat"
              />
              <span className="text-sm font-sans text-charcoal-600 group-hover:text-charcoal-800 transition-colors">
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-charcoal-700 font-semibold mb-4">
          Price
        </h3>
        <div className="space-y-2.5">
          {priceRanges.map((range) => (
            <label
              key={range.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedPriceRanges.includes(range.id)}
                onChange={() => togglePriceRange(range.id)}
                className="w-4 h-4 border border-charcoal-300 rounded-none appearance-none checked:bg-charcoal-800 checked:border-charcoal-800 transition-colors cursor-pointer relative checked:after:content-[''] checked:after:absolute checked:after:inset-0 checked:after:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%2220%206%209%2017%204%2012%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] checked:after:bg-center checked:after:bg-no-repeat"
              />
              <span className="text-sm font-sans text-charcoal-600 group-hover:text-charcoal-800 transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-charcoal-700 font-semibold mb-4">
          Material
        </h3>
        <div className="space-y-2.5">
          {materials.map((mat) => (
            <label
              key={mat.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedMaterials.includes(mat.id)}
                onChange={() => toggleMaterial(mat.id)}
                className="w-4 h-4 border border-charcoal-300 rounded-none appearance-none checked:bg-charcoal-800 checked:border-charcoal-800 transition-colors cursor-pointer relative checked:after:content-[''] checked:after:absolute checked:after:inset-0 checked:after:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%2220%206%209%2017%204%2012%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] checked:after:bg-center checked:after:bg-no-repeat"
              />
              <span className="text-sm font-sans text-charcoal-600 group-hover:text-charcoal-800 transition-colors">
                {mat.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear */}
      {activeFilterCount > 0 && (
        <button
          onClick={clearFilters}
          className="text-xs font-sans text-charcoal-500 underline hover:text-charcoal-800 transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <main ref={containerRef} className="pt-20 md:pt-24 pb-16 md:pb-24">
      {/* Page header */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24 mb-10 md:mb-14">
        <div className="text-center pt-8 md:pt-12">
          <p className="font-sans text-xs tracking-super-wide uppercase text-gold-500 mb-3">
            Our Collection
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-800 mb-3">
            Shop All Jewelry
          </h1>
          <p className="font-sans text-sm text-charcoal-400">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'} crafted to be treasured
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar - desktop */}
          <aside className="hidden lg:block w-60 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-charcoal-100">
              {/* Mobile filter button */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-charcoal-700 hover:text-charcoal-900 transition-colors"
              >
                <SlidersHorizontal size={16} />
                Filters
                {activeFilterCount > 0 && (
                  <span className="bg-charcoal-800 text-cream-50 text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              {/* Sort */}
              <div className="relative ml-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-xs font-sans tracking-widest uppercase text-charcoal-700 pr-8 py-2 cursor-pointer focus:outline-none hover:text-charcoal-900 transition-colors"
                >
                  {sortOptions.map(opt => (
                    <option key={opt.id} value={opt.id}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-charcoal-400 pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal-600 mb-2">No pieces found</p>
                <p className="text-sm text-charcoal-400 mb-6">Try adjusting your filters</p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-charcoal-900/50 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-full max-w-sm bg-cream-50 shadow-2xl flex flex-col animate-slide-down">
            <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-100">
              <h2 className="font-sans text-xs tracking-widest uppercase text-charcoal-800 font-semibold">
                Filters
              </h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 text-charcoal-500 hover:text-charcoal-800 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <FilterContent />
            </div>
            <div className="px-6 py-4 border-t border-charcoal-100">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full btn-primary"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
