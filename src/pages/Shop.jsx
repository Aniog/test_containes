import React, { useEffect, useMemo, useRef, useState } from "react"
import { ImageHelper } from "@strikingly/sdk"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal } from "lucide-react"
import ProductCard from "@/components/common/ProductCard"
import SectionHeading from "@/components/common/SectionHeading"
import { products } from "@/data/products"
import strkImgConfig from "@/strk-img-config.json"

const categoryOptions = ["All", "Earrings", "Necklaces", "Huggies", "Gift Sets"]
const priceOptions = [
  { label: "All", value: "All" },
  { label: "Under $50", value: "under-50" },
  { label: "$50–$80", value: "50-80" },
  { label: "$80+", value: "80-plus" },
]
const materialOptions = ["All", "18K Gold Plated"]

export default function Shop({ onAddToCart }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get("category") || "All"
  const [category, setCategory] = useState(categoryOptions.includes(initialCategory) ? initialCategory : "All")
  const [price, setPrice] = useState("All")
  const [material, setMaterial] = useState("All")
  const [sort, setSort] = useState("featured")
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [category, price, material, sort])

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const matchesCategory = category === "All" || product.category === category
      const matchesMaterial = material === "All" || product.material === material
      const matchesPrice =
        price === "All" ||
        (price === "under-50" && product.price < 50) ||
        (price === "50-80" && product.price >= 50 && product.price <= 80) ||
        (price === "80-plus" && product.price > 80)

      return matchesCategory && matchesMaterial && matchesPrice
    })

    return [...nextProducts].sort((a, b) => {
      if (sort === "price-low") return a.price - b.price
      if (sort === "price-high") return b.price - a.price
      if (sort === "rating") return b.rating - a.rating
      return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id)
    })
  }, [category, material, price, sort])

  const updateCategory = (nextCategory) => {
    setCategory(nextCategory)
    if (nextCategory === "All") {
      setSearchParams({})
    } else {
      setSearchParams({ category: nextCategory })
    }
  }

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="px-5 pb-10 pt-10 sm:px-8 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Shop Velmora"
            title="An edited case of warm gold"
            copy="Filter demi-fine signatures by category, price, and material. Every piece is designed for everyday wear and gift-ready arrival."
          />
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="h-fit rounded-[2rem] border border-velmora-espresso/10 bg-velmora-porcelain p-6 text-velmora-espresso shadow-soft lg:sticky lg:top-28">
            <div className="mb-6 flex items-center gap-3 border-b border-velmora-espresso/10 pb-5">
              <SlidersHorizontal className="h-5 w-5 text-velmora-clay" />
              <h2 className="text-xs font-bold uppercase tracking-[0.26em] text-velmora-espresso">Filters</h2>
            </div>
            <FilterGroup title="Category" options={categoryOptions} value={category} onChange={updateCategory} />
            <FilterGroup title="Price" options={priceOptions} value={price} onChange={setPrice} />
            <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
          </aside>

          <div>
            <div className="mb-6 flex flex-col gap-4 rounded-[1.5rem] border border-velmora-espresso/10 bg-velmora-porcelain p-4 text-velmora-espresso sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-velmora-taupe">
                Showing <span className="font-semibold text-velmora-espresso">{filteredProducts.length}</span> pieces
              </p>
              <label className="flex items-center gap-3 text-sm text-velmora-taupe">
                Sort
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="rounded-full border border-velmora-espresso/10 bg-velmora-ivory px-4 py-2 text-sm font-semibold text-velmora-espresso outline-none focus:border-velmora-champagne"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </label>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-velmora-espresso/10 bg-velmora-porcelain p-12 text-center text-velmora-espresso shadow-soft">
                <h3 className="font-serif text-4xl">No pieces found</h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-velmora-taupe">
                  Try easing the filters to discover more warm gold signatures.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  const normalizedOptions = options.map((option) => (typeof option === "string" ? { label: option, value: option } : option))

  return (
    <div className="mb-7 last:mb-0">
      <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-clay">{title}</h3>
      <div className="flex flex-wrap gap-2 lg:flex-col">
        {normalizedOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`rounded-full border px-4 py-2 text-left text-sm transition ${
              value === option.value
                ? "border-velmora-espresso bg-velmora-espresso text-velmora-ivory"
                : "border-velmora-espresso/10 bg-velmora-ivory text-velmora-espresso hover:border-velmora-champagne"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}
