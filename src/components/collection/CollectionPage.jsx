import React, { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react'

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="product-card group">
      <Link to={`/product/${product.slug}`}>
        <div className="product-card-image">
          <img src={product.images[0]} alt={product.name} />
          {product.images[1] && (
            <div className="product-card-secondary">
              <img src={product.images[1]} alt={product.name} />
            </div>
          )}
          <div className="product-card-add">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product, 'gold')
              }}
              className="w-full btn-accent flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <Link to={`/product/${product.slug}`}>
        <h3 className="product-card-title">{product.name}</h3>
        <p className="product-card-price">${product.price}</p>
      </Link>
    </div>
  )
}

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const initialCategory = searchParams.get('category') || 'all'
  const initialSort = searchParams.get('sort') || 'featured'
  const initialPriceRange = searchParams.get('price') || 'all'

  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [sortBy, setSortBy] = useState(initialSort)
  const [priceRange, setPriceRange] = useState(initialPriceRange)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory)
    }

    // Price filter
    if (priceRange === 'under50') {
      result = result.filter((p) => p.price < 50)
    } else if (priceRange === '50to75') {
      result = result.filter((p) => p.price >= 50 && p.price <= 75)
    } else if (priceRange === 'over75') {
      result = result.filter((p) => p.price > 75)
    }

    // Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    } else if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name))
    }

    return result
  }, [selectedCategory, sortBy, priceRange])

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat)
    setSearchParams((prev) => {
      if (cat === 'all') prev.delete('category')
      else prev.set('category', cat)
      return prev
    })
  }

  const handleSortChange = (sort) => {
    setSortBy(sort)
    setSearchParams((prev) => {
      if (sort === 'featured') prev.delete('sort')
      else prev.set('sort', sort)
      return prev
    })
  }

  const handlePriceChange = (range) => {
    setPriceRange(range)
    setSearchParams((prev) => {
      if (range === 'all') prev.delete('price')
      else prev.set('price', range)
      return prev
    })
  }

  const FilterContent = () => (
    <>
      {/* Category */}
      <div className="mb-8">
        <h3 className="text-xs tracking-widest uppercase text-charcoal-950 mb-4">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`block text-sm transition-colors ${
              selectedCategory === 'all' ? 'text-gold-600 font-medium' : 'text-charcoal-600 hover:text-gold-600'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`block text-sm transition-colors ${
                selectedCategory === cat.id ? 'text-gold-600 font-medium' : 'text-charcoal-600 hover:text-gold-600'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="text-xs tracking-widest uppercase text-charcoal-950 mb-4">Price</h3>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: 'under50', label: 'Under $50' },
            { value: '50to75', label: '$50 - $75' },
            { value: 'over75', label: 'Over $75' },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => handlePriceChange(option.value)}
              className={`block text-sm transition-colors ${
                priceRange === option.value ? 'text-gold-600 font-medium' : 'text-charcoal-600 hover:text-gold-600'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-widest uppercase text-charcoal-950 mb-4">Material</h3>
        <div className="space-y-2">
          <button className="block text-sm text-charcoal-600 hover:text-gold-600 transition-colors">
            18K Gold Plated
          </button>
          <button className="block text-sm text-charcoal-600 hover:text-gold-600 transition-colors">
            Silver Tone
          </button>
        </div>
      </div>
    </>
  )

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal-950 tracking-wide">
            All Jewelry
          </h1>
          <p className="text-sm text-charcoal-500 mt-2">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile filter button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 text-xs tracking-wider uppercase text-charcoal-950 border border-velmora-300 px-4 py-2 hover:border-gold-500 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>

          {/* Mobile filter drawer */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-velmora-50 p-6 overflow-y-auto animate-slide-in-right">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-xl tracking-wide">Filters</h2>
                  <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterContent />
              </div>
            </div>
          )}

          {/* Main content */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-charcoal-500">
                Showing {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="text-sm border border-velmora-300 bg-transparent px-3 py-2 focus:outline-none focus:border-gold-500 transition-colors"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal-950">No pieces found</p>
                <p className="text-sm text-charcoal-500 mt-2">Try adjusting your filters</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all')
                    setPriceRange('all')
                  }}
                  className="btn-primary mt-6 inline-flex"
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
    </div>
  )
}
