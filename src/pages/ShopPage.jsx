import { useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { ChevronDown, SlidersHorizontal, X } from "lucide-react"
import ProductCard from "@/components/ProductCard"
import { Eyebrow, Reveal } from "@/components/ui"
import { products } from "@/data/products"
import { cn } from "@/lib/utils"

const allCategories = ["All", "Earrings", "Necklaces", "Huggies", "Sets"]
const priceRanges = [
  { id: "all", label: "All prices", test: () => true },
  { id: "under-50", label: "Under $50", test: (p) => p.price < 50 },
  { id: "50-80", label: "$50 – $80", test: (p) => p.price >= 50 && p.price <= 80 },
  { id: "over-80", label: "Over $80", test: (p) => p.price > 80 },
]
const materials = [
  { id: "all", label: "All finishes" },
  { id: "gold", label: "18K Gold Plated" },
  { id: "crystal", label: "Crystal Accents" },
]
const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

function FilterGroup({ title, children }) {
  return (
    <div className="border-b border-hairline py-6">
      <h3 className="text-[11px] font-medium uppercase tracking-[0.22em] text-noir">{title}</h3>
      <div className="mt-4 space-y-2.5">{children}</div>
    </div>
  )
}

function RadioRow({ checked, onChange, label, count }) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-2 text-sm text-muted transition-colors hover:text-noir">
      <span className="flex items-center gap-2.5">
        <span
          className={cn(
            "flex h-3.5 w-3.5 items-center justify-center rounded-full border transition-colors",
            checked ? "border-gold" : "border-hairline"
          )}
        >
          {checked && <span className="h-1.5 w-1.5 rounded-full bg-gold" />}
        </span>
        <input type="radio" checked={checked} onChange={onChange} className="sr-only" />
        {label}
      </span>
      {count != null && <span className="text-xs text-muted/70">{count}</span>}
    </label>
  )
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const category = searchParams.get("category") || "All"
  const [priceId, setPriceId] = useState("all")
  const [materialId, setMaterialId] = useState("all")
  const [sortId, setSortId] = useState("featured")
  const [filtersOpen, setFiltersOpen] = useState(false)

  const setCategory = (c) => {
    if (c === "All") {
      searchParams.delete("category")
      setSearchParams(searchParams, { replace: true })
    } else {
      setSearchParams({ category: c }, { replace: true })
    }
  }

  const filtered = useMemo(() => {
    const price = priceRanges.find((r) => r.id === priceId) || priceRanges[0]
    let list = products.filter((p) => (category === "All" ? true : p.category === category))
    list = list.filter((p) => price.test(p))
    if (materialId === "crystal") {
      list = list.filter((p) => /crystal/i.test(`${p.tagline} ${p.materials}`))
    }
    const sorted = [...list]
    if (sortId === "price-asc") sorted.sort((a, b) => a.price - b.price)
    if (sortId === "price-desc") sorted.sort((a, b) => b.price - a.price)
    if (sortId === "rating") sorted.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews)
    return sorted
  }, [category, priceId, materialId, sortId])

  const countFor = (c) => products.filter((p) => (c === "All" ? true : p.category === c)).length

  const filters = (
    <>
      <FilterGroup title="Category">
        {allCategories.map((c) => (
          <RadioRow
            key={c}
            checked={category === c}
            onChange={() => setCategory(c)}
            label={c}
            count={countFor(c)}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Price">
        {priceRanges.map((r) => (
          <RadioRow key={r.id} checked={priceId === r.id} onChange={() => setPriceId(r.id)} label={r.label} />
        ))}
      </FilterGroup>
      <FilterGroup title="Material">
        {materials.map((m) => (
          <RadioRow key={m.id} checked={materialId === m.id} onChange={() => setMaterialId(m.id)} label={m.label} />
        ))}
      </FilterGroup>
    </>
  )

  return (
    <div className="bg-ivory pb-24 pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="border-b border-hairline pb-10 text-center">
          <Eyebrow>The Collection</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-light text-noir md:text-6xl">
            {category === "All" ? (
              <>Every piece, <em className="italic text-gold-deep">treasured</em></>
            ) : (
              <span className="capitalize">{category.toLowerCase()}</span>
            )}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm font-light leading-relaxed text-muted">
            Small-batch 18k gold-plated jewelry, handmade to be lived in.
            Complimentary shipping and returns, always.
          </p>
        </Reveal>

        <div className="mt-8 flex items-center justify-between gap-4 lg:hidden">
          <button
            onClick={() => setFiltersOpen(true)}
            className="flex items-center gap-2 border border-hairline px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-noir"
          >
            <SlidersHorizontal className="h-3.5 w-3.5" /> Filters
          </button>
          <SortSelect sortId={sortId} setSortId={setSortId} />
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-14">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="flex items-center justify-between pb-2">
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
                  {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
                </span>
                <SortSelect sortId={sortId} setSortId={setSortId} />
              </div>
              {filters}
            </div>
          </aside>

          <div>
            {filtered.length === 0 ? (
              <div className="flex min-h-[40vh] flex-col items-center justify-center gap-3 text-center">
                <p className="font-serif text-2xl text-noir">No pieces match those filters</p>
                <button
                  onClick={() => {
                    setCategory("All")
                    setPriceId("all")
                    setMaterialId("all")
                  }}
                  className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold-deep hover:text-noir"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6">
                {filtered.map((product, i) => (
                  <Reveal key={product.id} delay={i * 50}>
                    <ProductCard product={product} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter sheet */}
      <div
        className={cn(
          "fixed inset-0 z-[70] transition-opacity duration-300 lg:hidden",
          filtersOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <button aria-label="Close filters" onClick={() => setFiltersOpen(false)} className="absolute inset-0 bg-noir/60" />
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 max-h-[80vh] overflow-y-auto bg-ivory px-6 pb-10 pt-5 transition-transform duration-500 ease-luxe thin-scroll",
            filtersOpen ? "translate-y-0" : "translate-y-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-hairline pb-4">
            <span className="font-serif text-base uppercase tracking-[0.25em] text-noir">Filters</span>
            <button onClick={() => setFiltersOpen(false)} aria-label="Close filters" className="text-muted hover:text-noir">
              <X className="h-5 w-5" />
            </button>
          </div>
          {filters}
          <button
            onClick={() => setFiltersOpen(false)}
            className="mt-6 w-full bg-noir py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-ivory"
          >
            View {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </button>
        </div>
      </div>
    </div>
  )
}

function SortSelect({ sortId, setSortId }) {
  return (
    <div className="relative">
      <select
        value={sortId}
        onChange={(e) => setSortId(e.target.value)}
        aria-label="Sort products"
        className="appearance-none border border-hairline bg-transparent py-2.5 pl-4 pr-9 text-[11px] font-medium uppercase tracking-[0.15em] text-noir focus:border-gold focus:outline-none"
      >
        {sortOptions.map((o) => (
          <option key={o.id} value={o.id}>
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted" />
    </div>
  )
}
