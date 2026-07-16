import { useState, useEffect, useRef, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { cn } from '@/lib/utils'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
]

const materials = ['Gold', 'Silver']

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedPriceRange, setSelectedPriceRange] = useState(null)
  const [selectedMaterial, setSelectedMaterial] = useState(null)
  const [sortBy, setSortBy] = useState('featured')

  // Initialize from URL
  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setSelectedCategories([cat])
  }, [searchParams])

  useEffect(() => {
    if (containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => cancelAnimationFrame(frameId)
    }
  }, [selectedCategories, selectedPriceRange, selectedMaterial, sortBy])

  const toggleCategory = (catId) => {
    setSelectedCategories((prev) =>
      prev.includes(catId) ? prev.filter((c) => c !== catId) : [...prev, catId]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedPriceRange(null)
    setSelectedMaterial(null)
    setSearchParams({})
  }

  const hasFilters = selectedCategories.length > 0 || selectedPriceRange !== null || selectedMaterial !== null

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }

    if (selectedPriceRange !== null) {
      const range = priceRanges[selectedPriceRange]
      result = result.filter((p) => p.price >= range.min && p.price < range.max)
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
  }, [selectedCategories, selectedPriceRange, selectedMaterial, sortBy])

  const FilterSidebar = ({ mobile = false }) => (
    <div className={cn('space-y-8', mobile ? 'p-6' : '')}>
      {/* Categories */}
      <div>
        <h3 className="text-xs tracking-widest uppercase font-medium text-velmora-black mb-4">
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
                className="w-4 h-4 border-velmora-border text-velmora-gold focus:ring-velmora-gold rounded-none accent-velmora-gold"
              />
              <span className="text-sm text-velmora-charcoal group-hover:text-velmora-black transition-colors">
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-widest uppercase font-medium text-velmora-black mb-4">
          Price
        </h3>
        <div className="space-y-2.5">
          {priceRanges.map((range, i) => (
            <label
              key={i}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="price"
                checked={selectedPriceRange === i}
                onChange={() => setSelectedPriceRange(selectedPriceRange === i ? null : i)}
                className="w-4 h-4 border-velmora-border text-velmora-gold focus:ring-velmora-gold accent-velmora-gold"
              />
              <span className="text-sm text-velmora-charcoal group-hover:text-velmora-black transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-widest uppercase font-medium text-velmora-black mb-4">
          Material
        </h3>
        <div className="space-y-2.5">
          {materials.map((mat) => (
            <label
              key={mat}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="material"
                checked={selectedMaterial === mat}
                onChange={() => setSelectedMaterial(selectedMaterial === mat ? null : mat)}
                className="w-4 h-4 border-velmora-border text-velmora-gold focus:ring-velmora-gold accent-velmora-gold"
              />
              <span className="text-sm text-velmora-charcoal group-hover:text-velmora-black transition-colors">
                {mat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs text-velmora-gold hover:text-velmora-gold-dark tracking-wider uppercase transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="section-padding py-12 md:py-16 text-center bg-velmora-cream border-b border-velmora-border">
        <p className="text-velmora-gold text-xs tracking-widest-2xl uppercase font-medium mb-3">
          Collection
        </p>
        <h1 className="font-serif text-3xl md:text-4xl text-velmora-black mb-3">
          {selectedCategories.length === 1
            ? categories.find((c) => c.id === selectedCategories[0])?.name || 'All Jewelry'
            : 'All Jewelry'}
        </h1>
        <p className="text-sm text-velmora-muted">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
        </p>
      </section>

      {/* Content */}
      <section className="section-padding py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 text-xs tracking-wider uppercase text-velmora-charcoal hover:text-velmora-gold transition-colors"
            >
              <SlidersHorizontal size={16} />
              Filters
              {hasFilters && (
                <span className="w-5 h-5 bg-velmora-gold text-white text-[10px] rounded-full flex items-center justify-center">
                  {selectedCategories.length + (selectedPriceRange !== null ? 1 : 0) + (selectedMaterial ? 1 : 0)}
                </span>
              )}
            </button>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-xs tracking-wider uppercase text-velmora-charcoal pr-6 cursor-pointer focus:outline-none hover:text-velmora-gold transition-colors"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-velmora-muted pointer-events-none" />
            </div>
          </div>

          <div className="flex gap-10">
            {/* Desktop sidebar */}
            <aside className="hidden lg:block w-56 flex-shrink-0">
              <FilterSidebar />
            </aside>

            {/* Product grid */}
            <div className="flex-1">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="font-serif text-xl text-velmora-muted mb-2">No pieces found</p>
                  <p className="text-sm text-velmora-warm mb-6">Try adjusting your filters</p>
                  <button onClick={clearFilters} className="btn-outline text-xs">
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-velmora-ivory shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
              <h2 className="text-xs tracking-widest uppercase font-medium text-velmora-black">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-1 text-velmora-muted hover:text-velmora-black transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <FilterSidebar mobile />
          </div>
        </div>
      )}
    </div>
  )
}
