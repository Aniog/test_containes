import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import ProductCard from "@/components/product/ProductCard"
import { products } from "@/data/products"
import { useStrkImages } from "@/lib/useStrkImages"

export default function Bestsellers() {
  const ref = useStrkImages([])
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5)

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <div className="mb-12 flex flex-col items-center text-center">
        <p className="text-[11px] uppercase tracking-widest3 text-gold">Most Loved</p>
        <h2 className="mt-3 font-serif text-4xl text-charcoal md:text-5xl">Bestsellers</h2>
        <div className="mt-5 h-px w-12 bg-gold" />
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <Link
          to="/shop"
          className="group flex items-center gap-2 border border-charcoal px-10 py-4 text-[11px] uppercase tracking-widest2 text-charcoal transition-colors hover:bg-charcoal hover:text-cream"
        >
          View All
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
