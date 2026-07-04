import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { client, getRows } from '@/lib/db'
import ProductCard from '@/components/ProductCard'

const categories = [
  { value: '', label: 'All' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
]

const priceRanges = [
  { value: '', label: 'All Prices' },
  { value: '0-40', label: 'Under $40' },
  { value: '40-60', label: '$40 - $60' },
  { value: '60-100', label: '$60 - $100' },
  { value: '100-999', label: '$100+' },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [status, setStatus] = useState('loading')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const containerRef = useRef(null)

  const categoryFilter = searchParams.get('category') || ''
  const priceFilter = searchParams.get('price') || ''
  const sort = searchParams.get('sort') || 'featured'

  useEffect(() => {
    async function fetchProducts() {
      setStatus('loading')
      try {
        let query = client.from('Products').select('*')
        if (categoryFilter) query = query.eq('category', categoryFilter)
        if (priceFilter) {
          const [min, max] = priceFilter.split('-').map(Number)
          query = query.gte('price', min).lte('price', max)
        }
        if (sort === 'price-asc') query = query.order('price', { ascending: true })
        else if (sort === 'price-desc') query = query.order('price', { ascending: false })
        else if (sort === 'rating') query = query.order('rating', { ascending: false })

        const { data: response, error } = await query.limit(50)
        if (error) throw error
        let rows = getRows(response)
        if (sort === 'featured') {
          rows = rows.sort((a, b) => {
            const af = a.data?.featured || a.featured ? 1 : 0
            const bf = b.data?.featured || b.featured ? 1 : 0
            return bf - af
          })
        }
        setProducts(rows)
        setStatus('ready')
      } catch (err) {
        console.error(err)
        setStatus('error')
      }
    }
    fetchProducts()
  }, [categoryFilter, priceFilter, sort])

  const updateFilter = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value) next.set(key, value)
    else next.delete(key)
    setSearchParams(next)
  }

  const activeFiltersCount = (categoryFilter ? 1 : 0) + (priceFilter ? 1 : 0)

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-foreground mb-4">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => updateFilter('category', cat.value)}
              className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                categoryFilter === cat.value
                  ? 'text-accent font-medium'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-foreground mb-4">
          Price
        </h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => updateFilter('price', range.value)}
              className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                priceFilter === range.value
                  ? 'text-accent font-medium'
                  : 'text-muted hover:text-foreground'
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
            const next = new URLSearchParams()
            next.set('sort', sort)
            setSearchParams(next)
          }}
          className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-muted hover:text-foreground transition-colors"
        >
          <X className="w-3 h-3" />
          Clear All
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="min-h-screen bg-base pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-8 md:py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-12">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-foreground">Shop All</h1>
            <p className="mt-2 font-sans text-sm text-muted">
              {status === 'ready' ? `${products.length} products` : 'Loading...'}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 border border-divider px-4 py-2.5 font-sans text-xs uppercase tracking-[0.12em]"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 bg-accent text-white text-[10px] rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="appearance-none bg-transparent border border-divider pl-4 pr-10 py-2.5 font-sans text-xs uppercase tracking-[0.12em] text-foreground focus:outline-none focus:border-accent cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {status === 'loading' ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="aspect-[3/4] bg-surface-warm animate-pulse" />
                ))}
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-muted">No products match your filters.</p>
                <button
                  onClick={() => {
                    const next = new URLSearchParams()
                    setSearchParams(next)
                  }}
                  className="mt-4 text-sm text-accent hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
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
            className="fixed inset-0 z-[60] bg-black/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-80 max-w-[85vw] z-[70] bg-surface shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-xl">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </>
      )}
    </div>
  )
}
