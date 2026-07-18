import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { products, priceRanges } from "@/data/products"
import { ProductGrid } from "@/components/shop/ProductGrid"
import { FilterSidebar } from "@/components/shop/FilterSidebar"
import { SlidersHorizontal } from "lucide-react"

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filters, setFilters] = useState({
    category: searchParams.get("category") ? [searchParams.get("category")] : [],
    material: [],
    price: [],
  })
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const cat = searchParams.get("category")
    if (cat) {
      setFilters((prev) => ({ ...prev, category: [cat] }))
    }
  }, [searchParams])

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (filters.category.length && !filters.category.includes(p.category))
        return false
      if (filters.material.length && !filters.material.includes(p.material))
        return false
      if (filters.price.length) {
        const inRange = filters.price.some((id) => {
          const range = priceRanges.find((r) => r.id === id)
          return p.price >= range.min && p.price < range.max
        })
        if (!inRange) return false
      }
      return true
    })

    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price)
    if (sort === "price-desc")
      list = [...list].sort((a, b) => b.price - a.price)
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating)

    return list
  }, [filters, sort])

  return (
    <main className="bg-background pt-24 sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.22em] text-primary">
            The Collection
          </p>
          <h1 className="font-serif text-4xl font-medium text-foreground">
            Shop All Jewelry
          </h1>
        </div>

        <div className="flex items-center justify-between border-b border-border pb-4">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-foreground lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>

          <div className="hidden text-sm text-muted-foreground lg:block">
            {filtered.length} products
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden text-xs uppercase tracking-[0.14em] text-muted-foreground sm:inline">
              Sort by
            </span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-9 rounded-md border border-border bg-transparent px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {sortOptions.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[240px_1fr]">
          <div className="hidden lg:block">
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </div>

          <ProductGrid products={filtered} />
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 max-h-[80vh] overflow-y-auto rounded-t-2xl bg-background p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-serif text-lg uppercase tracking-[0.16em]">
                Filters
              </h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-sm text-muted-foreground"
              >
                Done
              </button>
            </div>
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </div>
        </div>
      )}
    </main>
  )
}
