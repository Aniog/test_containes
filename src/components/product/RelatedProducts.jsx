import React from "react"
import { relatedProducts } from "../../data/products"
import ProductCard from "./ProductCard"

export default function RelatedProducts({ productId }) {
  const items = relatedProducts(productId, 4)
  if (!items.length) return null
  return (
    <section className="border-t border-ink/10 bg-bone-50 py-20 md:py-24">
      <div className="mx-auto max-w-editorial px-6 md:px-10">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-serif text-3xl text-ink md:text-4xl">You may also like</h2>
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-7 md:gap-y-14">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
