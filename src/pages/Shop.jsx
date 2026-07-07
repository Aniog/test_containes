import { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies']
const priceOptions = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
]
const materialOptions = ['All', '18K Gold Plated']
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
          <img
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            alt={product.name}
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.descId}] [${product.titleId}] worn`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
          <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="w-full bg-stone-900/90 hover:bg-stone-900 text-white text-[11px] tracking-[0.12em] uppercase font-sans py-3 flex items-center justify-center gap-2 transition-colors duration-200"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="mt-3">
        <h3 className="font-serif text-sm tracking-[0.15em] uppercase text-stone-900">{product.name}</h3>
        <p className="text-xs text-stone-500 mt-0.5 font-sans">{product.description}</p>
        <div className="flex items-center gap-2 mt-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-stone-300'}`} />
            ))}
          </div>
          <span className="text-[11px] text-stone-400 font-sans">({product.reviews})</span>
        </div>
        <p className="text-sm font-sans font-medium text-stone-900 mt-1">${product.price}</p>
      </div>
    </div>
  )
}

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const containerRef = useRef(null)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(
    initialCategory.charAt(0).toUpperCase() + initialCategory.slice(1)
  )
  const [priceRange, setPriceRange] = useState(0)
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [category, priceRange, sort])

  const filtered = useMemo(() => {
    let result = [...products]

    if (category !== 'All') {
      result = result.filter((p) => p.category === category.toLowerCase())
    }

    const price = priceOptions[priceRange]
    result = result.filter((p) => p.price >= price.min && p.price <= price.max)

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price)
    else if (sort === 'price-desc') result.sort((a, b) => b.price - a.price)

    return result
  }, [category, priceRange, sort])

  const FilterContent = () => (
    <>
      {/* Category */}
      <div className="mb-8">
        <h3 className="text-xs tracking-[0.12em] uppercase font-sans font-semibold text-stone-900 mb-4">
          Category
        </h3>
        <div className="space-y-2">
          {categoryOptions.map((cat) => (
            <button
              key={cat}
              onClick={() => { setCategory(cat); setMobileFiltersOpen(false) }}
              className={`block text-sm font-sans transition-colors duration-200 ${
                category === cat ? 'text-gold font-medium' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="text-xs tracking-[0.12em] uppercase font-sans font-semibold text-stone-900 mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {priceOptions.map((opt, i) => (
            <button
              key={opt.label}
              onClick={() => { setPriceRange(i); setMobileFiltersOpen(false) }}
              className={`block text-sm font-sans transition-colors duration-200 ${
                priceRange === i ? 'text-gold font-medium' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h3 className="text-xs tracking-[0.12em] uppercase font-sans font-semibold text-stone-900 mb-4">
          Material
        </h3>
        <div className="space-y-2">
          {materialOptions.map((mat) => (
            <button
              key={mat}
              onClick={() => { setMaterial(mat); setMobileFiltersOpen(false) }}
              className={`block text-sm font-sans transition-colors duration-200 ${
                material === mat ? 'text-gold font-medium' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </>
  )

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-20">
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-5xl tracking-[0.05em] text-stone-900">
            The Collection
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-200">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden flex items-center gap-2 text-xs tracking-[0.1em] uppercase font-sans text-stone-600"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <span className="text-xs text-stone-400 font-sans">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-xs font-sans text-stone-600 bg-transparent border-none focus:outline-none cursor-pointer"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-stone-400">No pieces match your filters</p>
                <button
                  onClick={() => { setCategory('All'); setPriceRange(0) }}
                  className="mt-4 text-sm text-gold hover:text-gold-light font-sans transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-xl p-6 overflow-y-auto animate-slide-in-left">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-lg tracking-[0.1em] text-stone-900">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-stone-500" aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
