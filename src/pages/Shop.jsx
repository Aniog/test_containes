import React, { useState, useMemo, useEffect, useRef } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import {
  SlidersHorizontal,
  X,
  ChevronDown,
  ShoppingBag,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { products, categories } from "@/data/products"
import { useCart } from "@/context/CartContext"

function ShopProductCard({ product }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)
  const titleId = `shop-title-${product.id}`

  return (
    <article
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
          <img
            data-strk-img-id={`${product.id}-shop-img-1`}
            data-strk-img={`[${titleId}] [shop-title]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
            style={{ opacity: hovered ? 0 : 1 }}
          />
          <img
            data-strk-img-id={`${product.id}-shop-img-2`}
            data-strk-img={`[${titleId}] [shop-title] on model`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} on model`}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
            style={{ opacity: hovered ? 1 : 0 }}
          />
        </div>
      </Link>

      <div className="relative h-0">
        <button
          onClick={(e) => {
            e.preventDefault()
            addItem(product, 1, "gold")
          }}
          className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary opacity-0 shadow-sm transition-all duration-300 group-hover:opacity-100 hover:bg-accent hover:text-white"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-3 text-center">
        <div className="flex items-center justify-center gap-1 mb-1">
          <Star className="h-3 w-3 fill-accent text-accent" />
          <span className="text-xs text-muted-foreground">{product.rating}</span>
        </div>
        <Link to={`/products/${product.slug}`}>
          <h3
            id={titleId}
            className="font-serif text-sm uppercase tracking-[0.2em] text-primary hover:text-accent transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm font-medium text-primary">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </article>
  )
}

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
]

