import { useState, useEffect, useRef } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Star, SlidersHorizontal, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'

const categoryOptions = [
  { value: '', label: 'All' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
]

const priceOptions = [
  { value: '', label: 'Any Price' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-200', label: '$75+' },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

function ShopProductCard({ product }) {
  const { addItem } = useCart()
  return (
    <div className="group flex flex-col">
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-parchment aspect-[3/4] mb-4">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
        />
        {product.tags?.includes('bestseller') && (
          <span className="absolute top-3 left-3 font-sans text-[9px] tracking-widest uppercase bg-champagne text-velvet px-2 py-1">
            Bestseller
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => { e.preventDefault(); addItem(product) }}
            className="w-full bg-velvet/90 text-cream font-sans text-[10px] tracking-widest uppercase py-3 hover:bg-champagne hover:text-velvet transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </Link>
      <p id={product.titleId} className="font-serif text-sm tracking-widest uppercase text-velvet">
        {product.name}
      </p>
      <p id={product.descId} className="font-sans text-[11px] text-stone mt-0.5">{product.shortDesc}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="font-sans text-sm font-medium text-velvet">${product.price}</span>
        <div className="flex items-center gap-1">
          <Star size={10} className="fill-champagne text-champagne" />
          <span className="font-sans text-[10px] text-stone">{product.rating}</span>
        </div>
      </div>
    </div>
  )
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [category, setCategory] = useState(searchParams.get('category') || '')
  const [price, setPrice] = useState('')
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    setCategory(searchParams.get('category') || '')
  }, [searchParams])

  const filtered = products
    .filter(p => !category || p.category === category)
    .filter(p => {
      if (!price) return true
      const [min, max] = price.split('-').map(Number)
      return p.price >= min && p.price <= (max || Infinity)
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return 0
    })

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [category, price, sort])

  const FilterPanel = () => (
    <div className="space-y-8">
      <div>
        <p className="font-sans text-[10px] tracking-widest uppercase text-velvet mb-4">Category</p>
        <ul className="space-y-2">
          {categoryOptions.map(opt => (
            <li key={opt.value}>
              <button
                onClick={() => {
                  setCategory(opt.value)
                  setSearchParams(opt.value ? { category: opt.value } : {})
                  setMobileFiltersOpen(false)
                }}
                className={`font-sans text-xs transition-colors ${
                  category === opt.value ? 'text-champagne font-medium' : 'text-stone hover:text-velvet'
                }`}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-blush pt-6">
        <p className="font-sans text-[10px] tracking-widest uppercase text-velvet mb-4">Price</p>
        <ul className="space-y-2">
          {priceOptions.map(opt => (
            <li key={opt.value}>
              <button
                onClick={() => { setPrice(opt.value); setMobileFiltersOpen(false) }}
                className={`font-sans text-xs transition-colors ${
                  price === opt.value ? 'text-champagne font-medium' : 'text-stone hover:text-velvet'
                }`}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-blush pt-6">
        <p className="font-sans text-[10px] tracking-widest uppercase text-velvet mb-4">Material</p>
        <ul className="space-y-2">
          {['18K Gold Plated', 'Silver Tone'].map(m => (
            <li key={m}>
              <button className="font-sans text-xs text-stone hover:text-velvet transition-colors">
                {m}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="bg-cream min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-parchment border-b border-blush py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-[10px] tracking-widest3 uppercase text-champagne mb-2">
            {category ? categoryOptions.find(c => c.value === category)?.label : 'All Pieces'}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-velvet">
            {category ? categoryOptions.find(c => c.value === category)?.label : 'The Collection'}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-blush">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-stone hover:text-velvet transition-colors"
            >
              <SlidersHorizontal size={14} />
              Filters
            </button>
            <span className="font-sans text-xs text-stone">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-sans text-[10px] tracking-widest uppercase text-stone hidden sm:block">Sort:</span>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="font-sans text-xs text-velvet bg-transparent border border-blush px-3 py-2 focus:outline-none focus:border-champagne cursor-pointer"
            >
              {sortOptions.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterPanel />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-velvet mb-3">No pieces found</p>
                <p className="font-sans text-sm text-stone">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {filtered.map(p => (
                  <ShopProductCard key={p.id} product={p} />
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
            className="fixed inset-0 bg-velvet/40 z-50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-72 bg-cream z-50 p-6 overflow-y-auto shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <span className="font-sans text-xs tracking-widest uppercase text-velvet">Filters</span>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={20} className="text-stone" />
              </button>
            </div>
            <FilterPanel />
          </div>
        </>
      )}
    </div>
  )
}
