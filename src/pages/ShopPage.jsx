import { useEffect, useRef, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { SlidersHorizontal, X, Star, ShoppingBag, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

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
  { value: '75-120', label: '$75 – $120' },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
]

function ProductCard({ product }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAdd = (e) => {
    e.preventDefault()
    addItem(product, product.variants[0])
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-velmora-cream aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        <img
          data-strk-img-id={`shop-${product.imgId2}`}
          data-strk-img={`[shop-title-${product.id}] [shop-desc-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />

        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="bg-velmora-obsidian text-velmora-ivory font-manrope text-[9px] uppercase tracking-widest px-2 py-0.5">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-velmora-gold text-velmora-obsidian font-manrope text-[9px] uppercase tracking-widest px-2 py-0.5">
              New
            </span>
          )}
        </div>

        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={handleAdd}
            className="w-full bg-velmora-obsidian/90 backdrop-blur-sm text-velmora-ivory font-manrope text-[10px] uppercase tracking-widest py-3 flex items-center justify-center gap-2 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors duration-200"
          >
            <ShoppingBag className="w-3 h-3" />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      <div className="mt-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 id={`shop-title-${product.id}`} className="font-cormorant text-sm uppercase tracking-widest text-velmora-text leading-tight">
              {product.name}
            </h3>
            <p id={`shop-desc-${product.id}`} className="font-manrope text-xs text-velmora-muted mt-0.5">
              {product.shortDescription}
            </p>
          </div>
          <span className="font-manrope text-sm text-velmora-text flex-shrink-0">${product.price}</span>
        </div>
        <div className="flex items-center gap-1 mt-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`w-2.5 h-2.5 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border'}`} />
          ))}
          <span className="font-manrope text-[10px] text-velmora-subtle ml-1">({product.reviewCount})</span>
        </div>
      </div>
    </Link>
  )
}

export default function ShopPage() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterOpen, setFilterOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)

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

  const activeSortLabel = sortOptions.find(s => s.value === activeSort)?.label || 'Featured'

  return (
    <div ref={containerRef} className="bg-velmora-ivory min-h-screen pt-16 md:pt-20">
      {/* Page header */}
      <div className="bg-velmora-cream border-b border-velmora-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-2">
            {activeCategory ? categoryOptions.find(c => c.value === activeCategory)?.label : 'All Jewelry'}
          </p>
          <h1 className="font-cormorant text-3xl md:text-5xl font-light text-velmora-text">
            {activeCategory ? categoryOptions.find(c => c.value === activeCategory)?.label : 'The Collection'}
          </h1>
          <p className="font-manrope text-sm text-velmora-muted mt-2">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex gap-8 md:gap-12">

          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="font-manrope text-xs uppercase tracking-widest text-velmora-text mb-5">Filter</h3>

              {/* Category */}
              <div className="mb-7">
                <p className="font-manrope text-[10px] uppercase tracking-widest text-velmora-subtle mb-3">Category</p>
                <ul className="flex flex-col gap-2">
                  {categoryOptions.map(opt => (
                    <li key={opt.value}>
                      <button
                        onClick={() => setFilter('category', opt.value)}
                        className={`font-manrope text-xs transition-colors duration-200 ${
                          activeCategory === opt.value
                            ? 'text-velmora-gold'
                            : 'text-velmora-muted hover:text-velmora-text'
                        }`}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-px bg-velmora-border mb-7" />

              {/* Price */}
              <div className="mb-7">
                <p className="font-manrope text-[10px] uppercase tracking-widest text-velmora-subtle mb-3">Price</p>
                <ul className="flex flex-col gap-2">
                  {priceRanges.map(opt => (
                    <li key={opt.value}>
                      <button
                        onClick={() => setFilter('price', opt.value)}
                        className={`font-manrope text-xs transition-colors duration-200 ${
                          activePriceRange === opt.value
                            ? 'text-velmora-gold'
                            : 'text-velmora-muted hover:text-velmora-text'
                        }`}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clear filters */}
              {(activeCategory || activePriceRange) && (
                <button
                  onClick={() => setSearchParams({})}
                  className="font-manrope text-[10px] uppercase tracking-widest text-velmora-subtle hover:text-velmora-gold transition-colors flex items-center gap-1"
                >
                  <X className="w-3 h-3" /> Clear Filters
                </button>
              )}
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Mobile filter + sort bar */}
            <div className="flex items-center justify-between mb-6 md:mb-8">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(v => !v)}
                className="md:hidden flex items-center gap-2 font-manrope text-xs uppercase tracking-widest text-velmora-muted hover:text-velmora-gold transition-colors"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filter
              </button>

              {/* Sort dropdown */}
              <div className="relative ml-auto">
                <button
                  onClick={() => setSortOpen(v => !v)}
                  className="flex items-center gap-2 font-manrope text-xs uppercase tracking-widest text-velmora-muted hover:text-velmora-gold transition-colors"
                >
                  Sort: {activeSortLabel}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-full mt-2 bg-velmora-surface border border-velmora-border shadow-md z-20 min-w-[180px]">
                    {sortOptions.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => { setFilter('sort', opt.value); setSortOpen(false) }}
                        className={`w-full text-left px-4 py-2.5 font-manrope text-xs transition-colors ${
                          activeSort === opt.value
                            ? 'text-velmora-gold bg-velmora-cream'
                            : 'text-velmora-muted hover:text-velmora-text hover:bg-velmora-cream'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile filter panel */}
            {filterOpen && (
              <div className="md:hidden bg-velmora-cream border border-velmora-border p-5 mb-6 animate-fadeIn">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-manrope text-xs uppercase tracking-widest text-velmora-text">Filters</span>
                  <button onClick={() => setFilterOpen(false)}>
                    <X className="w-4 h-4 text-velmora-muted" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-manrope text-[10px] uppercase tracking-widest text-velmora-subtle mb-2">Category</p>
                    <ul className="flex flex-col gap-2">
                      {categoryOptions.map(opt => (
                        <li key={opt.value}>
                          <button
                            onClick={() => { setFilter('category', opt.value); setFilterOpen(false) }}
                            className={`font-manrope text-xs ${activeCategory === opt.value ? 'text-velmora-gold' : 'text-velmora-muted'}`}
                          >
                            {opt.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-manrope text-[10px] uppercase tracking-widest text-velmora-subtle mb-2">Price</p>
                    <ul className="flex flex-col gap-2">
                      {priceRanges.map(opt => (
                        <li key={opt.value}>
                          <button
                            onClick={() => { setFilter('price', opt.value); setFilterOpen(false) }}
                            className={`font-manrope text-xs ${activePriceRange === opt.value ? 'text-velmora-gold' : 'text-velmora-muted'}`}
                          >
                            {opt.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-velmora-muted">No pieces found</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="mt-4 font-manrope text-xs uppercase tracking-widest text-velmora-gold hover:text-velmora-gold-dark transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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
