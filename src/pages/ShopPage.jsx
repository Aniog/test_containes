import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ShoppingBag, Star } from 'lucide-react'
import { toast } from 'sonner'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const allCategories = [
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'sets', name: 'Gift Sets' },
]

const priceRanges = [
  { id: 'under40', name: 'Under $40', min: 0, max: 40 },
  { id: '40to70', name: '$40 - $70', min: 40, max: 70 },
  { id: '70to100', name: '$70 - $100', min: 70, max: 100 },
  { id: 'over100', name: 'Over $100', min: 100, max: Infinity },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
]

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const activeCategory = searchParams.get('category') || ''
  const activePrice = searchParams.get('price') || ''

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (params.get(key) === value) {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    setSearchParams(params)
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  const hasFilters = activeCategory || activePrice

  const filteredAndSorted = useMemo(() => {
    let result = [...products]

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory)
    }

    if (activePrice) {
      const range = priceRanges.find((r) => r.id === activePrice)
      if (range) {
        result = result.filter(
          (p) => p.price >= range.min && p.price < range.max
        )
      }
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
    }

    return result
  }, [activeCategory, activePrice, sortBy])

  const handleAddToCart = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      color: product.colors[0],
      image: product.images[0],
      quantity: 1,
    })
    toast(`${product.name} added to cart`)
  }

  const FiltersContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-ink-700 font-medium mb-4">
          Category
        </h4>
        <div className="space-y-2">
          {allCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', cat.id)}
              className={`block w-full text-left text-sm py-1.5 transition-colors ${
                activeCategory === cat.id
                  ? 'text-ink-900 font-medium'
                  : 'text-ink-400 hover:text-ink-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-ink-700 font-medium mb-4">
          Price
        </h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => setFilter('price', range.id)}
              className={`block w-full text-left text-sm py-1.5 transition-colors ${
                activePrice === range.id
                  ? 'text-ink-900 font-medium'
                  : 'text-ink-400 hover:text-ink-700'
              }`}
            >
              {range.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <main className="pt-20 lg:pt-24">
      {/* Page Header */}
      <div className="bg-ink-50 py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="section-subheading">Our Collection</p>
              <h1 className="section-heading mt-2">All Jewelry</h1>
            </div>
            <div className="flex items-center gap-4">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs uppercase tracking-widest text-ink-500 bg-transparent border border-ink-200 px-3 py-2 focus:outline-none focus:border-ink-400 cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {/* Mobile filter toggle */}
              <button
                className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-widest text-ink-500"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="flex gap-10">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs uppercase tracking-widest text-gold-600 hover:text-gold-700 mb-6 flex items-center gap-1"
                >
                  <X className="w-3 h-3" />
                  Clear All
                </button>
              )}
              <FiltersContent />
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Active filters */}
            {hasFilters && (
              <div className="hidden lg:flex items-center gap-2 mb-6">
                {activeCategory && (
                  <span className="text-xs bg-ink-100 text-ink-700 px-3 py-1.5 flex items-center gap-1.5">
                    {allCategories.find((c) => c.id === activeCategory)?.name}
                    <button onClick={() => setFilter('category', activeCategory)}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {activePrice && (
                  <span className="text-xs bg-ink-100 text-ink-700 px-3 py-1.5 flex items-center gap-1.5">
                    {priceRanges.find((r) => r.id === activePrice)?.name}
                    <button onClick={() => setFilter('price', activePrice)}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {filteredAndSorted.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-ink-400 font-serif text-lg">No pieces found</p>
                <button
                  onClick={clearFilters}
                  className="btn-outline mt-6 inline-block text-xs"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredAndSorted.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group"
                  >
                    <div className="relative aspect-[3/4] bg-ink-100/50 overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                      {product.badge && (
                        <span className="absolute top-3 left-3 bg-cream/90 text-ink-800 text-[10px] uppercase tracking-wider px-2.5 py-1 font-medium">
                          {product.badge}
                        </span>
                      )}
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="absolute bottom-3 right-3 w-10 h-10 bg-cream/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold-600 hover:text-white"
                        aria-label="Add to cart"
                      >
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="mt-3 space-y-1">
                      <h3 className="product-name group-hover:text-gold-700 transition-colors">
                        {product.name}
                      </h3>
                      <p className="product-price">${product.price}</p>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(product.rating)
                                ? 'text-gold-500 fill-gold-500'
                                : 'text-ink-200'
                            }`}
                          />
                        ))}
                        <span className="text-[10px] text-ink-400 ml-1">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/30 lg:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 z-50 h-full w-80 max-w-[85vw] bg-cream shadow-2xl lg:hidden animate-slide-down">
            <div className="flex items-center justify-between px-6 py-5 border-b border-ink-100">
              <span className="text-xs uppercase tracking-widest font-medium">Filters</span>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 py-6">
              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs uppercase tracking-widest text-gold-600 hover:text-gold-700 mb-6 flex items-center gap-1"
                >
                  <X className="w-3 h-3" />
                  Clear All
                </button>
              )}
              <FiltersContent />
            </div>
          </div>
        </>
      )}
    </main>
  )
}