import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { products } from '../../data/products'
import FilterSidebar from './FilterSidebar'

export default function CollectionPage() {
  const [hoveredId, setHoveredId] = useState(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')
  const [filters, setFilters] = useState({ category: null, material: null, priceRange: [0, 150] })
  const { addToCart } = useCart()

  let filteredProducts = [...products]

  if (filters.category) {
    filteredProducts = filteredProducts.filter(p => p.category === filters.category)
  }
  if (filters.material) {
    filteredProducts = filteredProducts.filter(p => p.material === filters.material)
  }
  filteredProducts = filteredProducts.filter(
    p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
  )

  if (sortBy === 'price-asc') {
    filteredProducts.sort((a, b) => a.price - b.price)
  } else if (sortBy === 'price-desc') {
    filteredProducts.sort((a, b) => b.price - a.price)
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating)
  }

  return (
    <div className="pt-20 lg:pt-24">
      {/* Header */}
      <div className="bg-secondary/30 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Our Collection
          </p>
          <h1 className="serif-heading text-4xl md:text-5xl lg:text-6xl mb-4">
            Shop All Jewelry
          </h1>
          <p className="text-muted-foreground max-w-xl">
            Discover our curated collection of demi-fine pieces, designed for everyday luxury.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8 lg:gap-12">
          {/* Filter Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              isOpen={isFilterOpen}
              setIsOpen={setIsFilterOpen}
            />
          </div>

          {/* Mobile Filter Button */}
          <button
            className="lg:hidden fixed bottom-6 left-6 z-30 bg-foreground text-background px-6 py-3 text-sm tracking-wider uppercase flex items-center gap-2 shadow-lg"
            onClick={() => setIsFilterOpen(true)}
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>

          {/* Mobile Filter Sidebar */}
          <div className="lg:hidden">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              isOpen={isFilterOpen}
              setIsOpen={setIsFilterOpen}
            />
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort & Count */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-muted-foreground">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">Sort by</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-foreground/20 px-4 py-2 text-sm bg-transparent focus:outline-none focus:border-primary"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground mb-4">No products match your filters</p>
                <button
                  onClick={() => setFilters({ category: null, material: null, priceRange: [0, 150] })}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
                      <img
                        src={hoveredId === product.id ? product.images[1] : product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <button
                        onClick={() => addToCart(product, product.variants[0])}
                        className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm py-3 text-sm tracking-wider uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white"
                      >
                        <ShoppingBag size={14} className="inline mr-2" />
                        Add to Cart
                      </button>
                    </div>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="product-name text-sm mb-1 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="font-medium">${product.price}</p>
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
