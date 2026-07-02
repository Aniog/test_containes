import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import ProductCard from '@/components/shop/ProductCard'

const categoryOptions = [
  { value: '', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
]

const priceRanges = [
  { value: '', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-150', label: '$75 – $150' },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)

  const [category, setCategory] = useState(searchParams.get('category') || '')
  const [priceRange, setPriceRange] = useState('')
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    setCategory(searchParams.get('category') || '')
  }, [searchParams])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [category, priceRange, sort])

  const filtered = products
    .filter(p => !category || p.category === category)
    .filter(p => {
      if (!priceRange) return true
      const [min, max] = priceRange.split('-').map(Number)
      return p.price >= min && p.price <= max
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return 0
    })

  const handleCategoryChange = (val) => {
    setCategory(val)
    if (val) setSearchParams({ category: val })
    else setSearchParams({})
  }

  const activeFiltersCount = [category, priceRange].filter(Boolean).length

  return (
    <div className="bg-cream min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-parchment border-b border-hairline py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-manrope text-xs uppercase tracking-[0.2em] text-gold mb-3">Velmora Fine Jewelry</p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian">
            {category ? categoryOptions.find(c => c.value === category)?.label || 'Shop' : 'All Jewelry'}
          </h1>
          <div className="w-10 h-px bg-gold mx-auto mt-5" />
          <p className="font-manrope text-xs text-taupe mt-4">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-hairline">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setMobileFiltersOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-manrope text-xs uppercase tracking-[0.12em] text-obsidian"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
          </button>

          {/* Desktop category pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categoryOptions.map(opt => (
              <button
                key={opt.value}
                onClick={() => handleCategoryChange(opt.value)}
                className={`font-manrope text-xs uppercase tracking-[0.1em] px-4 py-2 border transition-colors duration-300 ${
                  category === opt.value
                    ? 'border-obsidian bg-obsidian text-cream'
                    : 'border-hairline text-taupe hover:border-obsidian hover:text-obsidian'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="font-manrope text-xs text-taupe uppercase tracking-[0.1em] hidden md:block">Sort:</span>
            <div className="relative">
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="appearance-none bg-transparent border border-hairline font-manrope text-xs text-obsidian uppercase tracking-[0.1em] pl-3 pr-8 py-2 focus:outline-none focus:border-gold cursor-pointer"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-taupe pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            {/* Category filter */}
            <div className="mb-8">
              <h3 className="font-manrope text-xs uppercase tracking-[0.15em] text-obsidian mb-4">Category</h3>
              <div className="space-y-2.5">
                {categoryOptions.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => handleCategoryChange(opt.value)}
                    className={`block font-manrope text-xs transition-colors duration-300 ${
                      category === opt.value ? 'text-obsidian font-medium' : 'text-taupe hover:text-obsidian'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full h-px bg-hairline mb-8" />

            {/* Price filter */}
            <div className="mb-8">
              <h3 className="font-manrope text-xs uppercase tracking-[0.15em] text-obsidian mb-4">Price</h3>
              <div className="space-y-2.5">
                {priceRanges.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setPriceRange(opt.value)}
                    className={`block font-manrope text-xs transition-colors duration-300 ${
                      priceRange === opt.value ? 'text-obsidian font-medium' : 'text-taupe hover:text-obsidian'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear filters */}
            {activeFiltersCount > 0 && (
              <button
                onClick={() => { handleCategoryChange(''); setPriceRange('') }}
                className="flex items-center gap-1.5 font-manrope text-xs text-taupe hover:text-obsidian transition-colors duration-300 underline underline-offset-2"
              >
                <X size={10} />
                Clear filters
              </button>
            )}
          </aside>

          {/* Mobile filters panel */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 bg-cream md:hidden">
              <div className="flex items-center justify-between px-4 py-5 border-b border-hairline">
                <span className="font-cormorant text-xl font-light text-obsidian">Filters</span>
                <button onClick={() => setMobileFiltersOpen(false)}>
                  <X size={20} strokeWidth={1.5} className="text-taupe" />
                </button>
              </div>
              <div className="px-4 py-6 space-y-8">
                <div>
                  <h3 className="font-manrope text-xs uppercase tracking-[0.15em] text-obsidian mb-4">Category</h3>
                  <div className="space-y-3">
                    {categoryOptions.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => { handleCategoryChange(opt.value); setMobileFiltersOpen(false) }}
                        className={`block font-manrope text-sm ${category === opt.value ? 'text-obsidian font-medium' : 'text-taupe'}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="h-px bg-hairline" />
                <div>
                  <h3 className="font-manrope text-xs uppercase tracking-[0.15em] text-obsidian mb-4">Price</h3>
                  <div className="space-y-3">
                    {priceRanges.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => { setPriceRange(opt.value); setMobileFiltersOpen(false) }}
                        className={`block font-manrope text-sm ${priceRange === opt.value ? 'text-obsidian font-medium' : 'text-taupe'}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-3xl font-light text-obsidian mb-3">No pieces found</p>
                <p className="font-manrope text-sm text-taupe">Try adjusting your filters.</p>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {filtered.map(product => (
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
