import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard.jsx'
import { ImageRoot } from '@/components/Img.jsx'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { fetchProducts } from '@/api/products.js'
import { cn } from '@/lib/utils'
import { CATEGORY_LABELS } from '@/data/products.js'

const PRICE_BANDS = [
  { id: 'all', label: 'All prices', test: () => true },
  { id: 'under-50', label: 'Under $50', test: (p) => p.price < 50 },
  { id: '50-75', label: '$50 – $75', test: (p) => p.price >= 50 && p.price <= 75 },
  { id: 'over-75', label: 'Over $75', test: (p) => p.price > 75 },
]

const MATERIALS = [
  { id: 'all', label: 'All materials' },
  { id: '18k', label: '18K Gold Plated' },
  { id: 'crystal', label: 'Crystal Accent' },
]

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [priceBand, setPriceBand] = useState('all')
  const [material, setMaterial] = useState('all')
  const [sort, setSort] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const category = searchParams.get('category') ?? 'all'

  useEffect(() => {
    fetchProducts().then((rows) => {
      setProducts(rows)
      setLoading(false)
    })
  }, [])

  const setCategory = (value) => {
    if (value === 'all') searchParams.delete('category')
    else searchParams.set('category', value)
    setSearchParams(searchParams, { replace: true })
  }

  const filtered = useMemo(() => {
    const band = PRICE_BANDS.find((b) => b.id === priceBand) ?? PRICE_BANDS[0]
    let list = products.filter(
      (p) =>
        (category === 'all' || p.category === category) &&
        band.test(p) &&
        (material === 'all' ||
          (material === '18k' && /18k/i.test(p.materials ?? '')) ||
          (material === 'crystal' && /crystal|zirconia/i.test(p.materials ?? '')))
    )
    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price)
    else if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price)
    else if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating)
    return list
  }, [products, category, priceBand, material, sort])

  const FilterPanel = (
    <div className="space-y-8">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-ink">Category</p>
        <ul className="mt-4 space-y-2.5">
          {[{ id: 'all', label: 'All Jewelry' }, ...Object.entries(CATEGORY_LABELS).map(([id, label]) => ({ id, label }))].map((c) => (
            <li key={c.id}>
              <button
                onClick={() => setCategory(c.id)}
                className={cn(
                  'text-sm transition-colors',
                  category === c.id ? 'font-medium text-bronze' : 'text-stone hover:text-ink'
                )}
              >
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-line pt-7">
        <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-ink">Price</p>
        <ul className="mt-4 space-y-2.5">
          {PRICE_BANDS.map((b) => (
            <li key={b.id}>
              <button
                onClick={() => setPriceBand(b.id)}
                className={cn(
                  'text-sm transition-colors',
                  priceBand === b.id ? 'font-medium text-bronze' : 'text-stone hover:text-ink'
                )}
              >
                {b.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-line pt-7">
        <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-ink">Material</p>
        <ul className="mt-4 space-y-2.5">
          {MATERIALS.map((m) => (
            <li key={m.id}>
              <button
                onClick={() => setMaterial(m.id)}
                className={cn(
                  'text-sm transition-colors',
                  material === m.id ? 'font-medium text-bronze' : 'text-stone hover:text-ink'
                )}
              >
                {m.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <ImageRoot deps={[filtered.length]} className="bg-cream">
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-24 md:px-8 md:pt-32">
        {/* Header */}
        <div className="border-b border-line pb-10 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-bronze">
            Velmora Fine Jewelry
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium text-ink md:text-6xl">
            {category === 'all' ? 'The Collection' : CATEGORY_LABELS[category]}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-stone">
            Demi-fine pieces plated in 18K gold — hypoallergenic, tarnish-resistant,
            and made to be worn every day.
          </p>
        </div>

        {/* Toolbar */}
        <div className="mt-6 flex items-center justify-between">
          <button
            className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-ink md:hidden"
            onClick={() => setFiltersOpen(true)}
          >
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
          <p className="hidden text-xs uppercase tracking-[0.2em] text-stone md:block">
            {filtered.length} piece{filtered.length === 1 ? '' : 's'}
          </p>
          <div className="w-48">
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {SORTS.map((s) => (
                  <SelectItem key={s.id} value={s.id}>
                    {s.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-8 grid gap-10 md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr]">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Grid */}
          <div>
            {loading ? (
              <p className="py-20 text-center font-serif text-xl italic text-stone">Loading…</p>
            ) : filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <button
                  className="mt-4 text-[11px] font-medium uppercase tracking-[0.25em] text-bronze underline underline-offset-4"
                  onClick={() => {
                    setCategory('all')
                    setPriceBand('all')
                    setMaterial('all')
                  }}
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-3 lg:gap-x-6">
                {filtered.map((p, i) => (
                  <ProductCard key={p.slug} product={p} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filtersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-ink/60" onClick={() => setFiltersOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-80 max-w-[85vw] overflow-y-auto bg-cream p-6">
            <div className="flex items-center justify-between">
              <p className="font-serif text-2xl font-medium text-ink">Filters</p>
              <button onClick={() => setFiltersOpen(false)} aria-label="Close filters">
                <X className="h-5 w-5 text-ink" />
              </button>
            </div>
            <div className="mt-8">{FilterPanel}</div>
            <button
              className="mt-10 w-full bg-gold py-4 text-xs font-medium uppercase tracking-[0.2em] text-ink"
              onClick={() => setFiltersOpen(false)}
            >
              Show {filtered.length} pieces
            </button>
          </div>
        </div>
      )}
    </ImageRoot>
  )
}
