import React, { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Heart, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import products from '../data/products'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A–Z' },
]

const priceRanges = [
  { id: 'under-40', label: 'Under $40', min: 0, max: 40 },
  { id: '40-60', label: '$40 – $60', min: 40, max: 60 },
  { id: '60-80', label: '$60 – $80', min: 60, max: 80 },
  { id: 'over-80', label: 'Over $80', min: 80, max: Infinity },
]

const materials = [
  { id: 'gold', label: 'Gold Tone' },
  { id: 'silver', label: 'Silver Tone' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sort, setSort] = useState('featured')
  const [categoryFilter, setCategoryFilter] = useState(searchParams.get('category') || '')
  const [priceFilter, setPriceFilter] = useState('')
  const [materialFilter, setMaterialFilter] = useState('')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)

  const filtered = useMemo(() => {
    let result = [...products]

    if (categoryFilter) {
      result = result.filter((p) => p.category === categoryFilter)
    }

    if (priceFilter) {
      const range = priceRanges.find((r) => r.id === priceFilter)
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max)
      }
    }

    if (materialFilter) {
      // Filter by material (all products have "18K Gold Plated" so this is illustrative)
      result = result.filter((p) =>
        p.material.toLowerCase().includes(materialFilter)
      )
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
    }

    return result
  }, [categoryFilter, priceFilter, materialFilter, sort])

  const clearFilters = () => {
    setCategoryFilter('')
    setPriceFilter('')
    setMaterialFilter('')
    setSearchParams({})
  }

  const hasFilters = categoryFilter || priceFilter || materialFilter

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-[0.12em] uppercase font-medium text-velmora-900 mb-4">Category</h4>
        <div className="space-y-3">
          {['earrings', 'necklaces', 'sets'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(categoryFilter === cat ? '' : cat)}
              className={`block text-sm transition-colors ${
                categoryFilter === cat
                  ? 'text-velmora-900 font-medium'
                  : 'text-velmora-500 hover:text-velmora-900'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="hairline" />

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-[0.12em] uppercase font-medium text-velmora-900 mb-4">Price</h4>
        <div className="space-y-3">
          {priceRanges.map((range) => (
            <label key={range.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={priceFilter === range.id}
                onChange={() => setPriceFilter(priceFilter === range.id ? '' : range.id)}
                className="w-4 h-4 accent-velmora-900"
              />
              <span className="text-sm text-velmora-600 group-hover:text-velmora-900 transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="hairline" />

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-[0.12em] uppercase font-medium text-velmora-900 mb-4">Material</h4>
        <div className="space-y-3">
          {materials.map((m) => (
            <label key={m.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="material"
                checked={materialFilter === m.id}
                onChange={() => setMaterialFilter(materialFilter === m.id ? '' : m.id)}
                className="w-4 h-4 accent-velmora-900"
              />
              <span className="text-sm text-velmora-600 group-hover:text-velmora-900 transition-colors">
                {m.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs tracking-[0.08em] uppercase text-velmora-500 hover:text-velmora-900 underline transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <main className="pb-16 md:pb-24">
      {/* Page title */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-6 md:pt-10 pb-6">
        <h1 className="section-title">All Jewelry</h1>
        <p className="text-sm text-velmora-500 mt-1">{filtered.length} pieces</p>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex gap-8 md:gap-12">
          {/* Sidebar - desktop */}
          <aside className="hidden md:block w-56 shrink-0">
            <FilterContent />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-velmora-600 hover:text-velmora-900 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {hasFilters && (
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                )}
              </button>

              <div className="hidden md:block" />

              {/* Sort */}
              <div className="relative">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-velmora-600 hover:text-velmora-900 transition-colors"
                >
                  {sortOptions.find((o) => o.value === sort)?.label || 'Sort'}
                  <ChevronDown className={`w-3 h-3 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-8 z-20 bg-warm-white border border-velmora-200 shadow-lg min-w-[180px]">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSort(option.value)
                          setSortOpen(false)
                        }}
                        className={`block w-full text-left px-4 py-2.5 text-sm transition-colors ${
                          sort === option.value
                            ? 'bg-velmora-100 text-velmora-900 font-medium'
                            : 'text-velmora-600 hover:bg-velmora-50'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-500 mb-4">No pieces match your filters.</p>
                <button onClick={clearFilters} className="btn-outline text-sm">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-velmora-100 rounded-sm">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                        }}
                        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Heart className="w-4 h-4 text-velmora-600 hover:text-red-400 transition-colors" />
                      </button>
                    </div>
                    <div className="mt-3">
                      <p className="text-[10px] tracking-[0.12em] uppercase text-velmora-400 mb-0.5">
                        {product.categoryLabel}
                      </p>
                      <h3 className="product-name text-xs md:text-sm text-velmora-900 truncate">
                        {product.name}
                      </h3>
                      <p className="text-xs md:text-sm text-velmora-600 mt-0.5 font-medium">${product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-warm-white overflow-y-auto">
            <div className="flex items-center justify-between px-5 py-4 border-b border-velmora-200">
              <h3 className="text-xs tracking-[0.12em] uppercase font-medium">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-5 h-5 text-velmora-600" />
              </button>
            </div>
            <div className="px-5 py-6">
              <FilterContent />
            </div>
          </div>
        </div>
      )}
    </main>
  )
}