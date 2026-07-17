import { useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X } from "lucide-react"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { useStrkImages } from "@/lib/strk-images"
import { cn } from "@/lib/utils"

const CATEGORIES = ["Earrings", "Necklaces", "Huggies"]
const MATERIALS = ["18K Gold Plated"]
const PRICE_RANGES = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 – $100", min: 50, max: 100 },
  { label: "$100+", min: 100, max: Infinity },
]
const SORTS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useStrkImages([])

  const initialCategory = searchParams.get("category") || ""
  const [selectedCats, setSelectedCats] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMats, setSelectedMats] = useState([])
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const toggle = (list, setList, value) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (selectedCats.length && !selectedCats.includes(p.category)) return false
      if (selectedMats.length && !selectedMats.includes(p.material)) return false
      if (selectedPrices.length) {
        const inRange = selectedPrices.some((label) => {
          const r = PRICE_RANGES.find((pr) => pr.label === label)
          return r && p.price >= r.min && p.price < r.max
        })
        if (!inRange) return false
      }
      return true
    })

    switch (sort) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return result
  }, [selectedCats, selectedMats, selectedPrices, sort])

  const updateCategoryUrl = (cats) => {
    const next = new URLSearchParams(searchParams)
    if (cats.length === 1) next.set("category", cats[0])
    else next.delete("category")
    setSearchParams(next, { replace: true })
  }

  const toggleCat = (c) => {
    const next = selectedCats.includes(c)
      ? selectedCats.filter((v) => v !== c)
      : [...selectedCats, c]
    setSelectedCats(next)
    updateCategoryUrl(next)
  }

  const clearAll = () => {
    setSelectedCats([])
    setSelectedPrices([])
    setSelectedMats([])
    setSearchParams({}, { replace: true })
  }

  const FilterPanel = (
    <div className="space-y-8">
      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-stone">Category</h3>
        <div className="mt-4 space-y-3">
          {CATEGORIES.map((c) => (
            <label key={c} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCats.includes(c)}
                onChange={() => toggleCat(c)}
                className="h-4 w-4 accent-gold"
              />
              <span className="text-sm text-ink group-hover:text-gold transition-colors">{c}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-stone">Price</h3>
        <div className="mt-4 space-y-3">
          {PRICE_RANGES.map((r) => (
            <label key={r.label} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedPrices.includes(r.label)}
                onChange={() => toggle(selectedPrices, setSelectedPrices, r.label)}
                className="h-4 w-4 accent-gold"
              />
              <span className="text-sm text-ink group-hover:text-gold transition-colors">{r.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-stone">Material</h3>
        <div className="mt-4 space-y-3">
          {MATERIALS.map((m) => (
            <label key={m} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedMats.includes(m)}
                onChange={() => toggle(selectedMats, setSelectedMats, m)}
                className="h-4 w-4 accent-gold"
              />
              <span className="text-sm text-ink group-hover:text-gold transition-colors">{m}</span>
            </label>
          ))}
        </div>
      </div>

      {(selectedCats.length || selectedPrices.length || selectedMats.length) > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-xs uppercase tracking-widest2 text-gold hover:text-gold-soft"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={ref} className="pt-24 md:pt-28">
      {/* Header */}
      <div className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-12 text-center md:px-10 md:py-16">
          <p className="text-xs uppercase tracking-widest2 text-gold">The Collection</p>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl text-ink">
            All Jewelry
          </h1>
          <p className="mt-4 text-sm text-stone">
            Hand-finished 18K gold plated pieces, made to be treasured.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between border-b border-line pb-5">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
          <p className="hidden text-xs uppercase tracking-widest2 text-stone lg:block">
            {filtered.length} {filtered.length === 1 ? "Piece" : "Pieces"}
          </p>
          <div className="flex items-center gap-3">
            <label className="text-xs uppercase tracking-widest2 text-stone">Sort</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-line bg-cream px-3 py-2 text-sm text-ink focus:border-ink focus:outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8 flex gap-10">
          {/* Sidebar */}
          <aside className="hidden w-56 shrink-0 lg:block">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters.</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-4 text-xs uppercase tracking-widest2 text-gold hover:text-gold-soft"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3">
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
          <div className="absolute inset-0 bg-espresso/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-cream p-6 overflow-y-auto">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <h2 className="font-serif text-xl uppercase tracking-widest3 text-ink">Filters</h2>
              <button type="button" onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="h-5 w-5 text-ink" />
              </button>
            </div>
            <div className="mt-6">{FilterPanel}</div>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-gold py-4 text-xs uppercase tracking-widest2 text-cream hover:bg-gold-soft"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
