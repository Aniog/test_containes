import React, { useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { ChevronDown, SlidersHorizontal, X } from "lucide-react"
import ProductCard from "@/components/product/ProductCard"
import { CATEGORIES, PRODUCTS } from "@/data/products"
import { cn, formatPrice } from "@/lib/utils"

const PRICE_RANGES = [
  { id: "all", label: "All Prices", test: () => true },
  { id: "under-50", label: "Under $50", test: (p) => p.price < 50 },
  { id: "50-75", label: "$50 – $75", test: (p) => p.price >= 50 && p.price <= 75 },
  { id: "over-75", label: "Over $75", test: (p) => p.price > 75 },
]

const MATERIALS = [
  { id: "all", label: "All Materials" },
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "gold", label: "Gold Tone" },
  { id: "silver", label: "Silver Tone" },
]

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

function FilterGroup({ title, children }) {
  return (
    <div className="border-b border-line py-6 last:border-0">
      <h3 className="text-[11px] font-medium uppercase tracking-[0.26em] text-foreground">
        {title}
      </h3>
      <div className="mt-4 space-y-2.5">{children}</div>
    </div>
  )
}

function RadioRow({ name, checked, onChange, label }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-sm text-foreground/80 transition-colors hover:text-foreground">
      <span
        className={cn(
          "flex h-4 w-4 items-center justify-center rounded-full border transition-colors",
          checked ? "border-accent-deep" : "border-foreground/30",
        )}
      >
        {checked && <span className="h-2 w-2 rounded-full bg-accent-deep" />}
      </span>
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      {label}
    </label>
  )
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const category = searchParams.get("category") || "all"
  const [priceRange, setPriceRange] = useState("all")
  const [material, setMaterial] = useState("all")
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const setCategory = (id) => {
    const next = new URLSearchParams(searchParams)
    if (id === "all") next.delete("category")
    else next.set("category", id)
    setSearchParams(next, { replace: true })
  }

  const products = useMemo(() => {
    let list = [...PRODUCTS]
    if (category !== "all") list = list.filter((p) => p.category === category)
    const range = PRICE_RANGES.find((r) => r.id === priceRange)
    if (range) list = list.filter(range.test)
    if (material === "18k-gold") {
      list = list.filter((p) => p.material === "18k-gold")
    } else if (material === "gold" || material === "silver") {
      list = list.filter((p) => Array.isArray(p.variants) && p.variants.includes(material))
    }
    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        list.sort((a, b) => b.price - a.price)
        break
      case "rating":
        list.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews)
        break
      default:
        break
    }
    return list
  }, [category, priceRange, material, sort])

  const activeCategory = CATEGORIES.find((c) => c.id === category)

  const filters = (
    <>
      <FilterGroup title="Category">
        <RadioRow
          name="category"
          checked={category === "all"}
          onChange={() => setCategory("all")}
          label="All Jewelry"
        />
        {CATEGORIES.map((c) => (
          <RadioRow
            key={c.id}
            name="category"
            checked={category === c.id}
            onChange={() => setCategory(c.id)}
            label={c.label}
          />
        ))}
        <RadioRow
          name="category"
          checked={category === "sets"}
          onChange={() => setCategory("sets")}
          label="Gift Sets"
        />
      </FilterGroup>
      <FilterGroup title="Price">
        {PRICE_RANGES.map((r) => (
          <RadioRow
            key={r.id}
            name="price"
            checked={priceRange === r.id}
            onChange={() => setPriceRange(r.id)}
            label={r.label}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Material">
        {MATERIALS.map((m) => (
          <RadioRow
            key={m.id}
            name="material"
            checked={material === m.id}
            onChange={() => setMaterial(m.id)}
            label={m.label}
          />
        ))}
      </FilterGroup>
    </>
  )

  return (
    <div className="pt-16 md:pt-20">
      <div className="border-b border-line bg-surface/60">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent-deep">
            The Collection
          </p>
          <h1 className="mt-3 font-serif text-4xl font-light text-foreground md:text-5xl">
            {activeCategory ? activeCategory.label : category === "sets" ? "Gift Sets" : "All Jewelry"}
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Demi-fine pieces in warm 18k gold, priced between {formatPrice(30)} and{" "}
            {formatPrice(120)} — designed to be worn every single day.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
          <aside className="hidden lg:block">
            <div className="sticky top-28">{filters}</div>
          </aside>

          <div>
            <div className="flex items-center justify-between gap-4 border-b border-line pb-5">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {products.length} {products.length === 1 ? "Piece" : "Pieces"}
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="flex items-center gap-2 border border-foreground/20 px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground lg:hidden"
                >
                  <SlidersHorizontal className="h-3.5 w-3.5" strokeWidth={1.5} />
                  Filters
                </button>
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    aria-label="Sort products"
                    className="appearance-none border border-foreground/20 bg-background py-2.5 pl-4 pr-10 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground focus:outline-none"
                  >
                    {SORTS.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" strokeWidth={1.5} />
                </div>
              </div>
            </div>

            {products.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl font-light text-foreground">
                  No pieces match those filters
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Try widening your selection to see more of the collection.
                </p>
              </div>
            ) : (
              <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} context="shop" />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-ink/50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 max-h-[80vh] overflow-y-auto bg-background px-6 pb-10 pt-6">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <h2 className="font-serif text-xl font-medium uppercase tracking-[0.18em]">
                Filters
              </h2>
              <button
                type="button"
                aria-label="Close filters"
                onClick={() => setMobileFiltersOpen(false)}
                className="text-foreground/70"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
            {filters}
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-6 w-full bg-accent py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-accent-foreground"
            >
              View {products.length} {products.length === 1 ? "Piece" : "Pieces"}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
