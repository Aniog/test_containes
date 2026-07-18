import { useState, useEffect, useRef } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
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

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)
  const { addItem } = useCart()

  const [mobileFilters, setMobileFilters] = useState(false)
  const [category, setCategory] = useState(searchParams.get('category') || 'All')
  const [priceRange, setPriceRange] = useState(0)
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const [hoveredId, setHoveredId] = useState(null)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setCategory(cat)
  }, [searchParams])

  useEffect(() => {
    if (containerRef.current) {
      requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
    }
  }, [category, priceRange, sort])

  const filtered = products
    .filter((p) => category === 'All' || p.category === category)
    .filter((p) => p.price >= priceOptions[priceRange].min && p.price <= priceOptions[priceRange].max)
    .filter((p) => material === 'All' || p.material === material)

  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'price-asc') return a.price - b.price
    if (sort === 'price-desc') return b.price - a.price
    return 0
  })

  const handleCategoryChange = (cat) => {
    setCategory(cat)
    if (cat === 'All') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  const FilterSidebar = ({ mobile = false }) => (
    <div className={mobile ? '' : 'sticky top-28'}>
      {!mobile && (
        <h3 className="font-sans text-xs tracking-wide uppercase text-brand-gold mb-6">Filters</h3>
      )}

      {/* Category */}
      <div className="mb-6">
        <h4 className="font-sans text-xs tracking-wide uppercase text-brand-charcoal mb-3">Category</h4>
        <div className="space-y-2">
          {categoryOptions.map((cat) => (
            <button
              key={cat}
              onClick={() => { handleCategoryChange(cat); if (mobile) setMobileFilters(false) }}
              className={`block font-sans text-sm transition-colors ${
                category === cat ? 'text-brand-gold' : 'text-brand-muted hover:text-brand-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h4 className="font-sans text-xs tracking-wide uppercase text-brand-charcoal mb-3">Price</h4>
        <div className="space-y-2">
          {priceOptions.map((opt, i) => (
            <button
              key={opt.label}
              onClick={() => { setPriceRange(i); if (mobile) setMobileFilters(false) }}
              className={`block font-sans text-sm transition-colors ${
                priceRange === i ? 'text-brand-gold' : 'text-brand-muted hover:text-brand-charcoal'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-6">
        <h4 className="font-sans text-xs tracking-wide uppercase text-brand-charcoal mb-3">Material</h4>
        <div className="space-y-2">
          {materialOptions.map((mat) => (
            <button
              key={mat}
              onClick={() => { setMaterial(mat); if (mobile) setMobileFilters(false) }}
              className={`block font-sans text-sm transition-colors ${
                material === mat ? 'text-brand-gold' : 'text-brand-muted hover:text-brand-charcoal'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="pt-20 md:pt-24">
      {/* Page header */}
      <div className="section-padding py-10 md:py-14 text-center">
        <h1 className="font-serif text-heading md:text-4xl text-brand-charcoal font-light">
          {category === 'All' ? 'All Jewelry' : category}
        </h1>
        <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
      </div>

      <div className="section-padding pb-16 md:pb-24">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFilters(true)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-wide uppercase text-brand-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <span className="hidden md:block font-sans text-xs text-brand-muted">
            {sorted.length} {sorted.length === 1 ? 'piece' : 'pieces'}
          </span>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent font-sans text-xs tracking-wide uppercase text-brand-charcoal pr-6 cursor-pointer focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-brand-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <div className="hidden md:block w-48 flex-shrink-0">
            <FilterSidebar />
          </div>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {sorted.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-brand-muted">No pieces match your filters</p>
                <button
                  onClick={() => { setCategory('All'); setPriceRange(0); setMaterial('All') }}
                  className="btn-outline mt-4"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {sorted.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-brand-warm mb-3">
                      <img
                        data-strk-img-id={`shop-${product.imgId}`}
                        data-strk-img={`[${product.descId}] [${product.titleId}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {hoveredId === product.id && product.images[1] && (
                        <img
                          data-strk-img-id={`shop-${product.images[1].imgId}`}
                          data-strk-img={`[${product.descId}] [${product.titleId}] alternate`}
                          data-strk-img-ratio={product.images[1].ratio}
                          data-strk-img-width={product.images[1].width}
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={`${product.name} alternate`}
                          className="absolute inset-0 w-full h-full object-cover animate-fade-in"
                        />
                      )}
                      <button
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); addItem(product) }}
                        className="absolute bottom-3 left-3 right-3 bg-white/90 text-brand-charcoal font-sans text-[10px] tracking-wide uppercase py-2.5 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-gold hover:text-white"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Add to Cart
                      </button>
                    </div>
                    <h3 className="font-product-name text-brand-charcoal">{product.name}</h3>
                    <p className="font-sans text-sm text-brand-muted mt-1">${product.price}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilters && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFilters(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-brand-cream p-6 overflow-y-auto animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-sans text-xs tracking-wide uppercase text-brand-gold">Filters</h3>
              <button onClick={() => setMobileFilters(false)} className="text-brand-muted">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar mobile />
          </div>
        </div>
      )}
    </div>
  )
}
