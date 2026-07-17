import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories } from '../data/products'
import ProductCard from '../components/product/ProductCard'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const materials = ['Gold', 'Silver']

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || ''

  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [selectedMaterial, setSelectedMaterial] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  const filtered = useMemo(() => {
    let result = [...products]

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory)
    }
    if (selectedPrice) {
      result = result.filter((p) => p.price >= selectedPrice.min && p.price < selectedPrice.max)
    }
    if (selectedMaterial) {
      result = result.filter((p) => p.material === selectedMaterial.toLowerCase())
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
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  const activeFilters = [
    selectedCategory && { key: 'category', label: selectedCategory },
    selectedPrice && { key: 'price', label: selectedPrice.label },
    selectedMaterial && { key: 'material', label: selectedMaterial },
  ].filter(Boolean)

  const clearFilters = () => {
    setSelectedCategory('')
    setSelectedPrice(null)
    setSelectedMaterial('')
  }

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-brand-charcoal mb-4">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory('')}
            className={`block text-sm transition-colors ${
              !selectedCategory ? 'text-brand-gold font-medium' : 'text-brand-warm hover:text-brand-charcoal'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`block text-sm transition-colors ${
                selectedCategory === cat.id
                  ? 'text-brand-gold font-medium'
                  : 'text-brand-warm hover:text-brand-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-brand-charcoal mb-4">
          Price
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedPrice(null)}
            className={`block text-sm transition-colors ${
              !selectedPrice ? 'text-brand-gold font-medium' : 'text-brand-warm hover:text-brand-charcoal'
            }`}
          >
            All Prices
          </button>
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setSelectedPrice(range)}
              className={`block text-sm transition-colors ${
                selectedPrice?.label === range.label
                  ? 'text-brand-gold font-medium'
                  : 'text-brand-warm hover:text-brand-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-brand-charcoal mb-4">
          Material
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedMaterial('')}
            className={`block text-sm transition-colors ${
              !selectedMaterial ? 'text-brand-gold font-medium' : 'text-brand-warm hover:text-brand-charcoal'
            }`}
          >
            All Materials
          </button>
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(mat)}
              className={`block text-sm transition-colors ${
                selectedMaterial === mat
                  ? 'text-brand-gold font-medium'
                  : 'text-brand-warm hover:text-brand-charcoal'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <main className="pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-brand-ivory py-12 md:py-16 px-4 text-center">
        <p className="section-subtitle mb-3">Our Collection</p>
        <h1 className="font-serif text-display text-brand-charcoal">Shop All Jewelry</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="md:hidden flex items-center gap-2 text-sm text-brand-taupe"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Active filters */}
            {activeFilters.length > 0 && (
              <div className="flex items-center gap-2">
                {activeFilters.map((filter) => (
                  <span
                    key={filter.key}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-gold-wash text-brand-gold text-xs tracking-wider uppercase"
                  >
                    {filter.label}
                  </span>
                ))}
                <button
                  onClick={clearFilters}
                  className="text-xs text-brand-warm underline hover:text-brand-charcoal transition-colors"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent pr-8 pl-4 py-2 text-sm text-brand-taupe border border-brand-linen focus:outline-none focus:border-brand-gold cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-brand-warm pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-taupe mb-2">No products found</p>
                <p className="font-sans text-sm text-brand-warm mb-6">
                  Try adjusting your filters.
                </p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="absolute top-0 left-0 h-full w-80 bg-brand-cream shadow-elevated p-6 overflow-y-auto animate-slide-in-right">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl tracking-wide">Filters</h2>
              <button onClick={() => setMobileFilterOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5 text-brand-taupe" />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}
    </main>
  )
}
