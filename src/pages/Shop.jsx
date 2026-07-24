import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products } from '@/data/products.js'
import ProductCard from '@/components/ProductCard.jsx'

const allCategories = ['earrings', 'necklaces', 'huggies', 'sets']

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || ''

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) {
      setSelectedCategories([cat])
    }
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }

    if (priceRange === 'under50') {
      result = result.filter((p) => p.price < 50)
    } else if (priceRange === '50to80') {
      result = result.filter((p) => p.price >= 50 && p.price <= 80)
    } else if (priceRange === 'over80') {
      result = result.filter((p) => p.price > 80)
    }

    if (sortBy === 'priceLow') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'priceHigh') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [selectedCategories, priceRange, sortBy])

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setPriceRange('all')
    setSearchParams({})
  }

  return (
    <div className="pt-24 md:pt-28 pb-20 bg-velmora-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-velmora-charcoal">
              Shop All
            </h1>
            <p className="font-sans text-sm text-velmora-warmgray mt-2">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile filter button */}
            <button
              className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-velmora-ink border border-velmora-stone px-4 py-2.5"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
              Filter
            </button>

            {/* Sort dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-velmora-stone font-sans text-xs uppercase tracking-widest text-velmora-ink px-4 pr-10 py-2.5 focus:outline-none focus:border-velmora-gold cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-velmora-warmgray" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-sans text-xs uppercase tracking-widest text-velmora-warmgray">
                Filters
              </h3>
              {(selectedCategories.length > 0 || priceRange !== 'all') && (
                <button
                  onClick={clearFilters}
                  className="font-sans text-xs text-velmora-gold hover:underline"
                >
                  Clear all
                </button>
              )}
            </div>

            {/* Category */}
            <div className="mb-8">
              <h4 className="font-sans text-xs uppercase tracking-widest text-velmora-ink mb-4">
                Category
              </h4>
              <div className="flex flex-col gap-2.5">
                {allCategories.map((cat) => (
                  <label
                    key={cat}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div
                      className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                        selectedCategories.includes(cat)
                          ? 'bg-velmora-gold border-velmora-gold'
                          : 'border-velmora-stone group-hover:border-velmora-gold'
                      }`}
                    >
                      {selectedCategories.includes(cat) && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" />
                        </svg>
                      )}
                    </div>
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                    />
                    <span className="font-sans text-sm text-velmora-ink capitalize">
                      {cat === 'sets' ? 'Gift Sets' : cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <h4 className="font-sans text-xs uppercase tracking-widest text-velmora-ink mb-4">
                Price
              </h4>
              <div className="flex flex-col gap-2.5">
                {[
                  { value: 'all', label: 'All Prices' },
                  { value: 'under50', label: 'Under $50' },
                  { value: '50to80', label: '$50 - $80' },
                  { value: 'over80', label: 'Over $80' },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                        priceRange === opt.value
                          ? 'border-velmora-gold'
                          : 'border-velmora-stone group-hover:border-velmora-gold'
                      }`}
                    >
                      {priceRange === opt.value && (
                        <div className="w-2 h-2 rounded-full bg-velmora-gold" />
                      )}
                    </div>
                    <input
                      type="radio"
                      name="price"
                      className="sr-only"
                      value={opt.value}
                      checked={priceRange === opt.value}
                      onChange={() => setPriceRange(opt.value)}
                    />
                    <span className="font-sans text-sm text-velmora-ink">
                      {opt.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-charcoal">
                  No products match your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-outline mt-6"
                >
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

      {/* Mobile filters overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] bg-velmora-cream md:hidden">
          <div className="flex items-center justify-between px-6 h-16 border-b border-velmora-stone">
            <h3 className="font-sans text-xs uppercase tracking-widest text-velmora-ink">
              Filters
            </h3>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              aria-label="Close filters"
            >
              <X className="w-5 h-5 text-velmora-ink" strokeWidth={1.5} />
            </button>
          </div>
          <div className="p-6 overflow-y-auto h-[calc(100vh-64px)]">
            {/* Category */}
            <div className="mb-8">
              <h4 className="font-sans text-xs uppercase tracking-widest text-velmora-ink mb-4">
                Category
              </h4>
              <div className="flex flex-col gap-3">
                {allCategories.map((cat) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer">
                    <div
                      className={`w-5 h-5 border flex items-center justify-center ${
                        selectedCategories.includes(cat)
                          ? 'bg-velmora-gold border-velmora-gold'
                          : 'border-velmora-stone'
                      }`}
                    >
                      {selectedCategories.includes(cat) && (
                        <svg width="12" height="10" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" />
                        </svg>
                      )}
                    </div>
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                    />
                    <span className="font-sans text-sm text-velmora-ink capitalize">
                      {cat === 'sets' ? 'Gift Sets' : cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h4 className="font-sans text-xs uppercase tracking-widest text-velmora-ink mb-4">
                Price
              </h4>
              <div className="flex flex-col gap-3">
                {[
                  { value: 'all', label: 'All Prices' },
                  { value: 'under50', label: 'Under $50' },
                  { value: '50to80', label: '$50 - $80' },
                  { value: 'over80', label: 'Over $80' },
                ].map((opt) => (
                  <label key={opt.value} className="flex items-center gap-3 cursor-pointer">
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        priceRange === opt.value ? 'border-velmora-gold' : 'border-velmora-stone'
                      }`}
                    >
                      {priceRange === opt.value && (
                        <div className="w-2.5 h-2.5 rounded-full bg-velmora-gold" />
                      )}
                    </div>
                    <input
                      type="radio"
                      name="price"
                      className="sr-only"
                      value={opt.value}
                      checked={priceRange === opt.value}
                      onChange={() => setPriceRange(opt.value)}
                    />
                    <span className="font-sans text-sm text-velmora-ink">
                      {opt.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full btn-primary py-4"
            >
              Show {filteredProducts.length} {filteredProducts.length === 1 ? 'Piece' : 'Pieces'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}