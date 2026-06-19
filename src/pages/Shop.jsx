import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, ChevronDown } from 'lucide-react'
import { products } from '../App'
import { useCart } from '../App'

const Shop = () => {
  const [searchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All')
  const [priceRange, setPriceRange] = useState([0, 120])
  const [sortBy, setSortBy] = useState('featured')
  const { addToCart } = useCart()

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']

  let filteredProducts = [...products]
  
  if (selectedCategory !== 'All') {
    filteredProducts = filteredProducts.filter(p => p.category === selectedCategory)
  }
  
  filteredProducts = filteredProducts.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])

  // Sort
  if (sortBy === 'price-low') filteredProducts.sort((a, b) => a.price - b.price)
  if (sortBy === 'price-high') filteredProducts.sort((a, b) => b.price - a.price)
  if (sortBy === 'rating') filteredProducts.sort((a, b) => b.rating - a.rating)

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="pt-8 pb-10">
          <div className="text-xs tracking-[0.15em] text-[#6B6560]">DISCOVER OUR</div>
          <h1 className="text-5xl serif mt-1">Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Filters */}
          <div className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24">
              {/* Category */}
              <div className="mb-8">
                <div className="filter-label mb-3">Category</div>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left py-1.5 text-sm transition-colors ${selectedCategory === cat ? 'text-[#B89B6E] font-medium' : 'text-[#6B6560] hover:text-[#2C2825]'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="filter-label mb-3">Price Range</div>
                <div className="space-y-2">
                  {[ 
                    [0, 120], [30, 50], [50, 80], [80, 120]
                  ].map((range, i) => (
                    <label key={i} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input 
                        type="radio" 
                        name="price" 
                        checked={priceRange[0] === range[0] && priceRange[1] === range[1]}
                        onChange={() => setPriceRange(range)}
                        className="accent-[#B89B6E]"
                      />
                      <span>${range[0]} — ${range[1]}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => { setSelectedCategory('All'); setPriceRange([0, 120]) }}
                className="text-xs tracking-[0.1em] text-[#6B6560] hover:text-[#B89B6E]"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Products */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#E5E0D8]">
              <div className="text-sm text-[#6B6560]">{filteredProducts.length} products</div>
              <div className="relative">
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-8 text-sm cursor-pointer focus:outline-none"
                >
                  <option value="featured">Sort: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Best Rated</option>
                </select>
                <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card group">
                  <Link to={`/product/${product.id}`} className="block relative aspect-[4/3] bg-[#F5F2ED] overflow-hidden">
                    <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
                    <img src={product.imageSecondary} alt="" className="secondary absolute inset-0 w-full h-full object-cover" />
                    <button 
                      onClick={(e) => { e.preventDefault(); addToCart(product) }}
                      className="quick-add btn btn-gold text-xs py-2 px-6"
                    >
                      Quick Add
                    </button>
                  </Link>
                  <div className="pt-4 pb-1">
                    <Link to={`/product/${product.id}`}>
                      <div className="product-name text-sm tracking-wider mb-1 pr-4">{product.name}</div>
                    </Link>
                    <div className="flex justify-between items-center text-sm">
                      <span>${product.price}</span>
                      <div className="flex items-center gap-1 text-xs text-[#6B6560]">
                        <Star size={12} className="fill-[#B89B6E] text-[#B89B6E]" /> {product.rating}
                      </div>
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

export default Shop