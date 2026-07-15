import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { useStrkImages } from "@/components/ui/StrkImage"

export default function Bestsellers() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
              Most Loved
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink hover:text-gold transition-colors"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
