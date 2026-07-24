import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Filter, X, ChevronDown } from 'lucide-react'
import { products, categories } from '../data/products'
import ProductCard from '../components/home/ProductCard'

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory)
    }
    if (selectedMaterial !== 'all') {
      filtered = filtered.filter((p) => p.material === selectedMaterial)
    }
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number)
      filtered = filtered.filter((p) => p.price >= min && (max ? p.price <= max : true))
    }

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return filtered
  }, [selectedCategory, selectedMaterial, priceRange, sortBy])

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedMaterial('all')
    setPriceRange('all')
  }

  const hasActiveFilters = selectedCategory !== 'all' || selectedMaterial !== 'all' || priceRange !== 'all'

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-base mb-4">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`block w-full text-left text-sm py-1 transition-colors ${
              selectedCategory === 'all' ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-base'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`block w-full text-left text-sm py-1 capitalize transition-colors ${
                selectedCategory === cat.id ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-base'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-base mb-4">
          Material
        </h3>
        <div className="space-y-2">
          {['all', 'gold', 'silver'].map((mat) => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(mat)}
              className={`block w-full text-left text-sm py-1 capitalize transition-colors ${
                selectedMaterial === mat ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-base'
              }`}
            >
              {mat === 'all' ? 'All' : `${mat} tone`}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-base mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All' },
            { value: '0-50', label: 'Under $50' },
            { value: '50-100', label: '$50 - $100' },
            { value: '100-999', label: 'Over $100' },
          ].map((range) => (
            <button
              key={range.value}
              onClick={() => setPriceRange(range.value)}
              className={`block w-full text-left text-sm py-1 transition-colors ${
                priceRange === range.value ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-base'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs text-velmora-muted hover:text-velmora-base underline transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <div className="pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-velmora-warm/20 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subtitle">Our Collection</p>
          <h1 className="section-title mt-2">Shop All</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        {/* Mobile filter button */}
        <button
          className="lg:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-velmora-base mb-4"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Filter className="w-4 h-4" />
          Filters
        </button>

        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div className="flex gap-6 lg:gap-8">
          {/* Sidebar */}
          <aside
            className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-velmora-cream p-6 lg:p-0 lg:w-56 lg:flex-shrink-0 transform transition-transform duration-300 ease-in-out lg:transform-none ${
              sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
            }`}
          >
            <div className="flex items-center justify-between lg:hidden mb-6">
              <h2 className="font-sans text-sm tracking-widest uppercase">Filters</h2>
              <button onClick={() => setSidebarOpen(false)} className="p-1 hover:text-velmora-gold transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {/* Sort and count */}
            <div className="flex items-center justify-between mb-6">
              <p className="font-sans text-sm text-velmora-muted">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent font-sans text-sm text-velmora-base pr-8 py-2 cursor-pointer focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="w-4 h-4 text-velmora-muted absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-velmora-muted">No products found</p>
                <button
                  onClick={clearFilters}
                  className="btn-outline mt-6 inline-block"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
