import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import { ChevronDown } from 'lucide-react'

const Shop = ({ onCartOpen }) => {
  const [searchParams] = useSearchParams()
  const { addToCart } = useCart()
  
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All')
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [priceRange, setPriceRange] = useState([0, 120])
  const [sortBy, setSortBy] = useState('featured')

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies']
  const materials = ['All', 'Gold', 'Silver']

  let filteredProducts = [...products]

  // Apply filters
  if (selectedCategory !== 'All') {
    filteredProducts = filteredProducts.filter(p => p.category === selectedCategory)
  }
  if (selectedMaterial !== 'All') {
    filteredProducts = filteredProducts.filter(p => p.material === selectedMaterial)
  }
  filteredProducts = filteredProducts.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])

  // Apply sorting
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price)
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price)
  } else if (sortBy === 'name') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
  }

  return (
    <div className="pt-20">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="text-xs tracking-[0.15em] text-[#8B7E6B]">DISCOVER</p>
          <h1 className="serif text-5xl tracking-[-0.02em] mt-2">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters Sidebar */}
          <div className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category Filter */}
              <div>
                <p className="filter-label">CATEGORY</p>
                <div className="space-y-2 text-sm">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block w-full text-left py-1 transition-colors ${
                        selectedCategory === cat ? 'text-[#C5A26F]' : 'hover:text-[#C5A26F]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <p className="filter-label">MATERIAL</p>
                <div className="space-y-2 text-sm">
                  {materials.map(mat => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`block w-full text-left py-1 transition-colors ${
                        selectedMaterial === mat ? 'text-[#C5A26F]' : 'hover:text-[#C5A26F]'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <p className="filter-label mb-4">PRICE RANGE</p>
                <div className="space-y-3">
                  <input 
                    type="range" 
                    min="0" 
                    max="120" 
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#C5A26F]"
                  />
                  <div className="flex justify-between text-xs text-[#8B7E6B]">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => {
                  setSelectedCategory('All')
                  setSelectedMaterial('All')
                  setPriceRange([0, 120])
                  setSortBy('featured')
                }}
                className="text-xs tracking-[0.1em] text-[#8B7E6B] hover:text-[#C5A26F]"
              >
                CLEAR ALL FILTERS
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#D4CFC4]">
              <p className="text-sm text-[#8B7E6B]">{filteredProducts.length} products</p>
              <div className="relative">
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-8 text-sm tracking-[0.05em] cursor-pointer focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">A - Z</option>
                </select>
                <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#8B7E6B]" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#8B7E6B]">No products match your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="product-card group">
                    <Link to={`/product/${product.id}`}>
                      <div className="product-image-container bg-[#E8E4DE]">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="product-image product-image-primary"
                        />
                        <img 
                          src={product.imageSecondary} 
                          alt={product.name}
                          className="product-image product-image-secondary"
                        />
                      </div>
                    </Link>
                    <div className="p-5">
                      <Link to={`/product/${product.id}`}>
                        <p className="product-name text-sm tracking-[0.12em] mb-1 pr-2">{product.name}</p>
                      </Link>
                      <p className="text-sm text-[#8B7E6B] mb-4">${product.price}</p>
                      <button 
                        onClick={() => addToCart(product)}
                        className="quick-add btn btn-primary text-xs py-2.5 px-6 w-full"
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop