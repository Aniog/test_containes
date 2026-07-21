import React, { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { products, categories } from '@/data/products'
import { toast } from 'sonner'

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-charcoal-100 mb-4">
          <img
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 bg-charcoal-900/90 text-white text-[10px] tracking-widest uppercase px-3 py-1.5 font-sans">
              {product.badge}
            </span>
          )}
          <div
            className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={(e) => {
                e.preventDefault()
                addToCart(product, product.variants[0])
                toast.success(`${product.name} added to your bag`)
              }}
              className="w-full py-3 bg-charcoal-900/90 backdrop-blur-sm text-white text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-charcoal-900 transition-colors font-sans"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Bag
            </button>
          </div>
        </div>
        <h3 className="font-serif text-sm tracking-wide text-charcoal-900 group-hover:text-gold-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm font-sans mt-1 text-charcoal-700">${product.price}</p>
      </Link>
    </div>
  )
}

export default function CollectionPage() {
  const [searchParams] = useSearchParams()
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory)
    }
    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.material === selectedMaterial)
    }
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number)
      result = result.filter((p) => p.price >= min && (max ? p.price <= max : true))
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
  }, [selectedCategory, selectedMaterial, priceRange, sortBy])

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedMaterial('all')
    setPriceRange('all')
  }

  const hasActiveFilters = selectedCategory !== 'all' || selectedMaterial !== 'all' || priceRange !== 'all'

  return (
    <main className="pt-20 md:pt-24">
      {/* Page Header */}
      <div className="bg-velmora-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-3">
            {selectedCategory === 'all' ? 'All Jewelry' : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
          </h1>
          <p className="text-charcoal-500 font-sans font-light">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between mb-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 text-sm text-charcoal-700 font-sans"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="w-2 h-2 bg-gold-500 rounded-full" />
              )}
            </button>
            <div className="flex items-center gap-2">
              <span className="text-xs text-charcoal-500 font-sans">Sort by</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-charcoal-200 bg-white px-3 py-1.5 font-sans"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Filter Sidebar */}
          <aside
            className={`${
              isFilterOpen ? 'block' : 'hidden'
            } lg:block lg:w-64 lg:sticky lg:top-24 lg:self-start`}
          >
            <div className="border border-charcoal-200 p-6 space-y-6 lg:border lg:border-charcoal-200 lg:p-6 lg:space-y-6">
              {/* Mobile close button */}
              <div className="lg:hidden flex items-center justify-between mb-4">
                <h3 className="font-serif text-lg">Filters</h3>
                <button onClick={() => setIsFilterOpen(false)} aria-label="Close filters">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Category */}
              <div>
                <h4 className="text-xs tracking-widest uppercase text-charcoal-700 mb-3 font-sans">Category</h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat.id}
                        onChange={() => setSelectedCategory(cat.id)}
                        className="accent-charcoal-900"
                      />
                      <span className="text-sm text-charcoal-600 font-sans font-light">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h4 className="text-xs tracking-widest uppercase text-charcoal-700 mb-3 font-sans">Material</h4>
                <div className="space-y-2">
                  {['all', 'gold', 'silver'].map((mat) => (
                    <label key={mat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="material"
                        checked={selectedMaterial === mat}
                        onChange={() => setSelectedMaterial(mat)}
                        className="accent-charcoal-900"
                      />
                      <span className="text-sm text-charcoal-600 font-sans font-light capitalize">
                        {mat === 'all' ? 'All' : `${mat} tone`}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h4 className="text-xs tracking-widest uppercase text-charcoal-700 mb-3 font-sans">Price</h4>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: '0-50', label: 'Under $50' },
                    { value: '50-100', label: '$50 - $100' },
                    { value: '100-', label: 'Over $100' },
                  ].map((option) => (
                    <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange === option.value}
                        onChange={() => setPriceRange(option.value)}
                        className="accent-charcoal-900"
                      />
                      <span className="text-sm text-charcoal-600 font-sans font-light">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs tracking-widest uppercase text-gold-600 hover:text-gold-700 transition-colors font-sans"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-sm text-charcoal-500 font-sans font-light">
                Showing {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-charcoal-500 font-sans">Sort by</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-charcoal-200 bg-white px-3 py-1.5 font-sans"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal-600 mb-2">No pieces found</p>
                <p className="text-sm text-charcoal-400 font-sans font-light mb-6">
                  Try adjusting your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 border border-charcoal-900 text-charcoal-900 text-xs tracking-widest uppercase hover:bg-charcoal-900 hover:text-white transition-colors font-sans"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
