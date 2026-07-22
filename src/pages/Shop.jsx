import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ShoppingBag, Star } from 'lucide-react'
import products from '@/data/products'
import { useCart } from '@/context/CartContext'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'sets', label: 'Sets' },
]

const priceRanges = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 - $75', min: 50, max: 75 },
  { id: '75-plus', label: '$75+', min: 75, max: Infinity },
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

  const [category, setCategory] = useState(searchParams.get('category') || 'all')
  const [priceRange, setPriceRange] = useState('all')
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Category filter
    if (category !== 'all') {
      result = result.filter((p) => p.category === category)
    }

    // Price filter
    const range = priceRanges.find((r) => r.id === priceRange)
    if (range && range.id !== 'all') {
      result = result.filter((p) => p.price >= range.min && p.price < range.max)
    }

    // Sort
    switch (sort) {
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
  }, [category, priceRange, sort])

  const handleCategoryChange = (catId) => {
    setCategory(catId)
    const params = new URLSearchParams(searchParams)
    if (catId === 'all') {
      params.delete('category')
    } else {
      params.set('category', catId)
    }
    setSearchParams(params)
  }

  const activeFilters = [category !== 'all', priceRange !== 'all'].filter(Boolean).length

  const FiltersPanel = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-wider text-velvet-dim font-medium mb-4">
          Category
        </h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`block w-full text-left text-sm font-sans py-1.5 transition-colors ${
                category === cat.id
                  ? 'text-velvet-gold'
                  : 'text-velvet-muted hover:text-velvet-text'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-wider text-velvet-dim font-medium mb-4">
          Price Range
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => setPriceRange(range.id)}
              className={`block w-full text-left text-sm font-sans py-1.5 transition-colors ${
                priceRange === range.id
                  ? 'text-velvet-gold'
                  : 'text-velvet-muted hover:text-velvet-text'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <main className="pt-28 pb-16">
      <div className="container-wide">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif text-3xl md:text-5xl font-light text-velvet-text mb-3">
            All Jewelry
          </h1>
          <p className="text-velvet-muted font-sans text-sm">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar - desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FiltersPanel />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-6 hairline-b">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-sm font-sans text-velvet-muted hover:text-velvet-text transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {activeFilters > 0 && (
                  <span className="bg-velvet-gold text-velvet-bg text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {activeFilters}
                  </span>
                )}
              </button>

              <div className="flex items-center gap-3 ml-auto">
                <label className="text-xs text-velvet-dim font-sans">Sort by</label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-velvet-surface border border-velvet-border text-velvet-text text-sm font-sans px-3 py-2 rounded-sm focus:outline-none focus:border-velvet-gold transition-colors"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velvet-muted font-sans text-sm mb-4">No products match your filters.</p>
                <button
                  onClick={() => { setCategory('all'); setPriceRange('all') }}
                  className="text-velvet-gold text-sm font-sans hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group relative">
                    <Link to={`/product/${product.id}`}>
                      <div className="aspect-[3/4] bg-velvet-surface rounded-sm overflow-hidden mb-3">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </Link>
                    <button
                      onClick={() => addItem(product)}
                      className="absolute top-3 right-3 w-9 h-9 bg-velvet-bg/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-velvet-gold hover:text-velvet-bg"
                      aria-label={`Quick add ${product.name}`}
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                    <div className="text-center">
                      <h3 className="product-name text-velvet-text mb-1">{product.name}</h3>
                      <div className="flex items-center justify-center gap-1.5 mb-1">
                        <Star className="w-3 h-3 fill-velvet-gold text-velvet-gold" />
                        <span className="text-xs text-velvet-dim">{product.rating}</span>
                      </div>
                      <p className="font-serif text-base text-velvet-gold">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-velvet-surface p-8 shadow-2xl animate-slide-in-right overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-sans text-sm font-medium text-velvet-text">Filters</h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-velvet-muted hover:text-velvet-text transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FiltersPanel />
          </div>
        </div>
      )}
    </main>
  )
}