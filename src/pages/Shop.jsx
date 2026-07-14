import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, ChevronDown, Grid, List } from 'lucide-react'
import ProductCard from '@/components/products/ProductCard'
import FilterSidebar from '@/components/shop/FilterSidebar'
import { products, categories } from '@/data/products'

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState('grid')

  const selectedCategory = searchParams.get('category') || 'all'

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory)
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        result.sort((a, b) => (a.isNew ? -1 : 1))
        break
      default:
        // featured - keep original order
        break
    }

    return result
  }, [selectedCategory, sortBy])

  const handleCategoryChange = (categoryId) => {
    if (categoryId === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', categoryId)
    }
    setSearchParams(searchParams)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <div className="bg-stone-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-4xl text-stone-900 text-center">
            {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name || 'Shop'}
          </h1>
          <p className="text-stone-600 text-center mt-3 max-w-2xl mx-auto">
            Discover our collection of demi-fine jewelry, each piece designed to be treasured.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filter sidebar - desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar
              isOpen={true}
              onClose={() => {}}
              categories={[{ id: 'all', name: 'All' }, ...categories]}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              priceRange="all"
              onPriceChange={() => {}}
              materials={['18k Gold Plated', 'Sterling Silver', 'Crystal']}
              selectedMaterials={[]}
              onMaterialChange={() => {}}
            />
          </div>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-200">
              <div className="flex items-center gap-4">
                {/* Mobile filter button */}
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 text-stone-700 hover:text-stone-900"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                  <span className="text-sm">Filters</span>
                </button>

                <span className="text-stone-600 text-sm">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </span>
              </div>

              <div className="flex items-center gap-4">
                {/* Sort dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent text-stone-700 text-sm pr-8 pl-2 py-2 border border-stone-300 focus:outline-none focus:border-stone-400 cursor-pointer"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                    <option value="newest">Newest</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-stone-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                {/* View mode toggle */}
                <div className="hidden md:flex items-center border border-stone-300">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-stone-100' : ''}`}
                    aria-label="Grid view"
                  >
                    <Grid className="w-4 h-4 text-stone-600" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-stone-100' : ''}`}
                    aria-label="List view"
                  >
                    <List className="w-4 h-4 text-stone-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className={`grid gap-6 md:gap-8 ${
                viewMode === 'grid'
                  ? 'grid-cols-2 md:grid-cols-3'
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-stone-600 mb-4">No products found matching your criteria.</p>
                <button
                  onClick={() => handleCategoryChange('all')}
                  className="text-amber-700 text-sm tracking-widest uppercase font-medium hover:text-amber-800"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter sidebar */}
      <FilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        categories={[{ id: 'all', name: 'All' }, ...categories]}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        priceRange="all"
        onPriceChange={() => {}}
        materials={['18k Gold Plated', 'Sterling Silver', 'Crystal']}
        selectedMaterials={[]}
        onMaterialChange={() => {}}
      />
    </div>
  )
}

export default Shop
