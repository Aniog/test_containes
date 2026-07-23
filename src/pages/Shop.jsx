import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { useStrkImages } from "@/lib/useStrkImages"
import { cn } from "@/lib/utils"

const CATEGORIES = ["All", "Earrings", "Necklaces", "Huggies", "Sets"]
const MATERIALS = ["18K Gold Plated"]
const PRICE_RANGES = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under50", label: "Under $50", min: 0, max: 49 },
  { id: "50to100", label: "$50 – $100", min: 50, max: 100 },
  { id: "over100", label: "Over $100", min: 101, max: Infinity },
]

const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useStrkImages([])

  const initialCategory = searchParams.get("category") || "All"
  const [category, setCategory] = useState(
    CATEGORIES.includes(initialCategory) ? initialCategory : "All"
  )
  const [priceRange, setPriceRange] = useState("all")
  const [material, setMaterial] = useState("All")
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const cat = searchParams.get("category") || "All"
    setCategory(CATEGORIES.includes(cat) ? cat : "All")
  }, [searchParams])

  const filtered = useMemo(() => {
    let list = [...products]
    if (category !== "All") {
      list = list.filter((p) => p.category === category)
    }
    const range = PRICE_RANGES.find((r) => r.id === priceRange)
    if (range) {
      list = list.filter((p) => p.price >= range.min && p.price <= range.max)
    }
    if (material !== "All") {
      list = list.filter((p) => p.material === material)
    }
    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        list.sort((a, b) => b.price - a.price)
        break
      case "rating":
        list.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return list
  }, [category, priceRange, material, sort])

  const updateCategory = (cat) => {
    setCategory(cat)
    if (cat === "All") {
      searchParams.delete("category")
    } else {
      searchParams.set("category", cat)
    }
    setSearchParams(searchParams, { replace: true })
  }

  const resetFilters = () => {
    setCategory("All")
    setPriceRange("all")
    setMaterial("All")
    searchParams.delete("category")
    setSearchParams(searchParams, { replace: true })
  }

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest2 text-ink">
          Category
        </h3>
        <ul className="mt-4 space-y-2.5">
          {CATEGORIES.map((cat) => (
            <li key={cat}>
              <button
                type="button"
                onClick={() => updateCategory(cat)}
                className={cn(
                  "font-sans text-sm transition-colors",
                  category === cat ? "text-gold" : "text-stone hover:text-ink"
                )}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-px bg-hairline" />

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest2 text-ink">
          Price
        </h3>
        <ul className="mt-4 space-y-2.5">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => setPriceRange(r.id)}
                className={cn(
                  "font-sans text-sm transition-colors",
                  priceRange === r.id ? "text-gold" : "text-stone hover:text-ink"
                )}
              >
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-px bg-hairline" />

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest2 text-ink">
          Material
        </h3>
        <ul className="mt-4 space-y-2.5">
          <li>
            <button
              type="button"
              onClick={() => setMaterial("All")}
              className={cn(
                "font-sans text-sm transition-colors",
                material === "All" ? "text-gold" : "text-stone hover:text-ink"
              )}
            >
              All
            </button>
          </li>
          {MATERIALS.map((m) => (
            <li key={m}>
              <button
                type="button"
                onClick={() => setMaterial(m)}
                className={cn(
                  "font-sans text-sm transition-colors",
                  material === m ? "text-gold" : "text-stone hover:text-ink"
                )}
              >
                {m}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={resetFilters}
        className="font-sans text-xs uppercase tracking-widest2 text-stone underline hover:text-gold"
      >
        Reset Filters
      </button>
    </div>
  )

  return (
    <div ref={ref} className="bg-cream pt-24 md:pt-28">
      {/* Header */}
      <div className="border-b border-hairline">
        <div className="mx-auto max-w-content px-6 py-10 text-center md:px-10">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold">
            The Collection
          </p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            Shop All Jewelry
          </h1>
          <p className="mx-auto mt-4 max-w-md font-sans text-sm text-stone">
            Demi-fine 18K gold plated pieces, designed to be treasured and worn
            every day.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-content px-6 py-10 md:px-10">
        {/* Mobile controls */}
        <div className="mb-6 flex items-center justify-between md:hidden">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 border border-hairline px-4 py-2.5 font-sans text-xs uppercase tracking-widest2 text-ink"
          >
            <SlidersHorizontal size={14} /> Filters
          </button>
          <SortDropdown sort={sort} setSort={setSort} />
        </div>

        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden w-56 shrink-0 md:block">
            <div className="sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="mb-6 hidden items-center justify-between md:flex">
              <p className="font-sans text-sm text-stone">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <SortDropdown sort={sort} setSort={setSort} />
            </div>

            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-gold underline"
                >
                  Reset filters
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
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[80] md:hidden">
          <div
            className="absolute inset-0 bg-espresso/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] overflow-y-auto bg-cream p-6 shadow-soft">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-serif text-xl uppercase tracking-widest2 text-ink">
                Filters
              </h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="text-ink"
                aria-label="Close filters"
              >
                <X size={22} />
              </button>
            </div>
            <FilterContent />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-gold py-3.5 font-sans text-xs uppercase tracking-widest2 text-cream"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function SortDropdown({ sort, setSort }) {
  const [open, setOpen] = useState(false)
  const current = SORT_OPTIONS.find((o) => o.id === sort)
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 border border-hairline px-4 py-2.5 font-sans text-xs uppercase tracking-widest2 text-ink"
      >
        Sort: {current.label}
        <ChevronDown size={14} className={cn("transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <ul className="absolute right-0 z-20 mt-1 w-52 border border-hairline bg-cream py-2 shadow-card">
            {SORT_OPTIONS.map((o) => (
              <li key={o.id}>
                <button
                  type="button"
                  onClick={() => {
                    setSort(o.id)
                    setOpen(false)
                  }}
                  className={cn(
                    "block w-full px-4 py-2.5 text-left font-sans text-sm transition-colors hover:bg-sand",
                    sort === o.id ? "text-gold" : "text-ink"
                  )}
                >
                  {o.label}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
