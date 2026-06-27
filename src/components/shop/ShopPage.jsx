import React, { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, ChevronDown, Star, X } from 'lucide-react'
import { products } from '../../data/products'

function FilterSection({ title, options, selected, onChange, multiple = false }) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="border-b border-border py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between mb-3"
      >
        <span className="text-xs uppercase tracking-wider">{title}</span>
        <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="space-y-2">
          {options.map((option) => (
            <label key={option.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type={multiple ? 'checkbox' : 'radio'}
                name={title}
                checked={multiple ? selected.includes(option.value) : selected === option.value}
                onChange={() => onChange(option.value)}
                className="accent-gold"
              />
              <span className="text-sm text-warm-gray">{option.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="aspect-[3/4] overflow-hidden bg-border-light mb-3">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <h3 className="product-name text-sm mb-1 group-hover:text-gold transition-colors">{product.name}</h3>
      <div className="flex items-center gap-1 mb-1">
        <Star size={12} className="text-gold fill-gold" />
        <span className="text-xs text-warm-gray">{product.rating}</span>
      </div>
      <p className="text-sm font-medium">${product.price}</p>
    </Link>
  )
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const categoryFilter = searchParams.get('category') || ''
  const priceFilter = searchParams.get('price') || ''
  const materialFilter = searchParams.get('material') || ''

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (categoryFilter) {
      result = result.filter(p => p.category === categoryFilter)
    }
    if (materialFilter) {
      result = result.filter(p => p.material === materialFilter)
    }
    if (priceFilter) {
      if (priceFilter === 'under50') result = result.filter(p => p.price < 50)
      else if (priceFilter === '50to75') result = result.filter(p => p.price >= 50 && p.price <= 75)
      else if (priceFilter === 'over75') result = result.filter(p => p.price > 75)
    }

    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price)
    else if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price)
    else if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating)
    else if (sortBy === 'name') result.sort((a, b) => a.name.localeCompare(b.name))

    return result
  }, [categoryFilter, priceFilter, materialFilter, sortBy])

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams)
    if (value) {
      newParams.set(key, value)
    } else {
      newParams.delete(key)
    }
    setSearchParams(newParams)
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  const hasActiveFilters = categoryFilter || priceFilter || materialFilter

  const FiltersContent = () => (
    <>
      <FilterSection
        title="Category"
        options={[
          { label: 'Earrings', value: 'earrings' },
          { label: 'Necklaces', value: 'necklaces' },
          { label: 'Huggies', value: 'huggies' },
          { label: 'Sets', value: 'sets' },
        ]}
        selected={categoryFilter}
        onChange={(value) => updateFilter('category', categoryFilter === value ? '' : value)}
      />
      <FilterSection
        title="Price"
        options={[
          { label: 'Under $50', value: 'under50' },
          { label: '$50 - $75', value: '50to75' },
          { label: 'Over $75', value: 'over75' },
        ]}
        selected={priceFilter}
        onChange={(value) => updateFilter('price', priceFilter === value ? '' : value)}
      />
      <FilterSection
        title="Material"
        options={[
          { label: 'Gold', value: 'gold' },
          { label: 'Silver', value: 'silver' },
        ]}
        selected={materialFilter}
        onChange={(value) => updateFilter('material', materialFilter === value ? '' : value)}
      />
    </>
  )

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl mb-2">All Jewelry</h1>
          <p className="text-warm-gray text-sm">{filteredProducts.length} pieces</p>
        </div>

        {/* Active filters */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs text-warm-gray">Active filters:</span>
            {categoryFilter && (
              <button
                onClick={() => updateFilter('category', '')}
                className="flex items-center gap-1 px-3 py-1 bg-border text-xs rounded-full hover:bg-border-light transition-colors"
              >
                {categoryFilter}
                <X size={12} />
              </button>
            )}
            {priceFilter && (
              <button
                onClick={() => updateFilter('price', '')}
                className="flex items-center gap-1 px-3 py-1 bg-border text-xs rounded-full hover:bg-border-light transition-colors"
              >
                {priceFilter === 'under50' ? 'Under $50' : priceFilter === '50to75' ? '$50 - $75' : 'Over $75'}
                <X size={12} />
              </button>
            )}
            {materialFilter && (
              <button
                onClick={() => updateFilter('material', '')}
                className="flex items-center gap-1 px-3 py-1 bg-border text-xs rounded-full hover:bg-border-light transition-colors"
              >
                {materialFilter}
                <X size={12} />
              </button>
            )}
            <button onClick={clearFilters} className="text-xs text-gold underline ml-2">
              Clear all
            </button>
          </div>
        )}

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FiltersContent />
            </div>
          </aside>

          {/* Mobile filter button */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="flex items-center gap-2 px-4 py-2 border border-border text-sm"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>
          </div>

          {/* Mobile filters drawer */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
              <div className="absolute left-0 top-0 h-full w-80 bg-ivory animate-slide-in-right overflow-y-auto">
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <h2 className="font-serif text-lg">Filters</h2>
                  <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                    <X size={20} />
                  </button>
                </div>
                <div className="p-4">
                  <FiltersContent />
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-warm-gray">{filteredProducts.length} results</p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-border px-3 py-2 bg-transparent focus:outline-none focus:border-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl mb-2">No pieces found</p>
                <p className="text-warm-gray text-sm mb-4">Try adjusting your filters</p>
                <button onClick={clearFilters} className="btn-gold-outline inline-block">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
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
