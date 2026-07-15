import { useEffect, useMemo, useState } from "react"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"
import FilterSidebar, { SortDropdown } from "@/components/shop/FilterSidebar"
import ProductCard from "@/components/ui/ProductCard"
import { PRODUCTS } from "@/data/products"
import { cn } from "@/lib/utils"

const SORTS = {
  featured: (a, b) => 0,
  "price-asc": (a, b) => a.price - b.price,
  "price-desc": (a, b) => b.price - a.price,
  newest: (a, b) => (a.badge === "New" ? -1 : 1),
  rating: (a, b) => b.rating - a.rating,
}

const PRICE_BANDS = {
  all: () => true,
  "under-50": (p) => p.price < 50,
  "50-75": (p) => p.price >= 50 && p.price < 75,
  "over-75": (p) => p.price >= 75,
}

const MATERIAL_FILTER = {
  all: () => true,
  "18k-gold": (p) =>
    p.materials?.toLowerCase().includes("18k") ||
    p.materials?.toLowerCase().includes("gold plated"),
  "sterling-silver": (p) =>
    p.materials?.toLowerCase().includes("sterling") ||
    p.tones?.includes("silver"),
  "gold-vermeil": (p) => p.materials?.toLowerCase().includes("vermeil"),
}

const COLLECTION_HEADERS = {
  earrings: {
    eyebrow: "The Earrings Edit",
    title: "Earrings, made to wear.",
  },
  necklaces: {
    eyebrow: "The Necklace Edit",
    title: "Necklaces, layered & alone.",
  },
  huggies: {
    eyebrow: "The Huggies Edit",
    title: "Huggies, the everyday luxury.",
  },
  sets: {
    eyebrow: "The Gift Edit",
    title: "Sets, wrapped with care.",
  },
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get("category") || "all"
  const [filters, setFilters] = useState({
    category: initialCategory,
    price: "all",
    material: "all",
  })
  const [sort, setSort] = useState("featured")
  const [filterOpen, setFilterOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // Sync URL → state when the category query param changes
  useEffect(() => {
    const cat = searchParams.get("category") || "all"
    setFilters((f) => ({ ...f, category: cat }))
  }, [searchParams])

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (filters.category !== "all" && p.category !== filters.category)
        return false
      if (!PRICE_BANDS[filters.price](p)) return false
      if (!MATERIAL_FILTER[filters.material](p)) return false
      return true
    }).sort(SORTS[sort])
  }, [filters, sort])

  const header =
    filters.category !== "all"
      ? COLLECTION_HEADERS[filters.category]
      : { eyebrow: "Shop All", title: "The Velmora Collection" }

  function setCategory(cat) {
    setSearchParams(cat === "all" ? {} : { category: cat })
  }

  return (
    <div className="bg-canvas pt-20 md:pt-24">
      {/* Page header */}
      <div className="container-content border-b border-hairline py-14 md:py-20">
        <p className="eyebrow">{header.eyebrow}</p>
        <h1
          className="display-lg mt-3 max-w-2xl text-ink text-balance"
          style={{ fontSize: "clamp(44px, 6vw, 80px)" }}
        >
          {header.title}
        </h1>
        <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-inkSoft md:text-base">
          Demi-fine 18K gold plated jewelry, hand-finished in small batches.
          Every piece is made to wear every day — and to be treasured.
        </p>
      </div>

      {/* Toolbar */}
      <div className="container-content hidden items-center justify-between border-b border-hairline py-5 md:flex">
        <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-inkSoft">
          {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
        </p>
        <SortDropdown
          value={sort}
          onChange={setSort}
          options={[
            { id: "featured", label: "Featured" },
            { id: "price-asc", label: "Price: Low to High" },
            { id: "price-desc", label: "Price: High to Low" },
            { id: "newest", label: "Newest" },
            { id: "rating", label: "Top Rated" },
          ]}
        />
      </div>

      {/* Content */}
      <div className="container-content grid grid-cols-1 gap-12 py-12 md:grid-cols-12 md:gap-10 md:py-16">
        <div className="hidden md:col-span-3 md:block">
          <FilterSidebar
            filters={filters}
            onChange={(f) => {
              setFilters(f)
              if (f.category !== filters.category) setCategory(f.category)
            }}
            onClear={() => {
              setFilters({ category: "all", price: "all", material: "all" })
              setSearchParams({})
            }}
            sort={sort}
            onSortChange={setSort}
            resultCount={filtered.length}
          />
        </div>

        <div className="md:col-span-9">
          {filtered.length === 0 ? (
            <EmptyState
              onReset={() => {
                setFilters({
                  category: "all",
                  price: "all",
                  material: "all",
                })
                setSearchParams({})
              }}
            />
          ) : (
            <div className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter button */}
      <button
        type="button"
        onClick={() => setFilterOpen(true)}
        className="fixed bottom-6 left-1/2 z-30 inline-flex -translate-x-1/2 items-center gap-2 border border-ink bg-ink px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-onNight shadow-soft md:hidden"
      >
        Filter & Sort
      </button>

      {/* Mobile filter sheet */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-ink/45 transition-opacity duration-500 md:hidden",
          filterOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setFilterOpen(false)}
      >
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-sm bg-canvas p-6 transition-transform duration-500 ease-editorial",
            filterOpen ? "translate-y-0" : "translate-y-full",
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-6 flex items-center justify-between">
            <p className="font-serif text-2xl text-ink">Filter & Sort</p>
            <button
              type="button"
              onClick={() => setFilterOpen(false)}
              className="text-inkSoft hover:text-ink"
              aria-label="Close filters"
            >
              ×
            </button>
          </div>
          <FilterSidebar
            filters={filters}
            onChange={(f) => {
              setFilters(f)
              if (f.category !== filters.category) setCategory(f.category)
            }}
            onClear={() => {
              setFilters({ category: "all", price: "all", material: "all" })
              setSearchParams({})
            }}
            sort={sort}
            onSortChange={setSort}
            resultCount={filtered.length}
          />
          <button
            type="button"
            onClick={() => setFilterOpen(false)}
            className="btn-primary mt-8 w-full"
          >
            Show {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </button>
        </div>
      </div>
    </div>
  )
}

function EmptyState({ onReset }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <p className="font-serif text-3xl text-ink">No matches yet.</p>
      <p className="mt-3 max-w-xs text-sm font-light text-inkSoft">
        Try a different category, or clear your filters to see the full edit.
      </p>
      <button type="button" onClick={onReset} className="btn-outline mt-6">
        Clear filters
      </button>
    </div>
  )
}
