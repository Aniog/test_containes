import { Link } from "react-router-dom"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"

export default function Bestsellers() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Bestsellers</h2>
          <p className="mt-3 text-sm text-muted max-w-md mx-auto">
            The pieces our community reaches for again and again.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center border border-ink px-10 py-4 text-xs uppercase tracking-[0.2em] text-ink hover:bg-ink hover:text-ivory transition-colors duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}
