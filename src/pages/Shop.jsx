import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products, categories } from '../data/products'
import { formatPrice } from '../lib/utils'

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState('featured')
  const [selectedCategories, setSelectedCategories] = useState([])
  const [priceRange, setPriceRange] = useState([0, 120])
  const [showFilters, setShowFilters] = useState(false)

  const urlCategory = searchParams.get('category')
  const urlSearch = searchParams.get('search') || ''

  // Initialize from URL
  React.useEffect(() => {
    if (urlCategory && !selectedCategories.includes(urlCategory)) {
      setSelectedCategories([urlCategory])
    }
  }, [urlCategory])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Search filter
    if (urlSearch) {
      const q = urlSearch.toLowerCase()
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      )
    }

    // Category filter
    const activeCategories = selectedCategories.length > 0 ? selectedCategories : (urlCategory ? [urlCategory] : [])
    if (activeCategories.length > 0) {
      result = result.filter(p => activeCategories.includes(p.category))
    }

    // Price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])

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
  }, [selectedCategories, priceRange, sortBy, urlSearch, urlCategory])

  const toggleCategory = (cat) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter(c => c !== cat))
    } else {
      setSelectedCategories([...selectedCategories, cat])
    }
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setPriceRange([0, 120])
    setSortBy('featured')
    setSearchParams({})
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs tracking-[0.15em] text-[#C5A46E]">COLLECTION</span>
          <h1 className="font-serif text-5xl mt-1">All Jewelry</h1>
          {urlSearch && (
            <p className="text-[#5C5349] mt-2">Results for "{urlSearch}"</p>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Filters Sidebar */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center justify-between mb-6 lg:mb-4">
                <span className="text-xs tracking-[0.1em] text-[#5C5349]">FILTERS</span>
                <button 
                  onClick={() => setShowFilters(!showFilters)} 
                  className="lg:hidden text-xs underline"
                >
                  {showFilters ? 'HIDE' : 'SHOW'}
                </button>
              </div>

              <div className={`${showFilters ? 'block' : 'hidden'} lg:block space-y-8`}>
                {/* Categories */}
                <div>
                  <div className="filter-label">Category</div>
                  {categories.map((cat) => (
                    <label key={cat} className="filter-option">
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.includes(cat) || urlCategory === cat}
                        onChange={() => toggleCategory(cat)}
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>

                {/* Price Range */}
                <div>
                  <div className="filter-label mb-3">Price Range</div>
                  <div className="space-y-2">
                    <input 
                      type="range" 
                      min="0" 
                      max="120" 
                      step="5"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full accent-[#C5A46E]"
                    />
                    <div className="flex justify-between text-xs text-[#5C5349]">
                      <span>{formatPrice(priceRange[0])}</span>
                      <span>{formatPrice(priceRange[1])}</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={clearFilters}
                  className="text-xs tracking-widest underline text-[#5C5349] hover:text-[#1A1816]"
                >
                  CLEAR ALL FILTERS
                </button>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#EDE8E0]">
              <span className="text-sm text-[#5C5349]">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </span>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#5C5349] hidden sm:inline">SORT</span>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">A — Z</option>
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl mb-2">No pieces found</p>
                <p className="text-sm text-[#5C5349] mb-6">Try adjusting your filters</p>
                <button onClick={clearFilters} className="btn btn-outline">Clear Filters</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
