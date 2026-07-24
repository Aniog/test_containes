import React, { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '../data/products'
import { useCart } from '../context/CartContext'

export default function CollectionPage() {
  const [searchParams] = useSearchParams()
  const containerRef = useRef(null)
  const { addToCart } = useCart()
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 200])
  const [sortBy, setSortBy] = useState('featured')
  const [hoveredProduct, setHoveredProduct] = useState(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [selectedCategory, selectedMaterial, sortBy])

  // Filter products
  let filteredProducts = products.filter((product) => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false
    if (selectedMaterial !== 'all' && product.material !== selectedMaterial) return false
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false
    return true
  })

  // Sort products
  if (sortBy === 'price-asc') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
  } else if (sortBy === 'price-desc') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
  } else if (sortBy === 'rating') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating)
  }

  const handleAddToCart = (product) => {
    const variant = product.variants[0]
    addToCart(product, variant, 1)
  }

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedMaterial('all')
    setPriceRange([0, 200])
  }

  const hasActiveFilters = selectedCategory !== 'all' || selectedMaterial !== 'all'

  return (
    <div ref={containerRef} className="section-padding bg-background">
      <div className="container-padding">
        {/* Header */}
        <div className="mb-10">
          <h1 className="serif-heading text-3xl md:text-4xl mb-2">Shop All</h1>
          <p className="text-muted-foreground">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar - Desktop */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="space-y-8 sticky top-24">
              {/* Category Filter */}
              <div>
                <h3 className="text-sm tracking-wider uppercase mb-4">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === 'all'}
                      onChange={() => setSelectedCategory('all')}
                      className="accent-primary"
                    />
                    <span className="text-sm">All</span>
                  </label>
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat.id}
                        onChange={() => setSelectedCategory(cat.id)}
                        className="accent-primary"
                      />
                      <span className="text-sm">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <h3 className="text-sm tracking-wider uppercase mb-4">Material</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="material"
                      checked={selectedMaterial === 'all'}
                      onChange={() => setSelectedMaterial('all')}
                      className="accent-primary"
                    />
                    <span className="text-sm">All</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="material"
                      checked={selectedMaterial === 'gold'}
                      onChange={() => setSelectedMaterial('gold')}
                      className="accent-primary"
                    />
                    <span className="text-sm">Gold Tone</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="material"
                      checked={selectedMaterial === 'silver'}
                      onChange={() => setSelectedMaterial('silver')}
                      className="accent-primary"
                    />
                    <span className="text-sm">Silver Tone</span>
                  </label>
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-sm tracking-wider uppercase mb-4">Price Range</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-full px-3 py-2 border border-border text-sm"
                      placeholder="Min"
                      min="0"
                    />
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full px-3 py-2 border border-border text-sm"
                      placeholder="Max"
                      min="0"
                    />
                  </div>
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary hover:underline flex items-center gap-1"
                >
                  <X className="w-3 h-3" />
                  Clear Filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <div className="md:hidden fixed bottom-6 right-6 z-40">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="bg-primary text-primary-foreground p-4 shadow-lg"
            >
              <SlidersHorizontal className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Filter Drawer */}
          {isFilterOpen && (
            <>
              <div
                className="fixed inset-0 bg-black/40 z-40 md:hidden"
                onClick={() => setIsFilterOpen(false)}
              />
              <div className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-background z-50 p-6 overflow-y-auto md:hidden">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="serif-heading text-xl">Filters</h2>
                  <button onClick={() => setIsFilterOpen(false)} className="p-2">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Category */}
                  <div>
                    <h3 className="text-sm tracking-wider uppercase mb-3">Category</h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="mobile-category"
                          checked={selectedCategory === 'all'}
                          onChange={() => setSelectedCategory('all')}
                          className="accent-primary"
                        />
                        <span className="text-sm">All</span>
                      </label>
                      {categories.map((cat) => (
                        <label key={cat.id} className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="mobile-category"
                            checked={selectedCategory === cat.id}
                            onChange={() => setSelectedCategory(cat.id)}
                            className="accent-primary"
                          />
                          <span className="text-sm">{cat.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Material */}
                  <div>
                    <h3 className="text-sm tracking-wider uppercase mb-3">Material</h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="mobile-material"
                          checked={selectedMaterial === 'all'}
                          onChange={() => setSelectedMaterial('all')}
                          className="accent-primary"
                        />
                        <span className="text-sm">All</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="mobile-material"
                          checked={selectedMaterial === 'gold'}
                          onChange={() => setSelectedMaterial('gold')}
                          className="accent-primary"
                        />
                        <span className="text-sm">Gold Tone</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="mobile-material"
                          checked={selectedMaterial === 'silver'}
                          onChange={() => setSelectedMaterial('silver')}
                          className="accent-primary"
                        />
                        <span className="text-sm">Silver Tone</span>
                      </label>
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h3 className="text-sm tracking-wider uppercase mb-3">Price Range</h3>
                    <div className="flex gap-3">
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                        className="w-full px-3 py-2 border border-border text-sm"
                        placeholder="Min"
                        min="0"
                      />
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="w-full px-3 py-2 border border-border text-sm"
                        placeholder="Max"
                        min="0"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={() => {
                        clearFilters()
                        setIsFilterOpen(false)
                      }}
                      className="btn-outline flex-1 text-xs"
                    >
                      Clear Filters
                    </button>
                    <button
                      onClick={() => setIsFilterOpen(false)}
                      className="btn-primary flex-1 text-xs"
                    >
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Dropdown */}
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <span className="text-xs text-muted-foreground md:hidden">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-border text-xs md:text-sm bg-background"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group"
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3/4] bg-secondary mb-3 md:mb-4 overflow-hidden">
                        <img
                          data-strk-img-id={`shop-${product.id}-img`}
                          data-strk-img={`[${product.id}-desc] [${product.id}-title] [shop-title]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="500"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.images[0].alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Quick Add - Always visible on mobile, hover on desktop */}
                        <div className={`absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 transition-all duration-300 ${
                          hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        } md:group-hover:opacity-100 md:group-hover:translate-y-0 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4`}>
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              handleAddToCart(product)
                            }}
                            className="w-full bg-white/95 text-foreground py-2.5 md:py-3 text-xs tracking-wider uppercase hover:bg-white transition-colors flex items-center justify-center gap-2"
                          >
                            <ShoppingBag className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            <span className="hidden sm:inline">Add to Cart</span>
                            <span className="sm:hidden">Add</span>
                          </button>
                        </div>
                      </div>
                    </Link>

                    <Link to={`/product/${product.id}`}>
                      <h3 className="product-name text-xs md:text-sm mb-1">{product.name}</h3>
                    </Link>
                    <div className="flex items-center justify-between">
                      <span className="text-xs md:text-sm font-medium">${product.price}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-primary text-primary" />
                        <span className="text-xs text-muted-foreground">{product.rating}</span>
                      </div>
                    </div>
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
