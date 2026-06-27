import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/ui/ProductCard'

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
]

const materials = ['Gold', 'Silver']

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const activeCategory = searchParams.get('category') || ''
  const activePrice = searchParams.get('price') || ''
  const activeMaterial = searchParams.get('material') || ''

  const filtered = useMemo(() => {
    let result = [...products]

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory)
    }
    if (activeMaterial) {
      result = result.filter((p) => p.material === activeMaterial.toLowerCase())
    }
    if (activePrice) {
      const range = priceRanges.find((r) => r.label === activePrice)
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max)
      }
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return result
  }, [activeCategory, activeMaterial, activePrice, sortBy])

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (params.get(key) === value) {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    setSearchParams(params)
  }

  const clearFilters = () => {
    setSearchParams(new URLSearchParams())
  }

  const hasFilters = activeCategory || activePrice || activeMaterial

  return (
    <main className="min-h-screen bg-velmora-ivory pt-24 md:pt-28">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-[0.3em] text-velmora-gold">
              Collection
            </p>
            <h1 className="font-serif text-3xl font-light tracking-wide text-velmora-espresso md:text-4xl">
              {activeCategory
                ? categories.find((c) => c.slug === activeCategory)?.label || 'Shop'
                : 'All Jewelry'}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex items-center gap-2 rounded-full border border-velmora-sand/60 px-4 py-2 text-xs font-medium uppercase tracking-wider text-velmora-warm-gray transition-colors hover:border-velmora-espresso md:hidden"
            >
              <SlidersHorizontal size={14} /> Filter
            </button>
            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 rounded-full border border-velmora-sand/60 px-4 py-2 text-xs font-medium uppercase tracking-wider text-velmora-warm-gray transition-colors hover:border-velmora-espresso"
              >
                Sort: {sortOptions.find((s) => s.value === sortBy)?.label}
                <ChevronDown size={14} className={`transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
              </button>
              {sortOpen && (
                <>
                  <div className="fixed inset-0 z-20" onClick={() => setSortOpen(false)} />
                  <div className="absolute right-0 z-30 mt-2 w-48 rounded-sm border border-velmora-sand/30 bg-velmora-ivory py-2 shadow-lg">
                    {sortOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => {
                          setSortBy(opt.value)
                          setSortOpen(false)
                        }}
                        className={`block w-full px-4 py-2 text-left text-xs transition-colors ${
                          sortBy === opt.value
                            ? 'font-semibold text-velmora-espresso'
                            : 'text-velmora-warm-gray hover:bg-velmora-cream/50'
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

        {/* Active Filters */}
        {hasFilters && (
          <div className="mb-6 flex flex-wrap items-center gap-2">
            {activeCategory && (
              <FilterPill
                label={categories.find((c) => c.slug === activeCategory)?.label}
                onRemove={() => updateFilter('category', activeCategory)}
              />
            )}
            {activePrice && <FilterPill label={activePrice} onRemove={() => updateFilter('price', activePrice)} />}
            {activeMaterial && <FilterPill label={activeMaterial} onRemove={() => updateFilter('material', activeMaterial)} />}
            <button
              onClick={clearFilters}
              className="text-xs text-velmora-taupe underline transition-colors hover:text-velmora-espresso"
            >
              Clear all
            </button>
          </div>
        )}

        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden w-56 flex-shrink-0 md:block">
            <div className="sticky top-28 space-y-8">
              <FilterGroup
                title="Category"
                options={categories.map((c) => ({ label: c.label, value: c.slug }))}
                active={activeCategory}
                onSelect={(v) => updateFilter('category', v)}
              />
              <FilterGroup
                title="Price"
                options={priceRanges.map((r) => ({ label: r.label, value: r.label }))}
                active={activePrice}
                onSelect={(v) => updateFilter('price', v)}
              />
              <FilterGroup
                title="Material"
                options={materials.map((m) => ({ label: m, value: m }))}
                active={activeMaterial}
                onSelect={(v) => updateFilter('material', v)}
              />
            </div>
          </aside>

          {/* Mobile Sidebar Overlay */}
          {sidebarOpen && (
            <>
              <div className="fixed inset-0 z-40 bg-velmora-charcoal/40 backdrop-blur-sm md:hidden" onClick={() => setSidebarOpen(false)} />
              <div className="fixed inset-y-0 left-0 z-50 w-72 bg-velmora-ivory p-6 shadow-2xl md:hidden">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-serif text-lg font-medium text-velmora-espresso">Filters</h3>
                  <button onClick={() => setSidebarOpen(false)} aria-label="Close filters">
                    <X size={20} className="text-velmora-warm-gray" />
                  </button>
                </div>
                <div className="space-y-8">
                  <FilterGroup
                    title="Category"
                    options={categories.map((c) => ({ label: c.label, value: c.slug }))}
                    active={activeCategory}
                    onSelect={(v) => updateFilter('category', v)}
                  />
                  <FilterGroup
                    title="Price"
                    options={priceRanges.map((r) => ({ label: r.label, value: r.label }))}
                    active={activePrice}
                    onSelect={(v) => updateFilter('price', v)}
                  />
                  <FilterGroup
                    title="Material"
                    options={materials.map((m) => ({ label: m, value: m }))}
                    active={activeMaterial}
                    onSelect={(v) => updateFilter('material', v)}
                  />
                </div>
                {hasFilters && (
                  <button
                    onClick={clearFilters}
                    className="mt-8 w-full rounded-full border border-velmora-sand/60 py-3 text-xs font-medium uppercase tracking-wider text-velmora-warm-gray"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            </>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif text-xl text-velmora-taupe">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm text-velmora-gold underline hover:text-velmora-gold-dark"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:gap-x-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

function FilterGroup({ title, options, active, onSelect }) {
  return (
    <div>
      <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-velmora-espresso">
        {title}
      </h4>
      <div className="space-y-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            className={`block text-left text-sm transition-colors ${
              active === opt.value
                ? 'font-medium text-velmora-espresso'
                : 'text-velmora-warm-gray hover:text-velmora-espresso'
            }`}
          >
            <span className="inline-block h-3.5 w-3.5 rounded-full border border-velmora-sand mr-2 align-text-bottom">
              {active === opt.value && (
                <span className="m-0.5 block h-2 w-2 rounded-full bg-velmora-gold" />
              )}
            </span>
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}

function FilterPill({ label, onRemove }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-velmora-sand/50 bg-velmora-cream/40 px-3 py-1 text-xs text-velmora-espresso">
      {label}
      <button onClick={onRemove} className="text-velmora-taupe hover:text-velmora-espresso" aria-label="Remove filter">
        <X size={12} />
      </button>
    </span>
  )
}
