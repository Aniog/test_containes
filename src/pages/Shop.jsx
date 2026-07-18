import { useMemo, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, ChevronDown, X } from "lucide-react"
import ProductCard from "@/components/product/ProductCard"
import { products } from "@/data/products"
import { useStrkImages } from "@/components/ui/StrkImage"
import { cn } from "@/lib/utils"

const CATEGORIES = ["Earrings", "Necklaces", "Huggies"]
const MATERIALS = ["18K Gold Plated"]
const PRICE_BANDS = [
  { id: "under50", label: "Under $50", min: 0, max: 50 },
  { id: "50to80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over80", label: "Over $80", min: 80, max: Infinity },
]
const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const initialCategory = params.get("category")
  const [selectedCats, setSelectedCats] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const ref = useStrkImages([selectedCats, selectedPrices, selectedMaterials, sort])

  useEffect(() => {
    const c = params.get("category")
    setSelectedCats(c ? [c] : [])
  }, [params])

  const toggle = (list, setList, value) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  const filtered = useMemo(() => {
    let out = products.filter((p) => {
      if (selectedCats.length && !selectedCats.includes(p.category)) return false
      if (selectedMaterials.length && !selectedMaterials.includes(p.material)) return false
      if (selectedPrices.length) {
        const inBand = PRICE_BANDS.filter((b) => selectedPrices.includes(b.id)).some(
          (b) => p.price >= b.min && p.price < b.max
        )
        if (!inBand) return false
      }
      return true
    })

    switch (sort) {
      case "price-asc":
        out = [...out].sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        out = [...out].sort((a, b) => b.price - a.price)
        break
      case "rating":
        out = [...out].sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return out
  }, [selectedCats, selectedPrices, selectedMaterials, sort])

  const clearAll = () => {
    setSelectedCats([])
    setSelectedPrices([])
    setSelectedMaterials([])
    setParams({})
  }

  const FilterPanel = () => (
    <div className="space-y-10">
      <div>
        <p className="font-sans text-[11px] uppercase tracking-ultra text-ink">Category</p>
        <ul className="mt-4 space-y-3">
          {CATEGORIES.map((c) => (
            <li key={c}>
              <label className="flex cursor-pointer items-center gap-3 font-sans text-sm text-ink/80">
                <input
                  type="checkbox"
                  checked={selectedCats.includes(c)}
                  onChange={() => toggle(selectedCats, setSelectedCats, c)}
                  className="h-3.5 w-3.5 accent-gold-deep"
                />
                {c}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="font-sans text-[11px] uppercase tracking-ultra text-ink">Price</p>
        <ul className="mt-4 space-y-3">
          {PRICE_BANDS.map((b) => (
            <li key={b.id}>
              <label className="flex cursor-pointer items-center gap-3 font-sans text-sm text-ink/80">
                <input
                  type="checkbox"
                  checked={selectedPrices.includes(b.id)}
                  onChange={() => toggle(selectedPrices, setSelectedPrices, b.id)}
                  className="h-3.5 w-3.5 accent-gold-deep"
                />
                {b.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="font-sans text-[11px] uppercase tracking-ultra text-ink">Material</p>
        <ul className="mt-4 space-y-3">
          {MATERIALS.map((m) => (
            <li key={m}>
              <label className="flex cursor-pointer items-center gap-3 font-sans text-sm text-ink/80">
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(m)}
                  onChange={() => toggle(selectedMaterials, setSelectedMaterials, m)}
                  className="h-3.5 w-3.5 accent-gold-deep"
                />
                {m}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {(selectedCats.length || selectedPrices.length || selectedMaterials.length) > 0 && (
        <button
          onClick={clearAll}
          className="font-sans text-[11px] uppercase tracking-ultra text-gold-deep underline-offset-4 hover:underline"
        >
          Clear All
        </button>
      )}
    </div>
  )

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Page header */}
      <div className="container-editorial border-b border-ink/10 py-12 text-center md:py-16">
        <p className="eyebrow">The Collection</p>
        <h1 className="heading-serif mt-3 text-4xl md:text-5xl">Shop All</h1>
        <p className="mx-auto mt-4 max-w-md font-sans text-sm text-ink-muted">
          Demi-fine gold jewelry, made to be worn every day.
        </p>
      </div>

      <div className="container-editorial py-10 md:py-14">
        <div className="flex gap-12">
          {/* Sidebar (desktop) */}
          <aside className="hidden w-56 shrink-0 md:block">
            <FilterPanel />
          </aside>

          {/* Main */}
          <div className="flex-1">
            <div className="mb-8 flex items-center justify-between gap-4">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="inline-flex items-center gap-2 border border-ink/20 px-4 py-2.5 font-sans text-[11px] uppercase tracking-ultra text-ink md:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </button>
              <p className="hidden font-sans text-xs text-ink-muted md:block">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="relative ml-auto">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none border border-ink/20 bg-cream-50 py-2.5 pl-4 pr-10 font-sans text-[11px] uppercase tracking-ultra text-ink focus:border-ink focus:outline-none"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/60" />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <button onClick={clearAll} className="btn-outline mt-6">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-3">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[80] md:hidden",
          mobileFiltersOpen ? "" : "pointer-events-none"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-ink/40 transition-opacity duration-300",
            mobileFiltersOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={cn(
            "absolute left-0 top-0 h-full w-80 max-w-[85%] bg-cream-50 p-6 shadow-soft transition-transform duration-500 ease-elegant",
            mobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="mb-8 flex items-center justify-between">
            <p className="font-sans text-[11px] uppercase tracking-ultra text-ink">Filters</p>
            <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
              <X className="h-5 w-5 text-ink" />
            </button>
          </div>
          <FilterPanel />
          <button
            onClick={() => setMobileFiltersOpen(false)}
            className="btn-accent mt-10 w-full"
          >
            Show {filtered.length} Results
          </button>
        </div>
      </div>
    </div>
  )
}
