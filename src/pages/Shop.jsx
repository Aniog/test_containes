import { useMemo, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X, Check } from "lucide-react"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { useStrkImages } from "@/components/ui/StrkImage"
import { cn, formatPrice } from "@/lib/utils"

const CATEGORIES = ["Earrings", "Necklaces", "Huggies"]
const MATERIALS = ["18K Gold Plated"]
const PRICE_BUCKETS = [
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over-80", label: "Over $80", min: 80, max: Infinity },
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
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const [selectedCategories, setSelectedCategories] = useState(() => {
    const c = searchParams.get("category")
    return c ? [c] : []
  })
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])

  // Sync category from URL when it changes (e.g. nav clicks)
  useEffect(() => {
    const c = searchParams.get("category")
    setSelectedCategories(c ? [c] : [])
  }, [searchParams])

  const toggle = (list, setList, value) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (selectedCategories.length && !selectedCategories.includes(p.category)) return false
      if (selectedMaterials.length && !selectedMaterials.includes(p.material)) return false
      if (selectedPrices.length) {
        const matches = selectedPrices.some((id) => {
          const bucket = PRICE_BUCKETS.find((b) => b.id === id)
          return bucket && p.price >= bucket.min && p.price < bucket.max
        })
        if (!matches) return false
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
  }, [selectedCategories, selectedMaterials, selectedPrices, sort])

  const clearAll = () => {
    setSelectedCategories([])
    setSelectedPrices([])
    setSelectedMaterials([])
    setSearchParams({})
  }

  const activeCount =
    selectedCategories.length + selectedPrices.length + selectedMaterials.length

  const FilterContent = () => (
    <div className="space-y-8">
      <FilterGroup title="Category">
        {CATEGORIES.map((c) => (
          <FilterCheck
            key={c}
            label={c}
            checked={selectedCategories.includes(c)}
            onChange={() => toggle(selectedCategories, setSelectedCategories, c)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {PRICE_BUCKETS.map((b) => (
          <FilterCheck
            key={b.id}
            label={b.label}
            checked={selectedPrices.includes(b.id)}
            onChange={() => toggle(selectedPrices, setSelectedPrices, b.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        {MATERIALS.map((m) => (
          <FilterCheck
            key={m}
            label={m}
            checked={selectedMaterials.includes(m)}
            onChange={() => toggle(selectedMaterials, setSelectedMaterials, m)}
          />
        ))}
      </FilterGroup>

      {activeCount > 0 && (
        <button
          onClick={clearAll}
          className="text-xs uppercase tracking-widest2 text-gold hover:text-gold-deep transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={ref} className="pt-24 md:pt-28">
      {/* Header */}
      <div className="max-w-content mx-auto px-6 md:px-10 pb-8 md:pb-12 text-center">
        <p className="text-xs uppercase tracking-widest3 text-gold mb-3">The Collection</p>
        <h1 className="font-serif text-4xl md:text-6xl text-ink font-light">
          {selectedCategories.length === 1 ? selectedCategories[0] : "All Jewelry"}
        </h1>
        <p className="mt-4 text-sm text-muted max-w-md mx-auto">
          Demi-fine gold pieces, hand-finished and made to be worn every day.
        </p>
      </div>

      <div className="max-w-content mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 pb-20">
        {/* Desktop sidebar */}
        <aside className="hidden md:block">
          <div className="sticky top-28">
            <div className="flex items-center gap-2 pb-4 border-b border-sand">
              <SlidersHorizontal size={15} className="text-ink" />
              <h2 className="text-xs uppercase tracking-widest2 text-ink">Filter</h2>
            </div>
            <div className="pt-6">
              <FilterContent />
            </div>
          </div>
        </aside>

        {/* Main */}
        <div>
          {/* Toolbar */}
          <div className="flex items-center justify-between pb-6 border-b border-sand">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink"
            >
              <SlidersHorizontal size={15} />
              Filter {activeCount > 0 && `(${activeCount})`}
            </button>
            <p className="hidden md:block text-xs text-muted tracking-wide">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </p>
            <div className="flex items-center gap-2">
              <label className="text-xs uppercase tracking-widest2 text-muted hidden sm:block">
                Sort
              </label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-transparent border border-sand rounded-full px-4 py-2 text-xs text-ink outline-none focus:border-gold transition-colors cursor-pointer"
              >
                {SORTS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
              <p className="mt-2 text-sm text-muted">Try adjusting or clearing your filters.</p>
              <button
                onClick={clearAll}
                className="mt-6 inline-block border border-ink text-ink text-xs uppercase tracking-widest2 px-8 py-3 rounded-full hover:bg-ink hover:text-cream transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-6 pt-8">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm animate-fade-in"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[85%] max-w-sm bg-cream shadow-soft-lg flex flex-col animate-slide-in" style={{ animationName: "velmora-slide-in-left" }}>
            <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
              <h2 className="font-serif text-xl text-ink">Filter</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters" className="text-ink hover:text-gold">
                <X size={22} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <FilterContent />
            </div>
            <div className="px-6 py-5 border-t border-sand">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-gold text-cream text-xs uppercase tracking-widest2 py-4 rounded-full hover:bg-gold-deep transition-colors"
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
      <h3 className="text-xs uppercase tracking-widest2 text-ink mb-4">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  )
}

function FilterCheck({ label, checked, onChange }) {
  return (
    <button onClick={onChange} className="flex items-center gap-3 group w-full text-left">
      <span
        className={cn(
          "w-4 h-4 border flex items-center justify-center transition-colors",
          checked ? "bg-ink border-ink" : "border-sand group-hover:border-ink"
        )}
      >
        {checked && <Check size={11} className="text-cream" />}
      </span>
      <span className={cn("text-sm transition-colors", checked ? "text-ink" : "text-muted group-hover:text-ink")}>
        {label}
      </span>
    </button>
  )
}
