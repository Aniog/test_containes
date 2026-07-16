import React, { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

const Shop = () => {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'

  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [priceRange, setPriceRange] = useState([0, 120])
  const [sortBy, setSortBy] = useState('featured')

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
  const materials = ['All', 'Gold', 'Silver']

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory)
    }

    // Material filter
    if (selectedMaterial !== 'All') {
      result = result.filter(p => p.material === selectedMaterial)
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
  }, [selectedCategory, selectedMaterial, priceRange, sortBy])

  const resetFilters = () => {
    setSelectedCategory('All')
    setSelectedMaterial('All')
    setPriceRange([0, 120])
    setSortBy('featured')
  }

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12">
      <div className="mb-10">
        <span className="text-xs tracking-[0.15em] text-[#8B7355]">DISCOVER</span>
        <h1 className="serif text-6xl tracking-[-0.01em]">The Collection</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <aside className="lg:w-60 flex-shrink-0">
          <div className="sticky top-24 space-y-8">
            <div>
              <div className="filter-label">Category</div>
              <div className="space-y-2 text-sm">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left py-1 transition-colors ${selectedCategory === cat ? 'text-[#8B7355] font-medium' : 'hover:text-[#8B7355]'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="filter-label">Material</div>
              <div className="space-y-2 text-sm">
                {materials.map(mat => (
                  <button
                    key={mat}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`block w-full text-left py-1 transition-colors ${selectedMaterial === mat ? 'text-[#8B7355] font-medium' : 'hover:text-[#8B7355]'}`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="filter-label mb-4">Price Range</div>
              <div className="px-1">
                <input
                  type="range"
                  min="0"
                  max="120"
                  step="5"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-[#8B7355]"
                />
                <div className="flex justify-between text-xs text-[#6B665F] mt-1">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            <button onClick={resetFilters} className="text-xs tracking-[0.1em] text-[#6B665F] hover:text-[#2C2825] underline">
              Clear All Filters
            </button>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b mb-8">
            <div className="text-sm text-[#6B665F]">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-xs tracking-[0.1em] text-[#6B665F]">SORT BY</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-[#E5DFD3] bg-white px-4 py-2 text-sm focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">A — Z</option>
              </select>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg mb-4">No products match your filters.</p>
              <button onClick={resetFilters} className="text-sm tracking-[0.08em] underline">Clear filters</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Shop