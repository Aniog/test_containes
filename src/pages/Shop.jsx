import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addToCart } = useCart()
  
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  )
  const [priceRange, setPriceRange] = useState([0, 120])
  const [sortBy, setSortBy] = useState('featured')

  const categories = ['Earrings', 'Necklaces', 'Sets']

  const filteredProducts = products
    .filter((p) => {
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
    const newCats = selectedCategories.includes(cat)
      ? selectedCategories.filter((c) => c !== cat)
      : [...selectedCategories, cat]
    setSelectedCategories(newCats)
  }

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12">
      <div className="mb-10">
        <p className="text-xs tracking-[0.2em] text-[#6B6560]">DISCOVER</p>
        <h1 className="serif text-5xl tracking-[-0.02em]">The Collection</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Filters */}
        <div className="lg:w-56 flex-shrink-0">
          <div className="sticky top-24">
            <div className="mb-8">
              <p className="filter-label mb-4">Category</p>
              {categories.map((cat) => (
                <label key={cat} className="flex items-center gap-3 mb-3 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                    className="accent-[#B8976F]"
                  />
                  {cat}
                </label>
              ))}
            </div>

            <div className="mb-8">
              <p className="filter-label mb-4">Price Range</p>
              <div className="flex items-center gap-3 text-sm">
                <span>${priceRange[0]}</span>
                <input
                  type="range"
                  min="0"
                  max="120"
                  step="5"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="flex-1 accent-[#B8976F]"
                />
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#E5DFD6]">
            <p className="text-sm text-[#6B6560]">{filteredProducts.length} products</p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm bg-transparent border border-[#E5DFD6] px-4 py-2 focus:outline-none"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A-Z</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 product-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card group">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="product-image-container">
                    <img src={product.image} alt={product.name} className="product-image primary" />
                    <img src={product.imageSecondary} alt={product.name} className="product-image secondary" />
                  </div>
                </Link>
                <div className="p-5">
                  <Link to={`/product/${product.id}`}>
                    <p className="product-name text-sm tracking-[0.12em] mb-1 pr-8">{product.name}</p>
                  </Link>
                  <p className="text-sm text-[#6B6560]">${product.price}</p>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="quick-add btn btn-gold text-xs py-2.5 px-8"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