const priceRanges = [
  { value: "all", label: "All Prices" },
  { value: "under-50", label: "Under $50" },
  { value: "50-75", label: "$50 — $75" },
  { value: "75-100", label: "$75 — $100" },
  { value: "over-100", label: "Over $100" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const activeCategory = searchParams.get("category") || "all"
  const activePrice = searchParams.get("price") || "all"
  const activeMaterial = searchParams.get("material") || "all"
  const sort = searchParams.get("sort") || "featured"

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value === "all") {
      next.delete(key)
    } else {
      next.set(key, value)
    }
    setSearchParams(next, { replace: true })
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory)
    }

    if (activeMaterial !== "all") {
      result = result.filter((p) => p.material === activeMaterial)
    }

    if (activePrice !== "all") {
      result = result.filter((p) => {
        if (activePrice === "under-50") return p.price < 50
        if (activePrice === "50-75") return p.price >= 50 && p.price <= 75
        if (activePrice === "75-100") return p.price > 75 && p.price <= 100
        if (activePrice === "over-100") return p.price > 100
        return true
      })
    }

    if (sort === "price-asc") {
      result.sort((a, b) => a.price - b.price)
    } else if (sort === "price-desc") {
      result.sort((a, b) => b.price - a.price)
    } else if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [activeCategory, activeMaterial, activePrice, sort])

  const activeFiltersCount = [activeCategory, activePrice, activeMaterial].filter(
    (v) => v !== "all"
  ).length

  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeCategory, activePrice, activeMaterial, sort])

  return (
    <main ref={containerRef} className="bg-background pt-20 md:pt-24 min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {/* Header */}
          <div className="mb-10 md:mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">
              The Collection
            </p>
            <h1
              id="shop-title"
              className="font-serif text-4xl md:text-5xl font-light text-primary"
            >
              Shop All
            </h1>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 text-sm font-medium text-primary border border-hairline px-4 py-2 rounded-sm"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="ml-1 h-5 w-5 rounded-full bg-accent text-white text-[10px] flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <span>{filteredProducts.length} products</span>
              {activeFiltersCount > 0 && (
                <button
                  onClick={() => setSearchParams({})}
                  className="ml-3 flex items-center gap-1 text-primary hover:text-accent"
                >
                  <X className="h-3 w-3" /> Clear all
                </button>
              )}
            </div>

            <div className="relative">
              <select
                value={sort}
                onChange={(e) => updateParam("sort", e.target.value)}
                className="appearance-none h-11 pl-4 pr-10 border border-hairline bg-surface text-sm text-primary rounded-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          <div className="flex gap-10">
            {/* Sidebar filters */}
            <aside className="hidden md:block w-64 shrink-0">
              <div className="sticky top-28">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.15em]">
                    Filters
                  </h2>
                  {activeFiltersCount > 0 && (
                    <button
                      onClick={() => setSearchParams({})}
                      className="text-xs text-muted-foreground hover:text-accent"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <FilterGroup
                  title="Category"
                  options={[
                    { value: "all", label: "All" },
                    ...categories.map((c) => ({ value: c.id, label: c.label })),
                    { value: "sets", label: "Gift Sets" },
                  ]}
                  active={activeCategory}
                  onChange={(v) => updateParam("category", v)}
                />
                <Separator className="my-6" />
                <FilterGroup
                  title="Price"
                  options={priceRanges}
                  active={activePrice}
                  onChange={(v) => updateParam("price", v)}
                />
                <Separator className="my-6" />
                <FilterGroup
                  title="Material"
                  options={[
                    { value: "all", label: "All" },
                    { value: "gold", label: "Gold Plated" },
                    { value: "silver", label: "Silver Tone" },
                  ]}
                  active={activeMaterial}
                  onChange={(v) => updateParam("material", v)}
                />
              </div>
            </aside>

            {/* Product grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <p className="font-serif text-2xl text-primary mb-3">
                    No pieces match your filters
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Try adjusting your selection to explore the collection.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSearchParams({})}
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6">
                  {filteredProducts.map((product) => (
                    <ShopProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile filters drawer */}
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div
              className="absolute inset-0 bg-primary/40"
              onClick={() => setMobileFiltersOpen(false)}
            />
            <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] bg-surface rounded-t-lg overflow-y-auto p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-2xl">Filters</h2>
                <button onClick={() => setMobileFiltersOpen(false)}>
                  <X className="h-5 w-5" />
                </button>
              </div>
              <FilterGroup
                title="Category"
                options={[
                  { value: "all", label: "All" },
                  ...categories.map((c) => ({ value: c.id, label: c.label })),
                  { value: "sets", label: "Gift Sets" },
                ]}
                active={activeCategory}
                onChange={(v) => updateParam("category", v)}
              />
              <Separator className="my-6" />
              <FilterGroup
                title="Price"
                options={priceRanges}
                active={activePrice}
                onChange={(v) => updateParam("price", v)}
              />
              <Separator className="my-6" />
              <FilterGroup
                title="Material"
                options={[
                  { value: "all", label: "All" },
                  { value: "gold", label: "Gold Plated" },
                  { value: "silver", label: "Silver Tone" },
                ]}
                active={activeMaterial}
                onChange={(v) => updateParam("material", v)}
              />
              <div className="mt-8 space-y-3">
                <Button
                  className="w-full h-12"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  Show {filteredProducts.length} Products
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-12"
                  onClick={() => setSearchParams({})}
                >
                  Clear All
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
  )
}

function FilterGroup({ title, options, active, onChange }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.15em] mb-4">
        {title}
      </h3>
      <div className="space-y-2">
        {options.map((opt) => (
          <label
            key={opt.value}
            className="flex items-center gap-3 text-sm cursor-pointer group"
          >
            <div
              className={`pointer-events-none h-4 w-4 rounded-full border flex items-center justify-center transition-colors ${
                active === opt.value
                  ? "border-accent bg-accent"
                  : "border-hairline group-hover:border-primary"
              }`}
            >
              {active === opt.value && (
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
              )}
            </div>
            <input
              type="radio"
              name={title}
              value={opt.value}
              checked={active === opt.value}
              onChange={() => onChange(opt.value)}
              className="sr-only"
            />
            <span
              className={`${
                active === opt.value ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {opt.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}
