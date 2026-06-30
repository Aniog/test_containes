import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X, Check } from "lucide-react"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { cn } from "@/lib/utils"

const categoryOptions = ["Earrings", "Necklaces", "Huggies", "Sets"]
const materialOptions = ["Gold", "Silver"]
const priceRanges = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 – $80", min: 50, max: 80 },
  { label: "$80 – $100", min: 80, max: 100 },
  { label: "$100 & above", min: 100, max: Infinity },
]

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const selectedCategories = useMemo(() => {
    const c = searchParams.get("category")
    return c ? [c] : []
  }, [searchParams])

  const selectedMaterials = useMemo(() => {
    const m = searchParams.getAll("material")
    return m
  }, [searchParams])

  const selectedPrices = useMemo(() => {
    const p = searchParams.getAll("price")
    return p
  }, [searchParams])

  const toggleCategory = (cat) => {
    const next = new URLSearchParams(searchParams)
    const current = next.get("category")
    if (current === cat) {
      next.delete("category")
    } else {
      next.set("category", cat)
    }
    setSearchParams(next, { replace: true })
  }

  const toggleMaterial = (mat) => {
    const next = new URLSearchParams(searchParams)
    const current = next.getAll("material")
    next.delete("material")
    const updated = current.includes(mat)
      ? current.filter((m) => m !== mat)
      : [...current, mat]
    updated.forEach((m) => next.append("material", m))
    setSearchParams(next, { replace: true })
  }

  const togglePrice = (label) => {
    const next = new URLSearchParams(searchParams)
    const current = next.getAll("price")
    next.delete("price")
    const updated = current.includes(label)
      ? current.filter((p) => p !== label)
      : [...current, label]
    updated.forEach((p) => next.append("price", p))
    setSearchParams(next, { replace: true })
  }

  const clearAll = () => {
    setSearchParams({}, { replace: true })
  }

  const filtered = useMemo(() => {
    let result = [...products]

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }
    if (selectedMaterials.length > 0) {
      result = result.filter((p) =>
        p.tone.some((t) => selectedMaterials.includes(t))
      )
    }
    if (selectedPrices.length > 0) {
      const ranges = priceRanges.filter((r) => selectedPrices.includes(r.label))
      result = result.filter((p) =>
        ranges.some((r) => p.price >= r.min && p.price < r.max)
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
  }, [selectedCategories, selectedMaterials, selectedPrices, sort])

  const activeFilterCount =
    selectedCategories.length + selectedMaterials.length + selectedPrices.length

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const FilterPanel = () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-[11px] uppercase tracking-ultra text-espresso">
          Category
        </h3>
        <ul className="space-y-3">
          {categoryOptions.map((cat) => {
            const checked = selectedCategories.includes(cat)
            return (
              <li key={cat}>
                <button
                  type="button"
                  onClick={() => toggleCategory(cat)}
                  className="flex items-center gap-3 text-sm text-espresso/70 transition-colors hover:text-espresso"
                >
                  <span
                    className={cn(
                      "flex h-4 w-4 items-center justify-center border transition-colors",
                      checked ? "border-gold bg-gold text-cream" : "border-espresso/30"
                    )}
                  >
                    {checked && <Check size={11} strokeWidth={3} />}
                  </span>
                  {cat}
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      <div>
        <h3 className="mb-4 text-[11px] uppercase tracking-ultra text-espresso">
          Material
        </h3>
        <ul className="space-y-3">
          {materialOptions.map((mat) => {
            const checked = selectedMaterials.includes(mat)
            return (
              <li key={mat}>
                <button
                  type="button"
                  onClick={() => toggleMaterial(mat)}
                  className="flex items-center gap-3 text-sm text-espresso/70 transition-colors hover:text-espresso"
                >
                  <span
                    className={cn(
                      "flex h-4 w-4 items-center justify-center border transition-colors",
                      checked ? "border-gold bg-gold text-cream" : "border-espresso/30"
                    )}
                  >
                    {checked && <Check size={11} strokeWidth={3} />}
                  </span>
                  {mat} Tone
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      <div>
        <h3 className="mb-4 text-[11px] uppercase tracking-ultra text-espresso">
          Price
        </h3>
        <ul className="space-y-3">
          {priceRanges.map((r) => {
            const checked = selectedPrices.includes(r.label)
            return (
              <li key={r.label}>
                <button
                  type="button"
                  onClick={() => togglePrice(r.label)}
                  className="flex items-center gap-3 text-sm text-espresso/70 transition-colors hover:text-espresso"
                >
                  <span
                    className={cn(
                      "flex h-4 w-4 items-center justify-center border transition-colors",
                      checked ? "border-gold bg-gold text-cream" : "border-espresso/30"
                    )}
                  >
                    {checked && <Check size={11} strokeWidth={3} />}
                  </span>
                  {r.label}
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      {activeFilterCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-[11px] uppercase tracking-widest text-gold transition-colors hover:text-gold-dark"
        >
          Clear All ({activeFilterCount})
        </button>
      )}
    </div>
  )

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="border-b border-espresso/10 bg-sand">
        <div className="mx-auto max-w-7xl px-6 py-14 text-center lg:px-8">
          <p className="text-[11px] uppercase tracking-ultra text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl text-espresso md:text-5xl">
            Shop All Jewelry
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-espresso/60">
            Demi-fine 18K gold plated pieces, crafted to be treasured and made
            for everyday wear.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        {/* Toolbar */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 border border-espresso/20 px-4 py-2.5 text-[11px] uppercase tracking-widest text-espresso lg:hidden"
          >
            <SlidersHorizontal size={14} />
            Filters
            {activeFilterCount > 0 && (
              <span className="bg-gold px-1.5 text-cream">{activeFilterCount}</span>
            )}
          </button>

          <p className="hidden text-sm text-espresso/60 lg:block">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>

          <div className="flex items-center gap-3">
            <label className="text-[11px] uppercase tracking-widest text-espresso/50">
              Sort
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-espresso/20 bg-cream px-3 py-2.5 text-sm text-espresso focus:border-gold focus:outline-none"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden w-56 shrink-0 lg:block">
            <FilterPanel />
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-32 text-center">
                <p className="font-serif text-2xl text-espresso">
                  No pieces match your filters
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-4 text-[11px] uppercase tracking-widest text-gold hover:text-gold-dark"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:gap-x-6">
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
          <div
            className="absolute inset-0 bg-espresso/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-cream p-6 overflow-y-auto">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-serif text-xl uppercase tracking-widest text-espresso">
                Filters
              </h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-espresso/60"
              >
                <X size={20} />
              </button>
            </div>
            <FilterPanel />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-gold py-3.5 text-[11px] uppercase tracking-widest text-cream"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
