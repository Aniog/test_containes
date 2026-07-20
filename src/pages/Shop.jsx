import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X } from "lucide-react"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { cn } from "@/lib/utils"

const categoryOptions = ["Earrings", "Necklaces", "Huggies"]
const materialOptions = ["Gold", "Silver"]
const priceRanges = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 – $100", min: 50, max: 100 },
  { label: "Over $100", min: 100, max: Infinity },
]
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get("category")

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedPrices, setSelectedPrices] = useState([])
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const cat = searchParams.get("category")
    setSelectedCategories(cat ? [cat] : [])
    window.scrollTo(0, 0)
  }, [searchParams])

  const toggle = (list, setter, value) => {
    setter(list.includes(value) ? list.filter((v) => v !== value) : [...list, value])
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (selectedCategories.length && !selectedCategories.includes(p.category)) return false
      if (selectedMaterials.length) {
        const mats = p.variants.map((v) => v.toLowerCase())
        const match = selectedMaterials.some((m) => mats.includes(m.toLowerCase()))
        if (!match) return false
      }
      if (selectedPrices.length) {
        const match = selectedPrices.some((label) => {
          const range = priceRanges.find((r) => r.label === label)
          return range && p.price >= range.min && p.price < range.max
        })
        if (!match) return false
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
    setSelectedMaterials([])
    setSelectedPrices([])
    setSearchParams({})
  }

  const activeCount =
    selectedCategories.length + selectedMaterials.length + selectedPrices.length

  const FilterPanel = () => (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-ink mb-4">Category</p>
        <ul className="space-y-2.5">
          {categoryOptions.map((c) => (
            <li key={c}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(c)}
                  onChange={() => toggle(selectedCategories, setSelectedCategories, c)}
                  className="h-4 w-4 accent-gold"
                />
                <span className="text-sm text-ink group-hover:text-gold-deep transition-colors">
                  {c}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-ink mb-4">Material</p>
        <ul className="space-y-2.5">
          {materialOptions.map((m) => (
            <li key={m}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(m)}
                  onChange={() => toggle(selectedMaterials, setSelectedMaterials, m)}
                  className="h-4 w-4 accent-gold"
                />
                <span className="text-sm text-ink group-hover:text-gold-deep transition-colors">
                  {m} Tone
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-ink mb-4">Price</p>
        <ul className="space-y-2.5">
          {priceRanges.map((r) => (
            <li key={r.label}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedPrices.includes(r.label)}
                  onChange={() => toggle(selectedPrices, setSelectedPrices, r.label)}
                  className="h-4 w-4 accent-gold"
                />
                <span className="text-sm text-ink group-hover:text-gold-deep transition-colors">
                  {r.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {activeCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-xs uppercase tracking-[0.2em] text-gold-deep underline"
        >
          Clear all ({activeCount})
        </button>
      )}
    </div>
  )

  return (
    <div className="pt-16 md:pt-20">
      {/* Header */}
      <div className="border-b border-sand/60 bg-cream">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">
            Shop All Jewelry
          </h1>
          <p className="mt-3 text-sm text-muted max-w-md mx-auto">
            Demi-fine gold pieces, designed to be worn and treasured.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10">
        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <FilterPanel />
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="md:hidden flex items-center gap-2 border border-sand px-4 py-2 text-xs uppercase tracking-[0.15em] text-ink"
                >
                  <SlidersHorizontal size={14} /> Filters
                  {activeCount > 0 && (
                    <span className="bg-gold text-ivory rounded-full px-1.5 text-[10px]">
                      {activeCount}
                    </span>
                  )}
                </button>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border border-sand bg-ivory px-4 py-2 text-xs uppercase tracking-[0.15em] text-ink outline-none cursor-pointer"
                >
                  {sortOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-4 text-gold-deep underline text-sm"
                >
                  Clear filters
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
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-ivory p-6 overflow-y-auto animate-fade-in">
            <div className="flex items-center justify-between mb-8">
              <p className="font-serif text-xl text-ink">Filters</p>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-ink"
              >
                <X size={22} />
              </button>
            </div>
            <FilterPanel />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-gold py-4 text-xs uppercase tracking-[0.2em] text-ivory"
            >
              Show {filtered.length} results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
