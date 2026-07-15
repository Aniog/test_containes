import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { BESTSELLERS } from "@/data/products"
import { useReveal } from "@/lib/useReveal"
import { useRef } from "react"
import ProductCard from "@/components/product/ProductCard"

export default function BestSellers() {
  const containerRef = useRef(null)
  useReveal(containerRef, [])

  return (
    <section ref={containerRef} className="bg-cream py-20 sm:py-28 lg:py-32">
      <div className="container-editorial">
        {/* Header */}
        <div className="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <p className="eyebrow">Most Loved</p>
            <h2 className="font-serif text-[36px] sm:text-[48px] lg:text-[56px] mt-3 text-espresso">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="link-underline text-[12px] uppercase tracking-wider-3 font-medium"
          >
            View All
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </Link>
        </div>

        {/* Grid — 5 cards: 2 + 3 layout on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 sm:gap-x-6 lg:gap-x-7 gap-y-10 sm:gap-y-12">
          {BESTSELLERS.map((p, i) => (
            <div
              key={p.id}
              className={`reveal ${i % 2 === 0 ? "" : "lg:translate-y-8"}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
