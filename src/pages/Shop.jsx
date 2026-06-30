import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal } from "lucide-react"
import { products } from "@/data/products"
import FilterSidebar from "@/components/shop/FilterSidebar"
import ProductGrid from "@/components/shop/ProductGrid"
import SortDropdown from "@/components/shop/SortDropdown"
import { useProductFilters } from "@/hooks/useProductFilters"

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [filters, setFilters] = useState({
    category: [],
    price: [],
    material: [],
  })
  const [sort, setSort] = useState("featured")

  const categoryParam = searchParams.get("category")

  useEffect(() => {
    if (categoryParam) {
      setFilters((f) => ({
        ...f,
        category: [categoryParam],
      }))
    }
  }, [categoryParam])

  const filteredProducts = useProductFilters(products, filters, sort)

  return (
    <main className="bg-ink min-h-screen pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-champagne mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-3xl md:text-5xl text-cream">
            Shop All Jewelry
          </h1>
        </div>

        <div className="flex items-start">
          <FilterSidebar
            filters={filters}
            onChange={setFilters}
            isOpen={filtersOpen}
            onClose={() => setFiltersOpen(false)}
          />

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6 md:mb-8 pb-4 border-b border-divider">
              <button
                onClick={() => setFiltersOpen(true)}
                className="md:hidden inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-cream"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>
              <p className="hidden md:block text-sm text-cream-muted">
                {filteredProducts.length} piece
                {filteredProducts.length !== 1 ? "s" : ""}
              </p>
              <SortDropdown value={sort} onChange={setSort} />
            </div>

            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </main>
  )
}
