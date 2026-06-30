import { useMemo, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X } from "lucide-react"
import { products, CATEGORIES, MATERIALS } from "@/data/products"
import { formatPrice } from "@/lib/utils"
import ProductCard from "@/components/ProductCard"
import ImageLoader from "@/components/ImageLoader"

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

const PRICE_BUCKETS = [
  { id: "0-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "80+", label: "$80 & above", min: 80, max: Infinity },
]

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const initialCategory = params.get("category") || ""

  const [selectedCats, setSelectedCats] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedMats, setSelectedMats] = useState([])
  const [selectedPrices, setSelectedPrices] = useState([])
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Keep URL in sync when category changes via nav
  useEffect(() => {
    const c = params.get("category")
    setSelectedCats(c ? [c] : [])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.get("category")])

  const toggle = (list, setList, value) => {
    setList((cur) =>
      cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value]
    )
  }

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (selectedCats.length && !selectedCats.includes(p.category)) return false
      if (selectedMats.length && !selectedMats.includes(p.material)) return false
      if (selectedPrices.length) {
        const inBucket = selectedPrices.some((id) => {
          const b = PRICE_BUCKETS.find((x) => x.id === id)
          return b && p.price >= b.min && p.price < b.max
        })
        if (!inBucket) return false
      }
      return true
    })

    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price)
        break
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return list
  }, [selectedCats, selectedMats, selectedPrices, sort])

  const clearAll = () => {
    setSelectedCats([])
    setSelectedMats([])
    setSelectedPrices([])
    setParams({})
  }

  const FilterPanel = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink">Category</h3>
        <div className="mt-4 space-y-3">
          {CATEGORIES.map((c) => (
            <label key={c.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCats.includes(c.id)}
                onChange={() => toggle(selectedCats, setSelectedCats, c.id)}
                className="h-4 w-4 accent-gold"
              />
              <span className="text-sm text-ink group-hover:text-gold">{c.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink">Material</h3>
        <div className="mt-4 space-y-3">
          {MATERIALS.map((m) => (
            <label key={m} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedMats.includes(m)}
                onChange={() => toggle(selectedMats, setSelectedMats, m)}
                className="h-4 w-4 accent-gold"
              />
              <span className="text-sm text-ink group-hover:text-gold">{m}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink">Price</h3>
        <div className="mt-4 space-y-3">
          {PRICE_BUCKETS.map((b) => (
            <label key={b.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedPrices.includes(b.id)}
                onChange={() => toggle(selectedPrices, setSelectedPrices, b.id)}
                className="h-4 w-4 accent-gold"
              />
              <span className="text-sm text-ink group-hover:text-gold">{b.label}</span>
            </label>
          ))}
        </div>
      </div>

      {(selectedCats.length || selectedMats.length || selectedPrices.length) > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-xs uppercase tracking-widest2 text-stone hover:text-ink underline underline-offset-4"
        >
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <ImageLoader className="pt-16 md:pt-20" deps={[selectedCats, selectedMats, selectedPrices, sort]}>
      {/* Page header */}
      <div className="border-b border-line">
        <div className="mx-auto max-w-editorial px-6 md:px-10 py-14 text-center">
          <p className="eyebrow">The Collection</p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Shop All Jewelry</h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-stone">
            Demi-fine gold pieces, designed to be worn and treasured every day.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-editorial px-6 md:px-10 py-10">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden w-60 shrink-0 md:block">
            <FilterPanel />
          </aside>

          {/* Main */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between border-b border-line pb-4">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink md:hidden"
              >
                <SlidersHorizontal size={14} /> Filters
              </button>
              <p className="hidden text-xs uppercase tracking-widest2 text-stone md:block">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="flex items-center gap-2">
                <label className="text-xs uppercase tracking-widest2 text-stone">Sort</label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border border-line bg-cream px-3 py-2 text-xs text-ink focus:border-ink focus:outline-none"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>{s.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <button onClick={clearAll} className="btn-outline mt-6">Clear Filters</button>
              </div>
            ) : (
              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 md:gap-x-8">
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
        <div className="fixed inset-0 z-[80] md:hidden">
          <div className="absolute inset-0 bg-ink/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-cream p-6 overflow-y-auto">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <h2 className="font-serif text-xl uppercase tracking-widest3 text-ink">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters" className="text-ink">
                <X size={20} />
              </button>
            </div>
            <div className="mt-6">
              <FilterPanel />
            </div>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="btn-primary mt-8 w-full"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </ImageLoader>
  )
}
