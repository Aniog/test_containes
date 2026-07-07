import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import { products, categories } from '@/data/products'
import { formatPrice } from '@/lib/utils'

const Shop = ({ onAddToCart }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  )
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [sortBy, setSortBy] = useState('featured')

  const materials = ['Gold', 'Silver']

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category))
    }

    // Material filter (based on variant availability)
    if (selectedMaterials.length > 0) {
      result = result.filter(p => 
        p.variants.some(v => selectedMaterials.includes(v))
      )
    }

    // Price filter
    if (minPrice) {
      result = result.filter(p => p.price >= parseInt(minPrice))
    }
    if (maxPrice) {
      result = result.filter(p => p.price <= parseInt(maxPrice))
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
  }, [selectedCategories, selectedMaterials, minPrice, maxPrice, sortBy])

  const toggleCategory = (cat) => {
    const newCats = selectedCategories.includes(cat)
      ? selectedCategories.filter(c => c !== cat)
      : [...selectedCategories, cat]
    setSelectedCategories(newCats)
    
    // Update URL
    if (newCats.length === 1) {
      setSearchParams({ category: newCats[0] })
    } else if (newCats.length === 0) {
      setSearchParams({})
    }
  }

  const toggleMaterial = (mat) => {
    setSelectedMaterials(prev =>
      prev.includes(mat) ? prev.filter(m => m !== mat) : [...prev, mat]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedMaterials([])
    setMinPrice('')
    setMaxPrice('')
    setSortBy('featured')
    setSearchParams({})
  }

  const hasActiveFilters = selectedCategories.length > 0 || selectedMaterials.length > 0 || minPrice || maxPrice

  return (
    <div className="max-w-7xl mx-auto px-6 pt-24 pb-20">
      <div className="mb-10">
        <div className="text-xs tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-2">Discover</div>
        <h1 className="serif text-4xl tracking-[-0.01em]">All Jewelry</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <aside className="lg:w-56 flex-shrink-0">
          <div className="sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-medium tracking-[0.08em] uppercase">Filters</span>
              {hasActiveFilters && (
                <button 
                  onClick={clearFilters}
                  className="text-xs text-[var(--color-gold)] hover:underline"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Category */}
            <div className="mb-8">
              <div className="filter-label">Category</div>
              <div className="space-y-2">
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer text-sm">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="accent-[var(--color-gold)]"
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            {/* Material */}
            <div className="mb-8">
              <div className="filter-label">Tone</div>
              <div className="space-y-2">
                {materials.map(mat => (
                  <label key={mat} className="flex items-center gap-2 cursor-pointer text-sm">
                    <input
                      type="checkbox"
                      checked={selectedMaterials.includes(mat)}
                      onChange={() => toggleMaterial(mat)}
                      className="accent-[var(--color-gold)]"
                    />
                    {mat}
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <div className="filter-label mb-2">Price Range</div>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="price-input"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="price-input"
                />
              </div>
            </div>
          </div>
        </aside>

        {/* Products */}
        <div className="flex-1">
          {/* Sort Bar */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--color-border)]">
            <span className="text-sm text-[var(--color-text-muted)]">
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p className="text-[var(--color-text-muted)] mb-4">No products match your filters.</p>
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
