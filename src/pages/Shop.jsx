import React, { useMemo, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"
import { products, categories } from "@/data/products"
import ProductCard from "@/components/ProductCard"
import { cn } from "@/lib/utils"

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
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)

  const initialCategory = searchParams.get("category") || ""
  const query = searchParams.get("q") || ""

  const [selectedCats, setSelectedCats] = useState(initialCategory ? [initialCategory] : [])
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sort, setSort] = useState("featured")

  // Sync category from URL when it changes
  useEffect(() => {
    const cat = searchParams.get("category") || ""
    setSelectedCats(cat ? [cat] : [])
  }, [searchParams])

  const toggle = (list, setter, value) => {
    setter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  const filtered = useMemo(() => {
    let result = [...products]

    if (query) {
      const q = query.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    }
    if (selectedCats.length) {
      result = result.filter((p) => selectedCats.includes(p.category))
    }
    if (selectedPrices.length) {
      result = result.filter((p) =>
        selectedPrices.some((id) => {
          const b = PRICE_BUCKETS.find((x) => x.id === id)
          return b && p.price >= b.min && p.price < b.max
        })
      )
    }
    if (selectedMaterials.length) {
      result = result.filter((p) => selectedMaterials.includes(p.material))
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
  }, [query, selectedCats, selectedPrices, selectedMaterials, sort])

  const clearAll = () => {
    setSelectedCats([])
    setSelectedPrices([])
    setSelectedMaterials([])
    setSearchParams({})
  }

  const FilterGroup = ({ title, options, selected, onToggle }) => (
    <div className="border-b border-ink/10 py-6">
      <p className="text-xs uppercase tracking-widest2 text-ink mb-4">{title}</p>
      <ul className="space-y-3">
        {options.map((opt) => {
          const value = opt.id ?? opt
          const checked = selected.includes(value)
          return (
            <li key={value}>
              <button
                onClick={() => onToggle(value)}
                className="flex items-center gap-3 text-sm text-stone hover:text-ink transition-colors"
              >
                <span
                  className={cn(
                    "w-4 h-4 border flex items-center justify-center transition-colors",
                    checked ? "bg-ink border-ink" : "border-ink/30"
                  )}
                >
                  {checked && <span className="w-2 h-2 bg-cream" />}
                </span>
                {opt.label ?? opt}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )

  const Sidebar = (
    <div>
      <FilterGroup
        title="Category"
        options={categories.map((c) => ({ id: c.id, label: c.name }))}
        selected={selectedCats}
        onToggle={(v) => toggle(selectedCats, setSelectedCats, v)}
      />
      <FilterGroup
        title="Price"
        options={PRICE_BUCKETS}
        selected={selectedPrices}
        onToggle={(v) => toggle(selectedPrices, setSelectedPrices, v)}
      />
      <FilterGroup
        title="Material"
        options={[...new Set(products.map((p) => p.material))]}
        selected={selectedMaterials}
        onToggle={(v) => toggle(selectedMaterials, setSelectedMaterials, v)}
      />
      {(selectedCats.length || selectedPrices.length || selectedMaterials.length) > 0 && (
        <button
          onClick={clearAll}
          className="mt-6 text-xs uppercase tracking-widest2 text-gold underline underline-offset-4 hover:text-gold-deep"
        >
          Clear All
        </button>
      )}
    </div>
  )

  return (
    <div className="bg-cream pt-16 md:pt-20 min-h-screen">
      {/* Header */}
      <div className="max-w-editorial mx-auto px-6 md:px-10 py-12 md:py-16 text-center border-b border-ink/10">
        <p className="text-xs uppercase tracking-widest2 text-gold mb-3">The Collection</p>
        <h1 className="font-serif text-5xl md:text-6xl text-ink">
          {query ? `“${query}”` : "Shop All"}
        </h1>
        <p className="text-stone text-sm mt-4">
          {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
        </p>
      </div>

      <div className="max-w-editorial mx-auto px-6 md:px-10 py-10">
        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-60 shrink-0">
            <div className="sticky top-28">{Sidebar}</div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink"
              >
                <SlidersHorizontal className="w-4 h-4" /> Filters
              </button>
              <p className="hidden lg:block text-xs uppercase tracking-widest2 text-stone">
                {filtered.length} {filtered.length === 1 ? "Item" : "Items"}
              </p>
              <div className="relative">
                <button
                  onClick={() => setSortOpen((v) => !v)}
                  className="flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink"
                >
                  Sort: {SORTS.find((s) => s.id === sort)?.label}
                  <ChevronDown className="w-3 h-3" />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-8 z-20 bg-cream border border-ink/15 shadow-lg w-56 py-2">
                    {SORTS.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => {
                          setSort(s.id)
                          setSortOpen(false)
                        }}
                        className={cn(
                          "block w-full text-left px-4 py-2 text-sm hover:bg-sand transition-colors",
                          sort === s.id ? "text-gold" : "text-ink"
                        )}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <button
                  onClick={clearAll}
                  className="mt-6 text-xs uppercase tracking-widest2 text-gold underline underline-offset-4"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-6">
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
        <div className="lg:hidden fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-cream overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <p className="font-serif text-xl uppercase tracking-widest3 text-ink">Filters</p>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5 text-ink" />
              </button>
            </div>
            {Sidebar}
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-gold text-cream text-xs uppercase tracking-widest2 py-4 hover:bg-gold-deep transition-colors"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
