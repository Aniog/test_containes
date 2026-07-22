import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import ProductCard from "@/components/product/ProductCard"
import { PRODUCTS } from "@/lib/products"

export default function Bestsellers() {
  // Show first 5 seed products
  const items = PRODUCTS.slice(0, 5)

  return (
    <section className="section bg-cream reveal" id="bestsellers">
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-xl">
            <p className="eyebrow text-gold">Bestsellers</p>
            <h2 className="mt-3 font-serif text-ink text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
              Loved by you,<br />
              <span className="italic font-normal">made for everyday.</span>
            </h2>
          </div>
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 eyebrow text-ink hover:text-gold transition-colors"
          >
            View All
            <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid — 5 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-7">
          {items.map((p, i) => (
            <ProductCard key={p.id} product={p} eager={i < 2} />
          ))}
        </div>
      </div>
    </section>
  )
}
