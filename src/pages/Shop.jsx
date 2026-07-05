import { useState, useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, ChevronDown } from "lucide-react"
import { products, categories } from "@/data/products"
import ProductGrid from "@/components/shop/ProductGrid"

const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 - $80", min: 50, max: 80 },
  { label: "$80+", min: 80, max: Infinity },
]

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get("category") || "all"
  const [priceRange, setPriceRange] = useState(priceRanges[0])
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const filtered = useMemo(() => {
    let result = [...products]

    if (categoryParam !== "all") {
      result = result.filter((p) => p.category.toLowerCase() === categoryParam.toLowerCase())
    }

    result = result.filter((p) => p.price >= priceRange.min && p.price <= priceRange.max)

    if (sort === "price-asc") result.sort((a, b) => a.price - b.price)
    if (sort === "price-desc") result.sort((a, b) => b.price - a.price)
    if (sort === "rating") result.sort((a, b) => b.rating - a.rating)

    return result
  }, [categoryParam, priceRange, sort])

  const setCategory = (value) => {
    if (value === "all") {
      searchParams.delete("category")
    } else {
      searchParams.set("category", value)
    }
    setSearchParams(searchParams)
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h1 className="section-title">Shop</h1>
          <p className="mt-2 text-sm text-brand-muted">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="md:hidden inline-flex items-center gap-2 rounded-md border border-brand-line px-3 py-2 text-sm font-medium text-brand-ink"
            onClick={() => setMobileFiltersOpen((v) => !v)}
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-9 appearance-none rounded-md border border-brand-line bg-white pl-3 pr-8 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-accent/40"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-subtle" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10">
        <aside className={`md:block ${mobileFiltersOpen ? "block" : "hidden"}`}>
          <div className="rounded-xl border border-brand-line bg-white p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-ink">Category</h3>
            <ul className="mt-3 space-y-2 text-sm text-brand-muted">
              <li>
                <button onClick={() => setCategory("all")} className={`w-full text-left ${categoryParam === "all" ? "text-brand-accent font-medium" : "hover:text-brand-accent"}`}>
                  All
                </button>
              </li>
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => setCategory(category.id)}
                    className={`w-full text-left ${categoryParam === category.id ? "text-brand-accent font-medium" : "hover:text-brand-accent"}`}
                  >
                    {category.label}
                  </button>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-brand-ink">Price</h3>
            <ul className="mt-3 space-y-2 text-sm text-brand-muted">
              {priceRanges.map((range) => (
                <li key={range.label}>
                  <button
                    onClick={() => setPriceRange(range)}
                    className={`w-full text-left ${priceRange.label === range.label ? "text-brand-accent font-medium" : "hover:text-brand-accent"}`}
                  >
                    {range.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="md:col-span-3">
          <ProductGrid items={filtered} />
        </div>
      </div>
    </section>
  )
}
