import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/home/ProductCard'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const materials = [
  { label: 'Gold', value: 'gold' },
  { label: 'Silver', value: 'silver' },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rating', value: 'rating' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || ''

  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedPriceRange, setSelectedPriceRange] = useState(null)
  const [selectedMaterial, setSelectedMaterial] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory)
    }
    if (selectedPriceRange) {
      result = result.filter(p => p.price >= selectedPriceRange.min && p.price < selectedPriceRange.max)
    }
    if (selectedMaterial) {
      result = result.filter(p => p.material === selectedMaterial)
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
  }, [selectedCategory, selectedPriceRange, selectedMaterial, sortBy])

  const clearFilters = () => {
    setSelectedCategory('')
    setSelectedPriceRange(null)
    setSelectedMaterial('')
    setSortBy('featured')
    setSearchParams({})
  }

  const hasActiveFilters = selectedCategory || selectedPriceRange || selectedMaterial

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs font-medium tracking-widest-xl uppercase text-base mb-4">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => { setSelectedCategory(''); setSearchParams({}) }}
            className={`block text-sm transition-colors ${!selectedCategory ? 'text-gold font-medium' : 'text-muted hover:text-base'}`}
          >
            All Jewelry
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => { setSelectedCategory(cat.id); setSearchParams({ category: cat.id }) }}
              className={`block text-sm transition-colors ${selectedCategory === cat.id ? 'text-gold font-medium' : 'text-muted hover:text-base'}`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs font-medium tracking-widest-xl uppercase text-base mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map(range => (
            <button
              key={range.label}
              onClick={() => setSelectedPriceRange(selectedPriceRange?.label === range.label ? null : range)}
              className={`block text-sm transition-colors ${selectedPriceRange?.label === range.label ? 'text-gold font-medium' : 'text-muted hover:text-base'}`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs font-medium tracking-widest-xl uppercase text-base mb-4">
          Material
        </h3>
        <div className="space-y-2">
          {materials.map(mat => (
            <button
              key={mat.value}
              onClick={() => setSelectedMaterial(selectedMaterial === mat.value ? '' : mat.value)}
              className={`block text-sm transition-colors ${selectedMaterial === mat.value ? 'text-gold font-medium' : 'text-muted hover:text-base'}`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear */}
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs text-muted hover:text-rose-dark underline underline-offset-2 transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 text-center">
        <p className="font-sans text-xs font-medium tracking-widest-3xl uppercase text-gold mb-3">
          Our Collection
        </p>
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-base font-light">
          Shop All Jewelry
        </h1>
        <div className="w-12 h-px bg-gold mx-auto mt-5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="flex items-center justify-between mb-8">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 text-xs font-medium tracking-widest-xl uppercase text-base"
          >
            <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
            Filters
            {hasActiveFilters && (
              <span className="w-5 h-5 bg-gold text-white text-2xs rounded-full flex items-center justify-center">
                {[selectedCategory, selectedPriceRange, selectedMaterial].filter(Boolean).length}
              </span>
            )}
          </button>

          {/* Sort */}
          <div className="relative ml-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-xs font-medium tracking-widest-xl uppercase text-base pr-8 py-2 cursor-pointer focus:outline-none"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted pointer-events-none" strokeWidth={1.5} />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Mobile filter drawer */}
          {mobileFiltersOpen && (
            <>
              <div className="fixed inset-0 bg-black/40 z-50 lg:hidden" onClick={() => setMobileFiltersOpen(false)} />
              <div className="fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-cream z-50 p-6 overflow-y-auto lg:hidden animate-slide-in-right">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-xl text-base">Filters</h2>
                  <button onClick={() => setMobileFiltersOpen(false)} className="p-2 text-muted hover:text-base">
                    <X className="w-5 h-5" strokeWidth={1.5} />
                  </button>
                </div>
                <FilterSidebar />
              </div>
            </>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-base mb-2">No products found</p>
                <p className="text-sm text-muted mb-4">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="text-xs text-gold hover:text-gold-dark underline underline-offset-4 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            <p className="text-xs text-muted text-center mt-8">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
