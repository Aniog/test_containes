import { useState, useMemo, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

const categoryFilters = ['All', 'Earrings', 'Necklaces', 'Huggies']
const priceFilters = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]
const materialFilters = ['18K Gold Plated', 'Sterling Silver']

function ProductCard({ product }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3x4] overflow-hidden bg-brand-warm">
          <img
            alt={product.name}
            data-strk-img-id={`${product.imgId}-shop`}
            data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className={`w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <div className={`absolute inset-0 bg-brand-sand flex items-center justify-center transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
            <span className="font-serif text-sm text-brand-warm-gray italic">{product.name}</span>
          </div>
        </div>
      </Link>

      <button
        onClick={() => addItem(product, 'gold', 1)}
        className={`absolute bottom-3 left-3 right-3 bg-white/95 text-brand-charcoal font-sans text-[10px] uppercase tracking-extra-wide py-2.5 flex items-center justify-center gap-2 transition-all duration-300 hover:bg-brand-gold hover:text-white ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        Add to Cart
      </button>

      <div className="mt-3">
        <h3 id={product.titleId} className="font-serif text-xs uppercase tracking-ultra-wide text-brand-charcoal">
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">{product.description}</p>
        <p className="font-sans text-sm text-brand-warm-gray mt-1">${product.price}</p>
      </div>
    </div>
  )
}

export default function Shop() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(
    categoryFilters.find((c) => c.toLowerCase() === initialCategory.toLowerCase()) || 'All'
  )
  const [priceRange, setPriceRange] = useState(null)
  const [material, setMaterial] = useState(null)
  const [sort, setSort] = useState('featured')
  const [mobileFilters, setMobileFilters] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [category, priceRange, sort])

  const filtered = useMemo(() => {
    let result = [...products]

    if (category !== 'All') {
      result = result.filter((p) => p.category === category.toLowerCase())
    }
    if (priceRange) {
      result = result.filter((p) => p.price >= priceRange.min && p.price < priceRange.max)
    }
    if (material) {
      result = result.filter((p) => p.material === material)
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        result.reverse()
        break
      default:
        break
    }

    return result
  }, [category, priceRange, material, sort])

  const clearFilters = () => {
    setCategory('All')
    setPriceRange(null)
    setMaterial(null)
  }

  const hasFilters = category !== 'All' || priceRange || material

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-light text-brand-charcoal tracking-wide">
            The Collection
          </h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-sand">
          <button
            onClick={() => setMobileFilters(!mobileFilters)}
            className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-wide text-brand-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="hidden md:block font-sans text-xs text-brand-warm-gray">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="flex items-center gap-3">
            <label className="font-sans text-xs text-brand-warm-gray" htmlFor="sort">Sort:</label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="font-sans text-xs text-brand-charcoal bg-transparent border-none focus:outline-none cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters - desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="space-y-8">
              {/* Category */}
              <div>
                <h3 className="font-sans text-[11px] uppercase tracking-extra-wide text-brand-charcoal mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  {categoryFilters.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`block font-sans text-sm transition-colors ${
                        category === cat ? 'text-brand-gold' : 'text-brand-warm-gray hover:text-brand-charcoal'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="font-sans text-[11px] uppercase tracking-extra-wide text-brand-charcoal mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceFilters.map((pf) => (
                    <button
                      key={pf.label}
                      onClick={() => setPriceRange(priceRange?.label === pf.label ? null : pf)}
                      className={`block font-sans text-sm transition-colors ${
                        priceRange?.label === pf.label ? 'text-brand-gold' : 'text-brand-warm-gray hover:text-brand-charcoal'
                      }`}
                    >
                      {pf.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="font-sans text-[11px] uppercase tracking-extra-wide text-brand-charcoal mb-4">
                  Material
                </h3>
                <div className="space-y-2">
                  {materialFilters.map((m) => (
                    <button
                      key={m}
                      onClick={() => setMaterial(material === m ? null : m)}
                      className={`block font-sans text-sm transition-colors ${
                        material === m ? 'text-brand-gold' : 'text-brand-warm-gray hover:text-brand-charcoal'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="font-sans text-xs uppercase tracking-wide text-brand-warm-gray hover:text-brand-charcoal transition-colors flex items-center gap-1"
                >
                  <X className="w-3 h-3" />
                  Clear all
                </button>
              )}
            </div>
          </aside>

          {/* Mobile filters */}
          {mobileFilters && (
            <div className="md:hidden fixed inset-0 z-40 bg-black/30" onClick={() => setMobileFilters(false)}>
              <div
                className="absolute left-0 top-0 h-full w-72 bg-brand-pale p-6 overflow-y-auto animate-fade-in"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-sans text-xs uppercase tracking-extra-wide text-brand-charcoal">Filters</h3>
                  <button onClick={() => setMobileFilters(false)} aria-label="Close filters">
                    <X className="w-5 h-5 text-brand-warm-gray" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-sans text-[11px] uppercase tracking-extra-wide text-brand-charcoal mb-3">Category</h4>
                    <div className="space-y-2">
                      {categoryFilters.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setCategory(cat)}
                          className={`block font-sans text-sm ${category === cat ? 'text-brand-gold' : 'text-brand-warm-gray'}`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-sans text-[11px] uppercase tracking-extra-wide text-brand-charcoal mb-3">Price</h4>
                    <div className="space-y-2">
                      {priceFilters.map((pf) => (
                        <button
                          key={pf.label}
                          onClick={() => setPriceRange(priceRange?.label === pf.label ? null : pf)}
                          className={`block font-sans text-sm ${priceRange?.label === pf.label ? 'text-brand-gold' : 'text-brand-warm-gray'}`}
                        >
                          {pf.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  {hasFilters && (
                    <button onClick={clearFilters} className="font-sans text-xs uppercase tracking-wide text-brand-warm-gray flex items-center gap-1">
                      <X className="w-3 h-3" /> Clear all
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-charcoal mb-3">No pieces found</p>
                <p className="font-sans text-sm text-brand-warm-gray">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
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
