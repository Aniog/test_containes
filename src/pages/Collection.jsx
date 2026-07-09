import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories, formatPrice } from '@/data/products'
import { ProductCard } from '@/components/ProductCard'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: 'under-50', label: 'Under $50' },
  { value: '50-80', label: '$50 — $80' },
  { value: 'over-80', label: 'Over $80' },
]

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedPrice, setSelectedPrice] = useState('all')
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || 'all')
  }, [searchParams])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [selectedCategory, sort])

  const filtered = useMemo(() => {
    let list = [...products]
    if (selectedCategory !== 'all') {
      list = list.filter((p) => p.category === selectedCategory)
    }
    if (selectedPrice !== 'all') {
      list = list.filter((p) => {
        if (selectedPrice === 'under-50') return p.price < 50
        if (selectedPrice === '50-80') return p.price >= 50 && p.price <= 80
        if (selectedPrice === 'over-80') return p.price > 80
        return true
      })
    }
    if (selectedMaterial !== 'all') {
      list = list.filter((p) => p.material.toLowerCase().includes(selectedMaterial.toLowerCase()))
    }
    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        list.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return list
  }, [selectedCategory, selectedPrice, selectedMaterial, sort])

  const updateCategory = (cat) => {
    setSelectedCategory(cat)
    if (cat === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedPrice('all')
    setSelectedMaterial('all')
    searchParams.delete('category')
    setSearchParams(searchParams)
  }

  const activeFiltersCount =
    (selectedCategory !== 'all' ? 1 : 0) +
    (selectedPrice !== 'all' ? 1 : 0) +
    (selectedMaterial !== 'all' ? 1 : 0)

  const FilterPanel = () => (
    <div className="space-y-8">
      <div>
        <h4 className="font-sans text-xs uppercase tracking-widest text-velmora-text mb-4">Category</h4>
        <div className="space-y-2.5">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === 'all'}
              onChange={() => updateCategory('all')}
              className="accent-velmora-accent"
            />
            <span className="text-sm font-sans text-velmora-muted group-hover:text-velmora-text">All</span>
          </label>
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat.id}
                onChange={() => updateCategory(cat.id)}
                className="accent-velmora-accent"
              />
              <span className="text-sm font-sans text-velmora-muted group-hover:text-velmora-text">{cat.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-sans text-xs uppercase tracking-widest text-velmora-text mb-4">Price</h4>
        <div className="space-y-2.5">
          {priceRanges.map((range) => (
            <label key={range.value} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={selectedPrice === range.value}
                onChange={() => setSelectedPrice(range.value)}
                className="accent-velmora-accent"
              />
              <span className="text-sm font-sans text-velmora-muted group-hover:text-velmora-text">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-sans text-xs uppercase tracking-widest text-velmora-text mb-4">Material</h4>
        <div className="space-y-2.5">
          {['all', 'gold plated', 'silver'].map((mat) => (
            <label key={mat} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="material"
                checked={selectedMaterial === mat}
                onChange={() => setSelectedMaterial(mat)}
                className="accent-velmora-accent"
              />
              <span className="text-sm font-sans text-velmora-muted group-hover:text-velmora-text capitalize">
                {mat === 'all' ? 'All Materials' : mat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <button
          onClick={clearFilters}
          className="text-xs font-sans uppercase tracking-widest text-velmora-accent hover:text-velmora-accent-hover"
        >
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="bg-velmora-bg min-h-screen pt-20 md:pt-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 py-8 md:py-12">
        <div className="mb-10 text-center">
          <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-velmora-accent mb-3">Shop Velmora</p>
          <h1 id="collection-title" className="font-serif text-3xl md:text-5xl text-velmora-text">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterPanel />
          </aside>

          {/* Mobile filter bar */}
          <div className="lg:hidden flex items-center justify-between mb-6">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="inline-flex items-center gap-2 border border-velmora-border px-4 py-2.5 text-xs font-sans uppercase tracking-widest text-velmora-text"
            >
              <SlidersHorizontal size={14} /> Filters
              {activeFiltersCount > 0 && (
                <span className="ml-1 bg-velmora-accent text-white px-1.5 py-0.5 text-[9px]">{activeFiltersCount}</span>
              )}
            </button>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none border border-velmora-border bg-transparent pl-4 pr-10 py-2.5 text-xs font-sans uppercase tracking-widest text-velmora-text"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-velmora-muted pointer-events-none" />
            </div>
          </div>

          <div className="flex-1">
            <div className="hidden lg:flex items-center justify-between mb-8">
              <p className="text-sm font-sans text-velmora-muted">{filtered.length} pieces</p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none border border-velmora-border bg-transparent pl-4 pr-10 py-2.5 text-xs font-sans uppercase tracking-widest text-velmora-text"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-velmora-muted pointer-events-none" />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="py-20 text-center border border-velmora-border bg-white">
                <p className="font-serif text-2xl text-velmora-text mb-3">No pieces found</p>
                <p className="text-sm text-velmora-muted mb-6">Try adjusting your filters.</p>
                <button
                  onClick={clearFilters}
                  className="bg-velmora-accent px-6 py-3 text-xs font-sans font-medium uppercase tracking-widest text-white hover:bg-velmora-accent-hover transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} contextLabel="collection-title" />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] bg-velmora-bg">
          <div className="flex h-16 items-center justify-between px-5 border-b border-velmora-border">
            <span className="font-serif text-xl tracking-widest-plus uppercase text-velmora-text">Filters</span>
            <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
              <X size={22} className="text-velmora-text" />
            </button>
          </div>
          <div className="p-5 overflow-y-auto h-[calc(100vh-64px)]">
            <FilterPanel />
          </div>
          <div className="absolute bottom-0 left-0 right-0 border-t border-velmora-border bg-velmora-bg p-5">
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full bg-velmora-accent py-3.5 text-xs font-sans font-medium uppercase tracking-widest text-white hover:bg-velmora-accent-hover transition-colors"
            >
              Show {filtered.length} Pieces
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
