import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { products, categories, priceRanges } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { StarRating } from '@/components/ui/StarRating'
import { cn } from '@/lib/utils'

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const categoryFilter = searchParams.get('category') || 'all'
  const priceFilter = searchParams.get('price') || 'all'
  const sort = searchParams.get('sort') || 'featured'

  const setFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams)
    if (value === 'all') {
      newParams.delete(key)
    } else {
      newParams.set(key, value)
    }
    setSearchParams(newParams)
  }

  // Filter products
  let filtered = products.filter((p) => {
    if (categoryFilter !== 'all' && p.category !== categoryFilter) return false
    const range = priceRanges.find((r) => r.id === priceFilter)
    if (range && p.price < range.min) return false
    if (range && p.price >= range.max) return false
    return true
  })

  // Sort
  if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price)
  else if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price)
  else if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating)
  else if (sort === 'newest') filtered.sort((a, b) => b.reviews - a.reviews)

  const handleQuickAdd = (product) => {
    addItem(product, product.variants[0])
  }

  const activeFiltersCount = [categoryFilter, priceFilter].filter((f) => f !== 'all').length

  const FilterContent = () => (
    <>
      {/* Category */}
      <div className="mb-6">
        <h4 className="text-xs tracking-widest uppercase text-velmora-charcoal mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="category"
                checked={categoryFilter === cat.id}
                onChange={() => setFilter('category', cat.id)}
                className="accent-velmora-charcoal"
              />
              <span className={cn(
                'text-sm transition-colors',
                categoryFilter === cat.id ? 'text-velmora-charcoal' : 'text-velmora-gray group-hover:text-velmora-charcoal'
              )}>
                {cat.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h4 className="text-xs tracking-widest uppercase text-velmora-charcoal mb-3">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.id} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={priceFilter === range.id}
                onChange={() => setFilter('price', range.id)}
                className="accent-velmora-charcoal"
              />
              <span className={cn(
                'text-sm transition-colors',
                priceFilter === range.id ? 'text-velmora-charcoal' : 'text-velmora-gray group-hover:text-velmora-charcoal'
              )}>
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear filters */}
      {activeFiltersCount > 0 && (
        <button
          onClick={() => {
            setFilter('category', 'all')
            setFilter('price', 'all')
          }}
          className="text-xs text-velmora-gray hover:text-velmora-charcoal transition-colors flex items-center gap-1"
        >
          <X className="h-3 w-3" />
          Clear filters
        </button>
      )}
    </>
  )

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-light tracking-wide">
              {categoryFilter === 'all' ? 'All Jewelry' : categories.find((c) => c.id === categoryFilter)?.label || 'Shop'}
            </h1>
            <p className="text-sm text-velmora-gray mt-1">{filtered.length} pieces</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile filter button */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 text-sm text-velmora-gray"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
            </button>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setFilter('sort', e.target.value)}
              className="text-sm bg-transparent border border-velmora-light px-3 py-2 focus:outline-none focus:border-velmora-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-gray mb-2">No pieces found</p>
                <p className="text-sm text-velmora-stone">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product, index) => (
                  <div
                    key={product.id}
                    className="group"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Link to={`/product/${product.id}`} className="block aspect-[3/4] overflow-hidden bg-velmora-warm">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </Link>
                    <div className="mt-3">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-serif text-sm tracking-wide group-hover:text-velmora-gold transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-velmora-gray mt-0.5">{product.subtitle}</p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <StarRating rating={product.rating} size="sm" />
                        <span className="text-xs text-velmora-stone">({product.reviews})</span>
                      </div>
                      <p className="text-sm font-medium mt-1.5">${product.price}</p>
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
        <>
          <div
            className="fixed inset-0 bg-black/40 z-50 md:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-velmora-cream z-50 md:hidden max-h-[80vh] overflow-y-auto rounded-t-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </>
      )}
    </div>
  )
}
