import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'

const categoryOptions = [
  { value: 'all', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
]

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: '0-40', label: 'Under $40' },
  { value: '40-60', label: '$40 - $60' },
  { value: '60-100', label: '$60 - $100' },
  { value: '100+', label: '$100+' },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
]

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)

  const [category, setCategory] = useState(searchParams.get('category') || 'all')
  const [priceRange, setPriceRange] = useState('all')
  const [material, setMaterial] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [category, priceRange, material, sortBy])

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat && cat !== category) {
      setCategory(cat)
    }
  }, [searchParams])

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory)
    if (newCategory === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', newCategory)
    }
    setSearchParams(searchParams)
  }

  // Filter products
  let filteredProducts = [...products]

  // Category filter
  if (category !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.category === category)
  }

  // Price filter
  if (priceRange !== 'all') {
    const [min, max] = priceRange.split('-').map(Number)
    if (priceRange === '100+') {
      filteredProducts = filteredProducts.filter(p => p.price >= 100)
    } else {
      filteredProducts = filteredProducts.filter(p => p.price >= min && p.price <= max)
    }
  }

  // Material filter
  if (material !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.material === material)
  }

  // Sort
  switch (sortBy) {
    case 'price-asc':
      filteredProducts.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      filteredProducts.sort((a, b) => b.price - a.price)
      break
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating)
      break
    default:
      break
  }

  const activeFilters = [
    category !== 'all' && { key: 'category', label: categoryOptions.find(c => c.value === category)?.label },
    priceRange !== 'all' && { key: 'price', label: priceRanges.find(p => p.value === priceRange)?.label },
    material !== 'all' && { key: 'material', label: material === 'gold' ? 'Gold' : 'Silver' },
  ].filter(Boolean)

  const clearFilters = () => {
    setCategory('all')
    setPriceRange('all')
    setMaterial('all')
    setSearchParams({})
  }

  return (
    <div ref={containerRef} className="min-h-screen pt-20">
      {/* Header */}
      <section className="container-velmora py-8 md:py-12">
        <div className="text-center mb-2">
          <p className="nav-link text-velmora-gold mb-3">Collection</p>
          <h1 className="heading-2 text-velmora-text">Our Jewelry</h1>
        </div>
        <p className="text-center text-velmora-text-secondary max-w-lg mx-auto mt-4">
          Discover our curated collection of demi-fine gold jewelry. Each piece is crafted with care, designed to be treasured.
        </p>
      </section>

      {/* Filters & Sort bar */}
      <section className="container-velmora mb-8">
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-velmora-border">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="md:hidden flex items-center gap-2 text-sm text-velmora-text"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>

          <div className="hidden md:flex items-center gap-6">
            {categoryOptions.map(opt => (
              <button
                key={opt.value}
                onClick={() => handleCategoryChange(opt.value)}
                className={`text-sm transition-colors ${
                  category === opt.value
                    ? 'text-velmora-gold font-medium'
                    : 'text-velmora-text-secondary hover:text-velmora-text'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-sm text-velmora-text-secondary pr-8 pl-2 py-1 border border-velmora-border cursor-pointer focus:border-velmora-gold transition-colors"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-velmora-text-light" />
          </div>
        </div>

        {/* Active filters */}
        {activeFilters.length > 0 && (
          <div className="flex items-center gap-2 mt-4 flex-wrap">
            {activeFilters.map(filter => (
              <span
                key={filter.key}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-velmora-gold-muted text-sm text-velmora-text"
              >
                {filter.label}
                <button
                  onClick={() => {
                    if (filter.key === 'category') handleCategoryChange('all')
                    if (filter.key === 'price') setPriceRange('all')
                    if (filter.key === 'material') setMaterial('all')
                  }}
                  className="text-velmora-text-light hover:text-velmora-text"
                >
                  <X size={12} />
                </button>
              </span>
            ))}
            <button
              onClick={clearFilters}
              className="text-xs text-velmora-text-light hover:text-velmora-gold transition-colors ml-2"
            >
              Clear all
            </button>
          </div>
        )}
      </section>

      <div className="container-velmora pb-section-mobile md:pb-section">
        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="nav-link text-velmora-text mb-4">Category</h3>
                <div className="space-y-2">
                  {categoryOptions.map(opt => (
                    <label key={opt.value} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        checked={category === opt.value}
                        onChange={() => handleCategoryChange(opt.value)}
                        className="accent-velmora-gold"
                      />
                      <span className="text-sm text-velmora-text-secondary group-hover:text-velmora-text transition-colors">
                        {opt.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="nav-link text-velmora-text mb-4">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map(opt => (
                    <label key={opt.value} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange === opt.value}
                        onChange={() => setPriceRange(opt.value)}
                        className="accent-velmora-gold"
                      />
                      <span className="text-sm text-velmora-text-secondary group-hover:text-velmora-text transition-colors">
                        {opt.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="nav-link text-velmora-text mb-4">Material</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Materials' },
                    { value: 'gold', label: '18K Gold Plated' },
                    { value: 'silver', label: 'Sterling Silver' },
                  ].map(opt => (
                    <label key={opt.value} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="material"
                        checked={material === opt.value}
                        onChange={() => setMaterial(opt.value)}
                        className="accent-velmora-gold"
                      />
                      <span className="text-sm text-velmora-text-secondary group-hover:text-velmora-text transition-colors">
                        {opt.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filters drawer */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black/50" onClick={() => setMobileFiltersOpen(false)} />
              <div className="absolute top-0 left-0 h-full w-80 bg-velmora-bg p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-lg">Filters</h3>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X size={20} />
                  </button>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="nav-link text-velmora-text mb-4">Category</h4>
                    <div className="space-y-3">
                      {categoryOptions.map(opt => (
                        <label key={opt.value} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="mobile-category"
                            checked={category === opt.value}
                            onChange={() => handleCategoryChange(opt.value)}
                            className="accent-velmora-gold"
                          />
                          <span className="text-sm text-velmora-text-secondary">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="nav-link text-velmora-text mb-4">Price</h4>
                    <div className="space-y-3">
                      {priceRanges.map(opt => (
                        <label key={opt.value} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="mobile-price"
                            checked={priceRange === opt.value}
                            onChange={() => setPriceRange(opt.value)}
                            className="accent-velmora-gold"
                          />
                          <span className="text-sm text-velmora-text-secondary">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="nav-link text-velmora-text mb-4">Material</h4>
                    <div className="space-y-3">
                      {[
                        { value: 'all', label: 'All Materials' },
                        { value: 'gold', label: '18K Gold Plated' },
                        { value: 'silver', label: 'Sterling Silver' },
                      ].map(opt => (
                        <label key={opt.value} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="mobile-material"
                            checked={material === opt.value}
                            onChange={() => setMaterial(opt.value)}
                            className="accent-velmora-gold"
                          />
                          <span className="text-sm text-velmora-text-secondary">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-velmora-border">
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="w-full btn-primary justify-center"
                  >
                    Apply Filters
                  </button>
                  <button
                    onClick={clearFilters}
                    className="w-full mt-3 text-center text-sm text-velmora-text-secondary hover:text-velmora-text"
                  >
                    Clear all filters
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            <p className="text-sm text-velmora-text-light mb-6">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-text-secondary mb-4">
                  No products found
                </p>
                <p className="text-sm text-velmora-text-light mb-6">
                  Try adjusting your filters
                </p>
                <button onClick={clearFilters} className="btn-secondary">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
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
