import { Link } from "react-router-dom"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { useStrkImages } from "@/lib/useStrkImages"

export default function Bestsellers() {
  const ref = useStrkImages([])
  const bestsellers = products.slice(0, 5)

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">Most Loved</p>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso">Bestsellers</h2>
          </div>
          <Link
            to="/shop"
            className="text-[11px] uppercase tracking-widest2 text-espresso-700 hover:text-gold transition-colors underline-offset-4 hover:underline self-start md:self-auto"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
          {bestsellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
