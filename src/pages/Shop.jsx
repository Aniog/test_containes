import React, { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { useStrkImages } from '@/lib/useStrkImages'

const categoryOptions = ['Earrings', 'Necklaces', 'Huggies', 'Sets']
const materialOptions = ['Gold', 'Silver']
const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $100', min: 50, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]
const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useStrkImages([searchParams.toString()])

  const initialCategory = searchParams.get('category') || ''
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedPrices, setSelectedPrices] = useState([])
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Sync category from URL
  useEffect(() => {
    const cat = searchParams.get('category')
    setSelectedCategories(cat ? [cat] : [])
  }, [searchParams])

  const toggle = (value, list, setter) => {
    setter(list.includes(value) ? list.filter((v) => v !== value) : [...list, value])
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (selectedCategories.length && !selectedCategories.includes(p.category)) return false
      if (selectedMaterials.length && !selectedMaterials.some((m) => p.variants.includes(m))) return false
      if (selectedPrices.length) {
        const match = selectedPrices.some((label) => {
          const range = priceRanges.find((r) => r.label === label)
          return range && p.price >= range.min && p.price < range.max
        })
        if (!match) return false
      }
      return true
    })

    switch (sort) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return result
  }, [selectedCategories, selectedMaterials, selectedPrices, sort])

  const clearAll = () => {
    setSelectedCategories([])
    setSelectedMaterials([])
    setSelectedPrices([])
    setSearchParams({})
  }

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-espresso-800 mb-4">Category</h3>
        <div className="space-y-2.5">
          {categoryOptions.map((c) => (
            <label key={c} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCategories.includes(c)}
                onChange={() => toggle(c, selectedCategories, setSelectedCategories)}
                className="w-4 h-4 accent-espresso-800"
              />
              <span className="text-sm text-espresso-700 group-hover:text-espresso-800">{c}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-espresso-800 mb-4">Material</h3>
        <div className="space-y-2.5">
          {materialOptions.map((m) => (
            <label key={m} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedMaterials.includes(m)}
                onChange={() => toggle(m, selectedMaterials, setSelectedMaterials)}
                className="w-4 h-4 accent-espresso-800"
              />
              <span className="text-sm text-espresso-700 group-hover:text-espresso-800">{m}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-espresso-800 mb-4">Price</h3>
        <div className="space-y-2.5">
          {priceRanges.map((r) => (
            <label key={r.label} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedPrices.includes(r.label)}
                onChange={() => toggle(r.label, selectedPrices, setSelectedPrices)}
                className="w-4 h-4 accent-espresso-800"
              />
              <span className="text-sm text-espresso-700 group-hover:text-espresso-800">{r.label}</span>
            </label>
          ))}
        </div>
      </div>

      {(selectedCategories.length || selectedMaterials.length || selectedPrices.length) > 0 && (
        <button
          onClick={clearAll}
          className="text-xs uppercase tracking-widest2 text-gold hover:text-gold-dark transition-colors"
        >
          Clear All
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Header */}
      <div className="container-editorial py-12 md:py-16 text-center">
        <p className="text-xs uppercase tracking-widest3 text-gold mb-3">The Collection</p>
        <h1 className="font-serif text-4xl md:text-6xl text-espresso-800">Shop All</h1>
        <p className="text-espresso-600 mt-4 max-w-xl mx-auto">
          Demi-fine gold jewelry, hand-finished and made to be worn every day.
        </p>
      </div>

      <div className="container-editorial pb-20">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-espresso-200/50">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-xs uppercase tracking-widest2 text-espresso-800 lg:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
          <p className="hidden lg:block text-xs uppercase tracking-widest2 text-espresso-600">
            {filtered.length} {filtered.length === 1 ? 'Piece' : 'Pieces'}
          </p>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent border border-espresso-300 text-xs uppercase tracking-widest2 text-espresso-800 pl-4 pr-10 py-2.5 cursor-pointer focus:outline-none focus:border-gold"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value} className="bg-cream text-espresso-800">
                  {o.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-espresso-600 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block w-56 shrink-0">
            <FilterContent />
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="font-serif text-2xl text-espresso-800 mb-3">No pieces match your filters</p>
                <button onClick={clearAll} className="btn-outline">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-6">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <div className="absolute inset-0 bg-espresso-900/50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85%] bg-cream p-6 overflow-y-auto animate-slide-in-right">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl uppercase tracking-widest2 text-espresso-800">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5 text-espresso-800" />
              </button>
            </div>
            <FilterContent />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="btn-accent w-full mt-10"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
