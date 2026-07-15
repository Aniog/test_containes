import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/home/ProductCard'
import { products, categories } from '../data/products'
import { formatPrice } from '../lib/utils'

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  )
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [priceRange, setPriceRange] = useState([0, 120])
  const [sortBy, setSortBy] = useState('featured')
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '')
  const [showFilters, setShowFilters] = useState(false)

  const materials = ['18K Gold Plated', 'Sterling Silver']

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

    // Material filter (based on product material string)
    if (selectedMaterials.length > 0) {
      result = result.filter(p => {
        return selectedMaterials.some(m => p.material.includes(m))
      })
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
  }, [selectedCategories, selectedMaterials, priceRange, sortBy, searchQuery])

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    )
  }

  const toggleMaterial = (mat) => {
    setSelectedMaterials(prev =>
      prev.includes(mat) ? prev.filter(m => m !== mat) : [...prev, mat]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedMaterials([])
    setPriceRange([0, 120])
    setSearchQuery('')
    setSearchParams({})
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="serif text-4xl">Shop the Collection</h1>
        <p className="text-velmora-text-muted mt-2">Fine demi-gold jewelry, crafted for everyday elegance.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <aside className="lg:w-56 flex-shrink-0">
          <div className="sticky top-24">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-between w-full px-4 py-3 border border-velmora-border text-sm tracking-[0.05em] uppercase"
              >
                <span>Filters {filteredProducts.length > 0 && `(${filteredProducts.length})`}</span>
                <span>{showFilters ? '−' : '+'}</span>
              </button>
            </div>

            <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs tracking-[0.1em] uppercase">Filters</span>
                {(selectedCategories.length > 0 || selectedMaterials.length > 0 || searchQuery) && (
                  <button 
                    onClick={clearFilters}
                    className="text-xs text-velmora-gold hover:underline"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Search */}
              <div className="mb-8">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="input text-sm py-2"
                />
              </div>

              {/* Category */}
              <div className="mb-8">
                <div className="filter-label">Category</div>
                {categories.map((cat) => (
                  <label key={cat} className="filter-option">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                    />
                    {cat}
                  </label>
                ))}
              </div>

              {/* Material */}
              <div className="mb-8">
                <div className="filter-label">Material</div>
                {materials.map((mat) => (
                  <label key={mat} className="filter-option">
                    <input
                      type="checkbox"
                      checked={selectedMaterials.includes(mat)}
                      onChange={() => toggleMaterial(mat)}
                    />
                    {mat}
                  </label>
                ))}
              </div>

              {/* Price Range */}
              <div>
                <div className="filter-label">Price Range</div>
                <div className="flex items-center gap-3 text-sm">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    className="input py-1.5 text-sm w-20"
                    min="0"
                  />
                  <span className="text-velmora-text-muted">—</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 120])}
                    className="input py-1.5 text-sm w-20"
                    min="0"
                  />
                </div>
                <div className="text-xs text-velmora-text-muted mt-1">
                  ${priceRange[0]} — ${priceRange[1]}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Sort + Count */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <span className="text-sm text-velmora-text-muted">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </span>
            
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

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p className="mb-4">No pieces match your filters.</p>
              <button onClick={clearFilters} className="btn btn-outline btn-sm">
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Shop
