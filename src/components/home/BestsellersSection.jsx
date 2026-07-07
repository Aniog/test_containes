import { Link } from "react-router-dom"
import ProductCard from "@/components/ProductCard"
import { products } from "@/data/products"

export default function BestsellersSection() {
  const bestsellers = products.slice(0, 5)

  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2
              id="bestsellers-title"
              className="font-serif text-3xl font-light uppercase tracking-widest text-ink sm:text-4xl"
            >
              Bestsellers
            </h2>
            <p className="mt-2 text-sm text-stone">Our most-loved pieces, chosen by you.</p>
          </div>
          <Link
            to="/shop"
            className="text-xs font-sans font-medium uppercase tracking-[0.15em] text-ink underline underline-offset-8 decoration-gold hover:text-gold-dark"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-5">
          {bestsellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
