import { useState, useEffect, useMemo, useRef } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { getProducts } from '../api/products.js'
import ProductCard from '../components/ProductCard.jsx'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const categories = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
]

const priceRanges = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under40', label: 'Under $40', min: 0, max: 40 },
  { id: '40to60', label: '$40 – $60', min: 40, max: 60 },
  { id: '60to80', label: '$60 – $80', min: 60, max: 80 },
  { id: 'over80', label: 'Over $80', min: 80, max: Infinity },
]

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price_asc', label: 'Price: Low to High' },
  { id: 'price_desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)
  const gridRef = useRef(null)

  const activeCategory = searchParams.get('category') || 'all'
  const activePrice = searchParams.get('price') || 'all'
  const activeSort = searchParams.get('sort') || 'featured'

  useEffect(() => {
    let mounted = true
    setLoading(true)
    getProducts()
      .then((data) => {
        if (mounted) {
          setProducts(data)
          setLoading(false)
        }
      })
      .catch(() => {
        if (mounted) setLoading(false)
      })
    return () => { mounted = false }
  }, [])

  useEffect(() => {
    if (!loading && gridRef.current) {
      return ImageHelper.loadImages(strkImgConfig, gridRef.current)
    }
  }, [loading, activeCategory, activePrice, activeSort])

  const filtered = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'all') {
      result = result.filter((p) => {
        const d = p.data || p
        return d.category === activeCategory
      })
    }

    const priceRange = priceRanges.find((r) => r.id === activePrice)
    if (priceRange && priceRange.id !== 'all') {
      result = result.filter((p) => {
        const d = p.data || p
        return d.price >= priceRange.min && d.price < priceRange.max
      })
    }

    switch (activeSort) {
      case 'price_asc':
        result.sort((a, b) => (a.data?.price || a.price) - (b.data?.price || b.price))
        break
      case 'price_desc':
        result.sort((a, b) => (b.data?.price || b.price) - (a.data?.price || a.price))
        break
      case 'rating':
        result.sort((a, b) => (b.data?.rating || b.rating || 0) - (a.data?.rating || a.rating || 0))
        break
      default:
        break
    }

    return result
  }, [products, activeCategory, activePrice, activeSort])

  const updateParam = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'all') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    setSearchParams(params)
  }

  const activeFiltersCount =
    (activeCategory !== 'all' ? 1 : 0) + (activePrice !== 'all' ? 1 : 0)

  return (
    <div className="min-h-screen bg-velmora-cream pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="py-8 md:py-12">
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find((c) => c.id === activeCategory)?.label || 'Shop'}
          </h1>
          <p className="text-sm text-velmora-muted mt-2">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between pb-6 border-b border-velmora-border">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest text-velmora-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter{activeFiltersCount > 0 && ` (${activeFiltersCount})`}
          </button>

          <div className="hidden md:flex items-center gap-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => updateParam('category', cat.id)}
                className={`text-xs uppercase tracking-widest transition-colors ${
                  activeCategory === cat.id
                    ? 'text-velmora-charcoal border-b border-velmora-charcoal pb-0.5'
                    : 'text-velmora-muted hover:text-velmora-charcoal'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-velmora-charcoal"
            >
              Sort: {sortOptions.find((s) => s.id === activeSort)?.label}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white border border-velmora-border shadow-lg z-20 min-w-[200px]">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      updateParam('sort', opt.id)
                      setSortOpen(false)
                    }}
                    className={`w-full text-left px-4 py-3 text-xs uppercase tracking-wider transition-colors ${
                      activeSort === opt.id
                        ? 'bg-velmora-warm text-velmora-charcoal'
                        : 'text-velmora-muted hover:bg-velmora-warm'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-10 pt-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="mb-10">
              <h4 className="text-xs uppercase tracking-widest text-velmora-charcoal mb-4">Category</h4>
              <div className="space-y-2.5">
                <button
                  onClick={() => updateParam('category', 'all')}
                  className={`block text-sm transition-colors ${
                    activeCategory === 'all' ? 'text-velmora-charcoal font-medium' : 'text-velmora-muted hover:text-velmora-charcoal'
                  }`}
                >
                  All Jewelry
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => updateParam('category', cat.id)}
                    className={`block text-sm transition-colors ${
                      activeCategory === cat.id ? 'text-velmora-charcoal font-medium' : 'text-velmora-muted hover:text-velmora-charcoal'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-velmora-charcoal mb-4">Price</h4>
              <div className="space-y-2.5">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => updateParam('price', range.id)}
                    className={`block text-sm transition-colors ${
                      activePrice === range.id ? 'text-velmora-charcoal font-medium' : 'text-velmora-muted hover:text-velmora-charcoal'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {activeFiltersCount > 0 && (
              <button
                onClick={() => {
                  const params = new URLSearchParams()
                  setSearchParams(params)
                }}
                className="mt-8 text-xs uppercase tracking-widest text-velmora-muted underline hover:text-velmora-charcoal transition-colors"
              >
                Clear All Filters
              </button>
            )}
          </aside>

          {/* Product Grid */}
          <div className="flex-1" ref={gridRef}>
            {loading ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-[3/4] bg-velmora-sand" />
                    <div className="h-3 bg-velmora-sand mt-4 w-3/4" />
                    <div className="h-3 bg-velmora-sand mt-2 w-1/3" />
                  </div>
                ))}
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-charcoal">No products found</p>
                <p className="text-sm text-velmora-muted mt-2">Try adjusting your filters.</p>
                <button
                  onClick={() => {
                    const params = new URLSearchParams()
                    setSearchParams(params)
                  }}
                  className="mt-6 border border-velmora-charcoal text-velmora-charcoal px-8 py-3 text-xs uppercase tracking-widest hover:bg-velmora-charcoal hover:text-white transition-colors"
                >
                  View All
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

      {/* Mobile Filters Drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-80 max-w-full bg-velmora-cream z-50 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-lg uppercase tracking-widest text-velmora-charcoal">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-5 h-5 text-velmora-charcoal" />
              </button>
            </div>

            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-widest text-velmora-charcoal mb-4">Category</h4>
              <div className="space-y-3">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => updateParam('category', cat.id)}
                    className={`block text-sm transition-colors ${
                      activeCategory === cat.id ? 'text-velmora-charcoal font-medium' : 'text-velmora-muted'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-widest text-velmora-charcoal mb-4">Price</h4>
              <div className="space-y-3">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => updateParam('price', range.id)}
                    className={`block text-sm transition-colors ${
                      activePrice === range.id ? 'text-velmora-charcoal font-medium' : 'text-velmora-muted'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                const params = new URLSearchParams()
                setSearchParams(params)
                setMobileFiltersOpen(false)
              }}
              className="w-full border border-velmora-charcoal text-velmora-charcoal py-3 text-xs uppercase tracking-widest hover:bg-velmora-charcoal hover:text-white transition-colors"
            >
              Clear All
            </button>
          </div>
        </>
      )}
    </div>
  )
}