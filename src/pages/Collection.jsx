import * as React from "react"
import { useSearchParams, Link } from "react-router-dom"
import { SlidersHorizontal, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StarRating } from "@/components/ui/star-rating"
import { useCart } from "@/lib/cartContext"
import { PRODUCTS, CATEGORIES, formatPrice } from "@/data/products"
import { useImageLoader } from "@/hooks/useImageLoader"

const PRICE_RANGES = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 — $75", min: 50, max: 75 },
  { label: "$75 — $100", min: 75, max: 100 },
  { label: "$100+", min: 100, max: Infinity },
]

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rated", value: "rating" },
]

function FilterSection({ title, children }) {
  return (
    <div className="mb-8">
      <h4 className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-velmora-espresso">
        {title}
      </h4>
      {children}
    </div>
  )
}

function CollectionProductCard({ product }) {
  const [hovered, setHovered] = React.useState(false)
  const { addItem } = useCart()

  return (
    <article
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/products/${product.id}`} className="relative block overflow-hidden bg-velmora-stone">
        <div className="aspect-[3/4] w-full">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            data-strk-img-id={product.imageId}
            data-strk-img={`[${product.titleId}] [${product.descId}] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            data-strk-img-id={product.hoverImageId}
            data-strk-img={`[${product.titleId}] gold jewelry detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            className={`
              absolute inset-0 h-full w-full object-cover transition-opacity duration-500
              ${hovered ? "opacity-100" : "opacity-0"}
            `}
          />
        </div>

        <div
          className={`
            absolute bottom-0 left-0 right-0 translate-y-full bg-velmora-white/95 p-3 backdrop-blur-sm
            transition-transform duration-300 group-hover:translate-y-0
          `}
        >
          <Button
            size="full"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addItem(product, product.variants[0])
            }}
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </Link>

      <div className="mt-4 text-center">
        <Link to={`/products/${product.id}`}>
          <h3
            id={product.titleId}
            className="font-serif text-xs font-medium uppercase tracking-[0.2em] text-velmora-espresso transition-colors hover:text-velmora-gold"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="sr-only">
          {product.description}
        </p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <StarRating rating={Math.round(product.rating)} size={12} />
          <span className="text-[10px] text-velmora-muted">({product.reviewCount})</span>
        </div>
        <p className="mt-2 font-sans text-sm font-medium text-velmora-espresso">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  )
}

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false)
  const [sort, setSort] = React.useState("featured")

  const selectedCategory = searchParams.get("category") || ""
  const selectedPrice = searchParams.get("price") || ""
  const selectedMaterial = searchParams.get("material") || ""

  const containerRef = useImageLoader([
    selectedCategory,
    selectedPrice,
    selectedMaterial,
    sort,
  ])

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value) next.set(key, value)
    else next.delete(key)
    setSearchParams(next, { replace: true })
  }

  let filtered = PRODUCTS.filter((p) => {
    if (selectedCategory && p.category !== selectedCategory) return false
    if (selectedPrice) {
      const range = PRICE_RANGES.find((r) => r.label === selectedPrice)
      if (range && (p.price < range.min || p.price > range.max)) return false
    }
    if (selectedMaterial) {
      const hasMaterial =
        (selectedMaterial === "gold" && p.variants.includes("gold")) ||
        (selectedMaterial === "silver" && p.variants.includes("silver"))
      if (!hasMaterial) return false
    }
    return true
  })

  filtered = [...filtered].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price
    if (sort === "price-desc") return b.price - a.price
    if (sort === "rating") return b.rating - a.rating
    return 0
  })

  const activeFiltersCount = [
    selectedCategory,
    selectedPrice,
    selectedMaterial,
  ].filter(Boolean).length

  const Filters = (
    <div className="space-y-2">
      <FilterSection title="Category">
        <ul className="space-y-2">
          {CATEGORIES.map((cat) => (
            <li key={cat}>
              <button
                type="button"
                onClick={() =>
                  updateParam("category", selectedCategory === cat ? "" : cat)
                }
                className={`font-sans text-sm capitalize transition-colors ${
                  selectedCategory === cat
                    ? "text-velmora-gold"
                    : "text-velmora-espresso-light hover:text-velmora-gold"
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </FilterSection>

      <FilterSection title="Price">
        <ul className="space-y-2">
          {PRICE_RANGES.map((range) => (
            <li key={range.label}>
              <button
                type="button"
                onClick={() =>
                  updateParam(
                    "price",
                    selectedPrice === range.label ? "" : range.label
                  )
                }
                className={`font-sans text-sm transition-colors ${
                  selectedPrice === range.label
                    ? "text-velmora-gold"
                    : "text-velmora-espresso-light hover:text-velmora-gold"
                }`}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </FilterSection>

      <FilterSection title="Material">
        {["gold", "silver"].map((mat) => (
          <button
            key={mat}
            type="button"
            onClick={() =>
              updateParam("material", selectedMaterial === mat ? "" : mat)
            }
            className={`mr-3 inline-block font-sans text-sm capitalize transition-colors ${
              selectedMaterial === mat
                ? "text-velmora-gold"
                : "text-velmora-espresso-light hover:text-velmora-gold"
            }`}
          >
            {mat}
          </button>
        ))}
      </FilterSection>

      {activeFiltersCount > 0 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSearchParams({}, { replace: true })}
        >
          Clear all
        </Button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="bg-velmora-cream pb-16 pt-24 md:pb-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-velmora-gold">
              The Collection
            </span>
            <h1 className="mt-2 font-serif text-3xl font-medium md:text-4xl">
              Shop All Jewelry
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.12em] text-velmora-espresso md:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-velmora-gold text-[9px] text-velmora-espresso">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            <div className="flex items-center gap-2">
              <label
                htmlFor="sort"
                className="font-sans text-xs uppercase tracking-[0.12em] text-velmora-muted"
              >
                Sort
              </label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border-b border-velmora-border bg-transparent py-1 font-sans text-sm text-velmora-espresso focus:border-velmora-gold focus:outline-none"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden w-56 flex-shrink-0 md:block">{Filters}</aside>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl text-velmora-espresso">
                  No pieces match your selection.
                </p>
                <Button
                  variant="secondary"
                  className="mt-6"
                  onClick={() => setSearchParams({}, { replace: true })}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <>
                <p className="mb-6 text-sm text-velmora-muted">
                  {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
                  {filtered.map((product) => (
                    <CollectionProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] md:hidden" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-velmora-espresso/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-velmora-cream p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-serif text-xl tracking-wide">Filters</h3>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 hover:text-velmora-gold"
                aria-label="Close filters"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {Filters}
            <div className="mt-8">
              <Button size="full" onClick={() => setMobileFiltersOpen(false)}>
                View {filtered.length} {filtered.length === 1 ? "Piece" : "Pieces"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
