import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import ProductCard from '../product/ProductCard'

export default function CollectionPage({ products }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const initialCategory = searchParams.get('category') || 'all'
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'earrings', label: 'Earrings' },
    { value: 'necklaces', label: 'Necklaces' },
    { value: 'huggies', label: 'Huggies' },
  ]

  const materials = [
    { value: 'all', label: 'All Materials' },
    { value: 'gold', label: 'Gold' },
    { value: 'silver', label: 'Silver' },
  ]

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'under50', label: 'Under $50' },
    { value: '50to100', label: '$50 - $100' },
    { value: 'over100', label: 'Over $100' },
  ]

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'name', label: 'Name A-Z' },
    { value: 'rating', label: 'Top Rated' },
  ]

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory)
    }
    if (selectedMaterial !== 'all') {
      result = result.filter(p => p.material === selectedMaterial)
    }
    if (priceRange === 'under50') {
      result = result.filter(p => p.price < 50)
    } else if (priceRange === '50to100') {
      result = result.filter(p => p.price >= 50 && p.price <= 100)
    } else if (priceRange === 'over100') {
      result = result.filter(p => p.price > 100)
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [products, selectedCategory, selectedMaterial, priceRange, sortBy])

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedMaterial('all')
    setPriceRange('all')
    setSortBy('featured')
  }

  const hasActiveFilters = selectedCategory !== 'all' || selectedMaterial !== 'all' || priceRange !== 'all'

  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-widest uppercase mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map(cat => (
            <label key={cat.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat.value}
                onChange={() => setSelectedCategory(cat.value)}
                className="accent-[var(--velmora-dark)]"
              />
              <span className="text-sm">{cat.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-widest uppercase mb-3">Material</h3>
        <div className="space-y-2">
          {materials.map(mat => (
            <label key={mat.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="material"
                checked={selectedMaterial === mat.value}
                onChange={() => setSelectedMaterial(mat.value)}
                className="accent-[var(--velmora-dark)]"
              />
              <span className="text-sm">{mat.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-widest uppercase mb-3">Price</h3>
        <div className="space-y-2">
          {priceRanges.map(range => (
            <label key={range.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="price"
                checked={priceRange === range.value}
                onChange={() => setPriceRange(range.value)}
                className="accent-[var(--velmora-dark)]"
              />
              <span className="text-sm">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          className="text-xs tracking-wider uppercase text-[var(--velmora-accent)] hover:underline"
          onClick={clearFilters}
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div className="pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="velmora-heading text-3xl sm:text-4xl mb-2">
            {selectedCategory === 'all' ? 'All Jewelry' : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
          </h1>
          <p className="text-sm text-[var(--velmora-text-muted)]">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Mobile filter button */}
          <div className="lg:hidden mb-4">
            <button
              className="flex items-center gap-2 text-sm border border-[var(--velmora-border)] px-4 py-2"
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            >
              <SlidersHorizontal size={16} />
              Filters
              {hasActiveFilters && <span className="w-2 h-2 bg-[var(--velmora-accent)] rounded-full" />}
            </button>
          </div>

          {/* Mobile filter drawer */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-[var(--velmora-bg)] p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="velmora-heading text-xl">Filters</h2>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X size={20} />
                  </button>
                </div>
                <FilterSidebar />
              </div>
            </div>
          )}

          {/* Main content */}
          <div className="flex-1">
            {/* Sort dropdown */}
            <div className="flex items-center justify-between mb-6">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-[var(--velmora-border)] px-4 py-2 pr-8 text-sm cursor-pointer focus:outline-none focus:border-[var(--velmora-dark)]"
                >
                  {sortOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="velmora-heading text-xl mb-2">No pieces found</p>
                <p className="text-sm text-[var(--velmora-text-muted)] mb-6">Try adjusting your filters</p>
                <button
                  className="velmora-btn-outline text-xs"
                  onClick={clearFilters}
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
