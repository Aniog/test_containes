import React, { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, ChevronDown } from 'lucide-react'
import FilterSidebar from '@/components/shop/FilterSidebar'
import ShopGrid from '@/components/shop/ShopGrid'
import products from '@/data/products'

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Highest Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
]

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const [filters, setFilters] = useState({
    category: '',
    price: '',
    material: '',
  })
  const [sort, setSort] = useState('featured')
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  // Read category from URL on mount
  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setFilters((f) => ({ ...f, category: cat }))
  }, [searchParams])

  const filtered = useMemo(() => {
    let result = [...products]

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category)
    }

    if (filters.material) {
      result = result.filter((p) => p.material === filters.material)
    }

    if (filters.price) {
      const [min, max] = filters.price.split('-').map(Number)
      result = result.filter((p) => p.price >= min && p.price <= max)
    }

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price)
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating)

    return result
  }, [filters, sort])

  return (
    <div className="pt-20 animate-fade-in">
      {/* Header */}
      <div className="section-padding py-12 text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-brand-gold mb-4">
          The Collection
        </p>
        <h1 className="heading-serif text-4xl md:text-5xl text-brand-base mb-4">
          Shop All Jewelry
        </h1>
        <p className="text-brand-muted max-w-lg mx-auto text-sm">
          Discover our complete collection of demi-fine gold jewelry — crafted to elevate every moment.
        </p>
      </div>

      {/* Toolbar */}
      <div className="section-padding border-b border-brand-gold-light/20 pb-4 mb-8">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 text-xs tracking-widest uppercase text-brand-base hover:text-brand-gold transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
            </button>
            <span className="text-xs text-brand-muted hidden md:inline">
              {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
            </span>
          </div>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none pl-4 pr-10 py-2.5 bg-transparent border border-brand-gold-light/30 text-xs tracking-wider uppercase text-brand-base cursor-pointer hover:border-brand-gold transition-colors focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-brand-muted pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="section-padding pb-20 md:pb-28">
        <div className="flex gap-10 max-w-7xl mx-auto">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            mobileOpen={mobileFilterOpen}
            setMobileOpen={setMobileFilterOpen}
          />
          <div className="flex-1">
            <ShopGrid products={filtered} />
          </div>
        </div>
      </div>
    </div>
  )
}
