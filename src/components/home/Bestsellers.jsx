import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import ProductCard from "@/components/ui/ProductCard"
import { products } from "@/data/products"

export default function Bestsellers() {
  return (
    <section className="bg-cream section-pad">
      <div className="mx-auto max-w-page px-6 md:px-12">
        <div className="flex items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <p className="kicker">Bestsellers</p>
            <h2 className="mt-3 headline-lg text-espresso">
              Most loved, often gifted
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-flex underline-link"
          >
            Shop all
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
          {products.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              eagerFirstImage={idx < 2}
            />
          ))}
        </div>

        <div className="md:hidden mt-10 text-center">
          <Link to="/shop" className="underline-link">
            Shop all
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
