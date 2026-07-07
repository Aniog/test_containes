import { useState, useEffect, useRef } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { SlidersHorizontal, X, Star, ShoppingBag, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const categoryOptions = [
  { value: '', label: 'All' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Sets' },
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

function ProductCard({ product }) {
  const { addItem } = useCart()
  return (
    <div className="group flex flex-col">
      <div className="relative overflow-hidden bg-velmora-cream aspect-portrait">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-velmora-gold text-velmora-obsidian font-manrope text-[9px] tracking-widest uppercase px-2 py-0.5">
            Bestseller
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button
            onClick={() => addItem(product, product.variants[0])}
            className="w-full bg-velmora-obsidian/90 backdrop-blur-sm text-velmora-text-light font-manrope text-[10px] tracking-widest uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors duration-300"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </div>
      <div className="pt-3">
        <p className="font-manrope text-[9px] tracking-widest uppercase text-velmora-text-muted mb-1">{product.category}</p>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={`shop-${product.titleId}`}
            className="font-cormorant text-base tracking-widest uppercase text-velmora-text-dark hover:text-velmora-gold transition-colors duration-300 leading-tight"
          >
            {product.name}
          </h3>
        </Link>
        <p id={`shop-${product.descId}`} className="sr-only">{product.shortDesc}</p>
        <div className="flex items-center justify-between mt-1.5">
          <span className="font-manrope text-sm font-medium text-velmora-text-dark">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#C9A96E" stroke="none" />
            <span className="font-manrope text-[10px] text-velmora-text-muted">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)

  const [category, setCategory] = useState(searchParams.get('category') || '')
  const [priceRange, setPriceRange] = useState('')
  const [sort, setSort] = useState('featured')
  const [filterOpen, setFilterOpen] = useState(false)

  useEffect(() => {
    setCategory(searchParams.get('category') || '')
  }, [searchParams])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [category, priceRange, sort])

  const filtered = products
    .filter(p => !category || p.category === category)
    .filter(p => {
      if (!priceRange) return true
      const [min, max] = priceRange.split('-').map(Number)
      return max ? p.price >= min && p.price <= max : p.price >= min
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return 0
    })

  const updateCategory = (val) => {
    setCategory(val)
    if (val) setSearchParams({ category: val })
    else setSearchParams({})
  }

  return (
    <div className="bg-velmora-linen min-h-screen">
      {/* Page header */}
      <div className="bg-velmora-charcoal pt-24 md:pt-28 pb-10 md:pb-14">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="font-manrope text-[10px] tracking-[0.3em] uppercase text-velmora-gold mb-2">
            {category ? categoryOptions.find(c => c.value === category)?.label : 'All Jewelry'}
          </p>
          <h1 className="font-cormorant text-3xl md:text-5xl font-light text-velmora-text-light">
            {category ? categoryOptions.find(c => c.value === category)?.label : 'The Collection'}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-velmora-stone/20">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="flex items-center gap-2 font-manrope text-xs tracking-widest uppercase text-velmora-text-mid hover:text-velmora-gold transition-colors duration-300 md:hidden"
            >
              <SlidersHorizontal size={13} strokeWidth={1.5} />
              Filters
            </button>
            <span className="font-manrope text-xs text-velmora-text-muted">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>

          {/* Sort */}
          <div className="relative flex items-center gap-2">
            <span className="font-manrope text-[10px] tracking-widest uppercase text-velmora-text-muted hidden md:block">Sort:</span>
            <div className="relative">
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="appearance-none bg-transparent border border-velmora-stone/30 font-manrope text-xs text-velmora-text-dark pl-3 pr-8 py-2 focus:outline-none focus:border-velmora-gold cursor-pointer"
              >
                {sortOptions.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-velmora-text-muted pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-24">
              {/* Category filter */}
              <div className="mb-8">
                <h3 className="font-manrope text-[10px] tracking-widest uppercase text-velmora-text-dark mb-4">Category</h3>
                <ul className="flex flex-col gap-2">
                  {categoryOptions.map(opt => (
                    <li key={opt.value}>
                      <button
                        onClick={() => updateCategory(opt.value)}
                        className={`font-manrope text-xs transition-colors duration-200 ${
                          category === opt.value
                            ? 'text-velmora-gold'
                            : 'text-velmora-text-mid hover:text-velmora-gold'
                        }`}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price filter */}
              <div className="mb-8">
                <h3 className="font-manrope text-[10px] tracking-widest uppercase text-velmora-text-dark mb-4">Price</h3>
                <ul className="flex flex-col gap-2">
                  {priceRanges.map(opt => (
                    <li key={opt.value}>
                      <button
                        onClick={() => setPriceRange(opt.value)}
                        className={`font-manrope text-xs transition-colors duration-200 ${
                          priceRange === opt.value
                            ? 'text-velmora-gold'
                            : 'text-velmora-text-mid hover:text-velmora-gold'
                        }`}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Active filters */}
              {(category || priceRange) && (
                <button
                  onClick={() => { updateCategory(''); setPriceRange('') }}
                  className="flex items-center gap-1.5 font-manrope text-[10px] tracking-widest uppercase text-velmora-text-muted hover:text-red-400 transition-colors duration-200"
                >
                  <X size={10} />
                  Clear Filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-velmora-linen animate-slideInRight">
              <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-stone/20">
                <span className="font-manrope text-xs tracking-widest uppercase text-velmora-text-dark">Filters</span>
                <button onClick={() => setFilterOpen(false)}>
                  <X size={18} strokeWidth={1.5} className="text-velmora-text-mid" />
                </button>
              </div>
              <div className="px-6 py-6">
                <div className="mb-8">
                  <h3 className="font-manrope text-[10px] tracking-widest uppercase text-velmora-text-dark mb-4">Category</h3>
                  <ul className="flex flex-col gap-3">
                    {categoryOptions.map(opt => (
                      <li key={opt.value}>
                        <button
                          onClick={() => { updateCategory(opt.value); setFilterOpen(false) }}
                          className={`font-manrope text-sm ${category === opt.value ? 'text-velmora-gold' : 'text-velmora-text-mid'}`}
                        >
                          {opt.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-8">
                  <h3 className="font-manrope text-[10px] tracking-widest uppercase text-velmora-text-dark mb-4">Price</h3>
                  <ul className="flex flex-col gap-3">
                    {priceRanges.map(opt => (
                      <li key={opt.value}>
                        <button
                          onClick={() => { setPriceRange(opt.value); setFilterOpen(false) }}
                          className={`font-manrope text-sm ${priceRange === opt.value ? 'text-velmora-gold' : 'text-velmora-text-mid'}`}
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
          <div ref={containerRef} className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-velmora-text-mid italic mb-4">No pieces found</p>
                <button
                  onClick={() => { updateCategory(''); setPriceRange('') }}
                  className="font-manrope text-xs tracking-widest uppercase text-velmora-gold border-b border-velmora-gold pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
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
