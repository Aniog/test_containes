import { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import products, { categories } from '@/data/products'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')
  const containerRef = useRef(null)

  const activeCategory = searchParams.get('category') || ''
  const priceRange = searchParams.get('price') || ''

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value) next.set(key, value)
    else next.delete(key)
    setSearchParams(next, { replace: true })
  }

  const filtered = useMemo(() => {
    let result = [...products]
    if (activeCategory) result = result.filter((p) => p.category === activeCategory)
    if (priceRange === 'under50') result = result.filter((p) => p.price < 50)
    if (priceRange === '50to100') result = result.filter((p) => p.price >= 50 && p.price <= 100)

    switch (sortBy) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break
      case 'price-desc': result.sort((a, b) => b.price - a.price); break
      case 'rating': result.sort((a, b) => b.rating - a.rating); break
      default: break
    }
    return result
  }, [activeCategory, priceRange, sortBy])

  useEffect(() => {
    if (containerRef.current) {
      const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
      return cleanup
    }
  }, [filtered])

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-widest uppercase font-medium mb-4">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => setFilter('category', '')}
            className={`block text-sm transition-colors ${!activeCategory ? 'text-velmora-gold font-medium' : 'text-velmora-muted hover:text-velmora-deep'}`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter('category', cat)}
              className={`block text-sm transition-colors ${activeCategory === cat ? 'text-velmora-gold font-medium' : 'text-velmora-muted hover:text-velmora-deep'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-widest uppercase font-medium mb-4">Price</h3>
        <div className="space-y-2">
          {[
            { value: '', label: 'All Prices' },
            { value: 'under50', label: 'Under $50' },
            { value: '50to100', label: '$50 – $100' },
          ].map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilter('price', opt.value)}
              className={`block text-sm transition-colors ${priceRange === opt.value ? 'text-velmora-gold font-medium' : 'text-velmora-muted hover:text-velmora-deep'}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-8 md:py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-2xl md:text-3xl tracking-wider">
              {activeCategory || 'All Jewelry'}
            </h1>
            <p className="text-sm text-velmora-muted mt-1">{filtered.length} pieces</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="md:hidden flex items-center gap-2 text-xs tracking-widest uppercase text-velmora-muted hover:text-velmora-deep transition-colors"
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filter
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs tracking-wider uppercase bg-transparent border border-velmora-hairline rounded-sm px-3 py-2 pr-8 appearance-none cursor-pointer focus:outline-none focus:border-velmora-gold transition-colors"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-velmora-muted pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filter - desktop */}
          <aside className="hidden md:block w-48 shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile filter overlay */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-[80] md:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-velmora-cream shadow-xl p-8 pt-20 overflow-y-auto">
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="absolute top-5 right-5 text-velmora-muted hover:text-velmora-deep transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <FilterContent />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-muted text-sm">No products match your filters.</p>
                <button
                  onClick={() => setSearchParams({}, { replace: true })}
                  className="mt-3 text-xs tracking-widest uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <Link to={`/product/${product.id}`} key={product.id} className="group block">
                    <div className="relative aspect-[3/4] bg-velmora-sand rounded-sm overflow-hidden mb-3">
                      <img
                        data-strk-img-id={`shop-${product.id}`}
                        data-strk-img={`[shop-name-${product.id}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span id={`shop-name-${product.id}`} className="hidden">{product.name}</span>
                    <p className="font-serif text-xs tracking-widest uppercase truncate">{product.name}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < Math.round(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-hairline'}`} />
                      ))}
                    </div>
                    <p className="text-sm font-medium mt-0.5">${product.price}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
