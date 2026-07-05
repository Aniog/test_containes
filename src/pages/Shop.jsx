import { useMemo, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"
import { products } from "@/data/products"
import { useStrkImages } from "@/hooks/useStrkImages"
import { cn } from "@/lib/utils"
import ProductCard from "@/components/product/ProductCard"

const CATEGORIES = ["Earrings", "Necklaces", "Huggies", "Sets"]
const MATERIALS = ["18K Gold Plated", "Sterling Silver"]
const PRICE_RANGES = [
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
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useStrkImages([])

  const initialCategory = searchParams.get("category") || ""
  const [selectedCats, setSelectedCats] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Sync category from URL when it changes
  useEffect(() => {
    const cat = searchParams.get("category") || ""
    setSelectedCats(cat ? [cat] : [])
  }, [searchParams])

  const toggle = (list, setList, value) => {
    setList((cur) =>
      cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value]
    )
  }

  const filtered = useMemo(() => {
    let result = [...products]

    if (selectedCats.length) {
      result = result.filter((p) => selectedCats.includes(p.category))
    }
    if (selectedPrices.length) {
      result = result.filter((p) =>
        selectedPrices.some((id) => {
          const r = PRICE_RANGES.find((pr) => pr.id === id)
          return r && p.price >= r.min && p.price < r.max
        })
      )
    }
    if (selectedMaterials.length) {
      result = result.filter((p) =>
        selectedMaterials.some((m) =>
          m === "Sterling Silver" ? p.tones.includes("Silver") : true
        )
      )
    }

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return result
  }, [selectedCats, selectedPrices, selectedMaterials, sort])

  const clearAll = () => {
    setSelectedCats([])
    setSelectedPrices([])
    setSelectedMaterials([])
    setSearchParams({})
  }

  const activeCount =
    selectedCats.length + selectedPrices.length + selectedMaterials.length

  const FilterPanel = (
    <div className="space-y-9">
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-xl uppercase tracking-[0.1em]">Filter</h3>
        {activeCount > 0 && (
          <button
            type="button"
            onClick={clearAll}
            className="text-[11px] uppercase tracking-[0.18em] text-stone hover:text-gold transition-colors"
          >
            Clear ({activeCount})
          </button>
        )}
      </div>

      <FilterGroup title="Category">
        {CATEGORIES.map((c) => (
          <CheckRow
            key={c}
            label={c}
            checked={selectedCats.includes(c)}
            onChange={() => toggle(selectedCats, setSelectedCats, c)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {PRICE_RANGES.map((r) => (
          <CheckRow
            key={r.id}
            label={r.label}
            checked={selectedPrices.includes(r.id)}
            onChange={() => toggle(selectedPrices, setSelectedPrices, r.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        {MATERIALS.map((m) => (
          <CheckRow
            key={m}
            label={m}
            checked={selectedMaterials.includes(m)}
            onChange={() => toggle(selectedMaterials, setSelectedMaterials, m)}
          />
        ))}
      </FilterGroup>
    </div>
  )

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Header */}
      <div className="border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-light">
            Shop All Jewelry
          </h1>
          <p className="mt-4 text-stone max-w-md mx-auto">
            Demi-fine gold pieces, designed to be worn every day and treasured for years.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-60 shrink-0">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] border border-ink/20 px-4 py-2.5"
              >
                <SlidersHorizontal size={14} /> Filters
                {activeCount > 0 && <span className="text-gold">({activeCount})</span>}
              </button>
              <p className="hidden md:block text-sm text-stone">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent border border-ink/20 pl-4 pr-10 py-2.5 text-[11px] uppercase tracking-[0.18em] focus:outline-none focus:border-gold cursor-pointer"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      Sort: {s.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={14}
                  className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-stone"
                />
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl">No pieces match your filters.</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-4 text-[11px] uppercase tracking-[0.2em] text-gold hover:text-gold-deep transition-colors"
                >
                  Clear Filters
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
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="md:hidden fixed inset-0 z-[80]">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-cream p-6 overflow-y-auto animate-slide-in">
            <div className="flex items-center justify-between mb-8">
              <span className="font-serif text-xl">Filters</span>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X size={22} />
              </button>
            </div>
            {FilterPanel}
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-ink text-cream py-3.5 text-[11px] uppercase tracking-[0.2em]"
            >
              Show {filtered.length} Results
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
      <h4 className="text-[11px] uppercase tracking-[0.2em] text-stone mb-4">{title}</h4>
      <div className="space-y-3">{children}</div>
    </div>
  )
}

function CheckRow({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <span
        className={cn(
          "w-4 h-4 border flex items-center justify-center transition-colors",
          checked ? "bg-ink border-ink" : "border-ink/30 group-hover:border-ink"
        )}
      >
        {checked && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4l2.5 2.5L9 1" stroke="#F7F2EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
      <span className="text-sm text-ink">{label}</span>
    </label>
  )
}
