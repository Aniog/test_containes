import React, { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react'
import { ProductCard } from '@/components/product/ProductCard'
import { products, categories } from '@/data/products'
import { cn } from '@/lib/utils'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $100', min: 50, max: 100 },
  { label: '$100+', min: 100, max: Infinity },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || ''

  const [selectedCats, setSelectedCats] = useState(initialCategory ? [initialCategory] : [])
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // keep url in sync when category changes via nav
  useEffect(() => {
    const cat = searchParams.get('category')
    setSelectedCats(cat ? [cat] : [])
  }, [searchParams])

  const allMaterials = useMemo(() => {
    const set = new Set()
    products.forEach((p) => p.materials.forEach((m) => set.add(m)))
    return Array.from(set)
  }, [])

  const toggle = (list, setter, value) => {
    setter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (selectedCats.length && !selectedCats.includes(p.categorySlug)) return false
      if (selectedMaterials.length && !p.materials.some((m) => selectedMaterials.includes(m))) return false
      if (selectedPrices.length) {
        const inRange = selectedPrices.some((range) => {
          const r = priceRanges.find((pr) => pr.label === range)
          return r && p.price >= r.min && p.price < r.max
        })
        if (!inRange) return false
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
  }, [selectedCats, selectedMaterials, selectedPrices, sort])

  const clearAll = () => {
    setSelectedCats([])
    setSelectedPrices([])
    setSelectedMaterials([])
    setSearchParams({})
  }

  const hasFilters = selectedCats.length || selectedPrices.length || selectedMaterials.length

  const FilterPanel = () => (
    <div className="space-y-9">
      <FilterGroup title="Category">
        {categories.map((c) => (
          <CheckRow
            key={c.slug}
            label={c.name}
            checked={selectedCats.includes(c.slug)}
            onChange={() => toggle(selectedCats, setSelectedCats, c.slug)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {priceRanges.map((r) => (
          <CheckRow
            key={r.label}
            label={r.label}
            checked={selectedPrices.includes(r.label)}
            onChange={() => toggle(selectedPrices, setSelectedPrices, r.label)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        {allMaterials.map((m) => (
          <CheckRow
            key={m}
            label={m}
            checked={selectedMaterials.includes(m)}
            onChange={() => toggle(selectedMaterials, setSelectedMaterials, m)}
          />
        ))}
      </FilterGroup>

      {hasFilters ? (
        <button
          type="button"
          onClick={clearAll}
          className="text-[11px] uppercase tracking-[0.2em] text-taupe underline-offset-4 hover:text-ink hover:underline"
        >
          Clear all filters
        </button>
      ) : null}
    </div>
  )

  return (
    <div className="bg-ivory pt-28 md:pt-32">
      {/* header */}
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="border-b border-sand pb-8 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">The Collection</p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Shop All Jewelry</h1>
          <p className="mt-3 text-sm text-taupe">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        {/* mobile toolbar */}
        <div className="mb-6 flex items-center justify-between md:hidden">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 border border-sand px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] text-ink"
          >
            <SlidersHorizontal size={14} />
            Filters
          </button>
          <SortDropdown sort={sort} setSort={setSort} />
        </div>

        <div className="flex gap-12">
          {/* sidebar (desktop) */}
          <aside className="hidden w-56 shrink-0 md:block">
            <FilterPanel />
          </aside>

          {/* grid */}
          <div className="flex-1">
            <div className="mb-6 hidden items-center justify-end md:flex">
              <SortDropdown sort={sort} setSort={setSort} />
            </div>

            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters.</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-4 text-[11px] uppercase tracking-[0.2em] text-gold-deep underline underline-offset-4"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[80] md:hidden">
          <div className="absolute inset-0 bg-ink/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] overflow-y-auto bg-ivory p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-serif text-xl text-ink">Filters</h2>
              <button type="button" onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X size={20} className="text-ink" />
              </button>
            </div>
            <FilterPanel />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-ink py-3.5 text-[11px] uppercase tracking-[0.18em] text-ivory"
            >
              Show {filtered.length} results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function FilterGroup({ title, children }) {
  return (
    <div>
      <h3 className="mb-3 text-[11px] uppercase tracking-[0.2em] text-ink">{title}</h3>
      <div className="space-y-2.5">{children}</div>
    </div>
  )
}

function CheckRow({ label, checked, onChange }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-sm text-taupe transition-colors hover:text-ink">
      <span
        className={cn(
          'flex h-4 w-4 items-center justify-center border transition-colors',
          checked ? 'border-gold bg-gold' : 'border-sand bg-transparent'
        )}
      >
        {checked && <span className="h-1.5 w-1.5 bg-ink" />}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
      {label}
    </label>
  )
}

function SortDropdown({ sort, setSort }) {
  const [open, setOpen] = useState(false)
  const current = sortOptions.find((o) => o.value === sort)
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-ink"
      >
        Sort: <span className="text-taupe">{current.label}</span>
        <ChevronDown size={13} className={cn('transition-transform', open && 'rotate-180')} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <ul className="absolute right-0 z-20 mt-2 w-52 border border-sand bg-ivory py-2 shadow-lg">
            {sortOptions.map((o) => (
              <li key={o.value}>
                <button
                  type="button"
                  onClick={() => {
                    setSort(o.value)
                    setOpen(false)
                  }}
                  className={cn(
                    'block w-full px-4 py-2 text-left text-xs uppercase tracking-[0.15em] transition-colors hover:bg-cream',
                    o.value === sort ? 'text-gold-deep' : 'text-ink'
                  )}
                >
                  {o.label}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
