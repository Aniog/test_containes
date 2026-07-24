import { useState, useEffect, useRef } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { SlidersHorizontal, X, ShoppingBag, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'

const categoryOptions = [
  { value: '', label: 'All' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
]

const priceRanges = [
  { value: '', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-150', label: '$75+' },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterOpen, setFilterOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || '')
  const [activePriceRange, setActivePriceRange] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const containerRef = useRef(null)
  const { addItem } = useCart()

  useEffect(() => {
    setActiveCategory(searchParams.get('category') || '')
  }, [searchParams])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeCategory, activePriceRange, sortBy])

  const filtered = products
    .filter(p => !activeCategory || p.category === activeCategory)
    .filter(p => {
      if (!activePriceRange) return true
      const [min, max] = activePriceRange.split('-').map(Number)
      return max ? p.price >= min && p.price <= max : p.price >= min
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

  const handleCategoryChange = (val) => {
    setActiveCategory(val)
    if (val) setSearchParams({ category: val })
    else setSearchParams({})
  }

  const activeFiltersCount = [activeCategory, activePriceRange].filter(Boolean).length

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <CartDrawer />

      <main className="pt-16 md:pt-20">
        {/* Page header */}
        <div className="bg-ivory-dark border-b border-champagne/10 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <p className="font-sans text-xs tracking-widest uppercase text-champagne mb-3">
              {activeCategory ? categoryOptions.find(c => c.value === activeCategory)?.label : 'All Pieces'}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-ink tracking-wide">
              {activeCategory
                ? categoryOptions.find(c => c.value === activeCategory)?.label
                : 'The Collection'
              }
            </h1>
            <p className="font-sans text-sm text-warm-gray mt-3">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
          {/* Filter bar */}
          <div className="flex items-center justify-between mb-8 pb-5 border-b border-champagne/10">
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-ink hover:text-champagne transition-colors duration-200"
            >
              <SlidersHorizontal size={14} />
              Filter
              {activeFiltersCount > 0 && (
                <span className="bg-champagne text-obsidian text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            <div className="flex items-center gap-2">
              <span className="font-sans text-xs text-warm-gray hidden md:block">Sort by:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-champagne/30 text-ink font-sans text-xs tracking-wide px-4 py-2 pr-8 focus:outline-none focus:border-champagne cursor-pointer"
                >
                  {sortOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-warm-gray pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Filter panel */}
          {filterOpen && (
            <div className="mb-8 p-6 bg-ivory-dark border border-champagne/10 animate-fadeIn">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Category filter */}
                <div className="flex-1">
                  <p className="font-sans text-xs tracking-widest uppercase text-ink mb-4">Category</p>
                  <div className="flex flex-wrap gap-2">
                    {categoryOptions.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => handleCategoryChange(opt.value)}
                        className={`font-sans text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
                          activeCategory === opt.value
                            ? 'border-champagne bg-champagne text-obsidian'
                            : 'border-champagne/30 text-ink hover:border-champagne'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price filter */}
                <div className="flex-1">
                  <p className="font-sans text-xs tracking-widest uppercase text-ink mb-4">Price</p>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => setActivePriceRange(opt.value)}
                        className={`font-sans text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
                          activePriceRange === opt.value
                            ? 'border-champagne bg-champagne text-obsidian'
                            : 'border-champagne/30 text-ink hover:border-champagne'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear */}
                {activeFiltersCount > 0 && (
                  <div className="flex items-end">
                    <button
                      onClick={() => { handleCategoryChange(''); setActivePriceRange('') }}
                      className="flex items-center gap-1.5 font-sans text-xs text-warm-gray hover:text-champagne transition-colors duration-200"
                    >
                      <X size={12} />
                      Clear all
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Product grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-serif text-2xl text-ink/50 font-light mb-4">No pieces found</p>
              <button
                onClick={() => { handleCategoryChange(''); setActivePriceRange('') }}
                className="font-sans text-xs tracking-widest uppercase text-champagne border border-champagne px-6 py-3 hover:bg-champagne hover:text-obsidian transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filtered.map(product => (
                <ShopProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={() => addItem(product, product.variants[0])}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

function ShopProductCard({ product, onAddToCart }) {
  return (
    <div className="group">
      <Link to={`/product/${product.slug}`}>
        <div className="relative overflow-hidden bg-ivory-dark aspect-[3/4] mb-4">
          <img
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
          />
          <img
            data-strk-img-id={`shop-${product.imgId2}`}
            data-strk-img={`[shop-${product.titleId}] [shop-${product.descId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-700 group-hover:opacity-100 group-hover:scale-100"
          />

          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.tags.includes('bestseller') && (
              <span className="bg-champagne text-obsidian font-sans text-[9px] tracking-widest uppercase px-2 py-1">
                Bestseller
              </span>
            )}
            {product.tags.includes('new') && (
              <span className="bg-obsidian text-ivory font-sans text-[9px] tracking-widest uppercase px-2 py-1">
                New
              </span>
            )}
          </div>

          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => { e.preventDefault(); onAddToCart() }}
              className="w-full bg-obsidian/90 backdrop-blur-sm text-ivory font-sans text-[10px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-champagne hover:text-obsidian transition-colors duration-200"
            >
              <ShoppingBag size={12} />
              Quick Add
            </button>
          </div>
        </div>
      </Link>

      <p id={`shop-${product.descId}`} className="sr-only">{product.shortDesc}</p>
      <Link to={`/product/${product.slug}`}>
        <h3 id={`shop-${product.titleId}`} className="font-serif text-sm tracking-widest uppercase text-ink hover:text-champagne transition-colors duration-200 leading-tight">
          {product.name}
        </h3>
      </Link>
      <div className="flex items-center justify-between mt-1.5">
        <span className="font-sans text-sm text-warm-gray">${product.price}</span>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-champagne text-xs">★</span>
          ))}
        </div>
      </div>
    </div>
  )
}
