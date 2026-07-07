import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

const allCategories = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
]

const priceRanges = [
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50to75', label: '$50 – $75', min: 50, max: 75 },
  { id: '75to100', label: '$75 – $100', min: 75, max: 100 },
  { id: 'over100', label: 'Over $100', min: 100, max: 999 },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A-Z' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()
  const [mobileFilters, setMobileFilters] = useState(false)
  const [sort, setSort] = useState('featured')

  const activeCategory = searchParams.get('category') || ''
  const activePriceRange = searchParams.get('price') || ''

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (params.get(key) === value) {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    setSearchParams(params)
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  const hasFilters = activeCategory || activePriceRange

  let filtered = [...products]

  if (activeCategory) {
    filtered = filtered.filter((p) => p.category === activeCategory)
  }

  if (activePriceRange) {
    const range = priceRanges.find((r) => r.id === activePriceRange)
    if (range) {
      filtered = filtered.filter((p) => p.price >= range.min && p.price <= range.max)
    }
  }

  switch (sort) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price)
      break
    case 'name-asc':
      filtered.sort((a, b) => a.name.localeCompare(b.name))
      break
    default:
      break
  }

  const handleAdd = (product) => {
    addItem({ ...product, image: product.images[0] })
  }

  const FiltersContent = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h4 className="font-body text-[10px] uppercase tracking-widest text-[#1C1814] mb-4">Category</h4>
        <div className="space-y-3">
          {allCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', cat.id)}
              className={`block w-full text-left font-body text-sm transition-colors ${
                activeCategory === cat.id
                  ? 'text-[#C9A96E] font-medium'
                  : 'text-[#8A8278] hover:text-[#1C1814]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-body text-[10px] uppercase tracking-widest text-[#1C1814] mb-4">Price</h4>
        <div className="space-y-3">
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => setFilter('price', range.id)}
              className={`block w-full text-left font-body text-sm transition-colors ${
                activePriceRange === range.id
                  ? 'text-[#C9A96E] font-medium'
                  : 'text-[#8A8278] hover:text-[#1C1814]'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="font-body text-xs uppercase tracking-wider text-[#8A8278] hover:text-[#1C1814] transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-3xl md:text-4xl text-[#1C1814] tracking-wide">
              {activeCategory
                ? allCategories.find((c) => c.id === activeCategory)?.label || 'Shop'
                : 'All Jewelry'}
            </h1>
            <p className="font-body text-sm text-[#8A8278] mt-1">{filtered.length} pieces</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile filter button */}
            <button
              className="md:hidden flex items-center gap-2 font-body text-xs uppercase tracking-wider text-[#1C1814]"
              onClick={() => setMobileFilters(true)}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-transparent font-body text-xs uppercase tracking-wider text-[#1C1814] pr-6 py-1 border-b border-[#E8DFD3] focus:outline-none cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-[#8A8278] pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FiltersContent />
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-body text-[#8A8278]">No pieces match your filters.</p>
                <button onClick={clearFilters} className="btn-primary mt-4 text-xs">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`}>
                      <div className="aspect-[4/5] bg-[#F5EFE6] overflow-hidden mb-3 relative">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </Link>
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <Link to={`/product/${product.id}`}>
                          <h3 className="product-name text-[#1C1814] truncate">{product.name}</h3>
                        </Link>
                        <p className="product-price mt-0.5">${product.price}</p>
                      </div>
                      <button
                        onClick={() => handleAdd(product)}
                        className="shrink-0 w-8 h-8 border border-[#E8DFD3] flex items-center justify-center text-[#8A8278] hover:text-[#1C1814] hover:border-[#1C1814] transition-all opacity-0 group-hover:opacity-100"
                        aria-label={`Add ${product.name} to cart`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileFilters ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFilters(false)} />
        <div className={`absolute top-0 left-0 h-full w-72 bg-[#FDF8F3] shadow-2xl transition-transform duration-500 ${mobileFilters ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8DFD3]">
            <h3 className="font-body text-xs uppercase tracking-widest text-[#1C1814]">Filters</h3>
            <button onClick={() => setMobileFilters(false)} className="text-[#8A8278] hover:text-[#1C1814]">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="px-6 py-6">
            <FiltersContent />
          </div>
        </div>
      </div>
    </main>
  )
}