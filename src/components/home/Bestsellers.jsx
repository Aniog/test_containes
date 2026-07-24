import { Link } from "react-router-dom"
import { ProductCard } from "@/components/product/ProductCard"
import { PRODUCTS } from "@/data/products"

export function Bestsellers() {
  const bestsellers = PRODUCTS.filter((p) => p.tags.includes("bestseller"))

  return (
    <section className="bg-velmora-cream px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-velmora-gold">
              Most Loved
            </p>
            <h2 className="mt-2 font-serif text-4xl text-velmora-espresso md:text-5xl">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-sans text-xs uppercase tracking-label text-velmora-mocha underline-offset-4 hover:text-velmora-gold hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
