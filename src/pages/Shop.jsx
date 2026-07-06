import { useEffect, useMemo, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { SlidersHorizontal } from "lucide-react"
import { products, categories } from "@/data/products"
import { ProductCard } from "@/components/product/ProductCard"
import { Select } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const sortOptions = {
  featured: "Featured",
  priceLow: "Price: Low to High",
  priceHigh: "Price: High to Low",
  rating: "Top Rated",
}

const priceRanges = [
  { label: "Under $40", min: 0, max: 40 },
  { label: "$40 – $60", min: 40, max: 60 },
  { label: "$60 – $80", min: 60, max: 80 },
  { label: "$80+", min: 80, max: Infinity },
]

export default function Shop() {
  const { category } = useParams()
  const containerRef = useRef(null)
  const [sort, setSort] = useState("featured")
  const [selectedCategory, setSelectedCategory] = useState(category || "all")
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    setSelectedCategory(category || "all")
  }, [category])

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [selectedCategory, selectedPrice, sort])

  const filtered = useMemo(() => {
    let result = [...products]
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory)
    }
    if (selectedPrice !== null) {
      const range = priceRanges[selectedPrice]
      result = result.filter((p) => p.price >= range.min && p.price < range.max)
    }
    if (sort === "priceLow") result.sort((a, b) => a.price - b.price)
    if (sort === "priceHigh") result.sort((a, b) => b.price - a.price)
    if (sort === "rating") result.sort((a, b) => b.rating - a.rating)
    return result
  }, [selectedCategory, selectedPrice, sort])

  const FilterContent = () => (
    <>
      <div>
        <h4 className="font-sans text-xs font-semibold uppercase tracking-extra-wide text-espresso">
          Category
        </h4>
        <div className="mt-3 space-y-2">
          <label className="flex cursor-pointer items-center gap-2 text-sm text-taupe">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === "all"}
              onChange={() => setSelectedCategory("all")}
              className="h-4 w-4 accent-gold"
            />
            All
          </label>
          {categories.map((cat) => (
            <label key={cat.id} className="flex cursor-pointer items-center gap-2 text-sm text-taupe">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat.id}
                onChange={() => setSelectedCategory(cat.id)}
                className="h-4 w-4 accent-gold"
              />
              {cat.name}
            </label>
          ))}
        </div>
      </div>

      <Separator className="my-6" />

      <div>
        <h4 className="font-sans text-xs font-semibold uppercase tracking-extra-wide text-espresso">
          Price
        </h4>
        <div className="mt-3 space-y-2">
          {priceRanges.map((range, idx) => (
            <label key={range.label} className="flex cursor-pointer items-center gap-2 text-sm text-taupe">
              <input
                type="radio"
                name="price"
                checked={selectedPrice === idx}
                onChange={() => setSelectedPrice(idx)}
                className="h-4 w-4 accent-gold"
              />
              {range.label}
            </label>
          ))}
          <label className="flex cursor-pointer items-center gap-2 text-sm text-taupe">
            <input
              type="radio"
              name="price"
              checked={selectedPrice === null}
              onChange={() => setSelectedPrice(null)}
              className="h-4 w-4 accent-gold"
            />
            Any price
          </label>
        </div>
      </div>

      {(selectedCategory !== "all" || selectedPrice !== null) && (
        <button
          type="button"
          onClick={() => {
            setSelectedCategory("all")
            setSelectedPrice(null)
          }}
          className="mt-6 text-xs font-medium uppercase tracking-extra-wide text-gold underline underline-offset-4 hover:text-gold-dark"
        >
          Clear filters
        </button>
      )}
    </>
  )

  return (
    <div ref={containerRef} className="min-h-screen bg-cream pt-16">
      <div className="bg-linen px-4 py-10 text-center md:py-14">
        <p className="font-sans text-xs font-medium uppercase tracking-extra-wide text-gold">
          The Collection
        </p>
        <h1 className="mt-3 font-serif text-3xl font-normal text-espresso md:text-5xl">
          Shop All Jewelry
        </h1>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 md:flex-row md:px-6 md:py-12 lg:px-8">
        {/* Mobile filter toggle */}
        <button
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          className="flex items-center gap-2 border border-sand px-4 py-2.5 font-sans text-xs font-medium uppercase tracking-extra-wide text-espresso md:hidden"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </button>

        {mobileFiltersOpen && (
          <div className="border border-sand bg-white p-5 md:hidden">
            <FilterContent />
          </div>
        )}

        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 md:block">
          <div className="sticky top-24 border border-sand bg-white p-6">
            <h3 className="font-sans text-sm font-semibold uppercase tracking-extra-wide text-espresso">
              Filter By
            </h3>
            <Separator className="my-4" />
            <FilterContent />
          </div>
        </aside>

        {/* Grid */}
        <main className="flex-1">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-taupe">{filtered.length} products</p>
            <div className="w-44">
              <Select value={sort} onChange={(e) => setSort(e.target.value)}>
                {Object.entries(sortOptions).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </Select>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-serif text-xl text-espresso">No products match your filters.</p>
              <button
                onClick={() => {
                  setSelectedCategory("all")
                  setSelectedPrice(null)
                }}
                className="mt-4 text-sm font-medium text-gold underline underline-offset-4"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
