import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../lib/utils'
import { toast } from 'sonner'

export default function Shop() {
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
      const catMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category)
      const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1]
      return catMatch && priceMatch
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      return 0
    })

  const toggleCategory = (cat) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    )
  }

  const handleAddToCart = (product) => {
    addToCart(product)
    toast.success(`${product.name} added to cart`)
  }

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Filters */}
          <aside className="w-full md:w-56 shrink-0">
            <div className="sticky top-24">
              <div className="mb-8">
                <div className="uppercase text-xs tracking-[0.1em] mb-4 text-[#C5A26F]">Category</div>
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-3 py-1.5 cursor-pointer text-sm">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="accent-[#C5A26F]"
                    />
                    {cat}
                  </label>
                ))}
              </div>

              <div>
                <div className="uppercase text-xs tracking-[0.1em] mb-4 text-[#C5A26F]">Price Range</div>
                <input 
                  type="range" 
                  min="0" 
                  max="120" 
                  value={priceRange[1]} 
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full accent-[#C5A26F]"
                />
                <div className="flex justify-between text-xs text-[#8B7E6F] mt-1">
                  <span>$0</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="text-xs tracking-[0.15em] text-[#C5A26F]">ALL PIECES</div>
                <div className="text-2xl serif">{filteredProducts.length} Products</div>
              </div>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="input text-sm py-2"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <div className="product-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card group">
                  <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-[4/3] bg-[#F0EBE3]">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <img 
                      src={product.imageAlt} 
                      alt={product.name} 
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </Link>
                  <div className="p-5">
                    <Link to={`/product/${product.id}`}>
                      <div className="product-name text-sm tracking-[0.12em] mb-1">{product.name}</div>
                    </Link>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#8B7E6F]">{formatPrice(product.price)}</span>
                      <button 
                        onClick={() => handleAddToCart(product)}
                        className="text-xs tracking-[0.08em] text-[#C5A26F] hover:text-[#A67C52] transition-colors"
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}