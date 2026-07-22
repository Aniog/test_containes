import { useMemo, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, ChevronDown, X } from "lucide-react"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { cn } from "@/lib/utils"

const CATEGORY_OPTIONS = ["Earrings", "Necklaces", "Huggies"]
const MATERIAL_OPTIONS = ["18K Gold Plated"]
const PRICE_RANGES = [
  { id: "under50", label: "Under $50", min: 0, max: 50 },
  { id: "50to80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over80", label: "Over $80", min: 80, max: Infinity },
]

const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get("category")

  const [selectedCats, setSelectedCats] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sort, setSort] = useState("featured")
  const [sortOpen, setSortOpen] = useState(false)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Keep URL in sync when category param changes (e.g. from nav)
  useEffect(() => {
    const cat = searchParams.get("category")
    if (cat) {
      setSelectedCats([cat])
    }
  }, [searchParams])

  const toggle = (list, setList, value) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  const clearAll = () => {
    setSelectedCats([])
    setSelectedPrices([])
    setSelectedMaterials([])
    setSearchParams({})
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (selectedCats.length && !selectedCats.includes(p.category)) return false
      if (selectedMaterials.length && !selectedMaterials.includes(p.material)) return false
      if (selectedPrices.length) {
        const inRange = selectedPrices.some((id) => {
          const r = PRICE_RANGES.find((pr) => pr.id === id)
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
  }, [selectedCats, selectedMaterials, selectedPrices, sort])

  const activeFilterCount =
    selectedCats.length + selectedPrices.length + selectedMaterials.length

  const FilterPanel = () => (
    <div className="space-y-10">
      <FilterGroup title="Category">
        {CATEGORY_OPTIONS.map((c) => (
          <FilterCheckbox
            key={c}
            label={c}
            checked={selectedCats.includes(c)}
            onChange={() => toggle(selectedCats, setSelectedCats, c)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {PRICE_RANGES.map((r) => (
          <FilterCheckbox
            key={r.id}
            label={r.label}
            checked={selectedPrices.includes(r.id)}
            onChange={() => toggle(selectedPrices, setSelectedPrices, r.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        {MATERIAL_OPTIONS.map((m) => (
          <FilterCheckbox
            key={m}
            label={m}
            checked={selectedMaterials.includes(m)}
            onChange={() => toggle(selectedMaterials, setSelectedMaterials, m)}
          />
        ))}
      </FilterGroup>

      {activeFilterCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-[11px] uppercase tracking-[0.2em] text-gold-deep hover:text-espresso transition-colors border-b border-gold-deep pb-1"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div className="pt-16 md:pt-20">
      {/* Header */}
      <div className="border-b border-sand">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">The Collection</p>
          <h1 className="font-serif text-4xl md:text-6xl text-espresso font-light">
            Shop All Jewelry
          </h1>
          <p className="mt-4 text-taupe max-w-xl mx-auto">
            Demi-fine gold pieces, hand-finished and made for everyday wear.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-espresso md:hidden"
          >
            <SlidersHorizontal size={14} />
            Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
          </button>
          <p className="hidden md:block text-xs text-taupe">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>

          <div className="relative">
            <button
              type="button"
              onClick={() => setSortOpen((v) => !v)}
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-espresso"
            >
              Sort: {SORT_OPTIONS.find((o) => o.id === sort)?.label}
              <ChevronDown size={14} className={cn("transition-transform", sortOpen && "rotate-180")} />
            </button>
            {sortOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setSortOpen(false)} />
                <div className="absolute right-0 top-full mt-2 z-20 bg-ivory border border-sand shadow-soft min-w-[200px] py-2">
                  {SORT_OPTIONS.map((o) => (
                    <button
                      key={o.id}
                      type="button"
                      onClick={() => {
                        setSort(o.id)
                        setSortOpen(false)
                      }}
                      className={cn(
                        "w-full text-left px-4 py-2.5 text-xs hover:bg-cream transition-colors",
                        sort === o.id ? "text-gold-deep font-medium" : "text-cocoa"
                      )}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block">
            <FilterPanel />
          </aside>

          {/* Grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-3xl text-espresso">No pieces match your filters</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-6 text-[11px] uppercase tracking-[0.2em] text-gold-deep border-b border-gold-deep pb-1"
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
        <div className="fixed inset-0 z-[80] md:hidden">
          <div
            className="absolute inset-0 bg-espresso/40 backdrop-blur-[2px]"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-ivory flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
              <h2 className="font-serif text-xl uppercase tracking-[0.14em] text-espresso">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-espresso"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <FilterPanel />
            </div>
            <div className="border-t border-sand px-6 py-4">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-espresso text-ivory py-4 text-xs uppercase tracking-[0.2em] font-medium"
              >
                Show {filtered.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function FilterGroup({ title, children }) {
  return (
    <div>
      <h3 className="text-[11px] uppercase tracking-[0.2em] text-espresso font-medium mb-4">
        {title}
      </h3>
      <div className="space-y-3">{children}</div>
    </div>
  )
}

function FilterCheckbox({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <span
        className={cn(
          "w-4 h-4 border flex items-center justify-center transition-colors",
          checked ? "bg-espresso border-espresso" : "border-sand group-hover:border-espresso"
        )}
      >
        {checked && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" className="text-ivory">
            <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
      <span className="text-sm text-cocoa group-hover:text-espresso transition-colors">{label}</span>
    </label>
  )
}
