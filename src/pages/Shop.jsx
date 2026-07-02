import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { formatPrice } from '../lib/utils'

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState('featured')
  
  const categoryFilter = searchParams.get('category')
  const [priceRange, setPriceRange] = useState([0, 120])
  const [selectedMaterials, setSelectedMaterials] = useState([])

  // Filter products
  let filteredProducts = [...products]

  if (categoryFilter) {
    filteredProducts = filteredProducts.filter(p => p.category === categoryFilter)
  }

  filteredProducts = filteredProducts.filter(p => 
    p.price >= priceRange[0] && p.price <= priceRange[1]
  )

  // Sort products
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price)
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price)
  } else if (sortBy === 'name') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
  }

  const toggleCategory = (cat) => {
    if (categoryFilter === cat) {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  const categories = [
    { label: 'Earrings', value: 'earrings' },
    { label: 'Necklaces', value: 'necklaces' },
    { label: 'Huggies', value: 'huggies' },
    { label: 'Sets', value: 'sets' }
  ]

  return (
    <div className="pt-20">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="text-xs tracking-[0.15em] text-[#8B7355]">DISCOVER</p>
          <h1 className="font-serif text-5xl tracking-[0.05em] mt-2">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category */}
              <div>
                <p className="filter-label">Category</p>
                <div className="space-y-2 text-sm">
                  {categories.map(cat => (
                    <button
                      key={cat.value}
                      onClick={() => toggleCategory(cat.value)}
                      className={`block w-full text-left py-1 transition-colors ${categoryFilter === cat.value ? 'text-[#8B7355] font-medium' : 'hover:text-[#8B7355]'}`}
                    >
                      {cat.label}
                    </button>
                  ))}
                  {categoryFilter && (
                    <button onClick={() => { searchParams.delete('category'); setSearchParams(searchParams) }} className="text-xs text-[#6B635E] mt-1">
                      Clear filter
                    </button>
                  )}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <p className="filter-label">Price Range</p>
                <div className="space-y-3 text-sm">
                  <input 
                    type="range" 
                    min="0" 
                    max="120" 
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#8B7355]"
                  />
                  <div className="flex justify-between text-[#6B635E]">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                </div>
              </div>

              {/* Material */}
              <div>
                <p className="filter-label">Material</p>
                <div className="text-sm text-[#6B635E]">
                  <p>18K Gold Plated Brass</p>
                  <p className="mt-1">Crystal Accents</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#E5DFD3]">
              <p className="text-sm text-[#6B635E]">{filteredProducts.length} products</p>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm bg-transparent border border-[#E5DFD3] px-4 py-2 focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">A–Z</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <p className="text-[#6B635E]">No products match your filters.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop