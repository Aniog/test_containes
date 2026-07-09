import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, SlidersHorizontal, X, ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const categories = [
  { id: 'all', name: 'All Jewelry' },
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'huggies', name: 'Huggies' },
  { id: 'gift-sets', name: 'Gift Sets' },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [hoveredId, setHoveredId] = useState(null)

  const activeCategory = searchParams.get('category') || 'all'
  const activeSort = searchParams.get('sort') || 'featured'
  const activePriceRange = searchParams.get('price') || 'all'

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'all' || value === '') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    setSearchParams(params)
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory)
    }

    if (activePriceRange !== 'all') {
      const [min, max] = activePriceRange.split('-').map(Number)
      result = result.filter(p => p.price >= min && (max ? p.price <= max : true))
    }

    switch (activeSort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
    }

    return result
  }, [activeCategory, activePriceRange, activeSort])

  const priceRanges = [
    { id: 'all', label: 'All Prices' },
    { id: '0-50', label: 'Under $50' },
    { id: '50-80', label: '$50 - $80' },
    { id: '80-200', label: '$80+' },
  ]

  const FiltersContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.15em] text-velmora-dark mb-4 font-sans">Category</h3>
        <div className="space-y-2.5">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', cat.id)}
              className={`block w-full text-left text-sm font-sans transition-colors ${
                activeCategory === cat.id
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-taupe hover:text-velmora-slate'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.15em] text-velmora-dark mb-4 font-sans">Price</h3>
        <div className="space-y-2.5">
          {priceRanges.map(pr => (
            <button
              key={pr.id}
              onClick={() => setFilter('price', pr.id)}
              className={`block w-full text-left text-sm font-sans transition-colors ${
                activePriceRange === pr.id
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-taupe hover:text-velmora-slate'
              }`}
            >
              {pr.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-velmora-ivory pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Page header */}
        <div className="py-8 md:py-12">
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-dark text-center mb-2">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <div className="w-12 h-px bg-velmora-gold/40 mx-auto" />
        </div>

        <div className="flex gap-8 pb-16 md:pb-24">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <FiltersContent />
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-warm-light">
              <div className="flex items-center gap-3">
                {/* Mobile filter toggle */}
                <button
                  className="md:hidden flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-velmora-slate hover:text-velmora-gold transition-colors"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  Filters
                </button>
                <p className="text-xs text-velmora-taupe font-sans">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </p>
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2">
                <label className="text-xs text-velmora-taupe font-sans hidden sm:block">Sort by:</label>
                <select
                  value={activeSort}
                  onChange={(e) => setFilter('sort', e.target.value)}
                  className="text-xs font-sans text-velmora-slate bg-transparent border border-velmora-warm-light px-3 py-2 focus:outline-none focus:border-velmora-gold transition-colors"
                >
                  {sortOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-taupe text-sm font-sans mb-4">No products found matching your filters.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="text-xs uppercase tracking-[0.15em] text-velmora-gold hover:text-velmora-gold-dark transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <div
                    key={product.id}
                    className="group"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[4/5] bg-velmora-warm-light overflow-hidden mb-3">
                        <img
                          src={hoveredId === product.id && product.hoverImage ? product.hoverImage : product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {product.badge && (
                          <span className="absolute top-3 left-3 bg-velmora-gold text-white text-[10px] uppercase tracking-[0.1em] px-2.5 py-1">
                            {product.badge}
                          </span>
                        )}
                        {/* Quick add */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              addItem(product)
                            }}
                            className="bg-white/90 backdrop-blur-sm text-velmora-dark text-xs uppercase tracking-[0.15em] px-4 py-2.5 flex items-center gap-2 hover:bg-white transition-all duration-300 shadow-sm"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </Link>

                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-warm-light'}`}
                          />
                        ))}
                        <span className="text-[10px] text-velmora-taupe ml-1">({product.reviews})</span>
                      </div>
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-serif-alt text-xs uppercase tracking-[0.15em] text-velmora-slate hover:text-velmora-gold transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-sm font-sans text-velmora-dark mt-1.5">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute top-0 left-0 bottom-0 w-72 bg-velmora-ivory p-6 animate-slide-in-right">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xs uppercase tracking-[0.15em] text-velmora-dark font-sans">Filters</span>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-4 h-4 text-velmora-slate" />
              </button>
            </div>
            <FiltersContent />
          </div>
        </div>
      )}
    </div>
  )
}