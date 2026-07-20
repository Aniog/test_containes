import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { StrkImageContainer } from '@/components/ui/StrkImage'
import { cn } from '@/lib/utils'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies']
const materialOptions = ['All', '18K Gold Plated']
const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
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

  const initialCategory = searchParams.get('category') || 'All'
  const query = searchParams.get('q') || ''

  const [category, setCategory] = useState(
    categoryOptions.includes(initialCategory) ? initialCategory : 'All'
  )
  const [material, setMaterial] = useState('All')
  const [priceIdx, setPriceIdx] = useState(0)
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const c = searchParams.get('category') || 'All'
    if (categoryOptions.includes(c)) setCategory(c)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  const updateCategory = (c) => {
    setCategory(c)
    const next = new URLSearchParams(searchParams)
    if (c === 'All') next.delete('category')
    else next.set('category', c)
    setSearchParams(next, { replace: true })
  }

  const filtered = useMemo(() => {
    let list = products.slice()
    if (category !== 'All') list = list.filter((p) => p.category === category)
    if (material !== 'All') list = list.filter((p) => p.material === material)
    const range = priceRanges[priceIdx]
    list = list.filter((p) => p.price >= range.min && p.price < range.max)
    if (query) {
      const q = query.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
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
  }, [category, material, priceIdx, sort, query])

  const FilterPanel = (
    <div className="space-y-8">
      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-charcoal mb-4">Category</h3>
        <ul className="space-y-2.5">
          {categoryOptions.map((c) => (
            <li key={c}>
              <button
                onClick={() => updateCategory(c)}
                className={cn(
                  'text-sm transition-colors',
                  category === c ? 'text-gold font-medium' : 'text-muted hover:text-charcoal'
                )}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-charcoal mb-4">Material</h3>
        <ul className="space-y-2.5">
          {materialOptions.map((m) => (
            <li key={m}>
              <button
                onClick={() => setMaterial(m)}
                className={cn(
                  'text-sm transition-colors',
                  material === m ? 'text-gold font-medium' : 'text-muted hover:text-charcoal'
                )}
              >
                {m}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-charcoal mb-4">Price</h3>
        <ul className="space-y-2.5">
          {priceRanges.map((r, i) => (
            <li key={r.label}>
              <button
                onClick={() => setPriceIdx(i)}
                className={cn(
                  'text-sm transition-colors',
                  priceIdx === i ? 'text-gold font-medium' : 'text-muted hover:text-charcoal'
                )}
              >
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <StrkImageContainer deps={[]} className="pt-24 md:pt-28">
      {/* header */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14 text-center border-b border-stone/50">
        <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">The Collection</p>
        <h1 className="font-serif text-4xl md:text-6xl text-charcoal tracking-wide">
          {query ? `Results for “${query}”` : 'All Jewelry'}
        </h1>
        <p className="mt-4 text-muted max-w-xl mx-auto">
          Demi-fine gold pieces, designed to be worn and re-worn. Earrings,
          necklaces and huggies for every day.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10">
        {/* desktop sidebar */}
        <aside className="hidden md:block">{FilterPanel}</aside>

        {/* mobile filter toggle */}
        <div className="md:hidden flex items-center justify-between">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-charcoal border border-stone/60 px-4 py-2.5"
          >
            <SlidersHorizontal size={14} /> Filters
          </button>
          <SortSelect sort={sort} setSort={setSort} />
        </div>

        <div>
          <div className="hidden md:flex items-center justify-between mb-8">
            <p className="text-sm text-muted">{filtered.length} pieces</p>
            <SortSelect sort={sort} setSort={setSort} />
          </div>

          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-serif text-2xl text-charcoal">No pieces match your filters.</p>
              <button
                onClick={() => {
                  updateCategory('All')
                  setMaterial('All')
                  setPriceIdx(0)
                }}
                className="mt-4 text-[11px] uppercase tracking-widest2 text-gold hover:text-gold-deep"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-ink/50 animate-fade-in" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-cream p-6 overflow-y-auto animate-slide-in-left">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl text-charcoal">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-charcoal">
                <X size={22} />
              </button>
            </div>
            {FilterPanel}
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-10 w-full bg-gold text-cream py-4 text-[11px] uppercase tracking-widest2 hover:bg-gold-deep"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </StrkImageContainer>
  )
}

function SortSelect({ sort, setSort }) {
  return (
    <div className="relative inline-block">
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="appearance-none bg-transparent border border-stone/60 text-charcoal text-[11px] uppercase tracking-widest2 pl-4 pr-9 py-2.5 outline-none cursor-pointer"
      >
        {sortOptions.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
    </div>
  )
}
