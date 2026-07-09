import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeading from '@/components/SectionHeading.jsx'
import ProductCard from '@/components/ProductCard.jsx'
import { useProducts } from '@/hooks/useProducts.js'
import { cn, formatPrice } from '@/lib/utils.js'

const categoryOptions = [
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
]

const priceOptions = [
  { value: 'under50', label: 'Under $50' },
  { value: '50to80', label: '$50 – $80' },
  { value: '80plus', label: '$80+' },
]

const materialOptions = [
  { value: 'gold', label: 'Gold Tone' },
  { value: 'silver', label: 'Silver Tone' },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'priceAsc', label: 'Price: Low to High' },
  { value: 'priceDesc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const { products, status } = useProducts()
  const [searchParams, setSearchParams] = useSearchParams()
  const gridRef = useRef(null)
  const [filtersOpen, setFiltersOpen] = useState(false)

  const selectedCategory = searchParams.get('category') || ''
  const selectedPrice = searchParams.get('price') || ''
  const selectedMaterial = searchParams.get('material') || ''
  const sort = searchParams.get('sort') || 'featured'

  const filteredProducts = useMemo(() => {
    let list = products.map((p) => ({ ...p, ...p.data }))

    if (selectedCategory) {
      list = list.filter((p) => p.category === selectedCategory)
    }
    if (selectedPrice) {
      list = list.filter((p) => {
        if (selectedPrice === 'under50') return p.price < 50
        if (selectedPrice === '50to80') return p.price >= 50 && p.price <= 80
        if (selectedPrice === '80plus') return p.price > 80
        return true
      })
    }
    if (selectedMaterial) {
      list = list.filter((p) =>
        p.tone_variants?.map((v) => v.toLowerCase()).includes(selectedMaterial.toLowerCase())
      )
    }

    if (sort === 'priceAsc') list.sort((a, b) => a.price - b.price)
    if (sort === 'priceDesc') list.sort((a, b) => b.price - a.price)
    if (sort === 'rating') list.sort((a, b) => b.rating - a.rating)

    return list
  }, [products, selectedCategory, selectedPrice, selectedMaterial, sort])

  const updateFilter = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value) {
      next.set(key, value)
    } else {
      next.delete(key)
    }
    setSearchParams(next)
  }

  const activeFilterCount = [selectedCategory, selectedPrice, selectedMaterial].filter(Boolean).length

  useEffect(() => {
    if (!gridRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, gridRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [filteredProducts])

  return (
    <div className="min-h-screen bg-background pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading title="The Collection" subtitle="Shop All" centered />

        {/* Controls */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-muted-subtle/30 pb-6">
          <button
            onClick={() => setFiltersOpen(true)}
            className="flex items-center gap-2 border border-foreground/20 px-4 py-2 text-xs uppercase tracking-widest text-foreground transition-colors hover:bg-foreground/5 md:hidden"
          >
            <SlidersHorizontal size={16} strokeWidth={1.5} />
            Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
          </button>

          <div className="hidden md:block text-sm text-muted">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </div>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="appearance-none border border-foreground/20 bg-transparent py-2 pl-4 pr-10 text-xs uppercase tracking-widest text-foreground focus:border-accent focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              strokeWidth={1.5}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted"
            />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Sidebar filters */}
          <aside className="hidden w-56 flex-shrink-0 md:block">
            <FilterGroup
              title="Category"
              options={categoryOptions}
              selected={selectedCategory}
              onSelect={(value) => updateFilter('category', value)}
            />
            <FilterGroup
              title="Price"
              options={priceOptions}
              selected={selectedPrice}
              onSelect={(value) => updateFilter('price', value)}
            />
            <FilterGroup
              title="Material"
              options={materialOptions}
              selected={selectedMaterial}
              onSelect={(value) => updateFilter('material', value)}
            />
            {activeFilterCount > 0 && (
              <button
                onClick={() => setSearchParams({ sort })}
                className="mt-6 text-xs uppercase tracking-widest text-accent transition-colors hover:text-accent-hover"
              >
                Clear all filters
              </button>
            )}
          </aside>

          {/* Mobile filters drawer */}
          {filtersOpen && (
            <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
              <div
                className="absolute inset-0 bg-overlay"
                onClick={() => setFiltersOpen(false)}
              />
              <div className="absolute left-0 top-0 h-full w-4/5 max-w-sm bg-surface p-6 shadow-2xl">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="font-serif text-lg uppercase tracking-widest-custom">Filters</h2>
                  <button onClick={() => setFiltersOpen(false)} aria-label="Close filters">
                    <X size={22} strokeWidth={1.5} />
                  </button>
                </div>
                <FilterGroup
                  title="Category"
                  options={categoryOptions}
                  selected={selectedCategory}
                  onSelect={(value) => updateFilter('category', value)}
                />
                <FilterGroup
                  title="Price"
                  options={priceOptions}
                  selected={selectedPrice}
                  onSelect={(value) => updateFilter('price', value)}
                />
                <FilterGroup
                  title="Material"
                  options={materialOptions}
                  selected={selectedMaterial}
                  onSelect={(value) => updateFilter('material', value)}
                />
                <button
                  onClick={() => {
                    setSearchParams({ sort })
                    setFiltersOpen(false)
                  }}
                  className="mt-8 w-full bg-accent py-3 text-xs font-medium uppercase tracking-widest text-background"
                >
                  Clear All
                </button>
              </div>
            </div>
          )}

          <div ref={gridRef} className="flex-1">
            {status === 'loading' ? (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="aspect-[4/5] animate-pulse bg-surface" />
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-xl uppercase tracking-widest-custom">No products found</p>
                <p className="mt-2 text-sm text-muted">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3">
                {filteredProducts.map((product) => (
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

function FilterGroup({ title, options, selected, onSelect }) {
  return (
    <div className="mb-8 border-b border-muted-subtle/30 pb-8">
      <h4 className="mb-4 font-serif text-sm uppercase tracking-widest-custom text-foreground">
        {title}
      </h4>
      <div className="space-y-2.5">
        {options.map((opt) => {
          const isSelected = selected === opt.value
          return (
            <label
              key={opt.value}
              className="flex cursor-pointer items-center gap-3 text-sm text-muted transition-colors hover:text-foreground"
            >
              <button
                onClick={() => onSelect(isSelected ? '' : opt.value)}
                className={cn(
                  'flex h-4 w-4 items-center justify-center rounded-full border transition-colors',
                  isSelected
                    ? 'border-accent bg-accent'
                    : 'border-muted-subtle hover:border-muted'
                )}
                aria-pressed={isSelected}
              >
                {isSelected && <span className="h-1.5 w-1.5 rounded-full bg-background" />}
              </button>
              <span>{opt.label}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}
