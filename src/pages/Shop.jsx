import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

const Shop = () => {
  const [searchParams] = useSearchParams()
  const { addToCart } = useCart()
  
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  )
  const [priceRange, setPriceRange] = useState([0, 120])
  const [sortBy, setSortBy] = useState('featured')

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets']

  const filteredProducts = products
    .filter(p => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category)
      const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1]
      return categoryMatch && priceMatch
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      return 0
    })

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-6 pt-10 pb-20">
      <div className="mb-10">
        <div className="text-xs tracking-[0.2em] text-[#B8976D] mb-2">DISCOVER</div>
        <h1 className="font-serif text-5xl">The Collection</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Filters */}
        <aside className="lg:w-56 flex-shrink-0">
          <div className="sticky top-24 space-y-8">
            {/* Categories */}
            <div>
              <div className="filter-label">Category</div>
              <div className="space-y-2">
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="accent-[#B8976D]"
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <div className="filter-label">Price Range</div>
              <div className="space-y-3">
                <input
                  type="range"
                  min="0"
                  max="120"
                  step="5"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-[#B8976D]"
                />
                <div className="flex justify-between text-xs text-[#6B665F]">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedCategories([])
                setPriceRange([0, 120])
              }}
              className="text-xs tracking-[0.1em] text-[#6B665F] hover:text-[#2C2823]"
            >
              CLEAR FILTERS
            </button>
          </div>
        </aside>

        {/* Products */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6 pb-4 border-b">
            <span className="text-sm text-[#6B665F]">{filteredProducts.length} products</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-[#E5DFD3] px-4 py-2 bg-white focus:outline-none focus:border-[#B8976D]"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">A–Z</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card group">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="product-image-container">
                    <img src={product.image} alt={product.name} className="product-image primary" />
                    <img src={product.imageAlt} alt={product.name} className="product-image secondary" />
                  </div>
                </Link>
                <div className="p-4">
                  <Link to={`/product/${product.id}`}>
                    <div className="product-name text-sm tracking-[0.1em] mb-1 pr-8">{product.name}</div>
                  </Link>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#6B665F]">${product.price}</span>
                    <button
                      onClick={() => addToCart(product)}
                      className="quick-add btn btn-gold text-xs py-2 px-5"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-[#6B665F]">
              No products match your filters.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Shop