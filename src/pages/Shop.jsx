import { useState, useEffect, useRef } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { StarRating } from '@/components/home/Bestsellers'

const categoryOptions = [
  { value: '', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
]

const priceRanges = [
  { value: '', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-150', label: '$75 – $150' },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
]

function ShopProductCard({ product }) {
  const { addItem } = useCart()
  return (
    <div className="group">
      <div className="relative overflow-hidden bg-velmora-linen aspect-[3/4] mb-4">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="bg-velmora-gold text-velmora-obsidian font-manrope text-[8px] tracking-[0.15em] uppercase px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-velmora-obsidian text-velmora-cream font-manrope text-[8px] tracking-[0.15em] uppercase px-2 py-1">
              New
            </span>
          )}
        </div>
        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button
            onClick={() => addItem(product)}
            className="w-full bg-velmora-obsidian/90 backdrop-blur-sm text-velmora-cream font-manrope text-[9px] tracking-[0.2em] uppercase py-3.5 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </div>
      <Link to={`/product/${product.slug}`}>
        <h3
          id={`shop-${product.titleId}`}
          className="font-cormorant text-sm font-medium tracking-[0.12em] uppercase text-velmora-ink hover:text-velmora-gold transition-colors duration-200 leading-tight"
        >
          {product.name}
        </h3>
      </Link>
      <p id={`shop-${product.descId}`} className="font-manrope text-[10px] text-velmora-muted mt-1">
        {product.shortDescription}
      </p>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-1.5">
          <StarRating rating={product.rating} />
          <span className="font-manrope text-[9px] text-velmora-muted">({product.reviewCount})</span>
        </div>
        <span className="font-cormorant text-base text-velmora-ink">${product.price}</span>
      </div>
    </div>
  )
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterOpen, setFilterOpen] = useState(false)
  const containerRef = useRef(null)

  const activeCategory = searchParams.get('category') || ''
  const activePriceRange = searchParams.get('price') || ''
  const activeSort = searchParams.get('sort') || 'featured'

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value) next.set(key, value)
    else next.delete(key)
    setSearchParams(next)
  }

  const filteredProducts = products
    .filter(p => !activeCategory || p.category === activeCategory)
    .filter(p => {
      if (!activePriceRange) return true
      const [min, max] = activePriceRange.split('-').map(Number)
      return p.price >= min && p.price <= max
    })
    .sort((a, b) => {
      if (activeSort === 'price-asc') return a.price - b.price
      if (activeSort === 'price-desc') return b.price - a.price
      if (activeSort === 'rating') return b.rating - a.rating
      return 0
    })

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeCategory, activePriceRange, activeSort])

  const activeFilterCount = [activeCategory, activePriceRange].filter(Boolean).length

  return (
    <div className="bg-velmora-cream min-h-screen pt-16 md:pt-20">
      {/* Page header */}
      <div className="bg-velmora-linen border-b border-velmora-sand py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-manrope text-[9px] tracking-[0.3em] uppercase text-velmora-gold mb-3">
            Collection
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-ink tracking-wide">
            {activeCategory
              ? categoryOptions.find(c => c.value === activeCategory)?.label || 'All Jewelry'
              : 'All Jewelry'
            }
          </h1>
          <p className="font-manrope text-xs text-velmora-muted mt-3">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-velmora-sand">
          {/* Filter toggle (mobile) + category pills (desktop) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="flex items-center gap-2 font-manrope text-[9px] tracking-[0.2em] uppercase text-velmora-muted hover:text-velmora-gold transition-colors duration-200 md:hidden"
            >
              <SlidersHorizontal size={14} strokeWidth={1.5} />
              Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
            </button>

            {/* Desktop category pills */}
            <div className="hidden md:flex items-center gap-2 flex-wrap">
              {categoryOptions.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setFilter('category', opt.value)}
                  className={`font-manrope text-[9px] tracking-[0.15em] uppercase px-4 py-2 border transition-colors duration-200 ${
                    activeCategory === opt.value
                      ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                      : 'border-velmora-sand text-velmora-muted hover:border-velmora-gold hover:text-velmora-gold'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={activeSort}
              onChange={e => setFilter('sort', e.target.value)}
              className="appearance-none bg-transparent border border-velmora-sand font-manrope text-[9px] tracking-[0.15em] uppercase text-velmora-muted pl-4 pr-8 py-2 focus:outline-none focus:border-velmora-gold transition-colors duration-200 cursor-pointer"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown size={10} strokeWidth={2} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-velmora-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              {/* Price filter */}
              <div className="mb-8">
                <h3 className="font-manrope text-[9px] tracking-[0.2em] uppercase text-velmora-ink mb-4">
                  Price
                </h3>
                <div className="flex flex-col gap-2">
                  {priceRanges.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setFilter('price', opt.value)}
                      className={`text-left font-manrope text-xs transition-colors duration-200 ${
                        activePriceRange === opt.value
                          ? 'text-velmora-gold'
                          : 'text-velmora-muted hover:text-velmora-gold'
                      }`}
                    >
                      {activePriceRange === opt.value && (
                        <span className="mr-1.5">·</span>
                      )}
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active filters */}
              {activeFilterCount > 0 && (
                <button
                  onClick={() => setSearchParams({})}
                  className="flex items-center gap-1.5 font-manrope text-[9px] tracking-[0.15em] uppercase text-velmora-muted hover:text-velmora-gold transition-colors duration-200"
                >
                  <X size={10} strokeWidth={2} />
                  Clear Filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-40 md:hidden">
              <div className="absolute inset-0 bg-velmora-obsidian/40" onClick={() => setFilterOpen(false)} />
              <div className="absolute bottom-0 left-0 right-0 bg-velmora-cream p-6 rounded-t-none">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-manrope text-[10px] tracking-[0.2em] uppercase text-velmora-ink">Filters</span>
                  <button onClick={() => setFilterOpen(false)}>
                    <X size={16} strokeWidth={1.5} className="text-velmora-muted" />
                  </button>
                </div>
                <div className="mb-6">
                  <h3 className="font-manrope text-[9px] tracking-[0.2em] uppercase text-velmora-ink mb-3">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {categoryOptions.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => { setFilter('category', opt.value); setFilterOpen(false) }}
                        className={`font-manrope text-[9px] tracking-[0.15em] uppercase px-3 py-2 border transition-colors duration-200 ${
                          activeCategory === opt.value
                            ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                            : 'border-velmora-sand text-velmora-muted'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="font-manrope text-[9px] tracking-[0.2em] uppercase text-velmora-ink mb-3">Price</h3>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => { setFilter('price', opt.value); setFilterOpen(false) }}
                        className={`font-manrope text-[9px] tracking-[0.15em] uppercase px-3 py-2 border transition-colors duration-200 ${
                          activePriceRange === opt.value
                            ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                            : 'border-velmora-sand text-velmora-muted'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
                {activeFilterCount > 0 && (
                  <button
                    onClick={() => { setSearchParams({}); setFilterOpen(false) }}
                    className="font-manrope text-[9px] tracking-[0.15em] uppercase text-velmora-muted"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-velmora-muted mb-4">No pieces found</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="font-manrope text-[9px] tracking-[0.2em] uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors duration-200"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
