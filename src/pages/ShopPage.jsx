import { useState, useMemo, useEffect, useRef } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { SlidersHorizontal, X, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/common/StarRating'

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
]

const CATEGORIES = ['earrings', 'necklaces', 'huggies', 'sets']
const MATERIALS = ['gold']
const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $100', min: 50, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

function ShopProductCard({ product }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden">
          <img
            data-strk-img-id={`shop-grid-${product.id}`}
            data-strk-img={`[shop-grid-${product.id}-name] demi-fine gold jewelry product`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 800'/%3E`}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-velmora-deep/30 via-transparent to-transparent flex items-end p-4 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={(e) => {
                e.preventDefault()
                addItem(product)
              }}
              className="w-full py-2.5 bg-white/95 text-velmora-deep text-[10px] tracking-[0.12em] uppercase font-medium flex items-center justify-center gap-2 hover:bg-white transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Quick Add
            </button>
          </div>
        </div>
        <div className="mt-4 space-y-1">
          <h3
            id={`shop-grid-${product.id}-name`}
            className="font-serif text-sm tracking-[0.1em] uppercase text-velmora-deep"
          >
            {product.name}
          </h3>
          <p className="text-xs text-velmora-taupe capitalize">{product.category}</p>
          <StarRating rating={product.rating} reviews={product.reviews} />
          <p className="text-sm font-medium text-velmora-charcoal">${product.price}</p>
        </div>
      </Link>
    </div>
  )
}

export default function ShopPage() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [sort, setSort] = useState('featured')
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  const activeCategory = searchParams.get('category') || ''
  const [filters, setFilters] = useState({
    category: activeCategory,
    price: '',
    material: '',
  })

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  useEffect(() => {
    setFilters((f) => ({ ...f, category: searchParams.get('category') || '' }))
  }, [searchParams])

  const filtered = useMemo(() => {
    let result = [...products]

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category)
    }
    if (filters.material) {
      result = result.filter((p) => p.material === filters.material)
    }
    if (filters.price) {
      const range = PRICE_RANGES.find((r) => r.label === filters.price)
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max)
      }
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return result
  }, [filters, sort])

  const clearFilters = () => {
    setFilters({ category: '', price: '', material: '' })
    setSearchParams({})
  }

  const hasFilters = filters.category || filters.price || filters.material

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-[10px] tracking-[0.15em] uppercase font-semibold mb-4">Category</h4>
        <div className="space-y-2.5">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => {
                setFilters((f) => ({ ...f, category: f.category === c ? '' : c }))
                setSearchParams(filters.category === c ? {} : { category: c })
              }}
              className={`block text-sm capitalize transition-colors ${
                filters.category === c ? 'text-velmora-deep font-medium' : 'text-velmora-taupe hover:text-velmora-deep'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-[10px] tracking-[0.15em] uppercase font-semibold mb-4">Price</h4>
        <div className="space-y-2.5">
          {PRICE_RANGES.map((r) => (
            <button
              key={r.label}
              onClick={() => setFilters((f) => ({ ...f, price: f.price === r.label ? '' : r.label }))}
              className={`block text-sm transition-colors ${
                filters.price === r.label ? 'text-velmora-deep font-medium' : 'text-velmora-taupe hover:text-velmora-deep'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-[10px] tracking-[0.15em] uppercase font-semibold mb-4">Material</h4>
        <div className="space-y-2.5">
          {MATERIALS.map((m) => (
            <button
              key={m}
              onClick={() => setFilters((f) => ({ ...f, material: f.material === m ? '' : m }))}
              className={`block text-sm capitalize transition-colors ${
                filters.material === m ? 'text-velmora-deep font-medium' : 'text-velmora-taupe hover:text-velmora-deep'
              }`}
            >
              18K Gold Plated
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-[10px] tracking-[0.12em] uppercase text-velmora-taupe underline underline-offset-4 hover:text-velmora-deep transition-colors"
        >
          Clear all
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="pt-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl tracking-tight">
              {filters.category ? filters.category.charAt(0).toUpperCase() + filters.category.slice(1) : 'Shop All'}
            </h1>
            <p className="mt-1 text-sm text-velmora-taupe">{filtered.length} products</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="md:hidden flex items-center gap-2 text-xs tracking-[0.08em] uppercase"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filter
            </button>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-xs tracking-[0.06em] bg-transparent border-b border-velmora-sand py-1.5 pr-6 text-velmora-charcoal focus:outline-none cursor-pointer"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-[200px] flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-taupe text-sm">No products match your filters.</p>
                <button onClick={clearFilters} className="mt-3 text-xs underline underline-offset-4 text-velmora-taupe hover:text-velmora-deep">
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {filtered.map((p) => (
                  <ShopProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-velmora-deep/30" onClick={() => setMobileFilterOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-72 bg-velmora-cream shadow-2xl p-6 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-lg tracking-[0.06em]">Filters</h3>
              <button onClick={() => setMobileFilterOpen(false)}><X className="w-5 h-5" /></button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}
    </div>
  )
}
