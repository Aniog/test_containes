import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Filter, X } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products, categories, materials, priceRanges } from '../data/products'

function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  
  const urlCategory = searchParams.get('category') || 'All'
  const urlSearch = searchParams.get('search') || ''
  const urlSort = searchParams.get('sort') || 'featured'

  const [selectedCategory, setSelectedCategory] = useState(urlCategory)
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [selectedPriceRange, setSelectedPriceRange] = useState(0)
  const [sortBy, setSortBy] = useState(urlSort)
  const [searchQuery, setSearchQuery] = useState(urlSearch)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory)
    }

    // Material filter
    if (selectedMaterial !== 'All') {
      result = result.filter((p) => p.materialType === selectedMaterial)
    }

    // Price filter
    const priceRange = priceRanges[selectedPriceRange]
    result = result.filter(
      (p) => p.price >= priceRange.min && p.price <= priceRange.max
    )

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
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
        // Featured - keep original order
        break
    }

    return result
  }, [selectedCategory, selectedMaterial, selectedPriceRange, sortBy, searchQuery])

  const updateFilter = (type, value) => {
    if (type === 'category') {
      setSelectedCategory(value)
      const newParams = new URLSearchParams(searchParams)
      if (value !== 'All') newParams.set('category', value)
      else newParams.delete('category')
      setSearchParams(newParams)
    }
    if (type === 'sort') {
      setSortBy(value)
      const newParams = new URLSearchParams(searchParams)
      if (value !== 'featured') newParams.set('sort', value)
      else newParams.delete('sort')
      setSearchParams(newParams)
    }
  }

  const clearFilters = () => {
    setSelectedCategory('All')
    setSelectedMaterial('All')
    setSelectedPriceRange(0)
    setSearchQuery('')
    setSortBy('featured')
    setSearchParams({})
  }

  const hasActiveFilters =
    selectedCategory !== 'All' ||
    selectedMaterial !== 'All' ||
    selectedPriceRange !== 0 ||
    searchQuery !== ''

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 pt-8">
          <div>
            <div className="text-xs tracking-[0.15em] text-[#8B7355] mb-2">DISCOVER</div>
            <h1 className="font-serif text-5xl">The Collection</h1>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden flex items-center gap-2 text-sm tracking-[0.1em]"
            >
              <Filter size={16} /> Filters
            </button>
            <select
              value={sortBy}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="border border-[#E5DFD3] bg-transparent px-4 py-2 text-sm focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">A - Z</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Filters Sidebar */}
          <aside className={`lg:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-24 space-y-8">
              <div className="flex items-center justify-between">
                <div className="filter-label">Filters</div>
                {hasActiveFilters && (
                  <button onClick={clearFilters} className="text-xs text-[#8B7355] hover:underline">
                    Clear All
                  </button>
                )}
              </div>

              {/* Search */}
              <div>
                <div className="filter-label mb-3">Search</div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search jewelry..."
                  className="w-full border border-[#E5DFD3] px-4 py-2 text-sm focus:outline-none focus:border-[#8B7355]"
                />
              </div>

              {/* Category */}
              <div>
                <div className="filter-label mb-3">Category</div>
                <div className="space-y-2 text-sm">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => updateFilter('category', cat)}
                      className={`block w-full text-left py-1 transition-colors ${selectedCategory === cat ? 'text-[#8B7355] font-medium' : 'hover:text-[#8B7355]'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <div className="filter-label mb-3">Material</div>
                <div className="space-y-2 text-sm">
                  {materials.map((mat) => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`block w-full text-left py-1 transition-colors ${selectedMaterial === mat ? 'text-[#8B7355] font-medium' : 'hover:text-[#8B7355]'}`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <div className="filter-label mb-3">Price</div>
                <div className="space-y-2 text-sm">
                  {priceRanges.map((range, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedPriceRange(index)}
                      className={`block w-full text-left py-1 transition-colors ${selectedPriceRange === index ? 'text-[#8B7355] font-medium' : 'hover:text-[#8B7355]'}`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {searchQuery && (
              <div className="mb-6 text-sm text-[#6B665F]">
                Showing results for "{searchQuery}"
              </div>
            )}

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-[#6B665F] mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="btn btn-outline">
                  Clear Filters
                </button>
              </div>
            )}

            <div className="mt-12 text-center text-xs text-[#6B665F]">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'} of fine jewelry
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop