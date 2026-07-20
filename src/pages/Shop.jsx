import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ProductCard from '../components/home/ProductCard'
import { products, categories } from '../data/products'
import { formatPrice } from '../lib/utils'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  )
  const [priceRange, setPriceRange] = useState([0, 120])
  const [sortBy, setSortBy] = useState('featured')
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '')

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      )
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category))
    }

    // Price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        // featured - keep original order
        break
    }

    return result
  }, [selectedCategories, priceRange, sortBy, searchQuery])

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setPriceRange([0, 120])
    setSortBy('featured')
    setSearchQuery('')
    setSearchParams({})
  }

  return (
    <div className="min-h-screen bg-velmora-bg pt-20">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs tracking-[0.15em] text-velmora-gold">COLLECTION</span>
            <h1 className="serif text-4xl tracking-wide mt-1">All Jewelry</h1>
          </div>
          <div className="hidden md:block">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Filters Sidebar */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs tracking-[0.1em] text-velmora-text-light">FILTERS</span>
                {(selectedCategories.length > 0 || searchQuery) && (
                  <button 
                    onClick={clearFilters}
                    className="text-xs text-velmora-gold hover:underline"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Search */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border border-velmora-border px-3 py-2 text-sm focus:outline-none focus:border-velmora-gold"
                />
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <div className="text-xs tracking-[0.1em] mb-3 text-velmora-text-light">CATEGORY</div>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer text-sm">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="filter-checkbox w-4 h-4"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <div className="text-xs tracking-[0.1em] mb-3 text-velmora-text-light">PRICE RANGE</div>
                <div className="space-y-2 text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="price" 
                      checked={priceRange[1] === 120}
                      onChange={() => setPriceRange([0, 120])}
                      className="filter-checkbox"
                    />
                    All
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="price" 
                      checked={priceRange[1] === 50}
                      onChange={() => setPriceRange([0, 50])}
                      className="filter-checkbox"
                    />
                    Under $50
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="price" 
                      checked={priceRange[0] === 50}
                      onChange={() => setPriceRange([50, 120])}
                      className="filter-checkbox"
                    />
                    $50 and above
                  </label>
                </div>
              </div>

              <div className="text-xs text-velmora-text-light pt-4 border-t border-velmora-border">
                {filteredProducts.length} products
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Mobile sort */}
            <div className="md:hidden mb-6">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select w-full"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-velmora-text-light mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="btn btn-outline">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
