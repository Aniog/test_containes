import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { getRelatedProducts } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"

export default function RelatedProducts({ currentProductId, title = "You may also love" }) {
  const related = getRelatedProducts(currentProductId, 4)
  if (related.length === 0) return null

  return (
    <section
      aria-labelledby="related-title"
      className="container-velmora py-20 md:py-28"
    >
      <div className="flex flex-col items-baseline justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">Pieces that pair well</p>
          <h2 id="related-title" className="editorial-h2 mt-3">
            {title}
          </h2>
        </div>
        <Link
          to="/shop"
          className="font-sans text-[12px] font-medium uppercase tracking-widest2 text-espresso transition-colors duration-300 hover:text-champagne-400"
        >
          View All <ArrowRight className="ml-1 inline h-3.5 w-3.5" strokeWidth={1.5} />
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 md:grid-cols-4 md:gap-x-8 md:gap-y-14">
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
