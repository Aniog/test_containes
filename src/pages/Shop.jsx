import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

function Shop() {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [priceRange, setPriceRange] = useState([0, 120])
  const [selectedMaterial, setSelectedMaterial] = useState('')
  const [sortBy, setSortBy] = useState('featured')

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets']
  const materials = ['18K Gold Plated']

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    )
  }

  let filteredProducts = [...products]

  // Apply filters
  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter(p => selectedCategories.includes(p.category))
  }

  filteredProducts = filteredProducts.filter(p => 
    p.price >= priceRange[0] && p.price <= priceRange[1]
  )

  if (selectedMaterial) {
    filteredProducts = filteredProducts.filter(p => p.material === selectedMaterial)
  }

  // Apply sort
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price)
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price)
  } else if (sortBy === 'name') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setPriceRange([0, 120])
    setSelectedMaterial('')
    setSortBy('featured')
  }

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-10">
          <span className="text-xs tracking-[0.2em] text-[#B8976E] uppercase">Discover</span>
          <h1 className="serif text-5xl mt-1">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Filter Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm tracking-[0.1em]">Filters</span>
                {(selectedCategories.length > 0 || selectedMaterial || sortBy !== 'featured') && (
                  <button onClick={clearFilters} className="text-xs text-[#B8976E] hover:underline">
                    Clear all
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <div className="filter-label">Category</div>
                <div className="space-y-2.5">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-2.5 cursor-pointer text-sm">
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="accent-[#B8976E]"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <div className="filter-label mb-4">Price Range</div>
                <div className="px-1">
                  <input 
                    type="range" 
                    min="0" 
                    max="120" 
                    step="1"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#B8976E]"
                  />
                  <div className="flex justify-between text-xs text-[#6B665F] mt-1">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <div className="filter-label">Material</div>
                <select 
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="w-full border border-[#E5E0D8] px-4 py-2.5 text-sm bg-white focus:outline-none"
                >
                  <option value="">All Materials</option>
                  {materials.map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#E5E0D8]">
              <span className="text-sm text-[#6B665F]">{filteredProducts.length} products</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-[#E5E0D8] px-4 py-2 bg-white focus:outline-none"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-[#6B665F]">No products match your filters.</p>
                <button onClick={clearFilters} className="mt-4 text-sm underline text-[#B8976E]">
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
