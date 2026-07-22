import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/shared/ProductCard'
import { products } from '@/data/products'

const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $100', min: 50, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const materials = ['All Materials', '18K Gold Plated']

const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest']

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState('Featured')

  const categoryFromUrl = searchParams.get('category') || 'all'
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl)
  const [selectedPrice, setSelectedPrice] = useState(0)
  const [selectedMaterial, setSelectedMaterial] = useState(0)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory)
    }

    // Price filter
    const priceRange = priceRanges[selectedPrice]
    result = result.filter(p => p.price >= priceRange.min && p.price <= priceRange.max)

    // Material filter (all are 18K Gold Plated for now)
    // result = result.filter(...)

    // Sort
    if (sortBy === 'Price: Low to High') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'Price: High to Low') {
      result.sort((a, b) => b.price - a.price)
    }

    return result
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat)
    if (cat === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ category: cat })
    }
  }

  return (
    <div className="min-h-screen bg-cream pt-20 md:pt-24">
      <div className="max-w-8xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
        {/* Page header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-charcoal">The Collection</h1>
          <div className="h-px w-12 bg-gold mx-auto mt-4" />
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Sidebar filters - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            {/* Category */}
            <div className="mb-8">
              <h3 className="font-sans text-xs tracking-ui uppercase text-charcoal mb-4">Category</h3>
              <div className="space-y-2">
                {['all', 'earrings', 'necklaces', 'huggies'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`block font-sans text-sm transition-colors duration-300 ${
                      selectedCategory === cat ? 'text-gold' : 'text-text-muted-dark hover:text-charcoal'
                    }`}
                  >
                    {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h3 className="font-sans text-xs tracking-ui uppercase text-charcoal mb-4">Price</h3>
              <div className="space-y-2">
                {priceRanges.map((range, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedPrice(i)}
                    className={`block font-sans text-sm transition-colors duration-300 ${
                      selectedPrice === i ? 'text-gold' : 'text-text-muted-dark hover:text-charcoal'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Material */}
            <div className="mb-8">
              <h3 className="font-sans text-xs tracking-ui uppercase text-charcoal mb-4">Material</h3>
              <div className="space-y-2">
                {materials.map((mat, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedMaterial(i)}
                    className={`block font-sans text-sm transition-colors duration-300 ${
                      selectedMaterial === i ? 'text-gold' : 'text-text-muted-dark hover:text-charcoal'
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Mobile filter toggle */}
          <div className="md:hidden flex items-center justify-between mb-4">
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="font-sans text-xs tracking-ui uppercase text-charcoal border border-divider px-4 py-2"
            >
              Filters
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="font-sans text-xs tracking-ui uppercase text-charcoal bg-transparent border border-divider px-4 py-2"
            >
              {sortOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          {/* Mobile filters dropdown */}
          {mobileFiltersOpen && (
            <div className="md:hidden bg-cream border border-divider p-4 mb-4">
              <div className="mb-4">
                <h3 className="font-sans text-xs tracking-ui uppercase text-charcoal mb-3">Category</h3>
                <div className="flex gap-2">
                  {['all', 'earrings', 'necklaces', 'huggies'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => { handleCategoryChange(cat); setMobileFiltersOpen(false) }}
                      className={`font-sans text-xs tracking-ui uppercase px-3 py-1.5 rounded-full border transition-colors duration-300 ${
                        selectedCategory === cat ? 'bg-gold text-charcoal border-gold' : 'bg-transparent text-charcoal border-divider'
                      }`}
                    >
                      {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <h3 className="font-sans text-xs tracking-ui uppercase text-charcoal mb-3">Price</h3>
                <div className="flex gap-2">
                  {priceRanges.map((range, i) => (
                    <button
                      key={i}
                      onClick={() => { setSelectedPrice(i); setMobileFiltersOpen(false) }}
                      className={`font-sans text-xs tracking-ui uppercase px-3 py-1.5 rounded-full border transition-colors duration-300 ${
                        selectedPrice === i ? 'bg-gold text-charcoal border-gold' : 'bg-transparent text-charcoal border-divider'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort - desktop */}
            <div className="hidden md:flex items-center justify-between mb-6">
              <p className="font-sans text-sm text-text-muted-dark">{filteredProducts.length} pieces</p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="font-sans text-xs tracking-ui uppercase text-charcoal bg-transparent border border-divider px-4 py-2"
              >
                {sortOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-serif text-lg text-charcoal mb-2">No pieces found</p>
                <p className="font-sans text-sm text-text-muted-dark">Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
