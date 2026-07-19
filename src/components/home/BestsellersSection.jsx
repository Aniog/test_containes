import React from "react"
import ProductCard from "@/components/common/ProductCard"
import SectionHeading from "@/components/common/SectionHeading"
import { products } from "@/data/products"

export default function BestsellersSection({ onAddToCart }) {
  return (
    <section id="bestsellers" className="bg-velmora-ivory px-5 py-16 text-velmora-espresso sm:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Bestsellers"
          title="Pieces with a waiting-list feel"
          copy="Five polished signatures for gifting, self-purchase, and the everyday ritual of getting dressed."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  )
}
