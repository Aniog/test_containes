import React, { useEffect, useState, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { fetchProducts } from '@/api/products'
import ProductCard from '@/components/shop/ProductCard'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  { value: '', label: 'All' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
]

const materials = [
  { value: '', label: 'All' },
  { value: '18k gold plated', label: '18K Gold Plated' },
  { value: 'sterling silver', label: 'Sterling Silver' },
  { value: 'mixed', label: 'Mixed' },
]

const sortOptions = [
  { value: 'created_at_desc', label: 'Newest' },
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'rating_desc', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [status, setStatus] = useState('loading')
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)
  const containerRef = useRef(null)

  const activeCategory = searchParams.get('category') || ''
  const activeMaterial = searchParams.get('material') || ''
  const activeSort = searchParams.get('sort') || 'created_at_desc'
  const minPrice = searchParams.get('minPrice') || ''
  const maxPrice = searchParams.get('maxPrice') || ''

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        setStatus('loading')
        const [sortBy, sortDir] = activeSort.includes('_')
          ? activeSort.split('_')
          : ['created_at', 'desc']
        const rows = await fetchProducts({
          category: activeCategory || undefined,
          material: activeMaterial || undefined,
          minPrice: minPrice ? Number(minPrice) : undefined,
          maxPrice: maxPrice ? Number(maxPrice) : undefined,
          sortBy,
          sortDir,
        })
        if (!cancelled) {
          setProducts(rows)
          setStatus('ready')
        }
      } catch (e) {
        if (!cancelled) setStatus('error')
      }
    }
    load()
    return () => { cancelled = true }
  }, [activeCategory, activeMaterial, activeSort, minPrice, maxPrice])

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [products])

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value) next.set(key, value)
    else next.delete(key)
    setSearchParams(next)
  }

  const hasFilters = activeCategory || activeMaterial || minPrice || maxPrice

  return (
    <main className="pt-20 md:pt-24 min-h-screen bg-ivory" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-2">
              Collection
            </p>
            <h1 className="font-serif text-3xl md:text-4xl tracking-wide">
              {activeCategory
                ? categories.find((c) => c.value === activeCategory)?.label || 'Shop'
                : 'All Jewelry'}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFiltersOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 border border-hairline bg-white text-xs uppercase tracking-[0.12em] font-medium hover:bg-stone-50 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filter
              {hasFilters && (
                <span className="w-2 h-2 bg-accent rounded-full" />
              )}
            </button>

            <div className="relative">
              <button
                onClick={() => setSortOpen((v) => !v)}
                className="flex items-center gap-2 px-4 py-2.5 border border-hairline bg-white text-xs uppercase tracking-[0.12em] font-medium hover:bg-stone-50 transition-colors"
              >
                {sortOptions.find((s) => s.value === activeSort)?.label || 'Sort'}
                <ChevronDown className="w-3 h-3" />
              </button>
              {sortOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setSortOpen(false)} />
                  <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-hairline shadow-lg z-50">
                    {sortOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => {
                          updateParam('sort', opt.value)
                          setSortOpen(false)
                        }}
                        className={`w-full text-left px-4 py-2.5 text-xs hover:bg-stone-50 transition-colors ${
                          activeSort === opt.value ? 'font-medium' : 'text-taupe'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Active filter chips */}
        {hasFilters && (
          <div className="flex flex-wrap gap-2 mb-6">
            {activeCategory && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-hairline text-xs">
                {categories.find((c) => c.value === activeCategory)?.label}
                <button onClick={() => updateParam('category', '')}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {activeMaterial && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-hairline text-xs">
                {materials.find((m) => m.value === activeMaterial)?.label}
                <button onClick={() => updateParam('material', '')}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {(minPrice || maxPrice) && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-hairline text-xs">
                ${minPrice || '0'} - ${maxPrice || '∞'}
                <button onClick={() => { updateParam('minPrice', ''); updateParam('maxPrice', '') }}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        )}

        {/* Products grid */}
        {status === 'loading' ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[3/4] bg-stone-200 mb-4" />
                <div className="h-4 bg-stone-200 w-3/4 mx-auto mb-2" />
                <div className="h-3 bg-stone-200 w-1/2 mx-auto" />
              </div>
            ))}
          </div>
        ) : status === 'error' ? (
          <div className="text-center py-20">
            <p className="text-taupe">Failed to load products. Please try again.</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-taupe">No products match your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product.data || product} />
            ))}
          </div>
        )}
      </div>

      {/* Filter drawer */}
      {filtersOpen && (
        <div className="fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-espresso/40 backdrop-blur-sm"
            onClick={() => setFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-full max-w-sm bg-ivory shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
              <h2 className="font-serif text-xl tracking-wide">Filters</h2>
              <button onClick={() => setFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-medium mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map((c) => (
                    <button
                      key={c.value}
                      onClick={() => updateParam('category', c.value)}
                      className={`block text-sm ${
                        activeCategory === c.value ? 'text-espresso font-medium' : 'text-taupe hover:text-espresso'
                      } transition-colors`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-medium mb-4">Material</h3>
                <div className="space-y-2">
                  {materials.map((m) => (
                    <button
                      key={m.value}
                      onClick={() => updateParam('material', m.value)}
                      className={`block text-sm ${
                        activeMaterial === m.value ? 'text-espresso font-medium' : 'text-taupe hover:text-espresso'
                      } transition-colors`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-medium mb-4">Price</h3>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={(e) => updateParam('minPrice', e.target.value)}
                    className="w-24 h-10 px-3 text-sm border border-hairline bg-white rounded-sm"
                  />
                  <span className="text-taupe">—</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={(e) => updateParam('maxPrice', e.target.value)}
                    className="w-24 h-10 px-3 text-sm border border-hairline bg-white rounded-sm"
                  />
                </div>
              </div>
            </div>
            <div className="px-6 py-5 border-t border-hairline bg-white">
              <button
                onClick={() => {
                  setSearchParams(new URLSearchParams())
                  setFiltersOpen(false)
                }}
                className="w-full py-3 border border-espresso text-espresso text-xs uppercase tracking-[0.2em] font-medium hover:bg-espresso hover:text-white transition-colors"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
