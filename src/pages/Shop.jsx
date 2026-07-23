import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X } from "lucide-react"
import { PRODUCTS, CATEGORIES } from "@/data/products"
import ProductCard from "@/components/ui/ProductCard"
import { cn } from "@/lib/utils"

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

const PRICE_BUCKETS = [
  { id: "all", label: "All", range: [0, 9999] },
  { id: "u50", label: "Under $50", range: [0, 50] },
  { id: "50-75", label: "$50 – $75", range: [50, 75] },
  { id: "75plus", label: "$75+", range: [75, 9999] },
]

function FilterGroup({ title, children }) {
  return (
    <div className="border-t border-bone/10 py-5">
      <h3 className="text-[11px] tracking-widest2 uppercase text-bone/65 font-medium">
        {title}
      </h3>
      <div className="mt-4 space-y-2.5">{children}</div>
    </div>
  )
}

function FilterCheckbox({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer text-[14px] text-bone/85 hover:text-bone">
      <span
        className={cn(
          "w-4 h-4 border flex items-center justify-center transition-colors",
          checked ? "bg-gold border-gold" : "border-bone/30"
        )}
      >
        {checked && (
          <svg
            viewBox="0 0 12 12"
            className="w-3 h-3 text-ink"
            aria-hidden="true"
          >
            <path
              d="M2 6.5 4.8 9 10 3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  )
}

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const initialCat = params.get("cat") || "all"

  const [categories, setCategories] = useState(
    initialCat === "all" ? [] : [initialCat]
  )
  const [materials, setMaterials] = useState([])
  const [price, setPrice] = useState("all")
  const [sort, setSort] = useState("featured")
  const [mobileOpen, setMobileOpen] = useState(false)

  // Sync category from URL on mount/change
  useEffect(() => {
    const cat = params.get("cat")
    if (cat && cat !== "all") setCategories([cat])
    if (!cat) setCategories([])
  }, [params])

  const toggleCategory = (id) => {
    setParams((p) => {
      const np = new URLSearchParams(p)
      if (id === "all") {
        np.delete("cat")
        return np
      }
      if (categories.includes(id)) {
        np.delete("cat")
      } else {
        np.set("cat", id)
      }
      return np
    })
    setCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    )
  }

  const toggleMaterial = (id) => {
    setMaterials((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    )
  }

  const filtered = useMemo(() => {
    const range = PRICE_BUCKETS.find((b) => b.id === price)?.range || [0, 9999]
    let out = PRODUCTS.filter((p) => {
      if (categories.length && !categories.includes(p.category)) return false
      if (materials.length && !materials.includes(p.material)) return false
      if (p.price < range[0] || p.price > range[1]) return false
      return true
    })
    if (sort === "price-asc") out = [...out].sort((a, b) => a.price - b.price)
    if (sort === "price-desc") out = [...out].sort((a, b) => b.price - a.price)
    if (sort === "rating") out = [...out].sort((a, b) => b.rating - a.rating)
    return out
  }, [categories, materials, price, sort])

  const Filters = (
    <div>
      <FilterGroup title="Category">
        <FilterCheckbox
          label="All"
          checked={categories.length === 0}
          onChange={() => {
            setCategories([])
            setParams((p) => {
              const np = new URLSearchParams(p)
              np.delete("cat")
              return np
            })
          }}
        />
        {CATEGORIES.map((c) => (
          <FilterCheckbox
            key={c.id}
            label={c.label}
            checked={categories.includes(c.id)}
            onChange={() => toggleCategory(c.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {PRICE_BUCKETS.map((b) => (
          <FilterCheckbox
            key={b.id}
            label={b.label}
            checked={price === b.id}
            onChange={() => setPrice(b.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        <FilterCheckbox
          label="18K Gold Plated"
          checked={materials.includes("18k-gold")}
          onChange={() => toggleMaterial("18k-gold")}
        />
        <FilterCheckbox
          label="Sterling Silver"
          checked={materials.includes("sterling-silver")}
          onChange={() => toggleMaterial("sterling-silver")}
        />
        <FilterCheckbox
          label="Gold Vermeil"
          checked={materials.includes("gold-vermeil")}
          onChange={() => toggleMaterial("gold-vermeil")}
        />
      </FilterGroup>
    </div>
  )

  return (
    <div className="bg-ink text-bone pt-24 md:pt-28">
      {/* Page header */}
      <div className="mx-auto max-w-editorial px-6 md:px-10 pb-10">
        <p
          id="shop-eyebrow"
          className="text-[11px] tracking-widest3 uppercase text-bone/60"
        >
          The Collection
        </p>
        <h1
          id="shop-title"
          className="mt-3 font-serif text-[44px] md:text-[64px] leading-[1.05]"
        >
          Shop
        </h1>
        <p
          id="shop-sub"
          className="mt-3 text-[15px] text-bone/70 max-w-md"
        >
          Hand-finished demi-fine pieces. Designed to be worn — and worn again.
        </p>
      </div>

      {/* Toolbar */}
      <div className="mx-auto max-w-editorial px-6 md:px-10 border-t border-bone/10">
        <div className="flex items-center justify-between py-4">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="md:hidden inline-flex items-center gap-2 text-[12px] tracking-widest2 uppercase text-bone"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </button>
          <p className="hidden md:block text-[12px] tracking-widest2 uppercase text-bone/60">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
          <div className="ml-auto flex items-center gap-3">
            <label htmlFor="sort" className="sr-only">Sort by</label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-transparent text-[12px] tracking-widest2 uppercase text-bone border border-bone/20 h-10 px-3 focus:border-gold focus:outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id} className="bg-ink text-bone">
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-editorial px-6 md:px-10 pb-20 md:pb-28 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
        <aside className="hidden md:block md:col-span-3 lg:col-span-3">
          {Filters}
        </aside>

        <div className="md:col-span-9 lg:col-span-9">
          {filtered.length === 0 ? (
            <div className="py-20 text-center text-bone/60">
              <p className="font-serif text-2xl text-bone">Nothing here yet.</p>
              <p className="mt-2 text-[14px]">Try a different combination of filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} variant="default" />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] md:hidden transition-opacity",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-ink/80"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute left-0 top-0 h-full w-[88%] max-w-sm bg-ink border-r border-bone/10 transition-transform",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-bone/10">
            <p className="text-[12px] tracking-widest2 uppercase text-bone">
              Filter
            </p>
            <button
              type="button"
              aria-label="Close filter"
              onClick={() => setMobileOpen(false)}
              className="p-2 -mr-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="px-6 overflow-y-auto h-[calc(100%-8rem)]">
            {Filters}
          </div>
          <div className="absolute inset-x-0 bottom-0 p-6 border-t border-bone/10 bg-ink">
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="w-full h-12 bg-bone text-ink text-[12px] tracking-widest2 uppercase"
            >
              Show {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
