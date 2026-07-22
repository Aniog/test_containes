import React, { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/button'

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem, setCartOpen } = useCart()
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('featured')
  
  const activeCategory = searchParams.get('category') || 'all'
  const priceRange = searchParams.get('price') || 'all'

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory)
    }

    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number)
      result = result.filter(p => p.price >= min && p.price <= max)
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return result
  }, [activeCategory, priceRange, sortBy])

  const handleCategoryChange = (category) => {
    if (category === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', category)
    }
    setSearchParams(searchParams)
  }

  const handlePriceChange = (range) => {
    if (range === 'all') {
      searchParams.delete('price')
    } else {
      searchParams.set('price', range)
    }
    setSearchParams(searchParams)
  }

  const clearFilters = () => {
    setSearchParams({})
    setSortBy('featured')
  }

  const hasActiveFilters = activeCategory !== 'all' || priceRange !== 'all'

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-medium text-[#1a1814] tracking-wide">
              {activeCategory === 'all' ? 'All Products' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
            </h1>
            <p className="text-sm text-[#78716c] mt-1">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile filter toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>

            {/* Sort dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-[#e7e5e4] rounded-full px-4 py-2 pr-10 text-sm text-[#57534e] focus:outline-none focus:border-[#c9a96e] cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#78716c] pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="text-xs tracking-[0.15em] uppercase text-[#1a1814] font-medium mb-4">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`block w-full text-left text-sm py-1.5 transition-colors ${
                      activeCategory === 'all' ? 'text-[#c9a96e] font-medium' : 'text-[#57534e] hover:text-[#1a1814]'
                    }`}
                  >
                    All Products
                  </button>
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors ${
                        activeCategory === category.id ? 'text-[#c9a96e] font-medium' : 'text-[#57534e] hover:text-[#1a1814]'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-xs tracking-[0.15em] uppercase text-[#1a1814] font-medium mb-4">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: '30-50', label: '$30 – $50' },
                    { value: '50-80', label: '$50 – $80' },
                    { value: '80-120', label: '$80 – $120' }
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => handlePriceChange(option.value)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors ${
                        priceRange === option.value ? 'text-[#c9a96e] font-medium' : 'text-[#57534e] hover:text-[#1a1814]'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#c9a96e] hover:text-[#b89860] transition-colors flex items-center gap-1"
                >
                  <X className="w-3 h-3" />
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="md:hidden fixed inset-0 z-50 bg-white">
              <div className="p-4 border-b border-[#e7e5e4] flex items-center justify-between">
                <h2 className="font-['Cormorant_Garamond'] text-xl font-medium">Filters</h2>
                <button onClick={() => setShowFilters(false)} className="p-2">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 space-y-6">
                <div>
                  <h3 className="text-xs tracking-[0.15em] uppercase text-[#1a1814] font-medium mb-3">Category</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => { handleCategoryChange('all'); setShowFilters(false) }}
                      className={`block w-full text-left text-sm py-2 ${activeCategory === 'all' ? 'text-[#c9a96e] font-medium' : 'text-[#57534e]'}`}
                    >
                      All Products
                    </button>
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => { handleCategoryChange(category.id); setShowFilters(false) }}
                        className={`block w-full text-left text-sm py-2 ${activeCategory === category.id ? 'text-[#c9a96e] font-medium' : 'text-[#57534e]'}`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs tracking-[0.15em] uppercase text-[#1a1814] font-medium mb-3">Price</h3>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'All Prices' },
                      { value: '30-50', label: '$30 – $50' },
                      { value: '50-80', label: '$50 – $80' },
                      { value: '80-120', label: '$80 – $120' }
                    ].map(option => (
                      <button
                        key={option.value}
                        onClick={() => { handlePriceChange(option.value); setShowFilters(false) }}
                        className={`block w-full text-left text-sm py-2 ${priceRange === option.value ? 'text-[#c9a96e] font-medium' : 'text-[#57534e]'}`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
                {hasActiveFilters && (
                  <button
                    onClick={() => { clearFilters(); setShowFilters(false) }}
                    className="text-sm text-[#c9a96e]"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#78716c] mb-4">No products match your filters.</p>
                <Button variant="outline" onClick={clearFilters}>Clear Filters</Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3/4] bg-[#f7f4ef] rounded-lg overflow-hidden mb-4">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xs text-[#a8a29e]">Product Image</span>
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button 
                            size="sm" 
                            className="w-full"
                            onClick={(e) => {
                              e.preventDefault()
                              addItem(product, 'gold')
                              setCartOpen(true)
                            }}
                          >
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                      <h3 className="text-xs md:text-sm font-medium text-[#1a1814] tracking-wide uppercase mb-1">
                        {product.name}
                      </h3>
                      <p className="text-sm text-[#57534e]">${product.price}</p>
                    </Link>
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
