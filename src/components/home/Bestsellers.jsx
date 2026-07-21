import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import SectionHeading from "@/components/SectionHeading"
import ProductCard from "@/components/product/ProductCard"
import { PRODUCTS } from "@/data/products"

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Most Loved"
          title="The Bestsellers"
          sub="The five pieces our community reaches for again and again — timeless silhouettes in warm 18k gold."
        />
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:mt-16 md:grid-cols-3 md:gap-x-6 lg:grid-cols-5">
          {PRODUCTS.map((product, i) => (
            <div key={product.id} className="animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <ProductCard product={product} context="home" eager={i < 3} />
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 border-b border-foreground/40 pb-1 text-[11px] font-medium uppercase tracking-[0.28em] text-foreground transition-colors hover:border-accent-deep hover:text-accent-deep"
          >
            View All Jewelry
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
