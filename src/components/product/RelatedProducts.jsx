import React from "react"
import { relatedProducts } from "@/data/products"
import ProductCard from "@/components/shop/ProductCard"

export default function RelatedProducts({ productId }) {
  const items = relatedProducts(productId, 4)
  if (items.length === 0) return null

  return (
    <section
      aria-label="You may also like"
      className="bg-bone-soft py-20 md:py-28 border-t border-line"
    >
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="mb-10 md:mb-14 text-center md:text-left">
          <p className="text-[10px] md:text-[11px] tracking-widest3 uppercase text-champagne-deep mb-3">
            More to Treasure
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink tracking-tight">
            You may also like
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-14">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
