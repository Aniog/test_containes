import { useMemo, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X, Check } from "lucide-react"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { useStrkImages } from "@/lib/useStrkImages"
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
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useStrkImages([])

  const initialCategory = searchParams.get("category") || ""
  const [selectedCats, setSelectedCats] = useState(initialCategory ? [initialCategory] : [])
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Keep URL in sync when arriving via category link
  useEffect(() => {
    const cat = searchParams.get("category") || ""
    setSelectedCats(cat ? [cat] : [])
  }, [searchParams])

  const toggle = (list, setList, value) => {
    setList((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]))
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (selectedCats.length && !selectedCats.includes(p.category)) return false
      if (selectedMaterials.length && !selectedMaterials.includes(p.material)) return false
      if (selectedPrices.length) {
        const matches = selectedPrices.some((id) => {
          const band = PRICE_BANDS.find((b) => b.id === id)
          return band && p.price >= band.min && p.price < band.max
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
  }, [selectedCats, selectedPrices, selectedMaterials, sort])

  const clearAll = () => {
    setSelectedCats([])
    setSelectedPrices([])
    setSelectedMaterials([])
    setSearchParams({})
  }

  const activeCount = selectedCats.length + selectedPrices.length + selectedMaterials.length

  const FilterGroup = ({ title, options, selected, onToggle }) => (
    <div className="border-b border-champagne py-5">
      <p className="text-[11px] uppercase tracking-widest2 text-ink">{title}</p>
      <ul className="mt-3 space-y-2.5">
        {options.map((opt) => {
          const value = typeof opt === "string" ? opt : opt.id
          const label = typeof opt === "string" ? opt : opt.label
          const checked = selected.includes(value)
          return (
            <li key={value}>
              <button
                type="button"
                onClick={() => onToggle(value)}
                className="flex items-center gap-2.5 text-sm text-stone hover:text-ink"
              >
                <span
                  className={cn(
                    "flex h-4 w-4 items-center justify-center border",
                    checked ? "border-gold bg-gold text-white" : "border-champagne",
                  )}
                >
                  {checked && <Check className="h-3 w-3" />}
                </span>
                {label}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )

  const Filters = () => (
    <div>
      <div className="flex items-center justify-between pb-4">
        <p className="font-serif text-lg text-ink">Filters</p>
        {activeCount > 0 && (
          <button
            type="button"
            onClick={clearAll}
            className="text-[11px] uppercase tracking-widest2 text-gold hover:text-gold-deep"
          >
            Clear all
          </button>
        )}
      </div>
      <FilterGroup
        title="Category"
        options={CATEGORIES}
        selected={selectedCats}
        onToggle={(v) => {
          toggle(selectedCats, setSelectedCats, v)
          setSearchParams({})
        }}
      />
      <FilterGroup
        title="Price"
        options={PRICE_BANDS}
        selected={selectedPrices}
        onToggle={(v) => toggle(selectedPrices, setSelectedPrices, v)}
      />
      <FilterGroup
        title="Material"
        options={MATERIALS}
        selected={selectedMaterials}
        onToggle={(v) => toggle(selectedMaterials, setSelectedMaterials, v)}
      />
    </div>
  )

  return (
    <div ref={ref} className="pt-20 md:pt-24">
      {/* Header */}
      <div className="border-b border-champagne bg-sand">
        <div className="mx-auto max-w-editorial px-5 py-14 text-center md:px-8 md:py-20">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">The Collection</p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-6xl">Shop All Jewelry</h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-stone">
            Hand-finished demi-fine gold pieces, designed for everyday luxury.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-editorial px-5 py-10 md:px-8">
        {/* Toolbar */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 border border-champagne px-4 py-2.5 text-[11px] uppercase tracking-widest2 text-ink lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" /> Filters
            {activeCount > 0 && <span className="text-gold">({activeCount})</span>}
          </button>
          <p className="hidden text-sm text-stone lg:block">{filtered.length} pieces</p>
          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="hidden text-[11px] uppercase tracking-widest2 text-stone sm:block">
              Sort
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-champagne bg-cream px-4 py-2.5 text-sm text-ink focus:border-gold focus:outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar */}
          <aside className="hidden w-60 shrink-0 lg:block">
            <Filters />
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-[11px] uppercase tracking-widest2 text-gold hover:text-gold-deep"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 md:gap-x-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] overflow-y-auto bg-cream px-6 py-6">
            <div className="flex items-center justify-between pb-4">
              <p className="font-serif text-xl text-ink">Filters</p>
              <button type="button" onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="h-5 w-5 text-ink" />
              </button>
            </div>
            <Filters />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-6 w-full bg-gold py-4 text-[11px] uppercase tracking-widest2 text-white hover:bg-gold-deep"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
