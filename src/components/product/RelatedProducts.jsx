import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import ProductCard from "@/components/product/ProductCard"
import { getRelatedProducts } from "@/lib/products"

export default function RelatedProducts({ productId }) {
  const items = getRelatedProducts(productId, 4)
  return (
    <section className="section bg-paper">
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
          <div>
            <p className="eyebrow text-gold">You May Also Like</p>
            <h2 className="mt-3 font-serif text-ink text-[clamp(1.75rem,3.8vw,2.75rem)] leading-[1.05]">
              More pieces to <span className="italic font-normal">fall for.</span>
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
