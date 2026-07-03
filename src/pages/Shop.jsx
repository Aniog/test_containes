import React, { useState, useMemo, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, ChevronDown } from 'lucide-react'
import ProductCard from '@/components/products/ProductCard'
import { products, categories } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get('category') || 'all'
  const [sort, setSort] = useState('featured')
  const [priceRange, setPriceRange] = useState([0, 150])
  const [material, setMaterial] = useState('all')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [categoryParam, sort, priceRange, material])

  const filtered = useMemo(() => {
    let result = [...products]

    if (categoryParam !== 'all') {
      result = result.filter((p) => p.category === categoryParam)
    }

    if (material !== 'all') {
      result = result.filter((p) => p.material === material)
    }

    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price)
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating)

    return result
  }, [categoryParam, sort, priceRange, material])

  const activeCategoryLabel =
    categoryParam === 'all' ? 'All' : categories.find((c) => c.id === categoryParam)?.name || 'All'

  return (
    <div ref={containerRef} className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl">Shop</h1>
          <p className="mt-2 text-sm text-current/60">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'} {activeCategoryLabel !== 'All' ? `in ${activeCategoryLabel}` : ''}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setMobileFiltersOpen(true)}
          className="md:hidden inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]">
        <aside className="hidden md:block">
          <div className="space-y-8">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-current/70">Category</h3>
              <div className="mt-3 space-y-2">
                {['all', ...categories.map((c) => c.id)].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSearchParams(cat === 'all' ? {} : { category: cat })}
                    className={`block w-full text-left text-sm transition-colors ${
                      categoryParam === cat ? 'text-[#0f0f0f] font-medium' : 'text-current/60 hover:text-current'
                    }`}
                  >
                    {cat === 'all' ? 'All' : categories.find((c) => c.id === cat)?.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-current/70">Price</h3>
              <div className="mt-3 flex items-center gap-3">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="h-9 w-full rounded-sm border border-black/10 px-3 text-sm"
                  min="0"
                  max="150"
                />
                <span className="text-current/40">—</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="h-9 w-full rounded-sm border border-black/10 px-3 text-sm"
                  min="0"
                  max="150"
                />
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-current/70">Material</h3>
              <div className="mt-3 space-y-2">
                {['all', 'gold', 'silver'].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMaterial(m)}
                    className={`block w-full text-left text-sm transition-colors ${
                      material === m ? 'text-[#0f0f0f] font-medium' : 'text-current/60 hover:text-current'
                    }`}
                  >
                    {m === 'all' ? 'All' : m === 'gold' ? 'Gold Tone' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-current/60">
              Showing {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
            </p>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="h-9 appearance-none rounded-sm border border-black/10 bg-white pl-3 pr-8 text-sm"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-current/50 pointer-events-none" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-16 text-center">
              <p className="font-serif text-lg">No pieces found</p>
              <p className="mt-2 text-sm text-current/60">Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-lg">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 text-current/70 hover:text-current"
              >
                Close
              </button>
            </div>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-current/70">Category</h3>
                <div className="mt-3 space-y-2">
                  {['all', ...categories.map((c) => c.id)].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setSearchParams(cat === 'all' ? {} : { category: cat })
                        setMobileFiltersOpen(false)
                      }}
                      className={`block w-full text-left text-sm ${
                        categoryParam === cat ? 'text-[#0f0f0f] font-medium' : 'text-current/60'
                      }`}
                    >
                      {cat === 'all' ? 'All' : categories.find((c) => c.id === cat)?.name}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-current/70">Material</h3>
                <div className="mt-3 space-y-2">
                  {['all', 'gold', 'silver'].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => {
                        setMaterial(m)
                        setMobileFiltersOpen(false)
                      }}
                      className={`block w-full text-left text-sm ${
                        material === m ? 'text-[#0f0f0f] font-medium' : 'text-current/60'
                      }`}
                    >
                      {m === 'all' ? 'All' : m === 'gold' ? 'Gold Tone' : 'Silver Tone'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
