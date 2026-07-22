import { Link } from "react-router-dom"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"

export default function Bestsellers() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Most Loved</p>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso font-light">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-[11px] uppercase tracking-[0.2em] text-espresso border-b border-espresso pb-1 hover:text-gold-deep hover:border-gold-deep transition-colors self-start md:self-auto"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
