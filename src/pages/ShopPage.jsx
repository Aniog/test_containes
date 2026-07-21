import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import FiltersSidebar from "@/components/shop/FiltersSidebar"
import ProductCard from "@/components/shared/ProductCard"
import SectionHeading from "@/components/shared/SectionHeading"
import { products } from "@/data/store"

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rated", value: "rating-desc" },
]

const matchesPrice = (price, range) => {
  if (range === "0-49") return price <= 49
  if (range === "50-79") return price >= 50 && price <= 79
  if (range === "80+") return price >= 80
  return true
}

const matchesMaterial = (material, filter) => {
  if (filter === "All") return true
  return material.includes(filter)
}

const ShopPage = ({ onAddToCart }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get("category") || "All"

  const [filters, setFilters] = useState({
    category: categoryParam,
    price: "All",
    material: "All",
  })
  const [sortBy, setSortBy] = useState("featured")

  useEffect(() => {
    setFilters((current) =>
      current.category === categoryParam ? current : { ...current, category: categoryParam },
    )
  }, [categoryParam])

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const categoryMatch =
        filters.category === "All" ? true : product.category === filters.category
      const priceMatch = matchesPrice(product.price, filters.price)
      const materialMatch = matchesMaterial(product.material, filters.material)

      return categoryMatch && priceMatch && materialMatch
    })

    if (sortBy === "price-asc") {
      return [...nextProducts].sort((a, b) => a.price - b.price)
    }

    if (sortBy === "price-desc") {
      return [...nextProducts].sort((a, b) => b.price - a.price)
    }

    if (sortBy === "rating-desc") {
      return [...nextProducts].sort((a, b) => b.rating - a.rating)
    }

    return nextProducts
  }, [filters, sortBy])

  const handleFilterChange = (key, value) => {
    setFilters((current) => {
      const next = { ...current, [key]: value }
      if (key === "category") {
        const nextParams = new URLSearchParams(searchParams)
        if (value === "All") {
          nextParams.delete("category")
        } else {
          nextParams.set("category", value)
        }
        setSearchParams(nextParams)
      }
      return next
    })
  }

  return (
    <section className="bg-ivory pb-20 pt-8 sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-velvet px-6 py-14 text-ivory shadow-lift sm:px-10">
          <p className="text-xs uppercase tracking-[0.35em] text-gold">The Collection</p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl">
            Refined demi-fine jewelry for gifting, layering, and everyday polish
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-ivory/75">
            Explore Velmora earrings, necklaces, huggies, and giftable sets with editorial warmth and a premium-but-accessible point of view.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <FiltersSidebar filters={filters} onFilterChange={handleFilterChange} />

          <div>
            <div className="flex flex-col gap-5 rounded-[2rem] border border-velvet/10 bg-porcelain p-6 shadow-soft md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="Shop"
                title="Find the pieces that feel most like you"
                description={`${filteredProducts.length} styles currently match your filters.`}
              />
              <div>
                <label
                  htmlFor="sort-by"
                  className="mb-2 block text-xs uppercase tracking-[0.28em] text-gold"
                >
                  Sort by
                </label>
                <select
                  id="sort-by"
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="min-h-12 rounded-full border border-velvet/15 bg-ivory px-5 text-sm text-velvet focus:border-gold focus:outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="mt-8 rounded-[2rem] border border-dashed border-velvet/15 bg-porcelain px-8 py-14 text-center text-velvet shadow-soft">
                <h2 className="font-serif text-3xl text-velvet">No pieces match that filter just yet</h2>
                <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-velvet/72">
                  Reset to all filters to browse the full Velmora edit of earrings, necklaces, huggies, and gifting pieces.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFilters({ category: "All", price: "All", material: "All" })
                    setSearchParams(new URLSearchParams())
                  }}
                  className="mt-6 rounded-full border border-velvet/15 px-6 py-3 text-sm font-medium uppercase tracking-[0.22em] text-velvet transition hover:bg-velvet hover:text-ivory"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="mt-8 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopPage
