import { Link } from "react-router-dom"
import { ProductCard } from "@/components/ProductCard"
import { products } from "@/data/products"

export function Bestsellers() {
  const bestsellers = products.slice(0, 5)

  return (
    <section className="bg-paper py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-wide text-champagne">
              Most Loved
            </p>
            <h2 className="mt-2 font-serif text-3xl font-light text-ink md:text-5xl">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-sans text-xs font-medium uppercase tracking-wide text-ink underline-offset-4 hover:text-champagne hover:underline"
          >
            Shop All
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
