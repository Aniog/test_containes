import { useState, useMemo, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

const categoryFilters = ['All', 'Earrings', 'Necklaces', 'Huggies']
const priceFilters = ['All', 'Under $50', '$50–$75', 'Over $75']
const materialFilters = ['All', '18K Gold Plated']

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3 h-3 ${star <= Math.round(rating) ? 'text-gold' : 'text-warm-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(
    categoryFilters.find((c) => c.toLowerCase() === initialCategory.toLowerCase()) || 'All'
  )
  const [priceRange, setPriceRange] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const [mobileFilters, setMobileFilters] = useState(false)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [category, priceRange, material, sort])

  const filtered = useMemo(() => {
    let result = [...products]

    if (category !== 'All') {
      result = result.filter((p) => p.category === category.toLowerCase())
    }
    if (priceRange === 'Under $50') {
      result = result.filter((p) => p.price < 50)
    } else if (priceRange === '$50–$75') {
      result = result.filter((p) => p.price >= 50 && p.price <= 75)
    } else if (priceRange === 'Over $75') {
      result = result.filter((p) => p.price > 75)
    }

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price)
    else if (sort === 'price-desc') result.sort((a, b) => b.price - a.price)

    return result
  }, [category, priceRange, material, sort])

  const FilterSection = ({ title, options, value, onChange }) => (
    <div className="mb-6">
      <p className="font-sans text-xs tracking-product uppercase text-warm-500 mb-3">{title}</p>
      <div className="space-y-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`block w-full text-left font-sans text-sm transition-colors ${
              value === opt ? 'text-espresso font-medium' : 'text-warm-400 hover:text-espresso'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <div className="bg-cream pt-24 md:pt-28 pb-20 md:pb-28">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-espresso">The Collection</h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFilters(!mobileFilters)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-product uppercase text-espresso"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <p className="hidden md:block font-sans text-sm text-warm-400">{filtered.length} pieces</p>
          <div className="flex items-center gap-2">
            <label className="font-sans text-xs text-warm-400">Sort:</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="font-sans text-sm text-espresso bg-transparent border-b border-warm-300 focus:outline-none focus:border-gold py-1 pr-6"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div ref={containerRef} className="flex gap-8 md:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterSection title="Category" options={categoryFilters} value={category} onChange={setCategory} />
            <FilterSection title="Price" options={priceFilters} value={priceRange} onChange={setPriceRange} />
            <FilterSection title="Material" options={materialFilters} value={material} onChange={setMaterial} />
          </aside>

          {/* Mobile filters */}
          {mobileFilters && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-espresso/40" onClick={() => setMobileFilters(false)} />
              <div className="absolute top-0 left-0 h-full w-72 bg-cream p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <p className="font-sans text-sm tracking-product uppercase text-espresso font-medium">Filters</p>
                  <button onClick={() => setMobileFilters(false)} className="text-warm-400">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterSection title="Category" options={categoryFilters} value={category} onChange={setCategory} />
                <FilterSection title="Price" options={priceFilters} value={priceRange} onChange={setPriceRange} />
                <FilterSection title="Material" options={materialFilters} value={material} onChange={setMaterial} />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-espresso">No pieces found</p>
                <p className="font-sans text-sm text-warm-400 mt-2">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="group">
                    <div className="relative aspect-[3x4] bg-warm-100 overflow-hidden mb-3">
                      <img
                        alt={product.name}
                        data-strk-img-id={`${product.imgId}-shop`}
                        data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                      />
                      <img
                        alt={product.name}
                        data-strk-img-id={`${product.imgId}-shop-hover`}
                        data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry worn model`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          addItem(product)
                        }}
                        className="absolute bottom-0 left-0 right-0 bg-espresso/90 text-white font-sans text-[10px] tracking-product uppercase py-2.5 flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-espresso"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Add to Cart
                      </button>
                    </div>
                    <h3
                      id={product.titleId}
                      className="font-serif text-xs md:text-sm tracking-product uppercase text-espresso group-hover:text-gold transition-colors"
                    >
                      {product.name}
                    </h3>
                    <p id={product.descId} className="sr-only">{product.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <StarRating rating={product.rating} />
                      <span className="text-[10px] text-warm-400 font-sans">({product.reviews})</span>
                    </div>
                    <p className="font-sans text-sm font-medium text-espresso mt-1">{formatPrice(product.price)}</p>
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
