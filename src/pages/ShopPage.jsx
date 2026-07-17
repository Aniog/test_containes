import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '../data/products'
import ProductCard from '../components/home/ProductCard'

const sortOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 200])
  const [sortBy, setSortBy] = useState('newest')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory)
    }

    // Material filter
    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.material === selectedMaterial)
    }

    // Price filter
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])

    // Sort
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
  }, [selectedCategory, selectedMaterial, priceRange, sortBy])

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-ink-600 font-sans mb-4">Category</h4>
        <ul className="space-y-3">
          <li>
            <button
              className={`text-sm font-sans transition-colors ${
                selectedCategory === 'all'
                  ? 'text-ink-900 font-medium'
                  : 'text-ink-400 hover:text-ink-900'
              }`}
              onClick={() => setSelectedCategory('all')}
            >
              All
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                className={`text-sm font-sans transition-colors ${
                  selectedCategory === cat.id
                    ? 'text-ink-900 font-medium'
                    : 'text-ink-400 hover:text-ink-900'
                }`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name} ({cat.count})
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-ink-600 font-sans mb-4">Material</h4>
        <ul className="space-y-3">
          <li>
            <button
              className={`text-sm font-sans transition-colors ${
                selectedMaterial === 'all'
                  ? 'text-ink-900 font-medium'
                  : 'text-ink-400 hover:text-ink-900'
              }`}
              onClick={() => setSelectedMaterial('all')}
            >
              All
            </button>
          </li>
          <li>
            <button
              className={`text-sm font-sans transition-colors ${
                selectedMaterial === 'gold'
                  ? 'text-ink-900 font-medium'
                  : 'text-ink-400 hover:text-ink-900'
              }`}
              onClick={() => setSelectedMaterial('gold')}
            >
              18K Gold Plated
            </button>
          </li>
        </ul>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-ink-600 font-sans mb-4">Price</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-ink-400 font-sans">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
          <input
            type="range"
            min="0"
            max="200"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full accent-ink-900"
          />
        </div>
      </div>
    </div>
  )

  return (
    <main className="pt-20 md:pt-24 bg-cream-50 min-h-screen">
      {/* Page header */}
      <div className="border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl text-ink-900 font-light">
                All Jewelry
              </h1>
              <p className="text-sm text-ink-400 mt-1 font-sans">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                className="md:hidden btn-outline text-xs py-2 px-4 flex items-center gap-2"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
              </button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs font-sans text-ink-600 bg-transparent border border-ink-200 rounded px-3 py-2 focus:outline-none focus:border-ink-400"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-24">
              <FilterContent />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-ink-400 font-sans text-sm">No pieces match your filters.</p>
                <button
                  className="mt-4 text-xs tracking-widest uppercase text-ink-900 underline underline-offset-4 font-sans"
                  onClick={() => {
                    setSelectedCategory('all')
                    setSelectedMaterial('all')
                    setPriceRange([0, 200])
                  }}
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileFiltersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-ink-900/40" onClick={() => setMobileFiltersOpen(false)} />
        <div
          className={`absolute top-0 left-0 h-full w-72 bg-cream-50 shadow-xl transform transition-transform duration-300 ${
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs tracking-widest uppercase font-sans text-ink-900">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-4 h-4 text-ink-400" />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      </div>
    </main>
  )
}