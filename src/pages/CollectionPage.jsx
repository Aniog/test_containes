import { useState, useMemo, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { products, categories } from '@/data/products'

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, product.variants[0])
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-velmora-100 overflow-hidden mb-4">
        <img
          src={product.images[0]}
          alt={product.shortName}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
          loading="lazy"
        />
        <img
          src={product.images[1]}
          alt={product.shortName}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-charcoal-900 text-velmora-50 text-[10px] tracking-widest uppercase px-3 py-1.5 font-sans">
            {product.badge}
          </span>
        )}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 left-3 right-3 bg-charcoal-900/90 backdrop-blur-sm text-white py-3 text-xs tracking-widest uppercase font-sans flex items-center justify-center gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <ShoppingBag size={14} />
          Add to Cart
        </button>
      </div>
      <div className="text-center">
        <h3 className="product-name mb-1">{product.name}</h3>
        <div className="flex items-center justify-center gap-1 mb-2">
          <Star size={12} className="fill-gold-400 text-gold-400" />
          <span className="text-xs text-charcoal-500">{product.rating} ({product.reviews})</span>
        </div>
        <p className="text-charcoal-900 font-medium">${product.price}</p>
      </div>
    </Link>
  )
}

export default function CollectionPage() {
  const [searchParams] = useSearchParams()
  const [filterOpen, setFilterOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [priceRange, setPriceRange] = useState('all')
  const [material, setMaterial] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setSelectedCategory(cat)
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory)
    }

    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'under50':
          result = result.filter(p => p.price < 50)
          break
        case '50to75':
          result = result.filter(p => p.price >= 50 && p.price <= 75)
          break
        case 'over75':
          result = result.filter(p => p.price > 75)
          break
      }
    }

    if (material !== 'all') {
      result = result.filter(p => p.material === material)
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
        result.sort((a, b) => b.reviews - a.reviews)
        break
      default:
        break
    }

    return result
  }, [selectedCategory, priceRange, material, sortBy])

  const activeFiltersCount = [selectedCategory !== 'all', priceRange !== 'all', material !== 'all'].filter(Boolean).length

  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <section className="bg-velmora-100/50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-600 text-xs tracking-widest uppercase mb-3 font-sans">Collection</p>
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal-900 tracking-wide mb-4">
            {selectedCategory !== 'all'
              ? categories.find(c => c.id === selectedCategory)?.name || 'All Jewelry'
              : 'All Jewelry'}
          </h1>
          <p className="text-charcoal-500 max-w-lg mx-auto">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''} to discover
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile filter toggle */}
          <div className="md:hidden flex items-center justify-between mb-4">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 text-sm text-charcoal-700 border border-velmora-300 px-4 py-2"
            >
              <SlidersHorizontal size={16} />
              Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-velmora-300 px-3 py-2 bg-white"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          {/* Sidebar Filters */}
          <aside className={`md:w-64 flex-shrink-0 ${filterOpen ? 'block' : 'hidden md:block'}`}>
            <div className="sticky top-24 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-xs tracking-widest uppercase text-charcoal-700 font-sans mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block w-full text-left text-sm py-1 transition-colors ${
                        selectedCategory === cat.id
                          ? 'text-gold-600 font-medium'
                          : 'text-charcoal-600 hover:text-charcoal-900'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-xs tracking-widest uppercase text-charcoal-700 font-sans mb-3">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to75', label: '$50 – $75' },
                    { value: 'over75', label: 'Over $75' },
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => setPriceRange(option.value)}
                      className={`block w-full text-left text-sm py-1 transition-colors ${
                        priceRange === option.value
                          ? 'text-gold-600 font-medium'
                          : 'text-charcoal-600 hover:text-charcoal-900'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs tracking-widest uppercase text-charcoal-700 font-sans mb-3">Material</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All' },
                    { value: 'gold', label: 'Gold' },
                    { value: 'silver', label: 'Silver' },
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => setMaterial(option.value)}
                      className={`block w-full text-left text-sm py-1 transition-colors ${
                        material === option.value
                          ? 'text-gold-600 font-medium'
                          : 'text-charcoal-600 hover:text-charcoal-900'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear filters */}
              {activeFiltersCount > 0 && (
                <button
                  onClick={() => {
                    setSelectedCategory('all')
                    setPriceRange('all')
                    setMaterial('all')
                  }}
                  className="text-xs text-charcoal-500 hover:text-charcoal-900 underline transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop sort */}
            <div className="hidden md:flex items-center justify-between mb-6">
              <p className="text-sm text-charcoal-500">
                Showing {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-velmora-300 px-3 py-2 bg-white"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal-700 mb-2">No pieces found</p>
                <p className="text-charcoal-500 text-sm mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all')
                    setPriceRange('all')
                    setMaterial('all')
                  }}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
