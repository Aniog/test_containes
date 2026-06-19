import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

const Shop = () => {
  const [searchParams] = useSearchParams()
  const { addToCart } = useCart()
  
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All')
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [priceRange, setPriceRange] = useState([0, 120])
  const [sortBy, setSortBy] = useState('featured')

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
  const materials = ['All', '18K Gold Plated']

  let filteredProducts = [...products]

  if (selectedCategory !== 'All') {
    filteredProducts = filteredProducts.filter(p => p.category === selectedCategory)
  }
  if (selectedMaterial !== 'All') {
    filteredProducts = filteredProducts.filter(p => p.material === selectedMaterial)
  }
  filteredProducts = filteredProducts.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])

  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price)
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price)
  } else if (sortBy === 'name') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
  }

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-12">
      <div className="mb-10">
        <p className="text-xs tracking-[3px] text-[#8B7355] mb-2">DISCOVER</p>
        <h1 className="font-serif text-5xl tracking-[1px]">The Collection</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="lg:w-56 flex-shrink-0">
          <div className="sticky top-24 space-y-8">
            {/* Category */}
            <div>
              <p className="filter-label">CATEGORY</p>
              <div className="space-y-2 text-sm">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left py-1 transition-colors ${selectedCategory === cat ? 'text-[#8B7355] font-medium' : 'text-[#6B635C] hover:text-[#2C2522]'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <p className="filter-label">PRICE RANGE</p>
              <div className="text-sm text-[#6B635C]">
                ${priceRange[0]} — ${priceRange[1]}
              </div>
              <input
                type="range"
                min="0"
                max="120"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full mt-3 accent-[#8B7355]"
              />
            </div>

            {/* Material */}
            <div>
              <p className="filter-label">MATERIAL</p>
              <div className="space-y-2 text-sm">
                {materials.map(mat => (
                  <button
                    key={mat}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`block w-full text-left py-1 transition-colors ${selectedMaterial === mat ? 'text-[#8B7355] font-medium' : 'text-[#6B635C] hover:text-[#2C2522]'}`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#D4C5B5]">
            <p className="text-sm text-[#6B635C]">{filteredProducts.length} products</p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm bg-transparent border border-[#D4C5B5] px-4 py-2 rounded text-[#2C2522] focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">A — Z</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card group">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="product-image-container aspect-[4/3.5] mb-4 rounded overflow-hidden relative">
                    <img src={product.image} alt={product.name} className="product-image product-image-primary absolute inset-0 w-full h-full object-cover" />
                    <img src={product.imageSecondary} alt={product.name} className="product-image product-image-secondary absolute inset-0 w-full h-full object-cover opacity-0" />
                  </div>
                </Link>
                <div className="px-1">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="product-name text-sm tracking-[2px] mb-1 group-hover:text-[#8B7355] transition-colors">{product.name}</h3>
                  </Link>
                  <p className="text-sm text-[#8B7355] mb-3">${product.price}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="text-xs tracking-[1.5px] border-b border-[#D4C5B5] pb-0.5 hover:border-[#8B7355] hover:text-[#8B7355] transition-colors"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
