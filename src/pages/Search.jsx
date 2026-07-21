import React, { useMemo } from "react"
import { Link, useSearchParams } from "react-router-dom"
import ProductCard from "@/components/product/ProductCard"
import { PRODUCTS } from "@/data/products"

export default function Search() {
  const [searchParams] = useSearchParams()
  const query = (searchParams.get("q") || "").trim()

  const results = useMemo(() => {
    if (!query) return []
    const q = query.toLowerCase()
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q),
    )
  }, [query])

  return (
    <div className="pt-16 md:pt-20">
      <div className="border-b border-line bg-surface/60">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent-deep">
            Search
          </p>
          <h1 className="mt-3 font-serif text-4xl font-light text-foreground md:text-5xl">
            “{query}”
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            {results.length} {results.length === 1 ? "piece" : "pieces"} found
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        {results.length === 0 ? (
          <div className="py-16 text-center">
            <p className="font-serif text-2xl font-light text-foreground">
              Nothing matches that search
            </p>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Try “earrings”, “huggies” or “necklace” — or browse the full collection.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-block bg-accent px-9 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-accent-foreground transition-colors hover:bg-accent-deep"
            >
              View All Jewelry
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} context="search" />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
