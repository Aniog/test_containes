import React, { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
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
  const [selectedMaterial] = useState('all')

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets']

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }

    // Price filter
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    )

    // Material filter (all products are gold plated)
    if (selectedMaterial !== 'all') {
      // Future expansion
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
  }, [selectedCategories, priceRange, sortBy, selectedMaterial])

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-10">
        <p className="uppercase tracking-[0.2em] text-xs text-[#8B7355]">Discover</p>
        <h1 className="serif text-5xl mt-1">The Collection</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-10">
            {/* Categories */}
            <div>
              <p className="uppercase tracking-[0.15em] text-xs mb-4">Category</p>
              <div className="space-y-2 text-sm">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="accent-[#8B7355]"
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <p className="uppercase tracking-[0.15em] text-xs mb-4">Price</p>
              <div className="space-y-3 text-sm">
                <input
                  type="range"
                  min="0"
                  max="120"
                  step="5"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-[#8B7355]"
                />
                <div className="flex justify-between text-[#6B635E]">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedCategories([])
                setPriceRange([0, 120])
                setSortBy('featured')
              }}
              className="text-xs tracking-widest underline underline-offset-4 hover:text-[#8B7355]"
            >
              CLEAR ALL FILTERS
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Sort Bar */}
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#E5DFD6]">
            <p className="text-sm text-[#6B635E]">{filteredProducts.length} products</p>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent pr-8 text-sm tracking-widest cursor-pointer focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">A — Z</option>
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 text-[#6B635E]">
              No products match your filters.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card group">
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="product-card-image bg-[#F0EBE3]">
                      <img src={product.images[0]} alt={product.name} className="primary-image" />
                      <img src={product.images[1]} alt={product.name} className="secondary-image" />
                    </div>
                  </Link>
                  <div className="p-5 flex justify-between items-start">
                    <div>
                      <Link to={`/product/${product.id}`}>
                        <p className="product-name text-sm tracking-wider mb-1 pr-4">{product.name}</p>
                      </Link>
                      <p className="text-[#8B7355] font-medium">${product.price}</p>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="text-xs tracking-widest px-4 py-1.5 border border-[#2C2522] hover:bg-[#2C2522] hover:text-white transition-colors"
                    >
                      ADD
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Shop