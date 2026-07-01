import { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/components/cart/CartContext'

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const PRICE_RANGES = [
  { value: 'all', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-80', label: '$50 – $80' },
  { value: '80-120', label: '$80 – $120' },
]

const MATERIALS = ['All', '18K Gold Plated', 'Sterling Silver']

export default function ShopPage() {
  const containerRef = useRef(null)
  const [searchParams] = useSearchParams()
  const { addItem } = useCart()

  const [sort, setSort] = useState('featured')
  const [category, setCategory] = useState(searchParams.get('category') || 'all')
  const [priceRange, setPriceRange] = useState('all')
  const [material, setMaterial] = useState('All')
  const [mobileFilters, setMobileFilters] = useState(false)
  const [hoveredId, setHoveredId] = useState(null)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setCategory(cat)
  }, [searchParams])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [category, priceRange, material, sort])

  const filtered = useMemo(() => {
    let result = [...products]

    if (category !== 'all') {
      result = result.filter((p) => p.category === category)
    }

    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number)
      result = result.filter((p) => p.price >= min && p.price <= max)
    }

    if (material !== 'All') {
      result = result.filter((p) => p.material === material)
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
  }, [category, priceRange, material, sort])

  const handleQuickAdd = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'Gold', 1)
  }

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-container mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl tracking-product uppercase">Shop All</h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-xs uppercase tracking-nav font-sans mb-3">Category</h3>
                <div className="space-y-2">
                  {['all', 'earrings', 'necklaces', 'huggies'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`block text-sm transition-colors ${category === cat ? 'text-gold font-medium' : 'text-muted hover:text-base'}`}
                    >
                      {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-xs uppercase tracking-nav font-sans mb-3">Price</h3>
                <div className="space-y-2">
                  {PRICE_RANGES.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => setPriceRange(range.value)}
                      className={`block text-sm transition-colors ${priceRange === range.value ? 'text-gold font-medium' : 'text-muted hover:text-base'}`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs uppercase tracking-nav font-sans mb-3">Material</h3>
                <div className="space-y-2">
                  {MATERIALS.map((m) => (
                    <button
                      key={m}
                      onClick={() => setMaterial(m)}
                      className={`block text-sm transition-colors ${material === m ? 'text-gold font-medium' : 'text-muted hover:text-base'}`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted">{filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setMobileFilters(true)}
                  className="md:hidden flex items-center gap-1.5 text-xs uppercase tracking-nav font-sans text-muted hover:text-base transition-colors"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="text-xs uppercase tracking-nav font-sans bg-transparent border border-divider px-3 py-2 focus:outline-none focus:border-gold"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl">No pieces found</p>
                <p className="text-sm text-muted mt-2">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <div
                    key={product.id}
                    className="group relative"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <Link to={`/product/${product.slug}`} className="block">
                      <div className="relative aspect-[4/5] bg-surface-warm overflow-hidden mb-3">
                        <img
                          data-strk-img-id={`shop-${product.slug}-1`}
                          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                          data-strk-img-ratio="4x5"
                          data-strk-img-width="600"
                          src={product.images[0]}
                          alt={product.name}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoveredId === product.id ? 'opacity-0' : 'opacity-100'}`}
                        />
                        <img
                          data-strk-img-id={`shop-${product.slug}-2`}
                          data-strk-img={`[${product.descId}] [${product.titleId}] jewelry worn`}
                          data-strk-img-ratio="4x5"
                          data-strk-img-width="600"
                          src={product.images[1]}
                          alt={product.name}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`}
                        />
                      </div>
                    </Link>
                    <button
                      onClick={(e) => handleQuickAdd(e, product)}
                      className={`absolute bottom-[calc(0.75rem+40px)] left-0 right-0 z-20 bg-base/90 text-surface py-2.5 flex items-center justify-center gap-2 text-xs uppercase tracking-nav font-sans transition-all duration-300 ${hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                      aria-label={`Quick add ${product.name}`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Quick Add
                    </button>
                    <Link to={`/product/${product.slug}`}>
                      <h3 className="font-serif text-xs md:text-sm uppercase tracking-product leading-tight">{product.name}</h3>
                    </Link>
                    <p className="text-sm font-sans mt-1">${product.price}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilters && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setMobileFilters(false)} />
          <div className="fixed left-0 top-0 h-full w-72 bg-surface z-50 shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs uppercase tracking-nav font-sans">Filters</h3>
              <button onClick={() => setMobileFilters(false)} aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-nav font-sans mb-3">Category</h4>
                <div className="space-y-2">
                  {['all', 'earrings', 'necklaces', 'huggies'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => { setCategory(cat); setMobileFilters(false) }}
                      className={`block text-sm transition-colors ${category === cat ? 'text-gold font-medium' : 'text-muted'}`}
                    >
                      {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-nav font-sans mb-3">Price</h4>
                <div className="space-y-2">
                  {PRICE_RANGES.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => { setPriceRange(range.value); setMobileFilters(false) }}
                      className={`block text-sm transition-colors ${priceRange === range.value ? 'text-gold font-medium' : 'text-muted'}`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-nav font-sans mb-3">Material</h4>
                <div className="space-y-2">
                  {MATERIALS.map((m) => (
                    <button
                      key={m}
                      onClick={() => { setMaterial(m); setMobileFilters(false) }}
                      className={`block text-sm transition-colors ${material === m ? 'text-gold font-medium' : 'text-muted'}`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
