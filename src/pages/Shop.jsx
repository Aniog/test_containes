import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X } from "lucide-react"
import { products, categories } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { cn } from "@/lib/utils"

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
]

const priceRanges = [
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over-80", label: "Over $80", min: 80, max: Infinity },
]

const materials = ["18K Gold Plated"]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sort, setSort] = useState("featured")
  const [selectedCats, setSelectedCats] = useState(
    searchParams.get("category") ? [searchParams.get("category")] : []
  )
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const cat = searchParams.get("category")
    setSelectedCats(cat ? [cat] : [])
  }, [searchParams])

  const toggle = (value, list, setter) => {
    setter(list.includes(value) ? list.filter((v) => v !== value) : [...list, value])
  }

  const filtered = useMemo(() => {
    let result = [...products]
    if (selectedCats.length) {
      result = result.filter((p) => selectedCats.includes(p.category))
    }
    if (selectedPrices.length) {
      result = result.filter((p) =>
        selectedPrices.some((id) => {
          const range = priceRanges.find((r) => r.id === id)
          return range && p.price >= range.min && p.price < range.max
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
  }, [selectedCats, selectedPrices, selectedMaterials, sort])

  const updateCategory = (catId) => {
    const next = selectedCats.includes(catId)
      ? selectedCats.filter((c) => c !== catId)
      : [...selectedCats, catId]
    setSelectedCats(next)
    const params = new URLSearchParams(searchParams)
    if (next.length === 1) params.set("category", next[0])
    else params.delete("category")
    setSearchParams(params, { replace: true })
  }

  const clearAll = () => {
    setSelectedCats([])
    setSelectedPrices([])
    setSelectedMaterials([])
    setSearchParams({}, { replace: true })
  }

  const FilterPanel = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink">Category</h3>
        <ul className="mt-4 space-y-3">
          {categories.map((cat) => (
            <li key={cat.id}>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-ink-soft hover:text-ink">
                <input
                  type="checkbox"
                  checked={selectedCats.includes(cat.id)}
                  onChange={() => updateCategory(cat.id)}
                  className="h-4 w-4 accent-gold"
                />
                {cat.name}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink">Price</h3>
        <ul className="mt-4 space-y-3">
          {priceRanges.map((range) => (
            <li key={range.id}>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-ink-soft hover:text-ink">
                <input
                  type="checkbox"
                  checked={selectedPrices.includes(range.id)}
                  onChange={() => toggle(range.id, selectedPrices, setSelectedPrices)}
                  className="h-4 w-4 accent-gold"
                />
                {range.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink">Material</h3>
        <ul className="mt-4 space-y-3">
          {materials.map((m) => (
            <li key={m}>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-ink-soft hover:text-ink">
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(m)}
                  onChange={() => toggle(m, selectedMaterials, setSelectedMaterials)}
                  className="h-4 w-4 accent-gold"
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
          className="text-xs uppercase tracking-wider text-gold underline-offset-4 hover:underline"
        >
          Clear All
        </button>
      )}
    </div>
  )

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="border-b border-sand bg-cream">
        <div className="mx-auto max-w-8xl px-5 py-14 text-center md:px-8 md:py-20">
          <p className="text-xs uppercase tracking-widest3 text-gold">The Collection</p>
          <h1 className="mt-3 font-serif text-5xl text-ink md:text-6xl">Shop All</h1>
          <p className="mx-auto mt-4 max-w-md text-base text-stone">
            Demi-fine gold jewelry, hand-finished and made to be worn every day.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-8xl px-5 py-10 md:px-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between border-b border-sand pb-4">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink md:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
          <p className="hidden text-sm text-stone md:block">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
          <div className="flex items-center gap-3">
            <label className="text-xs uppercase tracking-wider text-stone">Sort</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-sand bg-ivory px-3 py-2 text-sm text-ink focus:border-gold focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-[220px_1fr]">
          {/* Desktop sidebar */}
          <aside className="hidden md:block">
            <FilterPanel />
          </aside>

          {/* Grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters.</p>
                <button
                  onClick={clearAll}
                  className="mt-4 text-xs uppercase tracking-widest2 text-gold underline-offset-4 hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden",
          mobileFiltersOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity",
            mobileFiltersOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileFiltersOpen(false)}
        />
        <aside
          className={cn(
            "absolute left-0 top-0 h-full w-80 max-w-[85%] bg-ivory p-6 shadow-2xl transition-transform duration-300",
            mobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-sand pb-4">
            <h2 className="font-serif text-2xl text-ink">Filters</h2>
            <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
              <X className="h-5 w-5 text-ink" />
            </button>
          </div>
          <div className="mt-6 overflow-y-auto">
            <FilterPanel />
          </div>
          <button
            onClick={() => setMobileFiltersOpen(false)}
            className="mt-6 w-full bg-gold py-4 text-xs uppercase tracking-widest2 text-ink"
          >
            Show {filtered.length} Results
          </button>
        </aside>
      </div>
    </div>
  )
}
