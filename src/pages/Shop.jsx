import { useEffect, useMemo, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import ProductCard from "@/components/product/ProductCard"
import { products, categories, priceRanges, materials } from "@/data/products"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const initialCategory = params.get("category") || "all"
  const [category, setCategory] = useState(initialCategory)
  const [priceId, setPriceId] = useState("all")
  const [material, setMaterial] = useState("all")
  const [sort, setSort] = useState("featured")
  const [filterOpen, setFilterOpen] = useState(false)
  const containerRef = useRef(null)

  // Keep URL in sync with category so links from homepage land in right section
  useEffect(() => {
    const next = new URLSearchParams(params)
    if (category === "all") next.delete("category")
    else next.set("category", category)
    setParams(next, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [category, priceId, material, sort])

  const filtered = useMemo(() => {
    let list = products
    if (category !== "all") {
      list = list.filter((p) => p.category === category)
    }
    if (priceId !== "all") {
      const range = priceRanges.find((r) => r.id === priceId)
      if (range) list = list.filter((p) => p.price >= range.min && p.price < range.max)
    }
    if (material !== "all") {
      list = list.filter((p) => p.material === material)
    }
    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price)
        break
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return list
  }, [category, priceId, material, sort])

  const heading = category === "all"
    ? "All Jewelry"
    : categories.find((c) => c.id === category)?.name || "All Jewelry"

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Page header */}
      <header className="border-b border-hairline">
        <div className="container-x py-12 md:py-16">
          <p className="label-2 text-mist mb-3">Shop</p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink leading-tight">
            {heading}
          </h1>
          <p className="mt-4 text-ink/70 max-w-md text-sm md:text-base">
            A small, considered collection — designed to be worn, given, and
            returned to.
          </p>
        </div>
      </header>

      <div className="container-x py-10 md:py-14">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <button
            type="button"
            onClick={() => setFilterOpen(true)}
            className="md:hidden inline-flex items-center gap-2 label text-ink border border-hairline px-4 py-2.5"
          >
            <SlidersHorizontal className="w-4 h-4" strokeWidth={1.25} />
            Filter
          </button>
          <p className="label-2 text-mist">
            {filtered.length} piece{filtered.length === 1 ? "" : "s"}
          </p>
          <div className="relative">
            <label htmlFor="sort" className="sr-only">
              Sort
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent border border-hairline px-4 py-2.5 pr-9 label text-ink focus:border-champagne focus:outline-none cursor-pointer"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  Sort: {s.label}
                </option>
              ))}
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-ink pointer-events-none"
              strokeWidth={1.5}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 md:gap-12">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block">
            <FilterPanel
              category={category}
              setCategory={setCategory}
              priceId={priceId}
              setPriceId={setPriceId}
              material={material}
              setMaterial={setMaterial}
            />
          </aside>

          {/* Grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-ink mb-2">
                  Nothing here just yet.
                </p>
                <p className="text-mist text-sm">
                  Try a different filter — or browse all pieces.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        aria-hidden={!filterOpen}
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
          filterOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="absolute inset-0 bg-ink/40" onClick={() => setFilterOpen(false)} />
        <div
          className={cn(
            "absolute inset-y-0 left-0 w-[85%] max-w-sm bg-oat shadow-drawer flex flex-col transition-transform duration-300",
            filterOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-hairline">
            <p className="label text-ink">Filter</p>
            <button
              type="button"
              onClick={() => setFilterOpen(false)}
              className="p-2 text-ink"
              aria-label="Close filters"
            >
              <X className="w-5 h-5" strokeWidth={1.25} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6">
            <FilterPanel
              category={category}
              setCategory={setCategory}
              priceId={priceId}
              setPriceId={setPriceId}
              material={material}
              setMaterial={setMaterial}
            />
          </div>
          <div className="px-6 py-4 border-t border-hairline">
            <button
              type="button"
              onClick={() => setFilterOpen(false)}
              className="btn-primary w-full"
            >
              View {filtered.length} Pieces
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function FilterGroup({ title, children }) {
  return (
    <div className="border-b border-hairline pb-6 mb-6 last:border-b-0 last:mb-0 last:pb-0">
      <h3 className="label-2 text-mist mb-4">{title}</h3>
      {children}
    </div>
  )
}

function FilterOption({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center justify-between w-full text-left py-1.5 text-sm transition-colors",
        active ? "text-ink" : "text-ink/70 hover:text-ink",
      )}
    >
      <span>{children}</span>
      {active && (
        <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-champagne" />
      )}
    </button>
  )
}

function FilterPanel({ category, setCategory, priceId, setPriceId, material, setMaterial }) {
  return (
    <div>
      <FilterGroup title="Category">
        <FilterOption active={category === "all"} onClick={() => setCategory("all")}>
          All Jewelry
        </FilterOption>
        {categories.map((c) => (
          <FilterOption key={c.id} active={category === c.id} onClick={() => setCategory(c.id)}>
            {c.name}
          </FilterOption>
        ))}
      </FilterGroup>
      <FilterGroup title="Price">
        <FilterOption active={priceId === "all"} onClick={() => setPriceId("all")}>
          All Prices
        </FilterOption>
        {priceRanges.map((r) => (
          <FilterOption key={r.id} active={priceId === r.id} onClick={() => setPriceId(r.id)}>
            {r.name}
          </FilterOption>
        ))}
      </FilterGroup>
      <FilterGroup title="Material">
        <FilterOption active={material === "all"} onClick={() => setMaterial("all")}>
          All Materials
        </FilterOption>
        {materials.map((m) => (
          <FilterOption key={m.id} active={material === m.id} onClick={() => setMaterial(m.id)}>
            {m.name}
          </FilterOption>
        ))}
      </FilterGroup>
    </div>
  )
}
