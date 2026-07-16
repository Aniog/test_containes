import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X, Check } from "lucide-react"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { cn } from "@/lib/utils"

const CATEGORY_OPTIONS = ["Earrings", "Necklaces", "Huggies", "Sets"]
const MATERIAL_OPTIONS = ["18K Gold Plated"]
const PRICE_RANGES = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 – $100", min: 50, max: 100 },
  { label: "Over $100", min: 100, max: Infinity },
]
const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const selectedCategories = searchParams.get("category")
    ? [searchParams.get("category")]
    : []
  const selectedPrice = searchParams.get("price") || ""

  const toggleCategory = (cat) => {
    const current = searchParams.get("category")
    if (current === cat) {
      searchParams.delete("category")
    } else {
      searchParams.set("category", cat)
    }
    setSearchParams(searchParams)
  }

  const setPrice = (label) => {
    if (selectedPrice === label) {
      searchParams.delete("price")
    } else {
      searchParams.set("price", label)
    }
    setSearchParams(searchParams)
  }

  const clearFilters = () => {
    searchParams.delete("category")
    searchParams.delete("price")
    setSearchParams(searchParams)
  }

  const filtered = useMemo(() => {
    let result = [...products]
    if (selectedCategories.length) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }
    if (selectedPrice) {
      const range = PRICE_RANGES.find((r) => r.label === selectedPrice)
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max)
      }
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
  }, [selectedCategories, selectedPrice, sort])

  const hasFilters = selectedCategories.length > 0 || selectedPrice

  const FilterPanel = () => (
    <div className="space-y-10">
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest2 text-ink">Category</h3>
        <ul className="mt-4 space-y-3">
          {CATEGORY_OPTIONS.map((cat) => {
            const checked = selectedCategories.includes(cat)
            return (
              <li key={cat}>
                <button
                  type="button"
                  onClick={() => toggleCategory(cat)}
                  className="flex items-center gap-3 font-sans text-sm text-ink hover:text-gold"
                >
                  <span
                    className={cn(
                      "flex h-4 w-4 items-center justify-center border",
                      checked ? "border-gold bg-gold text-cream" : "border-ink/30"
                    )}
                  >
                    {checked && <Check width={12} height={12} />}
                  </span>
                  {cat}
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest2 text-ink">Price</h3>
        <ul className="mt-4 space-y-3">
          {PRICE_RANGES.map((range) => {
            const checked = selectedPrice === range.label
            return (
              <li key={range.label}>
                <button
                  type="button"
                  onClick={() => setPrice(range.label)}
                  className="flex items-center gap-3 font-sans text-sm text-ink hover:text-gold"
                >
                  <span
                    className={cn(
                      "flex h-4 w-4 items-center justify-center border",
                      checked ? "border-gold bg-gold text-cream" : "border-ink/30"
                    )}
                  >
                    {checked && <Check width={12} height={12} />}
                  </span>
                  {range.label}
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest2 text-ink">Material</h3>
        <ul className="mt-4 space-y-3">
          {MATERIAL_OPTIONS.map((mat) => (
            <li key={mat} className="flex items-center gap-3 font-sans text-sm text-stone">
              <span className="flex h-4 w-4 items-center justify-center border border-gold bg-gold text-cream">
                <Check width={12} height={12} />
              </span>
              {mat}
            </li>
          ))}
        </ul>
      </div>

      {hasFilters && (
        <button
          type="button"
          onClick={clearFilters}
          className="font-sans text-xs uppercase tracking-widest2 text-gold underline underline-offset-4"
        >
          Clear All
        </button>
      )}
    </div>
  )

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="border-b border-ink/10 bg-sand">
        <div className="mx-auto max-w-7xl px-6 py-14 text-center md:px-10 md:py-20">
          <p className="font-sans text-xs uppercase tracking-widest2 text-gold">The Collection</p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-6xl">Shop All</h1>
          <p className="mx-auto mt-4 max-w-md font-sans text-sm text-stone">
            Demi-fine gold jewelry, crafted to be treasured and made for the everyday.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
        {/* Toolbar */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 border border-ink/20 px-4 py-2.5 font-sans text-xs uppercase tracking-widest2 text-ink lg:hidden"
          >
            <SlidersHorizontal width={14} height={14} /> Filters
          </button>
          <p className="hidden font-sans text-sm text-stone lg:block">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="hidden font-sans text-xs uppercase tracking-widest2 text-stone sm:block">
              Sort
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-ink/20 bg-cream px-4 py-2.5 font-sans text-xs uppercase tracking-widest2 text-ink focus:border-gold focus:outline-none"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Sidebar */}
          <aside className="hidden w-56 shrink-0 lg:block">
            <FilterPanel />
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-4 font-sans text-xs uppercase tracking-widest2 text-gold underline underline-offset-4"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} sectionTitleId="shop-title" />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <div className="absolute inset-0 bg-espresso/40 backdrop-blur-sm" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-cream p-6 overflow-y-auto">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-serif text-xl uppercase tracking-widest2 text-ink">Filters</h2>
              <button type="button" onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters" className="text-ink hover:text-gold">
                <X width={22} height={22} />
              </button>
            </div>
            <FilterPanel />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-10 w-full bg-gold py-3.5 font-sans text-xs uppercase tracking-widest2 text-cream"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
