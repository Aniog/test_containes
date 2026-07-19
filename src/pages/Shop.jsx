import { useMemo, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X, Check } from "lucide-react"
import { products, categories, priceRanges } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { useStrkImages } from "@/hooks/useStrkImages"
import { cn } from "@/lib/utils"

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useStrkImages([])

  const initialCategory = searchParams.get("category") || ""
  const [selectedCats, setSelectedCats] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedPrices, setSelectedPrices] = useState([])
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Keep URL in sync when category changes via nav
  useEffect(() => {
    const cat = searchParams.get("category")
    setSelectedCats(cat ? [cat] : [])
  }, [searchParams])

  const toggle = (list, setList, value) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  const filtered = useMemo(() => {
    let list = [...products]
    if (selectedCats.length) {
      list = list.filter((p) => selectedCats.includes(p.category))
    }
    if (selectedPrices.length) {
      list = list.filter((p) =>
        selectedPrices.some((label) => {
          const r = priceRanges.find((pr) => pr.label === label)
          return r && p.price >= r.min && p.price < r.max
        })
      )
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
  }, [selectedCats, selectedPrices, sort])

  const clearAll = () => {
    setSelectedCats([])
    setSelectedPrices([])
    setSearchParams({})
  }

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-espresso">
          Category
        </h3>
        <ul className="mt-4 space-y-3">
          {categories.map((c) => (
            <li key={c}>
              <button
                type="button"
                onClick={() => toggle(selectedCats, setSelectedCats, c)}
                className="flex items-center gap-3 text-sm text-stone transition-colors hover:text-espresso"
              >
                <span
                  className={cn(
                    "flex h-4 w-4 items-center justify-center border transition-colors",
                    selectedCats.includes(c)
                      ? "border-gold bg-gold text-white"
                      : "border-hairline"
                  )}
                >
                  {selectedCats.includes(c) && <Check size={11} />}
                </span>
                {c}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-espresso">
          Price
        </h3>
        <ul className="mt-4 space-y-3">
          {priceRanges.map((r) => (
            <li key={r.label}>
              <button
                type="button"
                onClick={() => toggle(selectedPrices, setSelectedPrices, r.label)}
                className="flex items-center gap-3 text-sm text-stone transition-colors hover:text-espresso"
              >
                <span
                  className={cn(
                    "flex h-4 w-4 items-center justify-center border transition-colors",
                    selectedPrices.includes(r.label)
                      ? "border-gold bg-gold text-white"
                      : "border-hairline"
                  )}
                >
                  {selectedPrices.includes(r.label) && <Check size={11} />}
                </span>
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {(selectedCats.length > 0 || selectedPrices.length > 0) && (
        <button
          type="button"
          onClick={clearAll}
          className="text-[11px] uppercase tracking-[0.16em] text-gold underline-offset-4 hover:underline"
        >
          Clear All
        </button>
      )}
    </div>
  )

  return (
    <div ref={ref}>
      {/* Header */}
      <div className="border-b border-hairline bg-cream pt-28 md:pt-32">
        <div className="mx-auto max-w-7xl px-6 py-12 text-center md:px-10 md:py-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
            The Collection
          </p>
          <h1 className="mt-3 font-serif text-5xl text-espresso md:text-6xl">
            Shop All
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-stone">
            Demi-fine gold jewelry, hand-finished and made to be worn every day.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between border-b border-hairline pb-5">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-espresso lg:hidden"
          >
            <SlidersHorizontal size={15} />
            Filters
          </button>
          <p className="hidden text-[11px] uppercase tracking-[0.18em] text-stone lg:block">
            {filtered.length} {filtered.length === 1 ? "Piece" : "Pieces"}
          </p>
          <div className="flex items-center gap-3">
            <label className="text-[11px] uppercase tracking-[0.18em] text-stone">
              Sort
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-hairline bg-white px-3 py-2 text-xs text-espresso focus:border-gold focus:outline-none"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[220px_1fr]">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block">
            <FilterContent />
          </aside>

          {/* Grid */}
          <div>
            <p className="mb-5 text-[11px] uppercase tracking-[0.18em] text-stone lg:hidden">
              {filtered.length} {filtered.length === 1 ? "Piece" : "Pieces"}
            </p>
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-espresso">
                  No pieces match your filters
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-4 text-[11px] uppercase tracking-[0.18em] text-gold underline-offset-4 hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3">
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
        <div className="fixed inset-0 z-[80] lg:hidden">
          <div
            className="absolute inset-0 bg-espresso/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-ivory p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-hairline pb-4">
              <h2 className="font-serif text-xl text-espresso">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-espresso"
              >
                <X size={20} />
              </button>
            </div>
            <div className="mt-6">
              <FilterContent />
            </div>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-gold py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-white"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
