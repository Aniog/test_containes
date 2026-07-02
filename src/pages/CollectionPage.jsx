import React, { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Filter, ChevronDown, Star } from 'lucide-react'
import { products, categories } from '@/lib/products'
import { useCart } from '@/lib/cart-context'

function ProductCard({ product, onCartOpen }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0])
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
    onCartOpen?.()
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded mb-4 bg-[var(--color-velmora-bg-alt)]">
        <img
          src={isHovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Always visible on mobile, hover-reveal on desktop */}
        <div className="absolute bottom-4 left-4 right-4 transition-all duration-300 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 opacity-100 translate-y-0">
          <button
            onClick={handleAddToCart}
            className="w-full bg-white/95 text-[var(--color-velmora-text)] py-3 text-sm tracking-widest uppercase hover:bg-[var(--color-velmora-accent)] hover:text-white transition-colors"
          >
            {added ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
      <h3 className="product-name text-sm mb-1 group-hover:text-[var(--color-velmora-accent)] transition-colors">
        {product.name}
      </h3>
      <div className="flex items-center gap-2 mb-1">
        <div className="flex items-center gap-0.5">
          <Star className="w-3 h-3 fill-[var(--color-velmora-gold)] text-[var(--color-velmora-gold)]" />
          <span className="text-xs">{product.rating}</span>
        </div>
        <span className="text-xs text-[var(--color-velmora-text-muted)]">({product.reviews})</span>
      </div>
      <p className="text-sm font-medium">${product.price}</p>
    </Link>
  )
}

export default function CollectionPage({ onCartOpen }) {
  const [searchParams] = useSearchParams()
  const [filtersOpen, setFiltersOpen] = useState(false)
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
      case 'newest':
        result.sort((a, b) => b.id - a.id)
        break
      default:
        break
    }

    return result
  }, [selectedCategory, selectedMaterial, priceRange, sortBy])

  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-[var(--color-velmora-bg-alt)] py-12 md:py-16">
        <div className="container-padding text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-[var(--color-velmora-text-muted)] mb-2">Our Collection</p>
          <h1 className="serif-heading text-4xl md:text-6xl">Shop All Jewelry</h1>
        </div>
      </div>

      <div className="container-padding py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between mb-6">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-2 text-sm px-4 py-2 border border-[var(--color-velmora-border)] rounded"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[var(--color-velmora-text-muted)]">Sort by</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-[var(--color-velmora-border)] rounded px-3 py-2 bg-transparent"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          {/* Sidebar Filters */}
          <aside className={`lg:w-64 ${filtersOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="lg:sticky lg:top-24 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-sm tracking-widest uppercase mb-4 font-medium">Category</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`text-sm w-full text-left py-1 transition-colors ${selectedCategory === 'all' ? 'text-[var(--color-velmora-accent)] font-medium' : 'text-[var(--color-velmora-text-muted)] hover:text-[var(--color-velmora-text)]'}`}
                    >
                      All Jewelry
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`text-sm w-full text-left py-1 transition-colors ${selectedCategory === cat.id ? 'text-[var(--color-velmora-accent)] font-medium' : 'text-[var(--color-velmora-text-muted)] hover:text-[var(--color-velmora-text)]'}`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hairline-divider" />

              {/* Material */}
              <div>
                <h3 className="text-sm tracking-widest uppercase mb-4 font-medium">Material</h3>
                <ul className="space-y-2">
                  {['all', 'gold', 'silver'].map((mat) => (
                    <li key={mat}>
                      <button
                        onClick={() => setSelectedMaterial(mat)}
                        className={`text-sm w-full text-left py-1 capitalize transition-colors ${selectedMaterial === mat ? 'text-[var(--color-velmora-accent)] font-medium' : 'text-[var(--color-velmora-text-muted)] hover:text-[var(--color-velmora-text)]'}`}
                      >
                        {mat === 'all' ? 'All Materials' : mat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hairline-divider" />

              {/* Price */}
              <div>
                <h3 className="text-sm tracking-widest uppercase mb-4 font-medium">Price</h3>
                <ul className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: '0-50', label: 'Under $50' },
                    { value: '50-100', label: '$50 - $100' },
                    { value: '100-', label: 'Over $100' },
                  ].map((range) => (
                    <li key={range.value}>
                      <button
                        onClick={() => setPriceRange(range.value)}
                        className={`text-sm w-full text-left py-1 transition-colors ${priceRange === range.value ? 'text-[var(--color-velmora-accent)] font-medium' : 'text-[var(--color-velmora-text-muted)] hover:text-[var(--color-velmora-text)]'}`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-sm text-[var(--color-velmora-text-muted)]">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[var(--color-velmora-text-muted)]">Sort by</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-[var(--color-velmora-border)] rounded px-3 py-2 bg-transparent"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="serif-heading text-2xl mb-2">No products found</p>
                <p className="text-[var(--color-velmora-text-muted)]">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onCartOpen={onCartOpen} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
