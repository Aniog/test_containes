import React, { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { products } from "@/data/products"
import { ProductCard } from "@/components/product/product-card"
import { Button } from "@/components/ui/button"
import { ChevronDown, SlidersHorizontal, X } from "lucide-react"
import { cn } from "@/lib/utils"

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
]

const filters = {
  category: ["earrings", "necklaces", "huggies", "sets"],
  price: [
    { label: "Under $50", min: 0, max: 50 },
    { label: "$50 – $75", min: 50, max: 75 },
    { label: "$75 – $100", min: 75, max: 100 },
    { label: "$100+", min: 100, max: Infinity },
  ],
  material: ["gold", "silver"],
}

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [activeFilters, setActiveFilters] = useState({
    category: searchParams.get("category") ? [searchParams.get("category")] : [],
    price: [],
    material: [],
  })

  useEffect(() => {
    const category = searchParams.get("category")
    if (category) {
      setActiveFilters((prev) => ({ ...prev, category: [category] }))
    }
  }, [searchParams])

  const toggleFilter = (group, value) => {
    setActiveFilters((prev) => {
      const current = prev[group]
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
      return { ...prev, [group]: updated }
    })
  }

  const clearFilters = () => {
    setActiveFilters({ category: [], price: [], material: [] })
    setSearchParams({})
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeFilters.category.length > 0) {
      result = result.filter((p) => activeFilters.category.includes(p.category))
    }

    if (activeFilters.material.length > 0) {
      result = result.filter((p) => activeFilters.material.includes(p.material))
    }

    if (activeFilters.price.length > 0) {
      result = result.filter((p) =>
        activeFilters.price.some((rangeLabel) => {
          const range = filters.price.find((r) => r.label === rangeLabel)
          return range && p.price >= range.min && p.price < range.max
        })
      )
    }

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return result
  }, [activeFilters, sort])

  const activeFilterCount =
    activeFilters.category.length + activeFilters.price.length + activeFilters.material.length

  return (
    <main className="min-h-screen bg-cream pb-16 pt-24 md:pb-24 md:pt-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gold">The Collection</p>
            <h1 className="font-serif text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
              Shop All Jewelry
            </h1>
          </div>
          <p className="text-sm text-muted">{filteredProducts.length} pieces</p>
        </div>

        {/* Toolbar */}
        <div className="mb-6 flex items-center justify-between border-b border-hairline pb-4 md:mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.1em] text-ink md:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" /> Filter
            {activeFilterCount > 0 && (
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] text-white">
                {activeFilterCount}
              </span>
            )}
          </button>

          <div className="hidden items-center gap-6 md:flex">
            {activeFilterCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-xs font-medium uppercase tracking-[0.1em] text-muted hover:text-gold"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none border border-hairline bg-surface px-4 py-2 pr-10 text-xs font-medium uppercase tracking-[0.1em] text-ink focus:border-gold focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Sidebar filters - desktop */}
          <aside className="hidden w-64 flex-shrink-0 md:block">
            <div className="space-y-8">
              <FilterGroup
                title="Category"
                options={filters.category}
                active={activeFilters.category}
                onToggle={(v) => toggleFilter("category", v)}
              />
              <FilterGroup
                title="Price"
                options={filters.price.map((r) => r.label)}
                active={activeFilters.price}
                onToggle={(v) => toggleFilter("price", v)}
              />
              <FilterGroup
                title="Material"
                options={filters.material}
                active={activeFilters.material}
                onToggle={(v) => toggleFilter("material", v)}
              />
            </div>
          </aside>

          {/* Mobile filters */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 bg-cream md:hidden">
              <div className="flex items-center justify-between border-b border-hairline p-6">
                <h2 className="font-serif text-xl">Filters</h2>
                <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-6 p-6">
                <FilterGroup
                  title="Category"
                  options={filters.category}
                  active={activeFilters.category}
                  onToggle={(v) => toggleFilter("category", v)}
                />
                <FilterGroup
                  title="Price"
                  options={filters.price.map((r) => r.label)}
                  active={activeFilters.price}
                  onToggle={(v) => toggleFilter("price", v)}
                />
                <FilterGroup
                  title="Material"
                  options={filters.material}
                  active={activeFilters.material}
                  onToggle={(v) => toggleFilter("material", v)}
                />
              </div>
              <div className="border-t border-hairline p-6">
                <Button size="full" onClick={() => setMobileFiltersOpen(false)}>
                  Show {filteredProducts.length} Results
                </Button>
                {activeFilterCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="mt-3 w-full text-center text-xs font-medium uppercase tracking-[0.1em] text-muted"
                  >
                    Clear all
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl text-ink">No pieces match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-xs font-medium uppercase tracking-[0.1em] text-gold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

const FilterGroup = ({ title, options, active, onToggle }) => {
  return (
    <div>
      <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-ink">{title}</h3>
      <ul className="space-y-3">
        {options.map((option) => {
          const isActive = active.includes(option)
          return (
            <li key={option}>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-muted">
                <button
                  onClick={() => onToggle(option)}
                  className={cn(
                    "flex h-4 w-4 items-center justify-center border transition-colors",
                    isActive ? "border-gold bg-gold text-white" : "border-hairline bg-surface"
                  )}
                >
                  {isActive && <span className="text-xs">✓</span>}
                </button>
                <span className={cn("capitalize", isActive && "text-ink")}>{option}</span>
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ShopPage
