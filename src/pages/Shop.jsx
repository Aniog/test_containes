import { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import products from '@/data/products'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name', label: 'Alphabetical' },
]

export default function Shop() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const activeCategory = searchParams.get('category') || 'all'
  const activeMaterial = searchParams.get('material') || 'all'
  const activePrice = searchParams.get('price') || 'all'

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const filtered = products.filter((p) => {
    if (activeCategory !== 'all' && p.category !== activeCategory) return false
    if (activeMaterial !== 'all' && p.material !== activeMaterial) return false
    if (activePrice !== 'all') {
      if (activePrice === 'under50' && p.price >= 50) return false
      if (activePrice === '50-80' && (p.price < 50 || p.price > 80)) return false
      if (activePrice === 'over80' && p.price <= 80) return false
    }
    return true
  })

  const sorted = [...filtered].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc': return a.price - b.price
      case 'price-desc': return b.price - a.price
      case 'name': return a.name.localeCompare(b.name)
      default: return 0
    }
  })

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'all') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    setSearchParams(params)
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  const hasActiveFilters = activeCategory !== 'all' || activeMaterial !== 'all' || activePrice !== 'all'

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-charcoal mb-4">Category</h4>
        <ul className="space-y-3">
          {[
            { value: 'all', label: 'All' },
            { value: 'earrings', label: 'Earrings' },
            { value: 'necklaces', label: 'Necklaces' },
            { value: 'sets', label: 'Sets' },
          ].map((opt) => (
            <li key={opt.value}>
              <button
                onClick={() => setFilter('category', opt.value)}
                className={`text-sm transition-colors ${
                  activeCategory === opt.value ? 'text-gold font-medium' : 'text-taupe hover:text-charcoal'
                }`}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-charcoal mb-4">Price</h4>
        <ul className="space-y-3">
          {[
            { value: 'all', label: 'All Prices' },
            { value: 'under50', label: 'Under $50' },
            { value: '50-80', label: '$50 – $80' },
            { value: 'over80', label: 'Over $80' },
          ].map((opt) => (
            <li key={opt.value}>
              <button
                onClick={() => setFilter('price', opt.value)}
                className={`text-sm transition-colors ${
                  activePrice === opt.value ? 'text-gold font-medium' : 'text-taupe hover:text-charcoal'
                }`}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-charcoal mb-4">Material</h4>
        <ul className="space-y-3">
          {[
            { value: 'all', label: 'All' },
            { value: 'gold', label: 'Gold Tone' },
            { value: 'silver', label: 'Silver Tone' },
          ].map((opt) => (
            <li key={opt.value}>
              <button
                onClick={() => setFilter('material', opt.value)}
                className={`text-sm transition-colors ${
                  activeMaterial === opt.value ? 'text-gold font-medium' : 'text-taupe hover:text-charcoal'
                }`}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Page Header */}
        <div className="py-8 md:py-12">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal font-light">
            {activeCategory === 'all' ? 'All Jewelry' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h1>
          <p className="mt-2 text-sm text-taupe">{sorted.length} products</p>
        </div>

        <div className="flex gap-10">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="mt-6 text-xs uppercase tracking-widest text-taupe hover:text-charcoal transition-colors"
              >
                Clear all
              </button>
            )}
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-6 hairline">
              <button
                className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <div className="flex items-center gap-3">
                <label className="text-xs uppercase tracking-widest text-taupe">Sort by</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm text-charcoal bg-transparent border border-beige px-3 py-2 focus:outline-none focus:border-gold"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product Grid */}
            {sorted.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-sm text-taupe">No products match your filters.</p>
                <button onClick={clearFilters} className="btn-outline mt-6 inline-block">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {sorted.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="group">
                    <div className="aspect-[3/4] bg-warm-light overflow-hidden">
                      <img
                        data-strk-img-id={`shop-${product.imgId}`}
                        data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="mt-3 text-center">
                      <h3
                        id={`product-name-${product.id}`}
                        className="text-xs uppercase tracking-wide-lg text-charcoal font-medium"
                      >
                        {product.name}
                      </h3>
                      <p className="text-sm text-charcoal mt-1 font-medium">${product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          mobileFiltersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal/40"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 h-full w-72 bg-cream shadow-soft-lg transition-transform duration-300 ${
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xs uppercase tracking-widest text-charcoal">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-5 h-5 text-charcoal" />
              </button>
            </div>
            <FilterSidebar />
            {hasActiveFilters && (
              <button
                onClick={() => { clearFilters(); setMobileFiltersOpen(false) }}
                className="mt-6 text-xs uppercase tracking-widest text-taupe hover:text-charcoal transition-colors"
              >
                Clear all
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}