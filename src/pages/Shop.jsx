import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products, categories } from '../data/products'
import ProductCard from '../components/home/ProductCard'
import { formatPrice } from '../lib/utils'

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  )
  const [priceRange, setPriceRange] = useState([0, 120])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sortBy, setSortBy] = useState('featured')
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '')

  const materials = ['18K Gold Plated Brass', '18K Gold Plated Brass, Crystal']

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.shortDesc.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      )
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category))
    }

    // Price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])

    // Material filter
    if (selectedMaterials.length > 0) {
      result = result.filter(p => selectedMaterials.includes(p.material))
    }

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
  }, [selectedCategories, priceRange, selectedMaterials, sortBy, searchQuery])

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
    setPriceRange([0, 120])
    setSelectedMaterials([])
    setSearchQuery('')
    setSearchParams({})
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-10">
        <div className="uppercase tracking-[0.15em] text-xs text-vel-gold mb-2">Discover</div>
        <h1 className="heading-serif text-5xl tracking-[-0.01em]">The Collection</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm tracking-wide">Filters</div>
              {(selectedCategories.length > 0 || selectedMaterials.length > 0 || searchQuery) && (
                <button onClick={clearFilters} className="text-xs text-vel-gold hover:underline">
                  Clear all
                </button>
              )}
            </div>

            {/* Search */}
            <div className="mb-8">
              <div className="filter-label">Search</div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Find a piece..."
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
                  <span>{cat}</span>
                </label>
              ))}
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="filter-label mb-3">Price Range</div>
              <div className="flex items-center gap-3 text-sm">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                  className="input py-1.5 text-sm w-20"
                />
                <span className="text-vel-muted">—</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 120])}
                  className="input py-1.5 text-sm w-20"
                />
              </div>
              <div className="text-xs text-vel-light mt-1">$0 — $120</div>
            </div>

            {/* Material */}
            <div>
              <div className="filter-label">Material</div>
              {materials.map((mat) => (
                <label key={mat} className="filter-option">
                  <input
                    type="checkbox"
                    checked={selectedMaterials.includes(mat)}
                    onChange={() => toggleMaterial(mat)}
                  />
                  <span className="text-sm">{mat.replace('18K Gold Plated ', '')}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Products */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-vel-border-light">
            <div className="text-sm text-vel-muted">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-vel-muted mb-4">No pieces match your filters.</p>
              <button onClick={clearFilters} className="btn btn-gold-outline text-sm">
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
