import React, { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { Star, ShoppingBag, SlidersHorizontal, ChevronDown } from 'lucide-react'

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0])
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-[var(--color-warm-white)] overflow-hidden mb-4">
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[var(--color-charcoal)] text-white text-[10px] tracking-widest uppercase px-3 py-1">
            {product.badge}
          </span>
        )}
        <div className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-white/95 backdrop-blur-sm text-[var(--color-charcoal)] py-3 text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-[var(--color-charcoal)] hover:text-white transition-colors"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </div>
      <h3 className="product-name text-sm mb-1 group-hover:text-[var(--color-gold)] transition-colors">
        {product.name}
      </h3>
      <div className="flex items-center gap-1 mb-2">
        <Star size={12} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
        <span className="text-xs text-[var(--color-muted)]">{product.rating}</span>
        <span className="text-xs text-[var(--color-muted)]">({product.reviews})</span>
      </div>
      <p className="text-sm font-medium">${product.price}</p>
    </Link>
  )
}

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory)
    }
    if (selectedMaterial !== 'all') {
      filtered = filtered.filter(p => p.material === selectedMaterial)
    }
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number)
      filtered = filtered.filter(p => p.price >= min && (max ? p.price <= max : true))
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

  return (
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <div className="section-padding pb-8">
        <h1 className="serif-heading text-4xl md:text-5xl text-center mb-4">
          {selectedCategory !== 'all' ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1) : 'All Jewelry'}
        </h1>
        <p className="text-sm text-[var(--color-muted)] text-center">
          {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile filter toggle */}
          <div className="md:hidden flex items-center justify-between mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-sm"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-sm pr-6 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Filter sidebar */}
          <aside className={`md:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="sticky top-24 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-xs tracking-widest uppercase mb-3">Category</h3>
                <div className="space-y-2">
                  {[{ id: 'all', name: 'All' }, ...categories].map(cat => (
                    <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat.id}
                        onChange={() => setSelectedCategory(cat.id)}
                        className="accent-[var(--color-gold)]"
                      />
                      <span className="text-sm">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs tracking-widest uppercase mb-3">Material</h3>
                <div className="space-y-2">
                  {[
                    { id: 'all', name: 'All' },
                    { id: 'gold', name: 'Gold Tone' },
                    { id: 'silver', name: 'Silver Tone' },
                  ].map(mat => (
                    <label key={mat.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="material"
                        checked={selectedMaterial === mat.id}
                        onChange={() => setSelectedMaterial(mat.id)}
                        className="accent-[var(--color-gold)]"
                      />
                      <span className="text-sm">{mat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-xs tracking-widest uppercase mb-3">Price</h3>
                <div className="space-y-2">
                  {[
                    { id: 'all', name: 'All Prices' },
                    { id: '0-50', name: 'Under $50' },
                    { id: '50-100', name: '$50 - $100' },
                    { id: '100-', name: 'Over $100' },
                  ].map(range => (
                    <label key={range.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange === range.id}
                        onChange={() => setPriceRange(range.id)}
                        className="accent-[var(--color-gold)]"
                      />
                      <span className="text-sm">{range.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Desktop sort */}
            <div className="hidden md:flex items-center justify-end mb-6">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-sm pr-6 cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="serif-heading text-xl mb-2">No pieces found</p>
                <p className="text-sm text-[var(--color-muted)]">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map(product => (
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
