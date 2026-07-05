import { useState, useMemo, useEffect, useRef } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/StarRating'

const categories = [
  { label: 'Earrings', value: 'earrings' },
  { label: 'Necklaces', value: 'necklaces' },
  { label: 'Huggies', value: 'huggies' },
  { label: 'Gift Sets', value: 'sets' },
]

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
]

export default function ShopPage({ products }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)
  const navigate = useNavigate()
  const { addItem } = useCart()

  const initialCategory = searchParams.get('category') || ''
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setSelectedCategories([cat])
  }, [searchParams])

  useEffect(() => {
    if (containerRef.current) {
      const frame = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => cancelAnimationFrame(frame)
    }
  }, [selectedCategories, selectedPrice, sortBy])

  const filtered = useMemo(() => {
    let list = [...products]

    if (selectedCategories.length > 0) {
      list = list.filter((p) => {
        const d = p.data || p
        return selectedCategories.includes(d.category)
      })
    }

    if (selectedPrice) {
      const [min, max] = selectedPrice
      list = list.filter((p) => {
        const d = p.data || p
        return d.price >= min && d.price <= max
      })
    }

    switch (sortBy) {
      case 'price-asc':
        list.sort((a, b) => {
          const pa = (a.data || a).price
          const pb = (b.data || b).price
          return pa - pb
        })
        break
      case 'price-desc':
        list.sort((a, b) => {
          const pa = (a.data || a).price
          const pb = (b.data || b).price
          return pb - pa
        })
        break
      case 'rating':
        list.sort((a, b) => {
          const ra = (a.data || a).rating || 0
          const rb = (b.data || b).rating || 0
          return rb - ra
        })
        break
      default:
        break
    }

    return list
  }, [products, selectedCategories, selectedPrice, sortBy])

  const toggleCategory = (val) => {
    setSelectedCategories((prev) =>
      prev.includes(val) ? prev.filter((c) => c !== val) : [...prev, val]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedPrice(null)
    setSearchParams({})
  }

  const activeFilterCount =
    selectedCategories.length + (selectedPrice ? 1 : 0)

  return (
    <div ref={containerRef}>
      <div className="section-padding pt-24 md:pt-32 pb-16 md:pb-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-12">
          <div>
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-vmuted mb-2">
              Velmora Collection
            </p>
            <h1 className="font-serif text-3xl md:text-4xl font-light text-vtext">
              Shop All
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="md:hidden flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-vtext border border-vborder px-4 py-2"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <SlidersHorizontal size={14} />
              Filter
              {activeFilterCount > 0 && (
                <span className="bg-vgold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-vborder font-sans text-xs tracking-wider uppercase text-vtext px-4 pr-8 py-2 focus:outline-none focus:border-vgold"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={14}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-vmuted"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-sans text-xs font-medium tracking-widest uppercase text-vtext">
                Filters
              </h3>
              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="font-sans text-[11px] text-vmuted hover:text-vtext underline"
                >
                  Clear all
                </button>
              )}
            </div>

            {/* Category */}
            <div className="mb-6">
              <p className="font-sans text-[11px] tracking-widest uppercase text-vmuted mb-3">
                Category
              </p>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <label
                    key={cat.value}
                    className="flex items-center gap-2.5 cursor-pointer group"
                  >
                    <div
                      className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${
                        selectedCategories.includes(cat.value)
                          ? 'bg-vtext border-vtext'
                          : 'border-vborder group-hover:border-vmuted'
                      }`}
                    >
                      {selectedCategories.includes(cat.value) && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path
                            d="M1 4L3.5 6.5L9 1"
                            stroke="white"
                            strokeWidth="1.5"
                          />
                        </svg>
                      )}
                    </div>
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={selectedCategories.includes(cat.value)}
                      onChange={() => toggleCategory(cat.value)}
                    />
                    <span className="font-sans text-sm text-vtext">
                      {cat.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <p className="font-sans text-[11px] tracking-widest uppercase text-vmuted mb-3">
                Price
              </p>
              <div className="flex flex-col gap-2">
                {priceRanges.map((range) => (
                  <label
                    key={range.label}
                    className="flex items-center gap-2.5 cursor-pointer group"
                  >
                    <div
                      className={`w-4 h-4 border rounded-full flex items-center justify-center transition-colors ${
                        selectedPrice?.[0] === range.min
                          ? 'border-vtext'
                          : 'border-vborder group-hover:border-vmuted'
                      }`}
                    >
                      {selectedPrice?.[0] === range.min && (
                        <div className="w-2 h-2 bg-vtext rounded-full" />
                      )}
                    </div>
                    <input
                      type="radio"
                      name="price"
                      className="sr-only"
                      checked={selectedPrice?.[0] === range.min}
                      onChange={() =>
                        setSelectedPrice([range.min, range.max])
                      }
                    />
                    <span className="font-sans text-sm text-vtext">
                      {range.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <p className="font-sans text-xs text-vmuted mb-5">
              {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
            </p>

            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl text-vtext">
                  No products match your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 font-sans text-sm text-vgold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => {
                  const p = product.data || product
                  return (
                    <div key={p.id} className="group">
                      <div
                        className="relative aspect-[3/4] bg-vborder/40 rounded-sm overflow-hidden mb-3 cursor-pointer"
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        <img
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={p.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="hidden md:flex absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 items-end justify-center pb-4 pointer-events-none">
                          <button
                            type="button"
                            className="pointer-events-auto translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-vtext font-sans text-[11px] tracking-wider uppercase px-5 py-2.5 shadow-sm"
                            onClick={(e) => {
                              e.stopPropagation()
                              addItem(p)
                            }}
                          >
                            Quick Add
                          </button>
                        </div>
                      </div>
                      {/* Mobile quick add */}
                      <button
                        type="button"
                        className="md:hidden w-full mt-1 mb-2 font-sans text-[11px] tracking-wider uppercase py-2 border border-vborder text-vtext active:bg-vborder/50 transition-colors"
                        onClick={() => addItem(p)}
                      >
                        Quick Add
                      </button>
                      <div className="flex items-center gap-1.5 mb-1">
                        <StarRating rating={p.rating || 0} size={11} />
                        <span className="font-sans text-[10px] text-vmuted">
                          ({p.review_count || 0})
                        </span>
                      </div>
                      <Link to={`/product/${p.slug}`}>
                        <h3 className="font-sans text-xs font-medium uppercase tracking-widest text-vtext mb-1">
                          {p.name}
                        </h3>
                      </Link>
                      <p className="font-sans text-sm text-vmuted">
                        ${p.price.toFixed(2)}
                      </p>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 z-[60] bg-black/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-[70] w-[280px] bg-vbg shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-sans text-xs font-medium tracking-widest uppercase text-vtext">
                Filters
              </h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={18} />
              </button>
            </div>

            {/* Category */}
            <div className="mb-6">
              <p className="font-sans text-[11px] tracking-widest uppercase text-vmuted mb-3">
                Category
              </p>
              <div className="flex flex-col gap-2.5">
                {categories.map((cat) => (
                  <label key={cat.value} className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat.value)}
                      onChange={() => toggleCategory(cat.value)}
                      className="w-4 h-4 accent-vtext"
                    />
                    <span className="font-sans text-sm text-vtext">
                      {cat.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <p className="font-sans text-[11px] tracking-widest uppercase text-vmuted mb-3">
                Price
              </p>
              <div className="flex flex-col gap-2.5">
                {priceRanges.map((range) => (
                  <label key={range.label} className="flex items-center gap-2.5">
                    <input
                      type="radio"
                      name="mobile-price"
                      checked={selectedPrice?.[0] === range.min}
                      onChange={() => setSelectedPrice([range.min, range.max])}
                      className="w-4 h-4 accent-vtext"
                    />
                    <span className="font-sans text-sm text-vtext">
                      {range.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                clearFilters()
                setMobileFiltersOpen(false)
              }}
              className="w-full btn-outline mb-3"
            >
              Clear All
            </button>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full btn-primary"
            >
              Show {filtered.length} Products
            </button>
          </div>
        </>
      )}
    </div>
  )
}
